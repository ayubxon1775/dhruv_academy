import React from 'react'
import Hero from './components/hero/Hero'
import Brand from './components/brand/Brand'
import Courses from './components/courses/Courses'
import Testimonials from './components/testimonials/Testimonials'


const App = () => {
  return (
    <main className='overflow-x-hidden text-white bg-[#141414] '>
      <Hero/>
      <Brand/>
      <Courses/>
      <Testimonials/>
    </main>
  )
}

export default App