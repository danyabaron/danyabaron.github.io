import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade';


// header component of site

const Header = () => {
    return (
        <header>
           
            <div className="container header_containter">
                <Zoom>
                <h5>Hello I'm</h5>
                <h1>Danya  Baron</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                
                </Zoom>
                <HeaderSocial />
               

                <div className="me">
                    <Fade left>
                    <img src={ME} alt="me" />
                    </Fade>
                    
                </div>

                <a href="#footer" className='scroll_down'>Scroll Down</a>
                

            </div>
        </header>
    )
}

export default Header
