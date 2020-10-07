import React, {useState} from 'react';
import data_project from './data/projects_data';
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";

const Projects = () => {

    const [projects, setProjects] = useState(data_project)

    const handleFilterCategory = (name) => {
        const new_array = data_project.filter(project => project.category.includes(name));
        setProjects(new_array)
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
        }
    }

    return (
        <motion.div className="container projects"
            variants={project_variant}
            initial = 'hidden'
            animate='visible'
        >

            <div className="projects__navbar">
                <div onClick={() => setProjects(data_project)}>All</div>
                <div onClick={() => handleFilterCategory('react.js')}>React</div>
                <div onClick={() => handleFilterCategory('mongoDB')}>MongoDB</div>
                <div onClick={() => handleFilterCategory('node.js')}>Node</div>
                <div onClick={() => handleFilterCategory('vanilla')}>Vanilla</div>
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
