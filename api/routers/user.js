const express = require("express");
const { hashPassword } = require("../helpers/bcrypt");
const router = express.Router();
const { createUser } = require("../model/user/UserModel");

//
router.get('/', (req, res, next) => {
    // console.log(name);
    res.json("user API says hello")
});

//
router.post('/', async (req, res) => {
    const { password, ...rest } = req.body;

    try {
        // hash password
        const hashedPass = await hashPassword(password);
        const newObj = {
            password: hashedPass,
            ...rest
        }

        const user = await createUser({ ...newObj });
        res.json({
            message: "User created",
            user
        })
    } catch (error) {
        console.log("error user post error: ", error);
        res.json({
            message: "There was a problem",
            error: error.message
        })
    }

});



module.exports = router;
