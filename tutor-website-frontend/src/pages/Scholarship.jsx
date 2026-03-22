import React, { useState } from 'react';
import { FaGraduationCap, FaClock, FaRupeeSign, FaCheckCircle, FaFileAlt, FaCalendarAlt, FaUsers, FaTrophy } from 'react-icons/fa';
import './Scholarship.css';

const Scholarship = () => {
  const [activeTab, setActiveTab] = useState('details');

  const benefits = [
    '100% Tuition Fee Coverage',
    'Monthly Stipend for Books',
    'Mentorship from Industry Experts',
    'Free Access to Premium Courses',
    'Career Counseling Sessions',
    'Internship Opportunities'
  ];

  const eligibility = [
    'Family income less than ₹5 LPA',
    'Minimum 75% in previous class',
    'Indian citizenship',
    'Age between 14-25 years',
    'First-generation learner preference'
  ];

  const timeline = [
    { event: 'Application Start', date: 'March 1, 2024' },
    { event: 'Application Deadline', date: 'April 15, 2024' },
    { event: 'Entrance Test', date: 'April 25, 2024' },
    { event: 'Interview Round', date: 'May 5-10, 2024' },
    { event: 'Results Announcement', date: 'May 20, 2024' },
    { event: 'Program Commencement', date: 'June 15, 2024' }
  ];

  return (
    <div className="scholarship-page">
      {/* Hero Section */}
      <section className="scholarship-hero">
        <div className="container">
          <div className="scholarship-hero-content">
            <span className="hero-tag">Limited Seats Available</span>
            <h1 className="hero-title">
              NKS <span className="gradient-text">Scholarship</span> Program
            </h1>
            <p className="hero-subtitle">
              Empowering deserving students with quality education through 
              financial support and mentorship
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Apply Now</button>
              <button className="btn btn-secondary">Check Eligibility</button>
            </div>
          </div>
          
          <div className="scholarship-stats">
            <div className="stat-card">
              <FaUsers className="stat-icon" />
              <div className="stat-info">
                <span className="stat-value">500+</span>
                <span className="stat-label">Applications Received</span>
              </div>
            </div>
            <div className="stat-card">
              <FaTrophy className="stat-icon" />
              <div className="stat-info">
                <span className="stat-value">50+</span>
                <span className="stat-label">Scholars Awarded</span>
              </div>
            </div>
            <div className="stat-card">
              <FaGraduationCap className="stat-icon" />
              <div className="stat-info">
                <span className="stat-value">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Info Tabs */}
      <section className="program-info">
        <div className="container">
          <div className="info-tabs">
            <button 
              className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              Program Details
            </button>
            <button 
              className={`tab-btn ${activeTab === 'eligibility' ? 'active' : ''}`}
              onClick={() => setActiveTab('eligibility')}
            >
              Eligibility Criteria
            </button>
            <button 
              className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
              onClick={() => setActiveTab('timeline')}
            >
              Important Dates
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'details' && (
              <div className="program-details">
                <h2>About the Scholarship Program</h2>
                <p>
                  The NKS Scholarship Program is a comprehensive initiative designed to 
                  identify and nurture talented students from economically weaker sections. 
                  We provide complete financial support along with mentorship to ensure 
                  holistic development.
                </p>
                
                <h3>Benefits Include:</h3>
                <div className="benefits-grid">
                  {benefits.map((benefit, index) => (
                    <div className="benefit-item" key={index}>
                      <FaCheckCircle className="benefit-icon" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="program-highlight">
                  <div className="highlight-card">
                    <FaClock className="highlight-icon" />
                    <h4>Program Duration</h4>
                    <p>2 Years (with possible extension)</p>
                  </div>
                  <div className="highlight-card">
                    <FaRupeeSign className="highlight-icon" />
                    <h4>Total Value</h4>
                    <p>Up to ₹5,00,000</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'eligibility' && (
              <div className="eligibility-criteria">
                <h2>Who Can Apply?</h2>
                <div className="criteria-list">
                  {eligibility.map((item, index) => (
                    <div className="criteria-item" key={index}>
                      <div className="criteria-number">{index + 1}</div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>

                <div className="income-criteria-card">
                  <h3>Income Criteria</h3>
                  <p>Annual family income should be less than ₹5,00,000</p>
                  <div className="income-slider">
                    <div className="slider-track">
                      <div className="slider-fill" style={{width: '60%'}}></div>
                    </div>
                    <span>Income: ₹3,00,000 - ₹5,00,000</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="timeline-section">
                <h2>Important Dates</h2>
                <div className="timeline">
                  {timeline.map((item, index) => (
                    <div className="timeline-item" key={index}>
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4>{item.event}</h4>
                        <p>{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="application-form-section">
        <div className="container">
          <div className="form-header">
            <h2>Apply for Scholarship</h2>
            <p>Fill out the form below to start your application</p>
          </div>

          <form className="scholarship-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="form-group">
                <label>Date of Birth *</label>
                <input type="date" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Current Class/Grade *</label>
                <select>
                  <option>Select Class</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                  <option>Class 11</option>
                  <option>Class 12</option>
                </select>
              </div>
              <div className="form-group">
                <label>Percentage/GPA *</label>
                <input type="number" step="0.01" placeholder="Enter your percentage" />
              </div>
            </div>

            <div className="form-group">
              <label>Family Annual Income *</label>
              <select>
                <option>Select Income Range</option>
                <option>Less than ₹2,00,000</option>
                <option>₹2,00,000 - ₹3,00,000</option>
                <option>₹3,00,000 - ₹4,00,000</option>
                <option>₹4,00,000 - ₹5,00,000</option>
              </select>
            </div>

            <div className="form-group">
              <label>Why do you deserve this scholarship? *</label>
              <textarea rows="5" placeholder="Tell us about your achievements, goals, and why you need this scholarship"></textarea>
            </div>

            <div className="form-group file-upload">
              <label>Upload Documents *</label>
              <div className="upload-area">
                <FaFileAlt className="upload-icon" />
                <p>Drag & drop files or <span>browse</span></p>
                <small>Upload: Marksheets, Income Certificate, ID Proof</small>
              </div>
            </div>

            <div className="form-checkbox">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I confirm that all information provided is true and correct</label>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">Submit Application</button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I apply if my family income is above ₹5 LPA?</h4>
              <p>Unfortunately, the scholarship is only for students with family income less than ₹5 LPA. However, we have other programs you might be eligible for.</p>
            </div>
            <div className="faq-item">
              <h4>Is the entrance test compulsory?</h4>
              <p>Yes, all applicants must appear for the entrance test to be considered for the scholarship.</p>
            </div>
            <div className="faq-item">
              <h4>What documents are required?</h4>
              <p>You'll need previous year marksheets, income certificate, Aadhar card, and passport size photographs.</p>
            </div>
            <div className="faq-item">
              <h4>Can I reapply if not selected?</h4>
              <p>Yes, you can reapply in the next cycle. We encourage you to strengthen your application.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Scholarship;