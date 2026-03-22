import React from 'react';
import { FaCertificate, FaChalkboardTeacher, FaUsers, FaClock, FaCheckCircle, FaBook, FaVideo, FaComments } from 'react-icons/fa';
import './TeacherTraining.css';

const TeacherTraining = () => {
  const modules = [
    {
      icon: <FaChalkboardTeacher />,
      title: 'Teaching Methodology',
      duration: '20 hours',
      topics: ['Modern teaching techniques', 'Lesson planning', 'Student engagement', 'Classroom management']
    },
    {
      icon: <FaBook />,
      title: 'Subject Expertise',
      duration: '30 hours',
      topics: ['Deep subject knowledge', 'Curriculum understanding', 'Exam preparation strategies', 'Doubt clearing techniques']
    },
    {
      icon: <FaVideo />,
      title: 'Digital Teaching',
      duration: '15 hours',
      topics: ['Online teaching tools', 'Virtual classroom setup', 'Digital content creation', 'Interactive whiteboard usage']
    },
    {
      icon: <FaComments />,
      title: 'Communication Skills',
      duration: '10 hours',
      topics: ['Effective communication', 'Parent-teacher meetings', 'Student counseling', 'Presentation skills']
    }
  ];

  const benefits = [
    'Internationally recognized certificate',
    'Lifetime access to learning materials',
    'One-on-one mentorship',
    'Job placement assistance',
    'Flexible learning schedule',
    'Practical teaching assignments'
  ];

  return (
    <div className="teacher-training-page">
      {/* Hero Section */}
      <section className="training-hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">NKS Teacher Training Program</span>
            <h1 className="hero-title">
              Transform Your <span className="gradient-text">Teaching Career</span>
            </h1>
            <p className="hero-subtitle">
              Comprehensive teacher training program designed to enhance your skills 
              and prepare you for modern classroom challenges
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Enroll Now</button>
              <button className="btn btn-outline">Download Brochure</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="training-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <FaUsers />
              </div>
              <div className="stat-content">
                <h3>500+</h3>
                <p>Trained Teachers</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <FaCertificate />
              </div>
              <div className="stat-content">
                <h3>100%</h3>
                <p>Certification Rate</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <FaClock />
              </div>
              <div className="stat-content">
                <h3>75 Hours</h3>
                <p>Training Duration</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <FaChalkboardTeacher />
              </div>
              <div className="stat-content">
                <h3>4.9/5</h3>
                <p>Program Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="program-overview">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Program Structure</span>
            <h2 className="section-title">What You'll <span>Learn</span></h2>
            <p className="section-subtitle">
              A comprehensive curriculum designed by education experts
            </p>
          </div>

          <div className="modules-grid">
            {modules.map((module, index) => (
              <div className="module-card" key={index}>
                <div className="module-icon">{module.icon}</div>
                <h3>{module.title}</h3>
                <span className="module-duration">{module.duration}</span>
                <ul>
                  {module.topics.map((topic, i) => (
                    <li key={i}>
                      <FaCheckCircle className="check-icon" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-wrapper">
            <div className="benefits-image">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Teacher training"
              />
            </div>
            <div className="benefits-content">
              <span className="benefits-tag">Why Choose Us</span>
              <h2>Program Benefits</h2>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <FaCheckCircle className="benefit-check" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary">Start Your Journey</button>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="certification-section">
        <div className="container">
          <div className="certification-grid">
            <div className="certification-content">
              <span className="cert-tag">Certification</span>
              <h2>Get Certified & Boost Your Career</h2>
              <p>
                Upon successful completion of the program, you'll receive a 
                nationally recognized certificate that validates your teaching skills.
              </p>
              <ul>
                <li>✓ Government recognized certification</li>
                <li>✓ Lifetime validity</li>
                <li>✓ Digital & printed certificate</li>
                <li>✓ Shareable on LinkedIn</li>
              </ul>
            </div>
            <div className="certification-card">
              <div className="certificate-preview">
                <div className="certificate-badge">NKS</div>
                <h3>Certificate of Completion</h3>
                <p>This is to certify that</p>
                <div className="cert-name">[Your Name]</div>
                <p>has successfully completed</p>
                <div className="cert-program">Teacher Training Program</div>
                <div className="cert-date">2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="training-faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Who can apply for this program?</h4>
              <p>Anyone with a graduation degree and passion for teaching can apply. Freshers and experienced teachers both are welcome.</p>
            </div>
            <div className="faq-item">
              <h4>Is this program online or offline?</h4>
              <p>The program is hybrid - you can attend online sessions or visit our training centers in major cities.</p>
            </div>
            <div className="faq-item">
              <h4>What is the duration of the program?</h4>
              <p>The program spans 75 hours over 8 weeks, with flexible timing options.</p>
            </div>
            <div className="faq-item">
              <h4>Do you provide job placement?</h4>
              <p>Yes, we have tie-ups with 200+ schools and provide 100% placement assistance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherTraining;