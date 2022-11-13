import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
            </ul>

            <div className="footer_copyright">
                <small>
                    &copy; Danya Baron
                </small>
            </div>
           
        </footer>
    )
}

export default Footer
