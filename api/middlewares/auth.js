const jwt = require('jsonwebtoken');
const { getUserById, } = require("../model/user/UserModel");
// const config = require('config');




// verify authorization token
const auth = async (req, res, next) => {
    const authToken = req.header('authToken');

    // Check if not token
    if (!authToken)
        return res.status(401).json({ msg: 'Authorization denied, try Login' });

    // Verify token
    try {
        jwt.verify(authToken, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                return res.status(401).json({ message: 'Authorization denied, try Login' });
            }
            // store user id in req obj
            req.userId = decoded.payload.userId;
        });

        // get user & store user in req obj
        const user = await getUserById(req.userId);
        if (!user)
            return res.status(401).json({ message: 'Please login again' });
        req.user = user;

        next();

    } catch (error) {
        return res.json(error)
    }
}




// get user
const userAuth = async (req, res, next) => {
    // 
    try {
        // get user & store user in req obj
        const user = await getUserById(req.userId);
        if (!user)
            return res.status(401).json({ message: 'Please login again' });

        //
        req.user = user;
        next();
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};



// get user profile
const profileAuth = async (req, res, next) => {
    //     try {
    //         // get user profile & store user in req obj
    //         const profile = await getUserProfileById(req.userId);
    //         if (!profile)
    //             return res.status(401).json({ message: 'Please login again' });  
    //         req.profile = profile;
    //         next();
    //     } catch (err) {
    //         // console.error('something wrong with auth middleware');
    //         res.status(500).json({ message: 'Server Error' });
    //     }
};








//
module.exports = {
    auth,
    userAuth,
    profileAuth,
}
