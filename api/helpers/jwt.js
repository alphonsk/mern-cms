var jwt = require('jsonwebtoken');



const createJwtToken = payload => {
    return token = jwt.sign(
        { payload },
        process.env.JWT_SECRET,
        { expiresIn: '15d' }
    );
}


const createJwtRefreshToken = payload => {
    return token = jwt.sign(
        { payload },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
}








//
//
module.exports = {
    createJwtToken,
    createJwtRefreshToken,
};