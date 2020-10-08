import React from 'react';

import Skillcard from './Skillcard';

import { motion } from "framer-motion";

import skills from './data/about_data';




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
