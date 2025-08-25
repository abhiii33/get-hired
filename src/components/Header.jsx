import React ,{useState}from "react";
import { Search,ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import "../index.css";
const Header = () => {
    const[open,setOpen]=useState(false);
    const handleDropdown=()=>{
        setOpen(!open);
    }
  return (
    <>
    <header className="w-full shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="logo"
            className="h-8 w-auto"
          />
        </div>

        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-8  cursor-pointer">
           <Link to="/home"> <li className="relative hover:text-purple-600 transition-colors group">Home</li></Link>
            <li className="hover:text-purple-600 transition-colors">About Us</li>
            <li className="hover:text-purple-600 transition-colors">Contact</li>
            <li className="hover:text-purple-600 transition-colors">Jobs</li>
          </ul>
        </nav>  
          <button className="p-2 rounded-full transition-colors">
            <Search size={20} />
          </button>
        </div>
    </header>
<div className="secondary-header bg-[var(--brandColour)]">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 text-white h-12">
    <div className="flex items-center">
      <h3 className="text-base font-medium cursor-pointer hover:bg-[#7312b1] px-4 py-2 rounded transition-colors">
        Careers
      </h3>
    </div>
    <nav>
      <ul className="flex space-x-4">
        <Link to="/jobsearch">
        <li className="px-4 py-2 rounded cursor-pointer hover:bg-[#7312b1] transition-colors">
          Job Search
        </li>
        </Link>
        <Link to="/savedjobs"> 
        <li className="px-4 py-2 rounded cursor-pointer hover:bg-[#7312b1] transition-colors">
          Saved Jobs
        </li>
        </Link>
        <Link to="/application">
        <li className="px-4 py-2 rounded cursor-pointer hover:bg-[#7312b1] transition-colors">
          Access Application
        </li>
        </Link>
      </ul>
    </nav>
  </div>
</div>


    </>
);
}

export default Header;
