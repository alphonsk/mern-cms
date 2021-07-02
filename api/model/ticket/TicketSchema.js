const mongoose = require("mongoose");
const Schema = mongoose.Schema

const TicketSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
    },
    subject: {
        type: String,
        maxlength: 100,
        required: true,
        default: "",
    },
    status: {
        type: String,
        maxlength: 30,
        required: true,
        default: "active",
    },

    conversations: [
        {
            userId: {
                type: String,
                required: true,
                default: 0,
            },
            sender: {
                type: String,
                maxlength: 50,
                required: true,
                default: "",
            },
            message: {
                type: String,
                maxlength: 1000,
                required: true,
                default: "",
            },
            createdAt: {
                type: Date,
                required: true,
                default: Date.now(),
            }
        },

    ]
},
    { timestamps: true }
);




module.exports = {
    TicketSchema: mongoose.model('Ticket', TicketSchema)
}