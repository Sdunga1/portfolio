'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#top' },
    { name: 'About me', href: '/#about' },
    { name: 'What I Do', href: '/#services' },
    { name: 'Projects', href: '/#work' },
    { name: 'Certifications', href: '/#certifications' },
    { name: 'Contact me', href: '/#contact' },
  ];

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20'
            : ''
        }`}
      >
        <Link href="/#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </Link>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ''
              : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'
          }`}
        >
          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} scroll={true}>
                <span className="font-Ovo relative inline-block text-gray-800 dark:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-800 dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle theme"
              className="w-6"
            />
          </button>

          <Link
            href="/#contact"
            scroll={true}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`hidden lg:inline-flex items-center justify-center relative overflow-hidden p-0.5 rounded-full ml-4 group font-Ovo ${
              isDarkMode
                ? 'bg-gradient-to-br from-purple-600 to-blue-500'
                : 'bg-gradient-to-br from-black to-gray-500'
            }`}
          >
            <span className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-gray-900 transition-all bg-white dark:bg-gray-900 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-white dark:text-white border border-gray-300 dark:border-transparent">
              Contact
              <Image
                src={
                  isDarkMode
                    ? assets.arrow_icon_dark
                    : isHovered
                    ? assets.arrow_icon_dark
                    : assets.arrow_icon
                }
                alt="arrow"
                className="w-3"
              />
            </span>
          </Link>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6"
            />
          </button>
        </div>

        {/* -- Mobile Menu -- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close"
              className="w-5 cursor-pointer"
            />
          </div>

          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} scroll={true} onClick={closeMenu}>
                <span className="font-Ovo cursor-pointer">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
