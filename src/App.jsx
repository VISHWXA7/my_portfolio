import React from 'react'
import NavBar from './Sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/about'
import Projects from './sections/Projects'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
        <NavBar />
        <Hero />
        <About />
        <Projects />
    </main>
  )
}

export default App