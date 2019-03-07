const cors = require('cors');

const corsMiddle = cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-xsrf-token'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    preflightContinue: true,
    credentials: true,
    optionsSuccessStatus: 200
});


module.exports = corsMiddle;
