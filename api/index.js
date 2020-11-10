// const express = require ("express");
// const bodyParser= require('body-parser')

import express from "express";
import bodyParser from "body-parser";

// var cors = require('cors');
import cors from 'cors';



import usersRoutes from "./routes/users.js";

// import express from 'express'

//const usersRoutes = require('./routes/users.js') ;
// import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    console.log('test')
    res.send('Hello from home page')
})

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));

