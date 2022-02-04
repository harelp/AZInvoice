// libraries, const
const express = require('express');
//const rateLimit = require('express-rate-limit');
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
// API Config file located in ./apiConfig.js
const apiConfig = require('./apiConfig'); // /api/v1/

// Init 
const app = express();

app.use(`${apiConfig}users`, userRouter);
app.use(`${apiConfig}authUser`, authRouter);

// Middlewares


module.exports = app;