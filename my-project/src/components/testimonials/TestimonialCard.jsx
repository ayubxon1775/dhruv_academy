import React from 'react'

const TestimonialCard = ({id, name, review, reting}) => {
  console.log(id, name, review, reting);
  return (
    <>
    <section className='p-12 bg-[#222222] rounded-3xl flex justify-center items-center'>
      <div>
      <p className='text-6xl font-serif rotate-180 inline-block'>,,</p>
      <p>{review}</p>
      <div className='flex items-center gap-4 mt-8'>
        <div className='h-14 w-14 flex bg-white justify-center items-center text-black text-3xl rounded-full'>{name.charAt(0).toUpperCase()}</div>
        <div>
          <p>{name}</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
     
      </div>
    </section>
    </>
  )
}

export default TestimonialCard