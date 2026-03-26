import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaStar, FaMapMarkerAlt, FaGraduationCap, FaBook, FaChalkboardTeacher, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { teachersData } from '../data/teachersData';
import './Teachers.css';

const Teachers = () => {
    // WhatsApp Handler Function
    const handleWhatsApp = (teacherName) => {
        const phoneNumber = "9264109039";
        const message = encodeURIComponent(`Hello, I'm interested in booking a session with ${teacherName} via your platform.`);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    // Search state
    const [searchQuery, setSearchQuery] = useState('');
    
    const [filters, setFilters] = useState({
        subject: '',
        city: '',
        experience: '',
        type: '',
        rating: ''
    });

    const [view, setView] = useState('grid');
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // Number of teachers per page

    // Filter and search logic
    const filteredTeachers = useMemo(() => {
        let filtered = [...teachersData];

        // Search functionality
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim();
            filtered = filtered.filter(teacher => 
                teacher.name.toLowerCase().includes(query) ||
                teacher.title.toLowerCase().includes(query) ||
                teacher.subjects.some(subject => subject.toLowerCase().includes(query)) ||
                teacher.qualification.toLowerCase().includes(query) ||
                teacher.city.toLowerCase().includes(query)
            );
        }

        // Subject filter
        if (filters.subject) {
            filtered = filtered.filter(teacher =>
                teacher.subjects.some(subject => 
                    subject.toLowerCase() === filters.subject.toLowerCase()
                )
            );
        }

        // City filter
        if (filters.city) {
            filtered = filtered.filter(teacher =>
                teacher.city.toLowerCase().includes(filters.city.toLowerCase())
            );
        }

        // Experience filter
        if (filters.experience) {
            filtered = filtered.filter(teacher => {
                const exp = teacher.experience;
                switch (filters.experience) {
                    case '0-3':
                        return exp >= 0 && exp <= 3;
                    case '3-5':
                        return exp > 3 && exp <= 5;
                    case '5-10':
                        return exp > 5 && exp <= 10;
                    case '10+':
                        return exp > 10;
                    default:
                        return true;
                }
            });
        }

        // Teacher type filter
        if (filters.type) {
            filtered = filtered.filter(teacher => teacher.type === filters.type);
        }

        // Rating filter
        if (filters.rating) {
            filtered = filtered.filter(teacher => teacher.rating >= parseFloat(filters.rating));
        }

        return filtered;
    }, [teachersData, searchQuery, filters]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTeachers = filteredTeachers.slice(indexOfFirstItem, indexOfLastItem);

    // Reset to first page when filters or search changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, filters]);

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

    const clearAllFilters = () => {
        setFilters({
            subject: '',
            city: '',
            experience: '',
            type: '',
            rating: ''
        });
        setSearchQuery('');
        setCurrentPage(1);
    };

    const hasActiveFilters = () => {
        return Object.values(filters).some(value => value !== '') || searchQuery !== '';
    };

    // Pagination handlers
    const goToPage = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        
        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, startPage + 4);
            
            if (startPage > 1) {
                pageNumbers.push(1);
                if (startPage > 2) pageNumbers.push('...');
            }
            
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }
            
            if (endPage < totalPages) {
                if (endPage < totalPages - 1) pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        }
        
        return pageNumbers;
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
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button 
                                    className="clear-search"
                                    onClick={() => setSearchQuery('')}
                                >
                                    <FaTimes />
                                </button>
                            )}
                            <button className="btn btn-primary" onClick={() => {}}>
                                Search
                            </button>
                        </div>

                        <button 
                            className="filter-toggle mobile-only"
                            onClick={() => setShowMobileFilters(!showMobileFilters)}
                        >
                            <FaFilter /> Filters
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="teachers-content">
                <div className="container">
                    <div className="content-wrapper">
                        {/* Filters Sidebar */}
                        <aside className={`filters-sidebar ${showMobileFilters ? 'mobile-open' : ''}`}>
                            <div className="filters-header mobile-only">
                                <h3>Filters</h3>
                                <button onClick={() => setShowMobileFilters(false)}>
                                    <FaTimes />
                                </button>
                            </div>
                            
                            <div className="filter-group">
                                <label>Subject</label>
                                <select value={filters.subject} onChange={(e) => setFilters({ ...filters, subject: e.target.value })}>
                                    <option value="">All Subjects</option>
                                    <option value="mathematics">Mathematics</option>
                                    <option value="physics">Physics</option>
                                    <option value="chemistry">Chemistry</option>
                                    <option value="biology">Biology</option>
                                    <option value="english">English</option>
                                    <option value="music">Music</option>
                                    <option value="dance">Dance</option>
                                    <option value="coding">Coding</option>
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

                            <button className="btn btn-secondary clear-filters" onClick={clearAllFilters}>
                                Clear All Filters
                            </button>
                        </aside>

                        {/* Teachers List */}
                        <div className="teachers-list">
                            <div className="list-header">
                                <p>{filteredTeachers.length} teacher{filteredTeachers.length !== 1 ? 's' : ''} found</p>
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

                            {/* Active Filters Display */}
                            {hasActiveFilters() && (
                                <div className="active-filters">
                                    <span>Active Filters:</span>
                                    {searchQuery && (
                                        <span className="filter-tag">
                                            Search: "{searchQuery}"
                                            <button onClick={() => setSearchQuery('')}>
                                                <FaTimes />
                                            </button>
                                        </span>
                                    )}
                                    {filters.subject && (
                                        <span className="filter-tag">
                                            Subject: {filters.subject}
                                            <button onClick={() => setFilters({ ...filters, subject: '' })}>
                                                <FaTimes />
                                            </button>
                                        </span>
                                    )}
                                    {filters.city && (
                                        <span className="filter-tag">
                                            City: {filters.city}
                                            <button onClick={() => setFilters({ ...filters, city: '' })}>
                                                <FaTimes />
                                            </button>
                                        </span>
                                    )}
                                    {filters.type && (
                                        <span className="filter-tag">
                                            Type: {filters.type === 'premium' ? 'Premium' : filters.type === 'scholarship' ? 'Scholarship' : 'Regular'}
                                            <button onClick={() => setFilters({ ...filters, type: '' })}>
                                                <FaTimes />
                                            </button>
                                        </span>
                                    )}
                                    {filters.experience && (
                                        <span className="filter-tag">
                                            Experience: {filters.experience} years
                                            <button onClick={() => setFilters({ ...filters, experience: '' })}>
                                                <FaTimes />
                                            </button>
                                        </span>
                                    )}
                                    {filters.rating && (
                                        <span className="filter-tag">
                                            Rating: {filters.rating}+
                                            <button onClick={() => setFilters({ ...filters, rating: '' })}>
                                                <FaTimes />
                                            </button>
                                        </span>
                                    )}
                                    <button className="clear-all" onClick={clearAllFilters}>
                                        Clear All
                                    </button>
                                </div>
                            )}

                            {currentTeachers.length === 0 ? (
                                <div className="no-results">
                                    <h3>No teachers found</h3>
                                    <p>Try adjusting your search or filters to find more teachers.</p>
                                    <button className="btn btn-primary" onClick={clearAllFilters}>
                                        Clear All Filters
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className={`teachers-grid ${view}`}>
                                        {currentTeachers.map(teacher => {
                                            const badge = getBadgeColor(teacher.type);
                                            return (
                                                <div className={`teacher-card ${teacher.type}`} key={teacher.id}>
                                                    {teacher.type === 'premium' && (
                                                        <div className="premium-tag">
                                                            <FaChalkboardTeacher />
                                                            Premium
                                                        </div>
                                                    )}
                                                    
                                                    <div className="teacher-card-header">
                                                        <div className="teacher-image">
                                                            <img src={teacher.image} alt={teacher.name} />
                                                            <div className="teacher-badge" style={{ background: badge.bg, color: badge.color }}>
                                                                {badge.text}
                                                            </div>
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
                                                                <span className="rating-count">({teacher.reviews} reviews)</span>
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
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Enhanced Pagination */}
                                    {totalPages > 1 && (
                                        <div className="pagination-container">
                                            <div className="pagination-info">
                                                Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredTeachers.length)} of {filteredTeachers.length} teachers
                                            </div>
                                            <div className="pagination">
                                                <button 
                                                    className={`page-nav ${currentPage === 1 ? 'disabled' : ''}`}
                                                    onClick={goToPreviousPage}
                                                    disabled={currentPage === 1}
                                                >
                                                    <FaChevronLeft />
                                                </button>
                                                
                                                {getPageNumbers().map((page, index) => (
                                                    page === '...' ? (
                                                        <span key={`dots-${index}`} className="dots">...</span>
                                                    ) : (
                                                        <button
                                                            key={page}
                                                            className={`page-btn ${currentPage === page ? 'active' : ''}`}
                                                            onClick={() => goToPage(page)}
                                                        >
                                                            {page}
                                                        </button>
                                                    )
                                                ))}
                                                
                                                <button 
                                                    className={`page-nav ${currentPage === totalPages ? 'disabled' : ''}`}
                                                    onClick={goToNextPage}
                                                    disabled={currentPage === totalPages}
                                                >
                                                    <FaChevronRight />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teachers;