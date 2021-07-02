const { UserSchema } = require("../user/UserSchema");
const { TicketSchema } = require("./TicketSchema");



const createTicket = async (ticketObj) => {
    try {
        const ticket = new TicketSchema({ ...ticketObj });
        await ticket.save();
        return ticket;
    } catch (error) {
        return error;
    }
};


// get ticket by email
const getTicketById = async (id) => {
    try {
        return ticket = await TicketSchema.findById(id);
    } catch (error) {
        return error
    }
};




// get ticket by userId
const getTicketByuserId = async (userId) => {
    try {
        // return ticket = await MyModel.find({ userId, createdAt: { $gte: 18 } }).exec();
        return tickets = await TicketSchema.find({ userId })
    } catch (error) {
        return error
    }
};


//  verify tix editor
const verifyTicketEditor = async (ticketId, userId) => {
    let isAdmin = false;
    let ticketUserId = 0;

    try {
        const user = await UserSchema.findById(userId).select('-password');
        if (user) {
            isAdmin = user.admin;
        }


        // find user that posted the ticket
        const ticket = await TicketSchema.findById(ticketId);

        if (ticket) {
            ticketUserId = ticket.userId;
        }

        if ((ticketUserId == userId) || isAdmin) {
            return true;
        }

        return false;

    } catch (error) {
        return false;
    }
}


// update ticket ticketId, userId
const updateTicket = async (ticketObj) => {
    const { id, userId, sender, message } = ticketObj;
    const update = { userId, sender, message };

    try {
        return ticket = await TicketSchema.findOneAndUpdate(
            { _id: id },
            // { $push: update },
            {
                $push: {
                    conversations: { userId, sender, message },
                },
            },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );
    } catch (error) {
        return error
    }
};




// delete  ticket
const deleteTicket = async (id) => {
    try {
        return ticket = await TicketSchema.findOneAndRemove({ _id: id })
    } catch (error) {
        return error;
    }
}











//
module.exports = {
    createTicket,
    getTicketById,
    getTicketByuserId,
    updateTicket,
    deleteTicket,
    verifyTicketEditor,
};