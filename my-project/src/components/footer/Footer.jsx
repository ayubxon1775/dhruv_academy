import React from 'react'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className=" py-12 md:py-24 container bg-[#111111] rounded-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* About brand */}
         <div className='space-y-6'>
         <img src={Logo} alt="" className='max-w-[180px]'  />
          <p className='font-semibold opacity-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quidem optio provident ab quia, amet deserunt quas enim eius dolor consectetur accusantium doloremque perferendis libero totam dolore itaque illo aperiam?</p>
         </div>
          {/* Bottom Menu section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className='text-xl font-bold'> Quick links
              </h3>
              <ul className='space-y-2 mt-6'>
                <li className='cursor-pointer'>Login</li>
                <li className='cursor-pointer'>Top courses</li>
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-bold'> Other links
              </h3>
              <ul className='space-y-2 mt-6'>
                <li className='cursor-pointer'>Testimonials</li>
                <li className='cursor-pointer'>Tech support</li>
                <li className='cursor-pointer'> Contect Us</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright section */}
        <div className='text-center border-t border-white/10 py-6 mt-10' >
          <p className='text-sm'>Copy right 2024 Dhruv Rathee Build By The coding Journey</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer