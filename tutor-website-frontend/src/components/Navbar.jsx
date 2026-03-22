import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        <Link to="/" className="nav-logo">
          <span className="logo-nks">NKS</span>
          <span className="logo-text">Impact Education</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item dropdown">
              <span>Programs <FaChevronDown className="dropdown-icon" /></span>
              <ul className="dropdown-menu">
                <li><Link to="/scholarship">Scholarship Program</Link></li>
                <li><Link to="/teacher-training">Teacher Training</Link></li>
                <li><Link to="/community">Community Program</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/teachers" onClick={() => setIsOpen(false)}>Teachers</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
          
          <div className="nav-buttons">
            <Link to="/scholarship" className="btn btn-outline nav-btn find-scholar">
              Find Scholarship
            </Link>
            <Link to="/become-teacher" className="btn btn-primary nav-btn">
              Become a Teacher
            </Link>
          </div>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;