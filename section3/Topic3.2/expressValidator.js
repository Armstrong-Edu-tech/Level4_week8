const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const app = express();
app.use(express.json());
// Enable sanitization
app.use(mongoSanitize());
