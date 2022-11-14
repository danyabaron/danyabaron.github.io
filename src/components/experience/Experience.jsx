import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import Fade from 'react-reveal/Fade'

const Experience = () => {
    return (
        <section id='experience'>
            <Fade bottom>
                <h5>What Skills I Have</h5>
                <h2>My Experience</h2>

            </Fade>
            

            <div className="container experience_container">

                {/* Front end Section */}
                <Fade top>
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                            
                        </article>

                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                           
                        </article>
                        
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                            
                        </article>
                        
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                            
                        </article>
                    </div>
                </div>

                </Fade>
                
                <Fade top>
                {/* Backend Section */}
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                            
                        </article>

                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                            
                        </article>
                        
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Node JS</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Git/Github</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                </Fade>

                    
                    

            </div>
        </section>
    )
}

export default Experience
