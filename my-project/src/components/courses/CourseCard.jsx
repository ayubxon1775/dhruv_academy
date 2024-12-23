import React from 'react'
import CardText from './utility/CardText'
import CourseImg from '../../assets/banner1.png'

const courseData = {
  subtitle: "Content creation",
  title: 'the youtube blueprint: Make content creation your career',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, voluptatem! Culpa, quia repellendus, fugiat quidem labore recusandae perferendis soluta exercitationem provident quos vitae in voluptatum suscipit, quam reprehenderit tempore corrupti.',
  benefits: [
    'Lorem ipsum dolor sit amet consectetur adipis',
    'Lorem ipsum dolor sit amet consectetur ',
    'Lorem ipsum dolor sit amet consectetur adip elit.',
    'Lorem ipsum dolor sit amet consectetu elit.',
  ],
  link: '#'
}

const CourseCard = () => {
  return (
    <>
  <section className='py-12'>
  <div className=" bg-[#0e0e0f] rounded-3xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* text content section */}
      <div className='p-12 py-16 flex flex-col justify-center'>
      <CardText courseData={courseData}/>
      </div>
        {/* image section */}
        <div className='relative'>
        <img src={CourseImg} alt="" className=' object-cover h-full' />
        <div className='absolute inset-0 bg-gradient-to-r from-[#0e0e0f] from-1% to-transparent to-10%'></div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default CourseCard