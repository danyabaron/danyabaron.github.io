import React from 'react'
import './about.css'
import Slide from 'react-reveal/Slide'

const about = () => {
    return (
        <section id='about'>


           <Slide left>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
           </Slide>
           
           <Slide right>
                <div className="container about_container">
            
              
            <p>
                I am a driven and ambitious problem solver who likes to tackle problems head-on. My interest
                in development started when I was in middle school and wanted to create custom Tumblr themes. I have my BS in Computer
                Science from WPI, and I am a Girls Who Code alumna. I have an interest in front-end as well as full stack development,
                and have a vast experience of using different tools and technologies. In addition to development, I love to learn about astrology, exercise, cook, dance, and
                do yoga. 
            </p>

    
    </div>

</Slide>
           

        </section>
    )
}

export default about
