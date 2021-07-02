require("dotenv").config();
const express = require("express");
// const bodyparser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

//
const app = express();

// api security
app.use(helmet());

// cors http errors
app.use(cors());

// logger
app.use(morgan("tiny"));

//
// app.use(bodyparser.urlencoded({extended: true}));
// app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())



// db // 'mongodb://localhost/crm'
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
},
    function (err) {
        if (err) {
            console.log('db error: ', err);
            // exit app
            process.exit(1);
        } else {
            console.log("mongoose db conection was successfull");
        }
    }
);


//
// routes
const userRouter = require("./routers/user");
const ticketRouter = require("./routers/ticket");
// Error handler
const handleError = require("./utils/errorHandler");

// // app.use('/', (req, res, next) => { res.json("API says hello") })
app.use("/v1/user", userRouter);
app.use("/v1/ticket", ticketRouter);

// if url is not found or error 
app.use((req, res, next) => {
    const error = new Error("Resource not found!");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    handleError(error, res);
});





const port = process.env.PORT || 3001
app.listen(port, () => { console.log(`API is now running on ${port}`); })