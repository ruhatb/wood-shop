
import { Link } from "react-router-dom";

const Header = () => {
  return (
   <header className='bg-yellow-800 py-2 text-neutral-content'>
   <div className='align-element flex justify-center sm:justify-end'>
    {/*Userlinks*/}
    <div className="flex gap-x-6 justify-center items-center">
  <Link to="/login" className= "link link-hover text-xs sm:text-sm">
    Sign İn  / Guest
  </Link>
  <Link to="/register" className= "link link-hover text-xs  sm:text-sm pr-1">
    Create Account
  </Link>

    </div>
    </div>
   </header>
  );
};

export default Header;
