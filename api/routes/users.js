// const express = require ("express");
import express from 'express';

const router = express.Router()

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 28
    },
    {
        firstName: "Simon",
        lastName: "Lee",
        age: 23
    }
]

router.get('/', (req, res) => {
    console.log(users)
    //res.send('Hello users')
    res.send(users)
})

router.post('/', (req, res) => {
    console.log('Post request done');

    const user = req.body;
    users.push(user);

    res.send(`User with the name ${user.firstName} added to the database`)
})


export default router;