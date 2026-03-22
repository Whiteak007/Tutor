import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaGraduationCap, FaBook, FaChalkboardTeacher } from 'react-icons/fa';
import './TutorCard.css';

const TutorCard = ({ tutor, type }) => {
  const getBadgeColor = (type) => {
    switch(type) {
      case 'scholarship':
        return { bg: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B', text: 'Scholarship Teacher' };
      case 'premium':
        return { bg: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6', text: 'Premium Mentor' };
      default:
        return { bg: 'rgba(16, 185, 129, 0.1)', color: '#10B981', text: 'Regular Teacher' };
    }
  };

  const badge = getBadgeColor(type);

  return (
    <div className="tutor-card-wrapper">
      <div className="tutor-card">
        <div className="tutor-card-header">
          <div className="tutor-image">
            <img src={tutor.image} alt={tutor.name} />
            <div className="tutor-badge" style={{ background: badge.bg, color: badge.color }}>
              {badge.text}
            </div>
          </div>
          
          <div className="tutor-info">
            <h3 className="tutor-name">{tutor.name}</h3>
            <p className="tutor-title">{tutor.title}</p>
            
            <div className="tutor-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < tutor.rating ? 'star-filled' : 'star-empty'} />
                ))}
              </div>
              <span className="rating-count">({tutor.reviews} reviews)</span>
            </div>
          </div>
        </div>

        <div className="tutor-details">
          <div className="detail-item">
            <FaGraduationCap className="detail-icon" />
            <span>{tutor.qualification}</span>
          </div>
          <div className="detail-item">
            <FaBook className="detail-icon" />
            <span>{tutor.subjects.join(', ')}</span>
          </div>
          <div className="detail-item">
            <FaMapMarkerAlt className="detail-icon" />
            <span>{tutor.city}</span>
          </div>
        </div>

        <div className="tutor-footer">
          <div className="tutor-fees">
            <span className="fees-label">Starting from</span>
            <span className="fees-amount">₹{tutor.fees}/hr</span>
          </div>
          
          <div className="tutor-actions">
            <Link to={`/teacher/${tutor.id}`} className="btn-view">
              View Profile <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {type === 'premium' && (
        <div className="premium-badge">
          <FaChalkboardTeacher />
          <span>Premium Mentor</span>
        </div>
      )}
    </div>
  );
};

export default TutorCard;