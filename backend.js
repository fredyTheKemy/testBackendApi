const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const corsOptions = {
    origin:'http://localhost:3000',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders:'Content-Type,Authorization'
}

app.get('/test',(req,res) => {
    res.send('<h1>Api is working</h1>')
})

