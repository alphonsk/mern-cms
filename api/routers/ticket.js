const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');

//
const { auth, userAuth } = require("../middlewares/auth");
const checkObjectId = require("../middlewares/checkObjectId");
const { createTicket, getTicketById, getTicketByuserId, updateTicket, deleteTicket, verifyTicketEditor, } = require("../model/ticket/TicketModel");
const { getUserById } = require("../model/user/UserModel");



// router.get('/', (req, res, next) => {
//     res.json("ticktet API says hello")
// });


// create new ticket
router.post(
    "/",
    auth, userAuth,
    check('subject', 'Subject is required').notEmpty(),
    check('status', 'Status is required').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // const { userId, subject, status, conversations: {sender, message} } = req.body;
            const { subject, status } = req.body;

            const userId = req.userId;

            const ticketObj = {
                userId,
                subject,
                status
            };

            const result = await createTicket(ticketObj);

            if (result._id) {
                return res.json({
                    status: "success",
                    message: "New ticket has been created!",
                });
            }

            res.json({
                status: "error",
                message: "Unable to create the ticket , please try again later",
            });
        } catch (error) {
            res.json({ status: "error", message: error.message });
        }
    }
);



// get ticket by id
router.get(
    '/:id',
    checkObjectId('id'),
    auth, userAuth,
    async ({ params: { id } }, res) => {
        try {
            const ticket = await getTicketById(id);
            if (!ticket) return res.status(400).json({ status: "success", message: 'Ticket not found' });
            return res.json(ticket);
        } catch (error) {
            res.json({ status: "error", message: error.message });
        }
    }
);



//
// get ticket by userid
router.get(
    '/user/:id',
    checkObjectId('id'),
    auth, userAuth,
    async ({ params: { id } }, res) => {
        try {
            const tickets = await getTicketByuserId(id);
            if (!tickets) return res.status(400).json({ status: "success", message: 'Ticket not found' });
            return res.json(tickets);

        } catch (error) {
            res.json({ status: "error", message: error.message });
        }
    }
);



// add messages
router.put(
    '/:id',
    checkObjectId('id'),
    auth, userAuth,
    check('message', 'Message is required').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //
        const userId = req.userId;
        const id = req.params.id;

        // is ticket available
        const ticket = await getTicketById(id);
        if (!ticket) return res.status(400).json({ status: "error", message: 'Ticket not found' });

        // validate user either writer or admin 
        const correctUser = await verifyTicketEditor(id, userId);

        //
        if (!correctUser) {
            return res.json({
                status: "error",
                message: "Unable to update your message",
            });
        }

        // update
        const userInfo = await getUserById(userId);
        const sender = userInfo.name;
        const updatedMessage = await updateTicket({ id, userId, sender, message: req.body.message })
        // console.log("body ", updatedMessage);
        return res.json(updatedMessage);
    }
);


//     }
// );





// close ticket




// delete ticket
router.delete(
    '/:id',
    checkObjectId('id'),
    auth, userAuth,
    async (req, res) => {
        const userId = req.userId;
        const id = req.params.id;

        // is ticket available
        const ticket = await getTicketById(id);
        if (!ticket) return res.status(400).json({ status: "error", message: 'Ticket not found' });

        // validate user either writer or admin
        const correctUser = await verifyTicketEditor(id, userId);

        if (correctUser) {
            let deleteTicketed = await deleteTicket(id);
            return res.json({ status: "success", message: 'Ticket deleted' });
        }

        return res.json({ status: "error", message: "Unable to update your message", });

    }
);



// close ticket







module.exports = router;
