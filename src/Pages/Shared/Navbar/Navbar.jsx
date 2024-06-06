import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/logo.png"
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import demoUserPic from "../../../assets/demoUser.png";
const Navbar = () => {

  const { user,logOut } = useAuth();
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
    {/* <li><NavLink  to='/' className={'font-semibold '}>Home</NavLink></li>
    <li><NavLink  to='/about' className={'font-semibold '}>About</NavLink></li> */}
    <li><NavLink  to='/'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none  bg-[#4692FF] border-none text-white font-semibold border-black mr-3"
           : isPending
           ? "pending"
           : `mr-3 ${scrolled? 'text-black' : 'text-[#4692FF]'} font-bold`
       }>Home</NavLink></li>
           <li><NavLink  to='/blogs'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border-none bg-[#4692FF] text-white font-semibold border-black mr-3"
           : isPending
           ? "pending"
           : `mr-3 ${scrolled? 'text-black' : 'text-[#4692FF]'} font-bold`
       }>Blogs</NavLink></li>
    <li><NavLink  to='/about'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border-none bg-[#4692FF] text-white font-semibold border-black mr-3"
           : isPending
           ? "pending"
           : `mr-3 ${scrolled? 'text-black' : 'text-[#4692FF]'} font-bold`
       }>About Us</NavLink></li>
    <li><NavLink  to='/contact'  className={({ isActive, isPending }) =>
         isActive
           ? "bg-none border-none bg-[#4692FF] text-white font-semibold border-black mr-3"
           : isPending
           ? "pending"
           : `mr-3 ${scrolled? 'text-black' : 'text-[#4692FF]'} font-bold`
       }>Contact Us</NavLink></li>


    {
       !user && <>
      <li><NavLink  to='/login'  className={({ isActive, isPending }) =>
   isActive
     ? "bg-none border-none bg-[#4692FF] text-white font-semibold border-black mr-3"
     : isPending
     ? "pending"
     : `mr-3 ${scrolled? 'text-black' : 'text-[#4692FF]'} font-bold`
 }>Login</NavLink></li>
 <li><NavLink  to='/register'  className={({ isActive, isPending }) =>
   isActive
     ? `bg-none border-none bg-[#4692FF] ${scrolled? 'text-black' : 'text-white'} font-semibold border-black mr-3`
     : isPending
     ? "pending"
     : `mr-3 ${scrolled? 'text-black' : 'text-[#4692FF]'} font-bold`
 }>Register</NavLink></li>
      </>
    }
        
    </>



const handleSignOut = () =>{
  
  logOut()
  .then(result =>{
    console.log(result);
     toast.success('Logout Completed');
  })
  .catch(error =>{
    console.log(error);
      toast.warn("Error");
  })

}



    return (
        <div className={`navbar ${scrolled ? 'bg-[#AACBFF]' : 'bg-transparent '} fixed top-0 z-50 transition-colors duration-300`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className={`btn btn-ghost ${scrolled? 'text-black' : 'text-white'} lg:hidden`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                  links
              }
            </ul>
          </div>
         
          <Link to='/' className='flex  items-center'>
                  <img className='w-auto h-10' src={logo}  />
                  {
                    scrolled ? <span className='font-black text-sm md:text-xl  text-black '>Shadow Tourist</span> : <span className='font-black text-sm md:text-xl text-white '>Shadow Tourist</span>
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
       {
        user &&  <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={user?.photoURL ? user.photoURL : demoUserPic} />
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              {user?.displayName}
              
            </a>
          </li>
          <li><a className="justify-between">
              {user?.email}
            </a></li>
            <Link to={'/dashboard'}>
            <li > <p className="justify-between">Dashboard</p>
              
            </li>
            </Link>
          <li><button className="btn btn-sm " onClick={handleSignOut}>Logout</button></li>
        </ul>
      </div>
       }
         
        </div>
      </div>
    );
};

export default Navbar;