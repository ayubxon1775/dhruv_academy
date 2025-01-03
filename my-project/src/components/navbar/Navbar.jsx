import React from 'react'
import Logo from '../../assets/logo.png'
import {RxHamburgerMenu} from 'react-icons/rx'
import ResponsiveMenu from './ResponsiveMenu';

const MenuData = [
  {
    id: 1,
    title: "Home",
    url: '#',
  },
  {
    id: 2,
    title: "YouTube Blueprint course ",
    url: '#',
  },
  {
    id: 3,
    title: "ChatGPT Course",
    url: '#',
  },
  {
    id: 4,
    title: "Time Management Course",
    url: '#',
  },
  {
    id: 5,
    title: "E-books",
    url: '#',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
    <nav className=''>
      <div className=" bg-black/60 backdrop-blur-3xl py-3 container flex items-center justify-between rounded-full relative z-[99999]">
        {/* Logo section */}
        <img src={Logo} alt="" className='max-w-[120px]' />
        {/* Menu section */}
        <div>
          <ul className='flex items-center gap-4'>
          {
            MenuData.map((item) => {
              return(
                <li key={item.id} className='hidden md:block'>
                  <a className='uppercase text-xs hover:border-b border-white' href={item.url}>{item.title}</a>
                </li>
              )
            })
          }
          <li className='flex items-center gap-4'>
            <button className='border border-white px-4 py-1 rounded-full'>Login</button>
            <button onClick={() => setIsOpen(!isOpen)} className='block md:hidden text-2xl font-bold'><RxHamburgerMenu/></button>
          </li>
          </ul>
        </div>
      </div>
      {/* Menu Responsive menu  */}
      <ResponsiveMenu isOpen={isOpen}/>
    </nav>
    </>
  )
}

export default Navbar