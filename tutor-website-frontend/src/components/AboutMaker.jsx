import React from 'react';
import './AboutMaker.css';

const AboutMaker = () => {
  const phoneNumber = "9264109039"; // Replace with your actual number
  const whatsappMsg = encodeURIComponent(
    "Hello! I'm interested in learning more about TutorFinder. Could you please share more details?"
  );

  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About the Founder</h1>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        <div className="profile-image-section">
          <img
            src="https://res.cloudinary.com/dmlcnckwl/image/upload/v1740728508/footer_iamge_tz2vyu.jpg"
            alt="Ankit Kumar - Founder"
            className="founder-img"
          />
        </div>

        <div className="profile-details">
          <h2>Nitish Kumar</h2>
          <p className="designation">Experienced School Teacher & Private Tutor</p>

          <p className="bio">
            As a dedicated teacher and private tutor, I help students from <strong>Class 1 to 12</strong>
            build strong academic foundations and confidence in their studies. With years of teaching
            experience and a passion for education, my goal is to make learning simple, engaging, and
            effective for every student. I focus on concept clarity, regular practice, and personal
            attention so that students can achieve their best results in school and competitive exams.
          </p>

          <div className="skills-tags">
            <span>Mathematics</span>
            <span>Science</span>
            <span>English</span>
            <span>Concept-Based Learning</span>
          </div>

          <div className="contact-actions">
            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn whatsapp-btn"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
              Chat on WhatsApp
            </a>

            {/* Call Button */}
            <a
              href={`tel:+${phoneNumber}`}
              className="action-btn call-btn"
            >
              <span className="phone-icon">📞</span>
              Call Me Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMaker;