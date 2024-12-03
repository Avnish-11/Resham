import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-14 py-4 bg-white shadow-md">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        <div>RESHAM</div>
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-[#00732F] text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Links for Desktop and Mobile */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex-row items-center gap-6 md:gap-9 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex`}
      >
        <Link
          to="/suppliers"
          className="text-[#6D6E71] text-base font-popins leading-6 md:py-0 py-2"
          onClick={() => setIsOpen(false)}
        >
          Find Suppliers
        </Link>
        <Link
          to="/services"
          className="text-[#6D6E71] text-base leading-6 font-popins flex items-center gap-1 group md:py-0 py-2"
          onClick={() => setIsOpen(false)}
        >
          Find Service Tags
          <IoIosArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className="w-full md:w-auto mx-auto py-3 md:py-2 px-6 font-inter font-bold text-[15px] bg-white text-[#00732F] border border-[#00732F] rounded hover:text-white hover:bg-[#00732F]"
        >
          Login / Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
