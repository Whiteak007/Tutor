import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-pattern"></div>
      
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Stay Updated with NKS Impact</h3>
            <p>Get latest updates on scholarships, programs, and teaching opportunities</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col brand-col">
              <h3 className="footer-logo">
                <span className="logo-nks">NKS</span>
                <span className="logo-text">Impact Education</span>
              </h3>
              <p className="footer-description">
                Empowering Students & Teachers for a Brighter Future through 
                scholarship-driven, socially impactful education.
              </p>
              <div className="social-links">
                <a href="https://www.instagram.com/nksimpacteducation?igsh=MWdiOGlzNnVmc21tdw==" className="social-link"><FaFacebook /></a>
                <a href="https://www.instagram.com/nksimpacteducation?igsh=MWdiOGlzNnVmc21tdw==" className="social-link"><FaTwitter /></a>
                <a href="http://www.linkedin.com/in/%20nitish-kumar-11b37b284%20Vanity%20URL%20name" className="social-link"><FaLinkedin /></a>
                <a href="https://www.instagram.com/nksimpacteducation?igsh=MWdiOGlzNnVmc21tdw==" className="social-link"><FaInstagram /></a>
                <a href="https://youtube.com/@nksimpacteducation?si=b72FUBO3QUYnKIWX" className="social-link"><FaYoutube /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/scholarship">Scholarship Program</Link></li>
                <li><Link to="/tutors">Find Teachers</Link></li>
                <li><Link to="/become-tutor">Become a Teacher</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Programs</h4>
              <ul>
                <li><Link to="/scholarship">NKS Scholarship</Link></li>
                <li><Link to="/teacher-training">Teacher Training</Link></li>
                <li><Link to="/community">Community Program</Link></li>
                <li><Link to="/government">Govt. Partnership</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Partners</h4>
              <ul className="partners-list">
                <li>ABC Foundation</li>
                <li>EduHelp</li>
                <li>Gov.in</li>
                <li>State Council</li>
                <li>Children First</li>
                <li>EduLink</li>
                <li>SIE</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Info</h4>
              <ul className="contact-list">
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Bhagwanpur Chowk, Muzaffarpur – 842 001, (Bihar) India</span>
                </li>
                <li>
                  <FaPhone className="contact-icon" />
                  <span>+91 9264109039</span>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <span>nksimpacteducation@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>© 2024 NKS Impact Education. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
            <p className="made-with">
              Made with <FaHeart className="heart-icon" /> for Education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;