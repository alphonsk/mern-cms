const { UserSchema } = require("./UserSchema");

const createUser = userObj => {
    return new Promise((resolve, reject) => {
        UserSchema(userObj).save()
            .then(data => resolve(data))
            .catch(error => reject(error))
    })
}







//
module.exports = {
    createUser,
};