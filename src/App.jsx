import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
        <NavBar />
        <Hero />
        <About />
        <Contact />
        <Footer />
    </main>
  )
}

export default App