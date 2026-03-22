import React from 'react';
import { FaHandshake, FaBuilding, FaUsers, FaGlobe, FaHeart, FaTree, FaBook, FaChild } from 'react-icons/fa';
import './Community.css';

const Community = () => {
  const partners = [
    { name: 'ABC Foundation', icon: <FaBuilding />, type: 'NGO' },
    { name: 'EduHelp', icon: <FaBook />, type: 'Education' },
    { name: 'Gov.in', icon: <FaGlobe />, type: 'Government' },
    { name: 'State Council', icon: <FaBuilding />, type: 'Government' },
    { name: 'Children First', icon: <FaChild />, type: 'NGO' },
    { name: 'EduLink', icon: <FaUsers />, type: 'Corporate' },
    { name: 'SIE', icon: <FaTree />, type: 'Institution' }
  ];

  const initiatives = [
    {
      title: 'Rural Education Program',
      description: 'Bringing quality education to rural areas through mobile classrooms and digital learning',
      icon: <FaTree />,
      impact: '5000+ students reached'
    },
    {
      title: 'Girl Child Education',
      description: 'Special scholarships and support for girl child education in underserved communities',
      icon: <FaHeart />,
      impact: '1000+ girls enrolled'
    },
    {
      title: 'Teacher Training Camps',
      description: 'Free teacher training programs for government school teachers',
      icon: <FaBook />,
      impact: '500+ teachers trained'
    },
    {
      title: 'Community Learning Centers',
      description: 'Establishing learning centers in community spaces for after-school support',
      icon: <FaUsers />,
      impact: '25 centers established'
    }
  ];

  return (
    <div className="community-page">
      {/* Hero Section */}
      <section className="community-hero">
        <div className="container">
          <h1 className="hero-title">
            Community & Government <span className="gradient-text">Partnership Vision</span>
          </h1>
          <p className="hero-subtitle">
            Collaborating with community and government institutions for greater 
            educational and social impact
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Partners</span>
            <h2 className="section-title">Collaborating for <span>Change</span></h2>
            <p className="section-subtitle">
              Working together with organizations that share our vision
            </p>
          </div>

          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div className="partner-card" key={index}>
                <div className="partner-icon">{partner.icon}</div>
                <h3>{partner.name}</h3>
                <span className="partner-type">{partner.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="initiatives-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Initiatives</span>
            <h2 className="section-title">Making a <span>Difference</span></h2>
            <p className="section-subtitle">
              Programs and initiatives that are transforming communities
            </p>
          </div>

          <div className="initiatives-grid">
            {initiatives.map((initiative, index) => (
              <div className="initiative-card" key={index}>
                <div className="initiative-icon">{initiative.icon}</div>
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
                <div className="initiative-impact">
                  <span>Impact: </span>
                  <strong>{initiative.impact}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Map */}
      <section className="impact-map-section">
        <div className="container">
          <div className="impact-content">
            <h2>Our Reach Across India</h2>
            <p>We're making a difference in 15 states and 50+ districts</p>
            <div className="impact-stats">
              <div className="impact-stat">
                <h3>15</h3>
                <p>States</p>
              </div>
              <div className="impact-stat">
                <h3>50+</h3>
                <p>Districts</p>
              </div>
              <div className="impact-stat">
                <h3>100+</h3>
                <p>Partner Schools</p>
              </div>
              <div className="impact-stat">
                <h3>10k+</h3>
                <p>Students Impacted</p>
              </div>
            </div>
          </div>
          <div className="impact-map">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="India map"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="community-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Partner With Us</h2>
            <p>Join us in our mission to transform education across India</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Become a Partner</button>
              <button className="btn btn-outline">Volunteer with Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;