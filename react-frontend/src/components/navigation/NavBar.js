import VoCliqueLogo from '../../assests/Color logo - no background.svg'
import { HiMenu, HiOutlineX, HiOutlineUserCircle } from 'react-icons/hi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className='bg-atlanticNavy-500 md:flex h-20 px-4 sm:px-6 lg:px-8 sticky top-0 z-20'>
      <div className='flex items-center justify-between py-2 w-full'>
        <Link to="/">
          <img src={VoCliqueLogo} alt="logo" className='h-16' />
        </Link>

        <div className='md:hidden block text-white flex'>
          {showNav ? (
            <HiOutlineX
              onClick={() => setShowNav(!showNav)}
              className='w-10 h-10 p-2 cursor-pointer hover:text-fuchsiaFever-400'
            />
          ) : (
            <HiMenu
              onClick={() => setShowNav(!showNav)}
              className='w-10 h-10 p-2 cursor-pointer hover:text-fuchsiaFever-400'
            />
          )}

          <HiOutlineUserCircle className='h-10 w-10 cursor-pointer hover:text-fuchsiaFever-400'/>
        </div>
      </div>

      <ul
        className={
          (showNav ? "right-0" : "-right-full") +
          " md:static fixed bottom-0 top-20 md:flex md:space-x-4 items-center md:bg-transparent bg-gray-500 bg-opacity-90 md:w-auto w-3/4 md:text-gray-500 text-white md:space-y-0 space-y-5 p-2 transition-right ease-in-out delay-200"
        }
      >
        <NavItem to='/' content="Home" />
        <NavItem to='/dashboard' content="Dashboard" />
        <NavItem to='/flights' content="Flights" />
        <HiOutlineUserCircle className='hidden md:flex text-white h-10 w-10 cursor-pointer hover:text-fuchsiaFever-400'/>
      </ul>
    </nav>
  )
}

export default NavBar;