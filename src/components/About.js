import React, {useState, useEffect} from 'react';
import axios from "axios";

import Skillcard from './Skillcard';

import { motion } from "framer-motion";

import skills from './data/about_data';
import UserCard from './userCard';


const about_variant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.2, 
            duration: 0.7
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut'
        }
    }
}

// interface UserName {
//     F_Name: string;
//     L_Name: string;
//     title: string
// }
// interface UserInfo {
//     name: UserName
// }
// const getFullUserName = (userInfo: UserInfo) => {
//     const {name: {F_Name, L_Name}} = userInfo;
//     return `${F_Name} ${L_Name}`
// }

const fetchData = () => {
    return axios
        .get('http://localhost:5000/users')
        .then(({data}) => {
            console.log(data);
            return JSON.stringify(data, null, 2)
        })
        .catch((err) => {
            console.error(err)
        })
}

const About = () => {

    const [randomUserDataJSON, setRandomUserDataJSON] = useState("");
    // const [userInfos, setUserInfos] = useState<any>([]);

    let responseData = null;

    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        authorization: "Bearer "
      }

    // axios.get(`http://localhost:5000/users`, {
    //     headers: headers
    // })
    // .then(response => {
    // //    responseData = response.data[0]
    //     // console.log('response : ', responseData.F_Name)
    //     console.log('response : ', response)
    // })

    // {
    //     randomUserDataJSON.map((user, index) =>(
    //        <UserCard user={user} key={user.id}/>
    //     ))
    // }

    // {
    //     userInfos.map((userInfo: UserName, idx: number) => {
    //         <div key={idx}>
    //             <p>{getFullUserName(userInfo)}</p>
    //         </div>
    //     })
    // }

    // {randomUserDataJSON.map((user, key) => {
    //     return(
    //         <div key={key}>{user.F_Name}</div>
    //     )
    // })}

    // {randomUserDataJSON && randomUserDataJSON.length && randomUserDataJSON.map((user, key) => {
    //     return(
    //         <div key={key}>{user.F_Name}</div>
    //     )
    // })}


    useEffect(() => {
        fetchData().then((data) => {
            setRandomUserDataJSON(data || "No user data found.")
        })
    }, [])
    

    return (
        <motion.div className="about"
            variants={about_variant}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <h6 className="about__intro">
            <div>{randomUserDataJSON}</div>
            <div>First name: 
                
            </div>
            
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex porro tempore pariatur.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">
                    What I Offer
                </h6>
                <div className="row">
                    {
                        skills.map(skill => 
                            <Skillcard skill={skill}/>

                            )
                    }
                </div>
            </div>  
        </motion.div>
    )
}

export default About;
