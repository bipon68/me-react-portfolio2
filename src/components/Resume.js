import React from 'react';

import { motion } from "framer-motion";

import Bar from './Bar';
import { tools, languages } from './data/resume_data';


const resume_variant = {
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

const Resume = () => {
    return (
        <motion.div className="container resume"
            variants={resume_variant}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science & Engineering
                        </h5>
                        <p className="resume-card__name">
                            Bangladesh University (2016-2020)
                        </p>
                        
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Pridesys IT Ltd.
                        </h5>
                        <p className="resume-card__details">I am currently working as a Front End Engineer</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => 
                                <Bar value={tool} />
                            )
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Resume;
