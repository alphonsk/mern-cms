const bcrypt = require('bcrypt');
const saltRounds = 8;

const hashPassword = (plainPassword) => {
    return new Promise((resolve) => {
        resolve(bcrypt.hashSync(plainPassword, saltRounds))
    });
}



//
//
module.exports = {
    hashPassword,
};