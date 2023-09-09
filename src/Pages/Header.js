import React from 'react';
import logo from '../Assets/logo.png'
import './Header.css'
import { Link } from 'react-router-dom';

//  <div className='md:max-w-[1240px] mx-auto py-3 z-10 '>
//     <img onClick={() => navigate('/')} className='w-[180px] cursor-pointer ' src={logo} alt="" />
// </div> 
const Header = () => {

    const checkStatus = localStorage.getItem('status');

    const menuItem = <>
        <li><Link className='mr-2' to='/'>হোম</Link></li>
        {
            checkStatus &&
            <li><Link className='mr-2' to='/profile'>প্রফাইল</Link></li>
        }
    </>

    return (
        <div className=''>
            <div className="navbar  md:max-w-[1240px] mx-auto">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link to={'/'} className="normal-case ">
        <img className='w-[130px] cursor-pointer ' src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {
            menuItem
        }
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;