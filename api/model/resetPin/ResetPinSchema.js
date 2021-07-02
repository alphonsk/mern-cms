const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ResetPinSchema = new Schema({
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        minlength: 3,
        maxlength: 100,
    },
    pin: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 6,
    }
}
    ,
    { timestamps: true }
);



module.exports = {
    ResetPinSchema: mongoose.model('resetPin', ResetPinSchema)
}