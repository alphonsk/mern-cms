const bcrypt = require('bcrypt');
const saltRounds = 8;



// has new user password
const hashPassword = (password) => {
    return new Promise((resolve) => {
        resolve(bcrypt.hashSync(password, saltRounds))
    });
}


// check/ march userpassword with login password
const comparePassword = (password, hashedPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashedPassword, function (err, result) {
            if (err) reject(err);
            resolve(result);
        });
    });
}










//
//
module.exports = {
    hashPassword,
    comparePassword,
};