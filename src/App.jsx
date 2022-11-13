import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from  './components/experience/Experience'
import Portfolio from  './components/portfolio/Portfolio'

// import Zoom from 'react-reveal/Zoom'

import Footer from './components/footer/Footer'

const App = () => {
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio/>
            <Footer />



            

        </div>
    )
}

export default App
