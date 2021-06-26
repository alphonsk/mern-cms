const { UserSchema } = require("./UserSchema");

// create new user
// const createUser = userObj => {
//     return new Promise((resolve, reject) => {
//         try {
//             UserSchema(userObj).save()
//                 .then(data => resolve(data))
//                 .catch(error => reject(error))
//         } catch (error) {
//             reject(error);
//         }
//     });
// };

const createUser = async (userObj) => {
    try {
        const user = new UserSchema({ ...userObj });
        await user.save();
        return user;
    } catch (error) {
        return error;
    }
};



// get user by email
const getUserByEmail = async (email) => {
    try {
        return user = await UserSchema.findOne({ email });
        // return user;
    } catch (error) {
        return error
    }
};













//
module.exports = {
    createUser,
    getUserByEmail,
};