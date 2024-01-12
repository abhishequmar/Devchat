const express = require('express');

const notes = require( "./data/data.js");
const dotenv = require( "dotenv");
const userRoutes = require('./routes/userRoutes');
const { useRoutes } = require('react-router-dom');
const connectDB = require("./config/db");

const app = express();
dotenv.config();
connectDB();
app.get('/', (req, res) => {
    res.send("API is running");
});


app.use('/api/users', userRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('server started on 5000'));
