const { randomPinNumber } = require("../../utils/randomNumber");
const { ResetPinSchema } = require("./ResetPinSchema");


const setPasswordResetPin = async (email) => {
    // create a random 6 cha number
    const pinLength = 6;
    const pin = await randomPinNumber(pinLength);

    try {
        const pinObj = { email, pin };
        // return newPin = await ResetPinSchema.create({ email, pin });

        // Using upsert option (creates new doc if no match is found):
        let newPin = await ResetPinSchema.findOneAndUpdate(
            { email },
            { $set: pinObj },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        return newPin;
    } catch (error) {
        return error;
    }
};







//
module.exports = {
    setPasswordResetPin
};