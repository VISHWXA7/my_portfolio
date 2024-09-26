import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-center relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-5 items-center'>
            <p className='sm:text-2xl text-xl font-medium text-white text-center font-generalsans'>Hi! I am Vishwaa, a Front-end Developer <span className='waving-hand'>👋🏼</span>
           </p>
           <p className='hero_tag text-gray_gradient text-center'>
                    Transforming Concepts into Seamless User Experiences
           </p>
           
        </div>
        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
            <a href='#about' className='w-fit'>
                <Button name="Let's work together" isBeam containerClass='sm:w-fit w-full sm:min-w-96'/>
            </a>
        </div>
    </section>
  )
}

export default Hero