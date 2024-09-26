import React from 'react'
import NavBar from './Sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/about'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
        <NavBar />
        <Hero />
        <About />
        <Projects />

        <Contact />
        <Footer />
    </main>
  )
}

export default App