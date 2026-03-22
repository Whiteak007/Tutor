import React from 'react';
import TutorCard from './TutorCard';
import './FeaturedTutors.css';
import { useNavigate } from 'react-router-dom';
const FeaturedTutors = () => {
    const navigate = useNavigate();
  const tutors = {
    scholarship: {
      id: 1,
      name: 'Suraj Kumar',
      title: 'Scholar Faculty',
      image: 'https://img.freepik.com/premium-photo/indian-student-college-engaged-academic-work_861171-11558.jpg',
      rating: 5,
      reviews: 128,
      qualification: 'Ph.D, IIT Bombay',
      subjects: ['Mathematics', 'English'],
      city: 'Muzaffarpur',
      fees: 2500
    },
    regular: {
      id: 2,
      name: 'Sakshi Kumari',
      title: 'Certified Faculty',
      image: 'https://tse1.mm.bing.net/th/id/OIP.Vq-KJLMwhaaEEqm4WbosxwHaFb?rs=1&pid=ImgDetMain&o=7&rm=3',
      rating: 4,
      reviews: 256,
      qualification: 'M.Sc, B.Ed',
      subjects: ['Chemistry', 'Biology'],
      city: 'Muzaffarpur',
      fees: 1500
    },
    premium: {
      id: 3,
      name: 'Nitish Kumar',
      title: 'Premium Mentor',
      image: 'https://res.cloudinary.com/dmlcnckwl/image/upload/v1740728508/footer_iamge_tz2vyu.jpg',
      rating: 4.9,
      reviews: 128,
      qualification: 'Graduated, Pursuing PG',
      subjects: ['Science', 'Advanced Math'],
      city: 'Muzaffarpur',
      fees: 2000
    }
    
  };

  const handleHireClick = () => {
    navigate('/teachers');
  };

  return (
    <section className="featured-tutors">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Experts</span>
          <h2 className="section-title">
            Featured <span>Tutors</span>
          </h2>
          <p className="section-subtitle">
            Learn from the best educators in your city
          </p>
        </div>

        <div className="tutors-showcase">
          <div className="tutor-showcase-card scholarship">
            <TutorCard tutor={tutors.scholarship} type="scholarship" />
            <div className="showcase-action">
              <span>Hire Under Scholarship Plan</span>
              <button className="btn btn-outline" onClick={handleHireClick}>Hire as Regular Teacher →</button>
            </div>
          </div>

          <div className="tutor-showcase-card regular">
            <TutorCard tutor={tutors.regular} type="regular" />
            <div className="showcase-action">
              <span>Hire as Regular Teacher</span>
              <button className="btn btn-outline" onClick={handleHireClick}>View Details →</button>
            </div>
          </div>

          <div className="tutor-showcase-card premium">
            <TutorCard tutor={tutors.premium} type="premium" />
            <div className="showcase-action">
              <span>Hire Premium Mentor</span>
              <button className="btn btn-outline" onClick={handleHireClick}>Book Now →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTutors;