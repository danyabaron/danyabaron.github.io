import React from 'react'
import Resume from '../../assets/Resume.pdf'


 //call to action component for buttons in header

const CTA = () => {
    return (
        <div className='cta'>
            <a href={Resume} download className='btn'>Download Resume</a>
            <a href="mailto:danyabaron0@gmail.com" className='btn btn-primary'>Contact</a>
            
            
            
        </div>
    )
}

export default CTA


