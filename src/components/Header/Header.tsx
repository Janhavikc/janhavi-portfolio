import * as React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

const Header:React.FC = () =>{
    
    const [active, setActive] = React.useState('Home');
    
    return <>
<nav className="header-nav">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-10" alt="Janhavi Logo" />
        <span className="self-center logo-name">Janhavi</span>
    </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <a href='tel:+919324242271' type="button" className="btn-contact text-white bg-[#8D6E63] focus:outline-none font-medium rounded-lg px-4 py-2 text-center">Contact me</a>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
      <li>
        <a href="#" onClick={()=>setActive('Home')} className={`block py-2 px-3 ${active=='Home'? 'text-[#B68973]': 'text-white'} hover:text-[#B68973] rounded-sm md:p-0`} aria-current="page">Home</a>
      </li>
      <li>
        <a href="#about" onClick={()=>setActive('About')} className={`block py-2 px-3 ${active=='About'? 'text-[#B68973]': 'text-white'} hover:text-[#B68973] rounded-sm md:p-0`} aria-current="page">About</a>
      </li>
      <li>
        <a href="#experience" onClick={()=>setActive('Experience')} className={`block py-2 px-3 ${active=='Experience'? 'text-[#B68973]': 'text-white'} hover:text-[#B68973] rounded-sm md:p-0`} aria-current="page">Experience</a>
      </li>
      <li>
        <a href="#skills" onClick={()=>setActive('Skills')} className={`block py-2 px-3 ${active=='Skills'? 'text-[#B68973]': 'text-white'} hover:text-[#B68973] rounded-sm md:p-0`} aria-current="page">Skills</a>
      </li>
      <li>
        <a href="#projects" onClick={()=>setActive('Projects')} className={`block py-2 px-3 ${active=='Projects'? 'text-[#B68973]': 'text-white'} hover:text-[#B68973] rounded-sm md:p-0`} aria-current="page">Projects</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    </>;
}

export default Header;