import express from 'express';
// import {GetUser} from '../Repository/user.repository.js'
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



import {con} from '../db/db_connection.js'


con.connect(function(err) {
    console.log("DB Connected!");
  });


export const GetUsers=(req,res)=>{
    con.query("SELECT * FROM HR_USER", function (err, result, fields) {
        //return result;
        res.send(result)
        // console.log(result);
      });
};

export const CreateUser = (req, res) => {
    console.log('Post request done');

    const user = req.body;
    users.push(user);

    res.send(`User with the name ${user.firstName} added to the database`)
}



