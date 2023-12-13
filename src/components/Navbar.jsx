import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import { NavLink } from 'react-router-dom';

import { FaBarsStaggered } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

const themes = {
 autumn: "autumn",
 coffee: "coffee", 
};
const getThemeLocalStorage =() => {
  return localStorage.getItem("theme") || themes.autumn };

const Navbar = () => {

  const [theme, setTheme] = useState(getThemeLocalStorage);
  const handleTheme = () => {
    const { autumn, coffee } = themes;
     const newTheme = theme === autumn ? coffee : autumn;
     


    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme] );


  return (
    <nav className='bg-base-200'>
        <div className='navbar align-element'>
            <div className='navbar-start'>
                {/*Title*/ }
              <NavLink to="/" className="hidden lg:flex btn btn-primary-100 bg-yellow-800 text-2xl items-center"> WOOD </NavLink>
            {/* DROP */}
            <div className="dropdown flex">
                <label tabIndex={0} className='btn btn-ghost lg:hidden '>
                <FaBarsStaggered className="h-6 w-6"/>
                </label>
                <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 '>
                <NavLinks />
                </ul>
            </div>
            </div>
            <div className='navbar-center hidden  lg:flex '>
               <ul className='menu menu-horizontal'>
               <NavLinks  />
               </ul>
            </div> 
            <div className='navbar-end'>
              {/* Theme et */}
              <label className="swap swap-rotate" >
                <input type="checkbox" onChange={handleTheme} />
                <FaSun className='swap-on h-4 w-4 text-yellow-500' />
                <FaMoon className='swap-off h-4 w-4' />
              </label>
               {/* Cart Link */}
               <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
                <div className='indicator'>
                <FaCartShopping className='h-6 w-6' />
                <span className='badge badge-sm bg-yellow-200 indicator-item'>
                    5
                </span>
                </div>
               </NavLink>
            </div>
        </div>
      
    </nav>
  )
}

export default Navbar;
 