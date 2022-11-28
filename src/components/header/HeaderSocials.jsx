import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'


const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/danyabaron/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/danyabaron" target="_blank"><FaGithub/></a>
        </div>
    )
}

export default HeaderSocials
