import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-center border-b border-black/40 bg-black/70 font-semibold text-white backdrop-blur-lg">
      <div className="hidden flex-col gap-4 sm:flex sm:flex-row lg:gap-10">
        <ul className="flex">
          <li className="p-4 lg:p-6">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 lg:p-6">Statistics</li>
          <li className="p-4 lg:p-6">
            <Link href="#init">Initiatives</Link>
          </li>
          <li className="p-4 lg:p-6">About Us</li>
          <li className="p-4 lg:p-6">Contact</li>
        </ul>
      </div>
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className={`w-12 p-4 transition duration-300 ease-in-out focus:outline-none ${
            isMenuOpen ? "rotate-90" : ""
          }`}>
          {isMenuOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out`}>
          <ul
            className={`flex flex-col ${
              isMenuOpen ? "items-start" : "items-center"
            } gap-4`}>
            <li className="p-4 lg:p-6">
              <Link href="#home">Home</Link>
            </li>
            <li className="p-4 lg:p-6">Statistics</li>
            <li className="p-4 lg:p-6">
              <Link href="#init">Initiatives</Link>
            </li>
            <li className="p-4 lg:p-6">About Us</li>
            <li className="p-4 lg:p-6">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
