import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FaStar, FaMapMarkerAlt, FaRupeeSign, FaGraduationCap, 
  FaBriefcase, FaChalkboardTeacher, FaClock, FaUsers, 
  FaAward, FaBookOpen, FaLaptop, FaMobileAlt, FaWhatsapp,
  FaEnvelope, FaPhoneAlt, FaArrowLeft, FaCalendarCheck,
  FaCheckCircle, FaQuoteLeft
} from 'react-icons/fa';
import { teachersData } from '../data/teachersData';
import './TeacherDetail.css';

const TeacherDetails = () => {
    const { id } = useParams();
    const [tutor, setTutor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showContact, setShowContact] = useState(false);
    const [activeTab, setActiveTab] = useState('about');

    useEffect(() => {
        const teacherId = parseInt(id);
        const foundTeacher = teachersData.find(teacher => teacher.id === teacherId);
        
        setTimeout(() => {
            if (foundTeacher) {
                setTutor(foundTeacher);
            } else {
                setTutor(null);
            }
            setLoading(false);
        }, 500);
    }, [id]);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Loading teacher profile...</p>
                </div>
            </div>
        );
    }

    if (!tutor) {
        return (
            <div className="error-container">
                <div className="error-content">
                    <div className="error-icon">😕</div>
                    <h2>Teacher Not Found</h2>
                    <p>The teacher you're looking for doesn't exist or has been removed.</p>
                    <Link to="/teachers" className="btn btn-primary">
                        <FaArrowLeft /> Back to Teachers
                    </Link>
                </div>
            </div>
        );
    }

    const phoneNumber = "9264109039";
    const whatsappMsg = encodeURIComponent(
        `Hello! I'm interested in learning more about ${tutor.name}. Could you please share more details?`
    );

    const getTypeBadge = (type) => {
        switch(type) {
            case 'premium':
                return { class: 'type-premium', text: 'Premium Mentor' };
            case 'scholarship':
                return { class: 'type-scholarship', text: 'Scholarship Teacher' };
            default:
                return { class: 'type-regular', text: 'Regular Teacher' };
        }
    };

    const typeBadge = getTypeBadge(tutor.type);

    return (
        <div className="teacher-detail-page">
            {/* Back Button */}
            <div className="container">
                <Link to="/teachers" className="back-button">
                    <FaArrowLeft /> Back to Teachers
                </Link>
            </div>

            <div className="container">
                {/* Hero Section */}
                <div className="teacher-hero">
                    <div className="hero-badge">
                        <span className={`type-badge ${typeBadge.class}`}>{typeBadge.text}</span>
                        {tutor.type === 'premium' && <span className="featured-badge">⭐ Featured</span>}
                    </div>
                    
                    <div className="hero-content">
                        <div className="teacher-avatar">
                            <img src={tutor.image} alt={tutor.name} />
                            <div className="avatar-badge">
                                <FaChalkboardTeacher />
                            </div>
                        </div>
                        
                        <div className="teacher-info">
                            <h1 className="teacher-name">{tutor.name}</h1>
                            <p className="teacher-title">{tutor.title}</p>
                            
                            <div className="teacher-stats-row">
                                <div className="stat-item">
                                    <FaStar className="star-icon" />
                                    <span className="stat-value">{tutor.rating}</span>
                                    <span className="stat-label">({tutor.reviews} reviews)</span>
                                </div>
                                <div className="stat-divider"></div>
                                <div className="stat-item">
                                    <FaUsers className="stat-icon" />
                                    <span className="stat-value">{tutor.students}+</span>
                                    <span className="stat-label">Students</span>
                                </div>
                                <div className="stat-divider"></div>
                                <div className="stat-item">
                                    <FaBriefcase className="stat-icon" />
                                    <span className="stat-value">{tutor.experience}+</span>
                                    <span className="stat-label">Years Exp</span>
                                </div>
                            </div>
                            
                            <div className="teacher-meta">
                                <div className="meta-item">
                                    <FaGraduationCap />
                                    <span>{tutor.qualification}</span>
                                </div>
                                <div className="meta-item">
                                    <FaMapMarkerAlt />
                                    <span>{tutor.city}</span>
                                </div>
                                <div className="meta-item">
                                    <FaClock />
                                    <span>{tutor.availability}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="teacher-price-card">
                            <div className="price-label">Starting from</div>
                            <div className="price-amount">
                                <FaRupeeSign className="rupee-icon" />
                                <span>{tutor.fees}</span>
                                <span className="price-period">/hour</span>
                            </div>
                            <button 
                                className="btn-contact-now"
                                onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${whatsappMsg}`, '_blank')}
                            >
                                <FaWhatsapp /> Contact Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="teacher-main-content">
                    {/* Tabs Navigation */}
                    <div className="tabs-container">
                        <button 
                            className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
                            onClick={() => setActiveTab('about')}
                        >
                            <FaBookOpen /> About
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                            onClick={() => setActiveTab('education')}
                        >
                            <FaGraduationCap /> Education
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
                            onClick={() => setActiveTab('achievements')}
                        >
                            <FaAward /> Achievements
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'teaching' ? 'active' : ''}`}
                            onClick={() => setActiveTab('teaching')}
                        >
                            <FaLaptop /> Teaching
                        </button>
                    </div>

                    <div className="content-grid">
                        {/* Left Column - Main Content */}
                        <div className="main-content-area">
                            {activeTab === 'about' && (
                                <div className="content-card">
                                    <div className="quote-icon">
                                        <FaQuoteLeft />
                                    </div>
                                    <p className="about-text">{tutor.about}</p>
                                </div>
                            )}

                            {activeTab === 'education' && (
                                <div className="content-card">
                                    <h3 className="card-title">Educational Background</h3>
                                    <div className="timeline">
                                        {tutor.education.map((edu, index) => (
                                            <div key={index} className="timeline-item">
                                                <div className="timeline-dot"></div>
                                                <div className="timeline-content">
                                                    <p>{edu}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'achievements' && (
                                <div className="content-card">
                                    <h3 className="card-title">Achievements & Recognition</h3>
                                    <div className="achievements-grid">
                                        {tutor.achievements.map((achievement, index) => (
                                            <div key={index} className="achievement-item">
                                                <FaCheckCircle className="achievement-icon" />
                                                <span>{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'teaching' && (
                                <div className="content-card">
                                    <h3 className="card-title">Teaching Approach</h3>
                                    <div className="teaching-info">
                                        <div className="info-section">
                                            <h4>Subjects Taught</h4>
                                            <div className="subject-tags">
                                                {tutor.subjects.map((subject, index) => (
                                                    <span key={index} className="subject-tag">{subject}</span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="info-section">
                                            <h4>Teaching Mode</h4>
                                            <div className="mode-tags">
                                                {tutor.teachingMode.map((mode, index) => (
                                                    <span key={index} className="mode-tag">
                                                        {mode === 'Online' ? <FaLaptop /> : <FaMobileAlt />}
                                                        {mode}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="info-section">
                                            <h4>Availability</h4>
                                            <div className="availability-info">
                                                <FaClock className="clock-icon" />
                                                <span>{tutor.availability}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Contact Card */}
                        <div className="sidebar-area">
                            <div className="contact-card">
                                <h3 className="contact-title">Get in Touch</h3>
                                
                                {!showContact ? (
                                    <button
                                        className="btn-show-contact"
                                        onClick={() => setShowContact(true)}
                                    >
                                        Show Contact Details
                                    </button>
                                ) : (
                                    <div className="contact-info">
                                        <div className="contact-row">
                                            <FaPhoneAlt className="contact-icon" />
                                            <a href={`tel:${tutor.phone}`} className="contact-link">{tutor.phone}</a>
                                        </div>
                                        <div className="contact-row">
                                            <FaEnvelope className="contact-icon" />
                                            <a href={`mailto:${tutor.email}`} className="contact-link">{tutor.email}</a>
                                        </div>
                                    </div>
                                )}
                                
                                <div className="action-buttons">
                                    <a
                                        href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-whatsapp"
                                    >
                                        <FaWhatsapp /> WhatsApp
                                    </a>
                                    <button className="btn-schedule">
                                        <FaCalendarCheck /> Schedule Demo
                                    </button>
                                </div>
                                
                                <div className="trust-badge">
                                    <FaCheckCircle />
                                    <span>Verified Teacher</span>
                                </div>
                            </div>
                            
                            {/* Quick Stats */}
                            <div className="stats-card">
                                <h4>Quick Stats</h4>
                                <div className="stats-list">
                                    <div className="stats-item">
                                        <span className="stats-label">Total Students</span>
                                        <span className="stats-number">{tutor.students}+</span>
                                    </div>
                                    <div className="stats-item">
                                        <span className="stats-label">Years Experience</span>
                                        <span className="stats-number">{tutor.experience}+</span>
                                    </div>
                                    <div className="stats-item">
                                        <span className="stats-label">Reviews</span>
                                        <span className="stats-number">{tutor.reviews}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherDetails;