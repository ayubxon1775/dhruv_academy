import React from 'react';
import TestimonialCard from './TestimonialCard';
import bgImg from '../../assets/testimonials.png';

const bgStyle = {
  backgroundImage : `url(${bgImg})`,
  backgroundPosition: 'center',
  backgroundSize: "cover",
  backgroundRepeat: 'repeat'
}

const TestimonialData = [
  {
    id: 1,
    name: "Prithu H.",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo ea quam sequi tempore in necessitatibus sapiente possimus nesciunt, accusantium enim est fuga, perspiciatis at vel non veritatis odit delectus deserunt impedit.',
    reting: 4.5,
  },
  {
    id: 2,
    name: "Raghav goel",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo ea quam sequi tempore in necessitatibus sapiente possimus nesciunt, accusantium enim est fuga, perspiciatis at vel non veritatis odit delectus deserunt impedit.  ',
    reting: 4.5,
  },
  {
    id: 3,
    name: "Harsh",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo ea quam sequi tempore in necessitatibus sapiente possimus nesciunt, accusantium enim est fuga, perspiciatis at vel non veritatis odit delectus deserunt impedit. ',
    reting: 4.5,
  },
  {
    id: 4,
    name: "Pruthu H.",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo ea quam sequi tempore in necessitatibus sapiente possimus nesciunt, accusantium enim est fuga, perspiciatis at vel non veritatis odit delectus deserunt impedit. ',
    reting: 4.5,
  },
  {
    id: 5,
    name: "Keyur Kumbhare",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo ea quam sequi tempore in necessitatibus sapiente possimus nesciunt, accusantium enim est fuga, perspiciatis at vel non veritatis odit delectus deserunt impedit. ',
    reting: 4.5,
  },
  {
    id: 6,
    name: "Krishna",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo ea quam sequi tempore in necessitatibus sapiente possimus nesciunt, accusantium enim est fuga, perspiciatis at vel non veritatis odit delectus deserunt impedit.  ',
    reting: 4.5,
  },
  {
    id: 7,
    name: "Krishna",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo ea quam sequi tempore in necessitatibus sapiente possimus nesciunt, accusantium enim est fuga, perspiciatis at vel non veritatis odit delectus deserunt impedit.',
    reting: 4.5,
  },
  {
    id: 8,
    name: "Krishna",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo ea quam sequi tempore in necessitatibus sapiente possimus nesciunt, accusantium enim est fuga, perspiciatis at vel non veritatis odit delectus deserunt impedit.',
    reting: 4.5,
  },
  {
    id: 9,
    name: "Krishna",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo ea quam sequi tempore in necessitatibus sapiente possimus nesciunt, accusantium enim est fuga, perspiciatis at vel non veritatis odit delectus deserunt impedit.  ',
    reting: 4.5,
  },

]

const Testimonials = () => {
  return (
    <>
    <section style={bgStyle} className='py-12 md:py-24 bg-[#121212] md:max-h-[2100px] xl:max-h-[1600px] md:overflow-hidden'>
      <div className="container">
    {/* Title section */}
    <p className='text-3xl md:text-5xl font-bold md:w-[800px] mx-auto text-center uppercase'>Here's what our Current Students have to say ...</p>
    {/* Review card section */}
    <div className='mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
    {
      TestimonialData.map((data) => (
        <TestimonialCard key={data.id} {...data}/>
      ))
    }
    </div>
    <div className='flex justify-center py-10 md:py-48 md:-translate-y-72 bg-gradient-to-t from-[#121212] from-50% to-transparent'>
    <button className='text-black bg-white text-2xl rounded-xl font-bold px-24 py-5 inline-block w-[500px]'>See more</button>
    </div>
      </div>
      </section>
    </>
  )
}

export default Testimonials