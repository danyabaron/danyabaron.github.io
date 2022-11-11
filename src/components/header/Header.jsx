import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'


// header component of site

const Header = () => {
    return (
        <header>
            <div className="container header_containter">
                <h5>Hello I'm</h5>
                <h1>Danya  Baron</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#footer" className='scroll_down'>Scroll Down</a>
                

            </div>
        </header>
    )
}

export default Header
