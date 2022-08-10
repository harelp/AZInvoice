// libraries, const
const express = require('express');
const bodyParser = require('body-parser');
//const rateLimit = require('express-rate-limit');
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const tripRouter = require('./routes/tripRoutes');
const companyRouter = require('./routes/companyRoutes');
// API Config file located in ./apiConfig.js
const apiConfig = require('./apiConfig'); // /api/v1/

// Init 
const app = express();
const jsonParser = bodyParser.json();

app.use(`${apiConfig}users`, userRouter);
app.use(`${apiConfig}authUser`, authRouter);

app.use(`${apiConfig}company`, jsonParser, companyRouter);
app.use(`${apiConfig}trip`, tripRouter);

// Middlewares


module.exports = app;
//test