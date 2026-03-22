import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaStar, FaMapMarkerAlt, FaGraduationCap, FaBook, FaChalkboardTeacher } from 'react-icons/fa';
import { teachersData } from '../data/teachersData'; // Import shared data
import './Teachers.css';

const Teachers = () => {
    // WhatsApp Handler Function
    const handleWhatsApp = (teacherName) => {
        const phoneNumber = "9264109039";
        const message = encodeURIComponent(`Hello, I'm interested in booking a session with ${teacherName} via your platform.`);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const [filters, setFilters] = useState({
        subject: '',
        city: '',
        experience: '',
        type: '',
        rating: ''
    });

    const [view, setView] = useState('grid');

    // Use the imported teachers data
    const teachers = teachersData;

    // Rest of your component remains exactly the same...
    const getBadgeColor = (type) => {
        switch (type) {
            case 'scholarship':
                return { bg: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B', text: 'Scholarship Teacher' };
            case 'premium':
                return { bg: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6', text: 'Premium Mentor' };
            default:
                return { bg: 'rgba(16, 185, 129, 0.1)', color: '#10B981', text: 'Regular Teacher' };
        }
    };

    return (
        <div className="teachers-page">
            {/* Hero Section */}
            <section className="teachers-hero">
                <div className="container">
                    <h1 className="hero-title">Find Your Perfect Teacher</h1>
                    <p className="hero-subtitle">
                        Browse through our verified teachers and find the best match for your learning needs
                    </p>

                    {/* Search Bar */}
                    <div className="search-container">
                        <div className="search-box">
                            <FaSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search by subject, teacher name, or qualification..."
                            />
                            <button className="btn btn-primary">Search</button>
                        </div>

                        {/* <button className="filter-toggle">
              <FaFilter /> Filters
            </button> */}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="teachers-content">
                <div className="container">
                    <div className="content-wrapper">
                        {/* Filters Sidebar */}
                        <aside className="filters-sidebar">
                            <h3>Filters</h3>

                            <div className="filter-group">
                                <label>Subject</label>
                                <select value={filters.subject} onChange={(e) => setFilters({ ...filters, subject: e.target.value })}>
                                    <option value="">All Subjects</option>
                                    <option value="mathematics">Mathematics</option>
                                    <option value="physics">Physics</option>
                                    <option value="chemistry">Chemistry</option>
                                    <option value="biology">Biology</option>
                                    <option value="english">English</option>
                                </select>
                            </div>

                            <div className="filter-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    placeholder="Enter city"
                                    value={filters.city}
                                    onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                                />
                            </div>

                            <div className="filter-group">
                                <label>Experience</label>
                                <select value={filters.experience} onChange={(e) => setFilters({ ...filters, experience: e.target.value })}>
                                    <option value="">Any Experience</option>
                                    <option value="0-3">0-3 years</option>
                                    <option value="3-5">3-5 years</option>
                                    <option value="5-10">5-10 years</option>
                                    <option value="10+">10+ years</option>
                                </select>
                            </div>

                            <div className="filter-group">
                                <label>Teacher Type</label>
                                <select value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
                                    <option value="">All Types</option>
                                    <option value="scholarship">Scholarship Teacher</option>
                                    <option value="regular">Regular Teacher</option>
                                    <option value="premium">Premium Mentor</option>
                                </select>
                            </div>

                            <div className="filter-group">
                                <label>Minimum Rating</label>
                                <select value={filters.rating} onChange={(e) => setFilters({ ...filters, rating: e.target.value })}>
                                    <option value="">Any Rating</option>
                                    <option value="4.5">4.5+ Stars</option>
                                    <option value="4.0">4.0+ Stars</option>
                                    <option value="3.5">3.5+ Stars</option>
                                </select>
                            </div>

                            <button className="btn btn-secondary clear-filters">
                                Clear All Filters
                            </button>
                        </aside>

                        {/* Teachers Grid */}
                        <div className="teachers-list">
                            <div className="list-header">
                                <p>{teachers.length} teachers found</p>
                                <div className="view-toggle">
                                    <button
                                        className={`view-btn ${view === 'grid' ? 'active' : ''}`}
                                        onClick={() => setView('grid')}
                                    >
                                        Grid
                                    </button>
                                    <button
                                        className={`view-btn ${view === 'list' ? 'active' : ''}`}
                                        onClick={() => setView('list')}
                                    >
                                        List
                                    </button>
                                </div>
                            </div>

                            <div className={`teachers-grid ${view}`}>
                                {teachers.map(teacher => {
                                    const badge = getBadgeColor(teacher.type);
                                    return (
                                        <div className={`teacher-card ${teacher.type}`} key={teacher.id}>
                                            <div className="teacher-card-header">
                                                <div className="teacher-image">
                                                    <img src={teacher.image} alt={teacher.name} />
                                                    {/* <div className="teacher-badge" style={{ background: badge.bg, color: badge.color }}>
                                                        {badge.text}
                                                    </div> */}
                                                </div>

                                                <div className="teacher-info">
                                                    <h3 className="teacher-name">{teacher.name}</h3>
                                                    <p className="teacher-title">{teacher.title}</p>

                                                    <div className="teacher-rating">
                                                        <div className="stars">
                                                            {[...Array(5)].map((_, i) => (
                                                                <FaStar key={i} className={i < Math.floor(teacher.rating) ? 'star-filled' : 'star-empty'} />
                                                            ))}
                                                        </div>
                                                        <span className="rating-value">{teacher.rating}</span>
                                                        <span className="rating-count">({teacher.reviews})</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="teacher-details">
                                                <div className="detail-item">
                                                    <FaGraduationCap className="detail-icon" />
                                                    <span>{teacher.qualification}</span>
                                                </div>
                                                <div className="detail-item">
                                                    <FaBook className="detail-icon" />
                                                    <span>{teacher.subjects.join(', ')}</span>
                                                </div>
                                                <div className="detail-item">
                                                    <FaMapMarkerAlt className="detail-icon" />
                                                    <span>{teacher.city}</span>
                                                </div>
                                            </div>

                                            <div className="teacher-stats">
                                                <div className="stat">
                                                    <span className="stat-value">{teacher.experience}+</span>
                                                    <span className="stat-label">Years</span>
                                                </div>
                                                <div className="stat">
                                                    <span className="stat-value">{teacher.students}+</span>
                                                    <span className="stat-label">Students</span>
                                                </div>
                                                <div className="stat">
                                                    <span className="stat-value">₹{teacher.fees}</span>
                                                    <span className="stat-label">/hour</span>
                                                </div>
                                            </div>

                                            <div className="teacher-actions">
                                                <Link to={`/teacher/${teacher.id}`} className="btn-view">
                                                    View Profile
                                                </Link>
                                                <button className="btn-contact" onClick={() => handleWhatsApp(teacher.name)}>
                                                    Contact
                                                </button>
                                            </div>

                                            {teacher.type === 'premium' && (
                                                <div className="premium-tag">
                                                    <FaChalkboardTeacher />
                                                    Premium
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Pagination */}
                            <div className="pagination">
                                <button className="page-btn active">1</button>
                                <button className="page-btn">2</button>
                                <button className="page-btn">3</button>
                                <button className="page-btn">4</button>
                                <button className="page-btn">5</button>
                                <span className="dots">...</span>
                                <button className="page-btn">10</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teachers;