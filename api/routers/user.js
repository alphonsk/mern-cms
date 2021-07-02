const express = require("express");
const moment = require('moment');
const { hashPassword, comparePassword } = require("../helpers/bcrypt");
const { sendEmail } = require("../helpers/emailHelper");
const { createJwtToken, createJwtRefreshToken, } = require("../helpers/jwt");
const { auth, userAuth } = require("../middlewares/auth"); 
const { setPasswordResetPin } = require("../model/resetPin/ResetPinModel");
// const userAuth = require("../middlewares/userAuth");
const router = express.Router();
const { createUser, getUserByEmail, getUserById, updateUser, deleteUser } = require("../model/user/UserModel");

// return user
router.get('/', auth, (req, res, next) => {
    const x = { id: req.userId, user: req.user }
    return res.json({ user: req.user });
});


// create new user
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

        // get jwt token
        const jwtToken = createJwtToken({ userId: user._id });
        const jwtRefreshToken = createJwtRefreshToken({ userId: user._id });

        //
        return res.json({ status: "success", message: "You have successfully logged in", jwtToken });
        // return res.json({
        //     message: "User created",
        //     user
        // })

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

    // get jwt token
    const jwtToken = createJwtToken({ userId: user._id });
    const jwtRefreshToken = createJwtRefreshToken({ userId: user._id });

    //
    return res.json({ status: "success", message: "You have successfully logged in", jwtToken });

})




// edit user 
router.put('/', auth, async (req, res) => {
    const { email, password, newPassword, name, company, address, phone } = req.body;
    let newHashedPassword;

    // check for and verify passasword
    if (!password)
        return res.json({ status: "error", message: "Enter your current password to continue" });

    // get current stored user password
    const user = await getUserByEmail(req.user.email);
    if (!user)
        return res.json({ status: "error", message: "Please log in" });

    // get entered user encrpted password
    const hashedPassword = user.password;
    const result = await comparePassword(password, hashedPassword);
    if (!result)
        return res.json({ status: "error", message: "Invalid Credentials" });

    // if new password hash/bycrpt it
    if (newPassword) {
        newHashedPassword = await hashPassword(newPassword);
    }

    // if email, check if email has already been registered
    if (email !== user.email) {
        let emailUser = await getUserByEmail(email);
        if (emailUser) {
            return res.json({ message: "User already exists!" });
        }
    }

    // update user 
    const update = {
        email: email ? email : user.email,
        password: newPassword ? newHashedPassword : user.password,
        name: name ? name : user.name,
        company: company ? company : user.company,
        address: address ? address : user.address,
        phone: phone ? phone : user.phone
    }

    const updatedUser = await updateUser(req.userId, update);

    //
    return res.json(updatedUser);

})


// delete user 
router.delete('/', auth, async (req, res) => {
    const { password } = req.body;

    // check for and verify passasword
    if (!password)
        return res.json({ status: "error", message: "Enter your current password to continue" });

    // get current stored user password
    const user = await getUserByEmail(req.user.email);
    if (!user)
        return res.json({ status: "error", message: "Please log in" });

    // get current users encrpted password & march it with entered password
    const hashedPassword = user.password;
    const result = await comparePassword(password, hashedPassword);
    if (!result)
        return res.json({ status: "error", message: "Invalid Credentials" });

    // delete user   
    const deletedUser = await deleteUser(req.userId);

    //
    // if (error)
    return res.json(deleteUser);

})


// Reset password 
router.post('/resetpassword', async (req, res) => {
    const { email } = req.body;
    // check for and verify passasword
    if (!email)
        return res.json({ status: "error", message: "Enter the email you signed up with" });

    // get current stored user password
    const user = await getUserByEmail(email);
    if (!user)
        return res.json({ status: "success", message: "A pin has been sent to your email" });

    // create reset pin
    const setPin = await setPasswordResetPin(email);

    let updatedAt = moment(setPin.updatedAt);
    let expireAt = moment(setPin.updatedAt).add(1, 'days').format('DD/MMM/YY');;
    let createdAt = moment(setPin.createdAt);
    // (createdAt > expireAt); //  
    let now = moment(new Date());

    // console.log(" c ");
    // console.log(updatedAt.from(now, 'days'));
    // console.log(updatedAt.diff(now, 'days'));
    // console.log(createdAt.from(now, 'days'));
    // console.log(createdAt.diff(now, 'days'));

    if ((updatedAt.diff(now, 'days')) != 0)
        return res.json({ status: "error", message: "Try again latter" });

    // send email
    const emailSent = await sendEmail(setPin);

    // return response
    if (emailSent.message == "success") {
        return res.json({ status: "success", message: "A pin has been sent to your email" });
    }
    return res.json({ status: "error", message: "Try again latter" });
})




//
module.exports = router;
