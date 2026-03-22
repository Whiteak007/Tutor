import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container container">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <span className="logo-nks">NKS</span>
            <span className="logo-text">Impact Education</span>
          </Link>

          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <div className="nav-menu-header">
              <div className="nav-logo-mobile">
                <span className="logo-nks">NKS</span>
                <span className="logo-text">Impact Education</span>
              </div>
              <button className="nav-close-mobile" onClick={closeMenu}>
                <FaTimes />
              </button>
            </div>

            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className={`nav-item dropdown ${dropdownOpen ? 'open' : ''}`}>
                <span onClick={toggleDropdown}>
                  Programs 
                  {dropdownOpen ? 
                    <FaChevronUp className="dropdown-icon" /> : 
                    <FaChevronDown className="dropdown-icon" />
                  }
                </span>
                <ul className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
                  <li><Link to="/scholarship" onClick={closeMenu}>Scholarship Program</Link></li>
                  <li><Link to="/teacher-training" onClick={closeMenu}>Teacher Training</Link></li>
                  <li><Link to="/community" onClick={closeMenu}>Community Program</Link></li>
                  <li><Link to="/government" onClick={closeMenu}>Govt. Partnership</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/teachers" onClick={closeMenu}>Teachers</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" onClick={closeMenu}>Contact</Link>
              </li>
            </ul>
            
            <div className="nav-buttons">
              <Link to="/scholarship" className="btn btn-outline nav-btn find-scholar" onClick={closeMenu}>
                Find Scholarship
              </Link>
              <Link to="/become-teacher" className="btn btn-primary nav-btn" onClick={closeMenu}>
                Become a Teacher
              </Link>
            </div>
          </div>

          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;