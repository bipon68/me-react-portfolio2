import React from 'react';

import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'

import Bar from './Bar';

const languages = [
    {
        icon: react,
        name: 'HTML',
        level: '90'
    },
    {
        icon: python,
        name: 'CSS',
        level: '84'
    },
    {
        icon: react,
        name: 'Bootstrap',
        level: '80'
    },
    {
        icon: react,
        name: 'react',
        level: '60'
    },
    {
        icon: react,
        name: 'Angular',
        level: '40'
    }

]

const tools = [
    {
        icon: react,
        name: 'Photoshop',
        level: '60'
    },
    {
        icon: react,
        name: 'Illustrator',
        level: '40'
    },
    {
        icon: react,
        name: 'Git',
        level: '55'
    },

]

const Resume = () => {
    return (
        <div className="container resume">
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
        </div>
    )
}

export default Resume;
