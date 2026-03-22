import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaTrophy, FaArrowRight, FaClock, FaRupeeSign } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-pattern"></div>
      <div className="hero-container container">
        <div className={`hero-content ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="hero-tag">
            <span className="tag-pulse">✨</span>
            Scholarship-Driven Network
          </div>
          <h1 className="hero-title">
            Empowering Students & Teachers for a{' '}
            <span className="gradient-text">Brighter Future</span>
          </h1>
          <p className="hero-subtitle">
            Scholarship-driven, socially impactful education network connecting 
            passionate teachers with deserving students.
          </p>
          
          <div className="hero-buttons">
            <Link to="/scholarship" className="btn btn-primary hero-btn">
              <FaGraduationCap /> Find Scholarship
              <FaArrowRight className="btn-icon" />
            </Link>
            <Link to="/become-teacher" className="btn btn-secondary hero-btn">
              <FaChalkboardTeacher /> Become a Teacher
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <FaUsers />
              </div>
              <div className="stat-content">
                <span className="stat-number">200+</span>
                <span className="stat-label">Students Trained</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaTrophy />
              </div>
              <div className="stat-content">
                <span className="stat-number">50+</span>
                <span className="stat-label">Scholarships</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaChalkboardTeacher />
              </div>
              <div className="stat-content">
                <span className="stat-number">10+</span>
                <span className="stat-label">Certified Teachers</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`hero-scholarship ${isVisible ? 'fade-in-up delay-2' : ''}`}>
          <div className="scholarship-card">
            <div className="scholarship-badge">
              <FaClock className="badge-icon" />
              Limited Seats
            </div>
            <h3 className="scholarship-title">NKS Scholarship Program</h3>
            <div className="scholarship-details">
              <span>
                <FaGraduationCap className="detail-icon" />
                Entrance Test Soon
              </span>
              <span>
                <FaRupeeSign className="detail-icon" />
                Income Criteria Apply
              </span>
            </div>
            <div className="scholarship-actions">
              <Link to="/scholarship" className="btn btn-primary scholarship-btn">
                Apply Now
                <FaArrowRight className="btn-icon" />
              </Link>
              <div className="scholarship-code">
                <span>Ability @</span>
                <strong>NKSway</strong>
              </div>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students learning together"
                loading="lazy"
              />
              <div className="image-overlay"></div>
              <div className="image-badge">
                <span className="badge-number">95%</span>
                <span className="badge-text">Success Rate</span>
              </div>
            </div>
            <div className="floating-card floating-card-1">
              <FaGraduationCap />
              <span>1000+ Applications</span>
            </div>
            <div className="floating-card floating-card-2">
              <FaTrophy />
              <span>Top Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;