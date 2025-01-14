import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.jpg"; // Import your gym fitness logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className='w-full fixed top-0 left-0 right-0 z-50'>
        <nav className='py-4 lg:px-10 px-4 flex bg-stone-900 justify-between items-center'>
          <a href="#" className='flex gap-2 h-12'>
            <img src={logo} alt="Logo" className='object-cover h-full' />
          </a>
          <div className='hidden md:flex gap-12 text-white'>
            <a href="#" className='font-medium hover:text-slate-700'>About Us</a>
            <a href="#" className='font-medium hover:text-slate-700'>Courses</a>
            <a href="#" className='font-medium hover:text-slate-700'>Shop</a>
            <a href="#" className='font-medium hover:text-slate-700'>Contact Us</a>
            <a href="#" className='font-medium hover:text-slate-700'>Sign In</a>
          </div>
          <button className='p-2 md:hidden' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBarsStaggered} style={{ color: 'white' }} />
          </button>

          <div className={`fixed inset-0 bg-stone-900 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
            <div className='p-3 flex justify-between'>
              <a href="#" className='flex gap-2 items-center'>
                <img src={logo} alt="Logo" className='object-cover h-12' />
              </a>
              <button className='p-2' onClick={closeMenu}>
                <FontAwesomeIcon icon={faTimes} style={{ color: 'white' }} />
              </button>
            </div>
            <div className='mt-6'>
              <a href="#" className='text-white font-medium m-3 p-3 hover:bg-stone-500 block rounded-lg'>About Us</a>
              <a href="#" className='text-white font-medium m-3 p-3 hover:bg-stone-500 block rounded-lg'>Courses</a>
              <a href="#" className='text-white font-medium m-3 p-3 hover:bg-stone-500 block rounded-lg'>Shop</a>
              <a href="#" className='text-white font-medium m-3 p-3 hover:bg-stone-500 block rounded-lg'>Contact Us</a>
              <a href="#" className='text-white font-medium m-3 p-3 hover:bg-stone-500 block rounded-lg'>Sign In</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
