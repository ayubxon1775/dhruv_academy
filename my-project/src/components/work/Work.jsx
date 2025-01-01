import React from 'react';
import Dhruv1 from '../../assets/dhruv1.png';
import Dhruv2 from '../../assets/dhruv2.png';
import Dhruv3 from '../../assets/dhruv3.jpeg'

const CardData = [
  {
    id: 1,
    channelName: 'Dhruv Rather',
    handle: 'dhruvrathee',
    subscribers: '12M+',
    videos: '540+',
    link: '#',
    image: Dhruv1,
  },
  {
    id: 2,
    channelName: 'Dhruv Rather Vlogs',
    handle: 'DhruvRatheeVlogs',
    subscribers: '12M+',
    videos: '540+',
    link: '#',
    image: Dhruv2,
  },
  {
    id: 3,
    channelName: 'Dhruv Rather',
    handle: 'dhruvrathee',
    subscribers: '12M+',
    videos: '540+',
    link: '#',
    image: Dhruv3,
  },
]

const Work = () => {

 
  return (
    <>
    <section>
      <div className='container py-12 md:py-24'>
      <h1 className='uppercase text-3xl md:text-5xl font-bold text-center'>My work</h1>

      {/* card section */}
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {CardData.map((data) => {
        return (
          <div key={data.id} className='p-4 rounded-3xl md:p-8 bg-[#1b1b1b]'>
            <img src={data.image} alt="" className='w-full rounded-2xl' />
            <div className='text-center pt-5 space-y-3'>
              <p className='text-4xl md:text-5xl font-bold'>{data.channelName}</p>
              <p>@{data.handle}</p>
              <div>
              <p>{data.subscribers} subscribers</p>
              <p>{data.videos} videos</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
      </div>
    </section>
    </>
  )
}

export default Work