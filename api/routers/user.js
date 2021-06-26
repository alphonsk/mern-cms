const express = require("express");
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const router = express.Router();
const { createUser, getUserByEmail } = require("../model/user/UserModel");

//
router.get('/', (req, res, next) => {
    // console.log(name);
    res.json("user API says hello")
});

// create user
router.post('/signup', async (req, res) => {
    const { password, email, ...rest } = req.body;

    if (!email || !password)
        return res.json({ status: "error", message: "Missing fields" });

    try {
        // check if email has already been registered
        let user = await getUserByEmail(email);
        if (user) {
            return res.json({ message: "User already exists!" });
        }

        // hash password
        const hashedPassword = await hashPassword(password);
        // add hashed password to body
        const newObj = {
            email,
            ...rest,
            password: hashedPassword,
        }

        // create user
        user = await createUser({ ...newObj });
        return res.json({
            message: "User created",
            user
        })

    } catch (error) {
        console.log("error user post error: ", error);
        return res.json({
            message: "There was a problem",
            error: error.message
        })
    }

});



// login 
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res.json({ status: "error", message: "Missing fields" });

    // get entered email user encrpted password
    const user = await getUserByEmail(email);

    if (!user)
        return res.json({ status: "error", message: "They is no user with this email" });

    // get entered user encrpted password
    const hashedPassword = user.password;
    const result = await comparePassword(password, hashedPassword);

    if (!result)
        return res.json({ status: "error", message: "Invalid Credentials" });


    return res.json({ status: "success", message: "You have successfully logged in" });


})

// {
//     "status": "error",
//     "message": "They is no user with this email"
// }



//
module.exports = router;
