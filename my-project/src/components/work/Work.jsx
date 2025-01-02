import React from 'react';
import Dhruv1 from '../../assets/dhruv1.png';
import Dhruv2 from '../../assets/dhruv2.png';
import Dhruv3 from '../../assets/dhruv3.jpeg'
import {GoVerified} from 'react-icons/go'

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
    channelName: 'Dhruv Rathee Vlogs',
    handle: 'DhruvRatheeVlogs',
    subscribers: '12M+',
    videos: '540+',
    link: '#',
    image: Dhruv2,
  },
  {
    id: 3,
    channelName: 'Dhruv Rathee short',
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
      <h1 className='mb-14 uppercase text-3xl md:text-5xl font-bold text-center'>My work</h1>

      {/* card section */}
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {CardData.map((data) => {
        return (
          <div key={data.id} className='p-4 rounded-3xl md:p-8 bg-[#1b1b1b]'>
            <img src={data.image} alt="" className='w-full rounded-2xl'/>
            <div className='flex flex-col justify-between h-[300px]'>
            <div className='text-center pt-7 space-y-4'>
              <p className='text-4xl md:text-5xl font-bold'>{data.channelName} {''} 
              <span className='inline-block pl-4'> <GoVerified className='text-[24px]'/> </span>
               </p>
              <p>@{data.handle}</p>
              <div className='flex justify-center gap-4'>
              <p>{data.subscribers} Subscribers</p>
              <p>{data.videos} videos</p>
              </div>
            </div>
            <div>
            <button className=' inline-block uppercace border w-full py-4 border-white text-white rounded-full px-8'>View Channel</button>
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