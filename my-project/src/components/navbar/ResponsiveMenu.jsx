import React from 'react'
import {IoMdHome} from 'react-icons/io'
import {FaYoutube} from 'react-icons/fa'
import {IoLogoReact} from 'react-icons/io5'
import {IoIosTime} from 'react-icons/io'
import {MdOutlineBook} from 'react-icons/md'

const MobileMenuData = [
  {
    id: 1,
    title: "Home",
    url: '#',
    icon: <IoMdHome/>
  },
  {
    id: 2,
    title: "Youtube Blueprint Course",
    url: '#',
    icon: <FaYoutube/>
  },
  {
    id: 3,
    title: "ChatGPT Course",
    url: '#',
    icon: <IoLogoReact/>
  },
  {
    id: 4,
    title: "Time Management Course",
    url: '#',
    icon: <IoIosTime/>
  },
  {
    id: 5,
    title: "E-books  Course",
    url: '#',
    icon: <MdOutlineBook/>
  }
]

const ResponsiveMenu = ({isOpen}) => {
  return (
    <>
    {
      isOpen && (
        <section className='relative'>
        <div className="container">
          <div className={`absolute ${isOpen ? "top-3" : "top-[300px] opacity-0"}  left-0 w-full h-[200px] transition-all duration-200`}>

            <div className="container bg-black/50 backdrop-blur-3xl p-3 rounded-3xl py-4">
              <ul className='space-y-3'> {MobileMenuData.map((item) => {
                return(
                      <li key={item.id} className='uppercase flex items-center gap-3'>
                      <span>{item.icon}</span>
                      {item.title}
                    </li>
                )
                    })
                  }
               
              </ul>
            </div>
          </div>
        </div>
      </section>
      )}
 
    </>
  )
}

export default ResponsiveMenu