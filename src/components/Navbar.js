import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion"


const Navbar = () => {

    const [active, setActive] = useState('')

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL)
        if(currentURL.endsWith('/')){
            setActive('About')
        }else if(currentURL.endsWith('/resume')){
            setActive('Resume')
        }else if(currentURL.endsWith('/projects')){
            setActive('Projects')
        }
    }, [active])

    const navbar_variant = {
        hidden: {
            y: '-30vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="navbar"
            variants={navbar_variant}
            initial = 'hidden'
            animate='visible'
        >
            <div className="navbar__active">
               {active}
            </div>
            <div className="navbar__items">
            <Link to="/">
                {active !== 'About' && <div className="navbar__item" onClick={() => setActive('About')}>About</div>}
            </Link>
            
            <Link to="/resume">
                {active !== 'Resume'&& <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>}
            </Link>
            
            <Link to="/projects">
                {active !== 'Projects' && <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div>}
            </Link>
            </div>
        </motion.div>
    )
}

export default Navbar;
