import React from 'react';



import algo from '../assets/icons/algo.svg'
import repair from '../assets/icons/repair.svg'
import computer from '../assets/icons/computer.svg'
import ux from '../assets/icons/ux.svg'
import puzzle from '../assets/icons/puzzle.svg'
import api from '../assets/icons/api.svg'
import Skillcard from './Skillcard';



const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, api using",
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

const About = () => {
    return (
        <div className="about">
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
        </div>
    )
}

export default About;