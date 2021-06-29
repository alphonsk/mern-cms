const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    company: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 11,
    },
    address: {
        type: String,
        minlength: 3,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true,
        minlength: 3,
        maxlength: 100,
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    }
}
    ,
    { timestamps: true }
);

// "name": "one",
// "company": "westphilly",
// phone: ,
// "address": "1 happy lane",
// "email": "one@mail.com",
// "password": "1234"




module.exports = {
    UserSchema: mongoose.model('User', UserSchema)
}