import React from 'react'
import CourseCard from './CourseCard'

const Courses = () => {
  return (
    <>
    <section className='py-14 md:py-24' >
      <div className="container">
        {/* Title */}
      <div className="text-center">
      <p className='text-sm'>Courses</p>
      <p className='text-3xl md:text-4xl font-bold'>Become skilled at what matters</p>
      </div>
      {/* Courses */}
      <CourseCard/>
      {/* Card */}
      </div>
    </section>
    </>
  )
}

export default Courses