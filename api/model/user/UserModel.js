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


// get user by email
const getUserById = async (id) => {
    try {
        return user = await UserSchema.findById(id).select('-password');
        // return user;
    } catch (error) {
        return error
    }
};


// update user
const updateUser = async (id, update) => {
    try {
        return user = await UserSchema.findOneAndUpdate(
            { _id: id },
            { $set: update },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );
    } catch (error) {
        return error
    }
};



// delete  user
const deleteUser = async (id) => {
    try {
        return user = await UserSchema.findOneAndRemove({ _id: id })
    } catch (error) {
        return error;
    }
}











//
module.exports = {
    createUser,
    getUserById,
    getUserByEmail,
    updateUser,
    deleteUser,
};