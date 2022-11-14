import React from 'react'
import './portfolio.css'
import factorIMG from '../../assets/7factor.png'
import danyaIMG from '../../assets/danya-website.png'
import Rotate from 'react-reveal/Rotate'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <Rotate bottom right>
            <h2>
                Projects
            </h2>

            </Rotate>
            

        
            <div className="container portfolio_container">
                <Rotate top left>
                <div className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={factorIMG} alt=''/>                    
                    </div>
                    <h3>
                        7Factor Website
                    </h3>
                    <h5>
                        My senior year project at WPI. Our team created this website using the design mockups we received 
                        from scratch in ReactJS.
                    </h5>
                    <div className="portfolio_item-cta">
                        <a href="https://www.7factor.io/" target="_blank" className="btn"> Project Website </a>
                    </div>
                    
                </div>

                </Rotate>

                <Rotate top right>

                
                <div className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={danyaIMG} alt=''/>                    
                    </div>
                    <h3>
                        Portfolio Website
                    </h3>
                    <h5>
                        My portfolio wesbite built fully in ReactJS.
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
