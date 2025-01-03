import React from 'react'
import CourseImg from '../../assets/banner4.png';
import {FaYoutube, FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'


const About = () => {
  return (
    <>
  <section className='py-12'>
  <div className=" bg-[#141414] rounded-3xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* image section */}
        <div className='relative'>
        <img src={CourseImg} alt="" className=' object-cover h-full w-full' />
        <div className='absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#141414] from-1% to-transparent to-10%'></div>
        </div>
        {/* text content section */}
      <div className='p-12 py-16 flex flex-col justify-center gap-4'>
      <p className='uppercase'>About</p>
      <p className='text-3xl font-bold uppercase'>Dhrub Rathee</p>
      <p className='text-sm bg-[#292929] rounded-xl py-1 w-fit font-semibold px-4 mt-3'>A YOUTUBE EDUCATOR AN ACTIVIST AND A TRAVEL VLOGGER</p>
        {/* About description */}
        <p> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quidem eum placeat aliquid ipsa magni, repellat voluptas dicta est laborum nobis commodi! Ut, perferendis? Possimus dicta aliquid quo necessitatibus corporis!
        </p> 
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quidem eum placeat aliquid ipsa magni, repellat voluptas dicta est laborum nobis commodi! Ut, perferendis? Possimus dicta aliquid quo necessitatibus corporis!
        </p>

        {/* social icons */}
          <div className='flex items-center gap-3 bg-white/10 px-4 py-3 w-fit rounded-full'>
            <p className='text-lg font-semibold'>Find Dhruv on: </p>
            <div className='flex items-center gap-3'>
             <div className='iconStyle'> <FaYoutube/></div>
              <div className='iconStyle'><FaInstagram/></div>
              <div className='iconStyle'><FaTwitter/></div>
              <div className='iconStyle'><FaFacebook/></div>
            </div>
          </div>

      </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default About