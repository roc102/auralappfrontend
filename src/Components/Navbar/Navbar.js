import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo.jpg";
import { FaBars} from 'react-icons/fa';
import '../Styles/global.css';

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/educate", label: "Education" },
  { to: "/skills", label: "Skills" },
  { to: "/mentor", label: "Mentor" },
  { to: "/exposure", label: "Exposure" },
  { to: "/explore", label: "Explore" },
  { to: "/experts", label: "Experts" },
  { to: "/stories", label: "Success Stories" },
  { to: "/profile", label: "Profile" },
  { to: "/settings", label: "Settings" },
];

function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaQueryChange = (e) => {
      setMobileMenuVisible(!e.matches);
    };

    // Initial check for the current window width
    handleMediaQueryChange(mediaQuery);

    // Add listener for media query changes
    mediaQuery.addListener(handleMediaQueryChange);

    // Cleanup function
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <section className={`hero__section ${mobileMenuVisible ? 'navbar_main' : ''}`}>
        <header>
          <nav className={`flex items-center justify-between p-4 bg-blue-500 w-full h-16 ${mobileMenuVisible ? 'navbar_main' : ''}`}>
            <div className="flex items-center gap-4">
              <img src={logo} alt="Logo" className="w-12 h-12" />
              <Link to="/" className="text-white font-bold text-md whitespace-nowrap">Aural App</Link>
            </div>

            <div className="lg:hidden">
              <button className="text-white" onClick={toggleMobileMenu}>
                <FaBars />
              </button>
            </div>

            <div className="hidden lg:flex flex-col lg:flex-row gap-6 ml-4 w-full lg:w-auto">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
      </section>
    </>
  );
}

export default Navbar;