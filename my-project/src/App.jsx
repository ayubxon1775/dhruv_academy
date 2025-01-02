import React from 'react'
import Hero from './components/hero/Hero'
import Brand from './components/brand/Brand'
import Courses from './components/courses/Courses'
import Testimonials from './components/testimonials/Testimonials'
import FocusOn from './components/focusOn/FocusOn'
import About from './components/about/About'
import Work from './components/work/Work'
import Footer from './components/footer/Footer'




const App = () => {
  return (
    <main className='overflow-x-hidden text-white bg-[#141414] '>
      <Hero/>
      <Brand/>
      <Courses/>
      <Testimonials/>
      <FocusOn/>
      <About/>
      <Work/>
     <Footer/>
    </main>
  )
}

export default App