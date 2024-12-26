import React from 'react'

const FocusOn = () => {
  return (
   <>
   <section>
    <div className="container py-12 md:py-24">
      {/* Title section */}
    <p className='text-3xl md:text-5xl font-bold text-center uppercase'>WHAT WE FOCUS ON</p>
      {/* Card section */}
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      <div>
        <div>
          <p>REAL WORLD SKILLS</p>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div></div>
      <div></div>
    </div>
    </div>
   </section>
   </>
  )
}

export default FocusOn