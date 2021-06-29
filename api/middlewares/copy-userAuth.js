const jwt = require('jsonwebtoken');
const { getUserById, } = require("../model/user/UserModel");
// const Profile = require('../models/Profile');

module.exports = async function (req, res, next) {
    // 
    try {
        // get user & store user in req obj
        const user = await getUserById(req.userId);
        if (!user)
            return res.status(401).json({ message: 'Please login again' });

        //    const profile = await Profile.findOne({ user: user.id })
        // if (!profile)
        //     return res.status(401).json({ msg: 'Create a profile' });

        //
        req.user = user;
        next();
    } catch (err) {
        // console.error('something wrong with auth middleware');
        res.status(500).json({ message: 'Server Error' });
    }
};
