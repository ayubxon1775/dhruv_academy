import React from 'react'
import Hero from './components/hero/Hero'
import Brand from './components/brand/Brand'


const App = () => {
  return (
    <main className='overflow-x-hidden text-white bg-black'>
      <Hero/>
      <Brand/>
    </main>
  )
}

export default App