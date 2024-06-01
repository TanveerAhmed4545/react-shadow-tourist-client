import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/logo.png"
import { useEffect, useState } from "react";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const links = <>
    <li><NavLink  to='/' className={'font-semibold '}>Home</NavLink></li>
    <li><NavLink  to='/about' className={'font-semibold '}>About</NavLink></li>
    </>
    return (
        <div className={`navbar ${scrolled ? 'bg-[#DEE3CA]' : 'bg-transparent '} fixed top-0 z-50 transition-colors duration-300`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                  links
              }
            </ul>
          </div>
         
          <Link to='/' className='flex gap-1 items-center'>
                  <img className='w-auto h-10' src={logo}  />
                  {
                    scrolled ? <span className='font-bold  text-black '>Shadow Tourist</span> : <span className='font-bold text-white '>Shadow Tourist</span>
                  }
                  
                </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">
            {
              links
            }
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            User Name
            
          </a>
        </li>
        <li><a className="justify-between">
            User Email
          </a></li>
          <li><a className="justify-between">
            Dashboard
          </a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
         
        </div>
      </div>
    );
};

export default Navbar;