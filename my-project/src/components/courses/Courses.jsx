import React from 'react'
import CourseCard from './CourseCard'
import CourseCard2 from './CourseCard2'
import CourseCard3 from './CourseCard3'

const Courses = () => {
  return (
    <>
    <section className='py-14 md:py-24 bg-[#222222]' >
      <div className="container">
        {/* Title */}
      <div className="text-center">
      <p className='text-sm'>Courses</p>
      <p className='text-3xl md:text-4xl font-bold'>Become skilled at what matters</p>
      </div>
      {/* Courses */}
      <CourseCard/>
      <CourseCard2/>
      <CourseCard3/>
      {/* Card */}
      </div>
    </section>
    </>
  )
}

export default Courses