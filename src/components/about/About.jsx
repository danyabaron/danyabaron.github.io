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
                        I have my bachelors degree in Computer Science from WPI, as well as experience in many different technologies and tools. I currently am interested in UI/UX design and development roles, 
                        and front-end development. My interest in technology took place when I was younger and wanted to create my own custom Tumblr themes. In high school, I participated in the Girls Who Code 
                        Summer Program where my interest in technology deepened. I have a strong interest in design and user experience, as I am always thinking of ways to make a product easier and more fun to use. My technology skills, combined with
                        my passion for art, allow me to offer a perspective that is unique.
                        In my free time, I love to read, cook, do yoga, make art, dance and work out. 
                    </p>

            
            </div>
        </Slide>
        </section>
        

    
        )
}

export default about
