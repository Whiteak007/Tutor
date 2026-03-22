import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaRupeeSign, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { teachersData } from '../data/teachersData'; // Import shared data
import './TeacherDetail.css';

const TeacherDetails = () => {
    const { id } = useParams();
    const [tutor, setTutor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showContact, setShowContact] = useState(false);

    useEffect(() => {
        // Find the teacher with the matching ID
        // Convert id to number since URL params are strings
        const teacherId = parseInt(id);
        const foundTeacher = teachersData.find(teacher => teacher.id === teacherId);
        
        // Simulate API call with setTimeout
        setTimeout(() => {
            if (foundTeacher) {
                setTutor(foundTeacher);
            } else {
                setTutor(null);
            }
            setLoading(false);
        }, 500); // Reduced timeout for better UX
    }, [id]); // Re-run effect when id changes

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner">Loading tutor details...</div>
            </div>
        );
    }

    if (!tutor) {
        return (
            <div className="error-container">
                <h2>Tutor not found</h2>
                <p>The teacher you're looking for doesn't exist.</p>
            </div>
        );
    }

    const phoneNumber = "9264109039";
    const whatsappMsg = encodeURIComponent(
        `Hello! I'm interested in learning more about ${tutor.name}. Could you please share more details?`
    );

    return (
        <div className="tutor-detail-page">
            <div className="container">
                <div className="tutor-profile">
                    <div className="profile-header">
                        <div className="profile-image">
                            <img src={tutor.image} alt={tutor.name} />
                        </div>
                        <div className="profile-header-info">
                            <h1 className="profile-name">{tutor.name}</h1>
                            <p className="profile-title">{tutor.title}</p>
                            <div className="profile-rating">
                                <FaStar className="star-icon" />
                                <span className="rating-value">{tutor.rating}</span>
                                <span className="rating-count">({tutor.reviews} reviews)</span>
                            </div>
                            <div className="profile-qualification">
                                <FaGraduationCap className="icon" />
                                <span>{tutor.qualification}</span>
                            </div>
                            <div className="profile-location">
                                <FaMapMarkerAlt className="icon" />
                                <span>{tutor.city}</span>
                            </div>
                            <div className="profile-experience">
                                <FaBriefcase className="icon" />
                                <span>{tutor.experience} years of teaching experience</span>
                            </div>
                        </div>
                    </div>

                    <div className="profile-content">
                        <div className="profile-main">
                            <section className="profile-section">
                                <h2 className="section-title">About Me</h2>
                                <p className="about-text">{tutor.about}</p>
                            </section>

                            <section className="profile-section">
                                <h2 className="section-title">Education</h2>
                                <ul className="education-list">
                                    {tutor.education.map((edu, index) => (
                                        <li key={index}>{edu}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="profile-section">
                                <h2 className="section-title">Achievements</h2>
                                <ul className="achievements-list">
                                    {tutor.achievements.map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </section>

                            <section className="profile-section">
                                <h2 className="section-title">Subjects Taught</h2>
                                <div className="subjects-list">
                                    {tutor.subjects.map((subject, index) => (
                                        <span key={index} className="subject-badge">{subject}</span>
                                    ))}
                                </div>
                            </section>

                            <section className="profile-section">
                                <h2 className="section-title">Teaching Mode</h2>
                                <div className="teaching-mode">
                                    {tutor.teachingMode.map((mode, index) => (
                                        <span key={index} className="mode-badge">{mode}</span>
                                    ))}
                                </div>
                            </section>

                            <section className="profile-section">
                                <h2 className="section-title">Availability</h2>
                                <p className="availability-text">{tutor.availability}</p>
                            </section>
                        </div>

                        <div className="profile-sidebar">
                            <div className="fees-card">
                                <div className="fees-amount">
                                    <FaRupeeSign className="rupee-icon" />
                                    <span className="amount">{tutor.fees}</span>
                                    <span className="per-hour">/hour</span>
                                </div>

                                {!showContact ? (
                                    <button
                                        className="btn btn-primary contact-btn"
                                        onClick={() => setShowContact(true)}
                                    >
                                        Show Contact Details
                                    </button>
                                ) : (
                                    <div className="contact-details">
                                        <div className="contact-item">
                                            <span className="contact-label">Phone:</span>
                                            <a href={`tel:${tutor.phone}`} className="contact-value">{tutor.phone}</a>
                                        </div>
                                        <div className="contact-item">
                                            <span className="contact-label">Email:</span>
                                            <a href={`mailto:${tutor.email}`} className="contact-value">{tutor.email}</a>
                                        </div>
                                    </div>
                                )}

                                <div className="action-buttons">
                                    <a
                                        href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary schedule-btn"
                                    >
                                        Schedule Demo Class
                                    </a>
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