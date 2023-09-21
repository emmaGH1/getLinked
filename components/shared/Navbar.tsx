'use client'

import Image from "next/image";
import Logo from "@/components/shared/Logo";
import { navLinks } from "@/constants";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleToggle = () => {
    setToggleMenu(prevState => !prevState)
  }

  return (
    <div className="w-full mt-5 lg:mt-8 mx-auto flex justify-between items-center relative">
        <div className="ml-5">
          <Logo />
        </div>
        
        {/* Mobile nav */}
        <div onClick={handleToggle} className="lg:hidden mr-7">
          <Image 
             src='/assets/menu.svg' 
             alt="menu"
             width={19}
             height={14} 
          />
        </div>
        <div className={`${toggleMenu ? 'block' : 'hidden'} absolute z-50 bg-home w-full h-screen top-0 lg:hidden`}>
          <div className="mt-10 flex flex-col w-4/5 mx-auto">
            <div className=" self-end" onClick={handleToggle}>
                <Image src='/assets/close.svg' alt='close' width={14} height={14} />
            </div>
            <div className="flex flex-col mt-10">
                {navLinks.map(link => (
                    <Link key={link.id} href={link.id} className="mt-5 text-lg" onClick={handleToggle}>
                    {link.label}
                    </Link>
                ))}
                <div className="flex">   
                  <Link href='/register' 
                  className="gradient-primary px-16 rounded-sm py-5 mt-10 text-xl">
                    Register
                  </Link>
                </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center">
            {navLinks.map(link => (
                <Link key={link.id} href={link.id} className="mr-10 hover:text-secondary transition-colors delay-100 duration-300">
                    {link.label}
                </Link>
            ))}
            <div className="flex">   
              <Link href='/register' 
              className="gradient-primary px-10 rounded-sm py-3 ml-10 trans">
                    Register
               </Link>
            </div>
        </div>

    </div>
  );
};

export default Navbar;