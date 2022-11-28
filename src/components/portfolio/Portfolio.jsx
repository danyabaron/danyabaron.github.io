import React from 'react'
import './portfolio.css'
import factorIMG from '../../assets/7factor.png'
import danyaIMG from '../../assets/danya-website.png'
import Rotate from 'react-reveal/Rotate'

const Portfolio = () => {
    return (
            <section id='portfolio'>
                {/* Rotate effect for header */}
                <Rotate bottom right>
                <h2>
                    Projects
                </h2>

                </Rotate>
                
            
                <div className="container portfolio_container">
                    {/* Rotate effect for project one */}
                    <Rotate top left>
                        {/* 7factor project section */}
                    <div className="portfolio_item">
                        <div className="portfolio_item-image">
                            <img src={factorIMG} alt=''/>                    
                        </div>
                        <h3>
                            7Factor Website
                        </h3>
                        <h5>
                            My senior year project at WPI. Our team of four created 7Factor's corporate website using ReactJS and NodeJS. We were given 
                            design mockups to recreate, but built the website from scratch.
                        </h5>
                        <div className="portfolio_item-cta">
                            <a href="https://www.7factor.io/" target="_blank" className="btn"> Project Website </a>
                        </div>
                        
                    </div>

                    </Rotate>

                    <Rotate top right>
                        {/* personal website section */}
                    <div className="portfolio_item">
                        <div className="portfolio_item-image">
                            <img src={danyaIMG} alt=''/>                    
                        </div>
                        <h3>
                            Portfolio Website
                        </h3>
                        <h5>
                            My portfolio website built fully in ReactJS.
                        </h5>
                            <div className="portfolio_item-cta">
                                <a href="https://github.com/danyabaron/danyabaron.github.io" target="_blank" className="btn"> Project Github </a>
                            </div>
                        </div>

                    </Rotate>


                </div>
            

            </section>

    )
}

export default Portfolio
