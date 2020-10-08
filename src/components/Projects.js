import React, {useState} from 'react';
import data_project from './data/projects_data';
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";

const Projects = () => {

    const [projects, setProjects] = useState(data_project)
    const [active, setActive] = useState('All')

    const handleFilterCategory = (name) => {
        const new_array = data_project.filter(project => project.category.includes(name));
        setProjects(new_array)
        setActive(name)
    }
    

    const project_variant = {
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

    return (
        <motion.div className="container projects"
            variants={project_variant}
            initial = 'hidden'
            animate='visible'
            exit="exit"
        >

            <div className="projects__navbar">
                <div className={active === 'All' && 'projects__navbar-active'} onClick={() => {
                    setProjects(data_project)
                    setActive("All")
                }
                    
                }>
                    All
                </div>
                <div className={active === 'react.js' && 'projects__navbar-active'} onClick={() => handleFilterCategory('react.js')}>React</div>
                <div className={active === 'mongoDB' && 'projects__navbar-active'} onClick={() => handleFilterCategory('mongoDB')}>MongoDB</div>
                <div className={active === 'node.js' && 'projects__navbar-active'} onClick={() => handleFilterCategory('node.js')}>Node</div>
                <div className={active === 'vanilla' && 'projects__navbar-active'} onClick={() => handleFilterCategory('vanilla')}>Vanilla</div>
            </div>

            <div className="row">
                {
                    projects.map(project => 
                        <ProjectCard key={project.name} project={project}/>
                        )
                }
            </div>
        </motion.div>
    )
}

export default Projects;
