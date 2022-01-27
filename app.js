// libraries, const
const express = require('express');
//const rateLimit = require('express-rate-limit');

const userRouter = require('./routes/userRoutes');
// Init vars
const app = express();
// const limiter = rateLimit({
//     max: 100,
//     windowMs: 60 * 60 *1000,
//     message: 'Too many requests from this Ip, please try again in an hour'
// });


// Middlewares


module.exports = app;