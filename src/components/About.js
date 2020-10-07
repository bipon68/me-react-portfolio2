import React from 'react';



import algo from '../assets/icons/algo.svg'
import repair from '../assets/icons/repair.svg'
import computer from '../assets/icons/computer.svg'
import ux from '../assets/icons/ux.svg'
import puzzle from '../assets/icons/puzzle.svg'
import api from '../assets/icons/api.svg'
import Skillcard from './Skillcard';

import { motion } from "framer-motion";



const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, api using NodeJS",
    },
    {
        icon: api,
        title: "API Development",
        about: "I can develop robust REST API using NodeJS "
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "a daily problem solver in HackerRank"
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "minimalistic user interface designer using PhotoShop"
    },
    {
        icon: computer,
        title: "Whatever",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!"
    },
]


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

const About = () => {
    return (
        <motion.div className="about"
            variants={about_variant}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <h6 className="about__intro">
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
