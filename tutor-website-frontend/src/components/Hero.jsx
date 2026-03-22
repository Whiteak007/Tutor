import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaTrophy } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-pattern"></div>
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-tag">✨ Scholarship-Driven Network</div>
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

        <div className="hero-scholarship">
          <div className="scholarship-card">
            <div className="scholarship-badge">Limited Seats</div>
            <h3 className="scholarship-title">NKS Scholarship Program</h3>
            <div className="scholarship-details">
              <span>📝 Entrance Test Soon</span>
              <span>💰 Income Criteria Apply</span>
            </div>
            <div className="scholarship-actions">
              <Link to="/scholarship" className="btn btn-primary">Apply Now</Link>
              <div className="scholarship-code">
                <span>Ability @</span>
                <strong>NKSway</strong>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Students learning"
            />
            <div className="image-badge">
              <span>95% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;