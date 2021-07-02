const nodemailer = require("nodemailer");


//
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'shayne.murphy@ethereal.email',
        pass: 'Re2wUCXH3unqsQ642q'
    }
});



const sendEmail = async (obj) => {
    const { email, pin } = obj;
    try {
        // send mail with defined transport object
        let result = await transporter.sendMail({
            from: '"westphillylabs 👻" <westphillylab@mail.com>',
            to: "alphons3k@yahoo.com", //  "bar@example.com, baz@example.com, alphons3k@yahoo.com",
            subject: "westphillylab message, No reply needed",
            text: "Heres your pin number " + pin + " valid for 10min",
            html: "Heres your pin number " + pin + " valid for 10min"
        });


        // console.log("Message sent: %s", result.messageId);
        // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // // Preview only available when sending through an Ethereal account
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
        // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        if (result.messageId) {
            return { message: "success" };
        }

    } catch (error) {
        return error;
    }

}




//
module.exports = {
    sendEmail,
};