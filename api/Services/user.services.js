import express from 'express';
import {GetUser} from '../Repository/user.repository.js'
const users = [
    {
        firstName: "John1",
        lastName: "Doe",
        age: 28
    },
    {
        firstName: "Simon",
        lastName: "Lee",
        age: 23
    },
    {
        firstName: "Nayem",
        lastName: "Lee",
        age: 23
    }
]
export const GetUsers=(req,res)=>{
    // res.send(users)
    console.log(GetUser);
    // let x=GetUser;
};

export const CreateUser = (req, res) => {
    console.log('Post request done');

    const user = req.body;
    users.push(user);

    res.send(`User with the name ${user.firstName} added to the database`)
}



