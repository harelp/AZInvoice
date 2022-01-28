// libraries, const
const express = require('express');
//const rateLimit = require('express-rate-limit');

const userRouter = require('./routes/userRoutes');

// API Config file located in ./apiConfig.js
const apiConfig = require('./apiConfig');
const api = `${apiConfig}user`;


// Init vars
const app = express();
// const limiter = rateLimit({
//     max: 100,
//     windowMs: 60 * 60 *1000,
//     message: 'Too many requests from this Ip, please try again in an hour'
// });


app.get(api, (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            name: 'Harel'
        }
    })
})

// Middlewares


module.exports = app;