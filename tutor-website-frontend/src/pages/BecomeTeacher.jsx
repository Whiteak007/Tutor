import React, { useState } from 'react';
import { FaCheckCircle, FaUpload, FaGraduationCap, FaBriefcase, FaBook, FaRupeeSign } from 'react-icons/fa';
import './BecomeTeacher.css';

const BecomeTeacher = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
    city: '',
    pincode: '',
    
    // Step 2: Professional Info
    qualification: '',
    specialization: '',
    experience: '',
    subjects: '',
    classes: '',
    teachingMode: [],
    preferredCity: '',
    
    // Step 3: Documents
    resume: null,
    certificates: [],
    idProof: null,
    
    // Step 4: Bank Details
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    panNumber: ''
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { number: 1, title: 'Personal Info', icon: '👤' },
    { number: 2, title: 'Professional', icon: '📚' },
    { number: 3, title: 'Documents', icon: '📄' },
    { number: 4, title: 'Bank Details', icon: '💰' }
  ];

  const validateStep = () => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = 'Full name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
      if (!formData.city) newErrors.city = 'City is required';
    }
    
    if (step === 2) {
      if (!formData.qualification) newErrors.qualification = 'Qualification is required';
      if (!formData.experience) newErrors.experience = 'Experience is required';
      if (!formData.subjects) newErrors.subjects = 'Subjects are required';
    }
    
    if (step === 3) {
      if (!formData.resume) newErrors.resume = 'Resume is required';
      if (formData.certificates.length === 0) newErrors.certificates = 'At least one certificate is required';
      if (!formData.idProof) newErrors.idProof = 'ID proof is required';
    }
    
    if (step === 4) {
      if (!formData.accountNumber) newErrors.accountNumber = 'Account number is required';
      if (!formData.ifscCode) newErrors.ifscCode = 'IFSC code is required';
      if (!formData.panNumber) newErrors.panNumber = 'PAN number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      // Submit form
      console.log('Form submitted:', formData);
      setStep(5); // Success step
    }
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [field]: file });
  };

  const handleMultiFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, certificates: [...formData.certificates, ...files] });
  };

  if (step === 5) {
    return (
      <div className="become-teacher-page">
        <div className="success-container">
          <div className="success-card">
            <div className="success-icon">✓</div>
            <h2>Application Submitted Successfully!</h2>
            <p>
              Thank you for applying to join NKS Impact Education. Our team will review your 
              application and get back to you within 3-5 business days.
            </p>
            <div className="success-details">
              <h4>What happens next?</h4>
              <ul>
                <li>✅ Application review by our team</li>
                <li>📞 Phone interview (if shortlisted)</li>
                <li>🎥 Demo class session</li>
                <li>📝 Final selection and onboarding</li>
              </ul>
            </div>
            <button className="btn btn-primary" onClick={() => window.location.href = '/'}>
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="become-teacher-page">
      {/* Hero Section */}
      <section className="become-teacher-hero">
        <div className="container">
          <h1 className="hero-title">Teach With NKS</h1>
          <p className="hero-subtitle">
            Join our network and grow your teaching career!
          </p>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Monthly Salary + Performance Bonus</h3>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📜</div>
              <h3>Experience Certificate</h3>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎓</div>
              <h3>Teacher Training Program</h3>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>Selection & Reward</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="process-steps">
        <div className="container">
          <div className="steps-timeline">
            {steps.map((s) => (
              <div 
                key={s.number} 
                className={`step-item ${s.number === step ? 'active' : ''} ${s.number < step ? 'completed' : ''}`}
              >
                <div className="step-number">
                  {s.number < step ? '✓' : s.icon}
                </div>
                <span className="step-title">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="application-form">
        <div className="container">
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div className="form-step">
                  <h2>Personal Information</h2>
                  
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className={errors.fullName ? 'error' : ''}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={errors.email ? 'error' : ''}
                        placeholder="Enter your email"
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className={errors.phone ? 'error' : ''}
                        placeholder="Enter 10-digit mobile number"
                      />
                      {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({...formData, dob: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label>Gender</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      rows="3"
                      placeholder="Enter your full address"
                    ></textarea>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>City *</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className={errors.city ? 'error' : ''}
                        placeholder="Enter your city"
                      />
                      {errors.city && <span className="error-message">{errors.city}</span>}
                    </div>

                    <div className="form-group">
                      <label>Pincode</label>
                      <input
                        type="text"
                        value={formData.pincode}
                        onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                        placeholder="Enter pincode"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Professional Info */}
              {step === 2 && (
                <div className="form-step">
                  <h2>Professional Information</h2>
                  
                  <div className="form-group">
                    <label>Highest Qualification *</label>
                    <input
                      type="text"
                      value={formData.qualification}
                      onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                      className={errors.qualification ? 'error' : ''}
                      placeholder="e.g., M.Sc Mathematics, B.Ed"
                    />
                    {errors.qualification && <span className="error-message">{errors.qualification}</span>}
                  </div>

                  <div className="form-group">
                    <label>Specialization</label>
                    <input
                      type="text"
                      value={formData.specialization}
                      onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                      placeholder="e.g., Pure Mathematics, Quantum Physics"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Years of Experience *</label>
                      <input
                        type="number"
                        value={formData.experience}
                        onChange={(e) => setFormData({...formData, experience: e.target.value})}
                        className={errors.experience ? 'error' : ''}
                        placeholder="e.g., 5"
                        min="0"
                      />
                      {errors.experience && <span className="error-message">{errors.experience}</span>}
                    </div>

                    <div className="form-group">
                      <label>Subjects You Teach *</label>
                      <input
                        type="text"
                        value={formData.subjects}
                        onChange={(e) => setFormData({...formData, subjects: e.target.value})}
                        className={errors.subjects ? 'error' : ''}
                        placeholder="e.g., Mathematics, Physics (comma separated)"
                      />
                      {errors.subjects && <span className="error-message">{errors.subjects}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Classes You Can Teach</label>
                    <select
                      multiple
                      value={formData.classes}
                      onChange={(e) => setFormData({...formData, classes: Array.from(e.target.selectedOptions, option => option.value)})}
                    >
                      <option value="6-8">Class 6-8</option>
                      <option value="9-10">Class 9-10</option>
                      <option value="11-12">Class 11-12</option>
                      <option value="college">College Level</option>
                      <option value="competitive">Competitive Exams</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Teaching Mode</label>
                    <div className="checkbox-group">
                      <label>
                        <input
                          type="checkbox"
                          value="online"
                          checked={formData.teachingMode.includes('online')}
                          onChange={(e) => {
                            const value = e.target.value;
                            setFormData({
                              ...formData,
                              teachingMode: e.target.checked 
                                ? [...formData.teachingMode, value]
                                : formData.teachingMode.filter(mode => mode !== value)
                            });
                          }}
                        />
                        Online
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="offline"
                          checked={formData.teachingMode.includes('offline')}
                          onChange={(e) => {
                            const value = e.target.value;
                            setFormData({
                              ...formData,
                              teachingMode: e.target.checked 
                                ? [...formData.teachingMode, value]
                                : formData.teachingMode.filter(mode => mode !== value)
                            });
                          }}
                        />
                        Offline
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Preferred City for Teaching</label>
                    <input
                      type="text"
                      value={formData.preferredCity}
                      onChange={(e) => setFormData({...formData, preferredCity: e.target.value})}
                      placeholder="Enter preferred city"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Documents */}
              {step === 3 && (
                <div className="form-step">
                  <h2>Upload Documents</h2>
                  
                  <div className="form-group file-upload">
                    <label>Resume/CV *</label>
                    <div className={`upload-area ${errors.resume ? 'error' : ''}`}>
                      <FaUpload className="upload-icon" />
                      <p>Drag & drop or <span>browse</span> your resume</p>
                      <small>Supported: PDF, DOC, DOCX (Max 5MB)</small>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileChange(e, 'resume')}
                      />
                    </div>
                    {formData.resume && (
                      <div className="file-info">
                        <FaCheckCircle className="file-success" />
                        <span>{formData.resume.name}</span>
                      </div>
                    )}
                    {errors.resume && <span className="error-message">{errors.resume}</span>}
                  </div>

                  <div className="form-group file-upload">
                    <label>Educational Certificates *</label>
                    <div className={`upload-area ${errors.certificates ? 'error' : ''}`}>
                      <FaUpload className="upload-icon" />
                      <p>Drag & drop or <span>browse</span> certificates</p>
                      <small>Upload all your degree certificates (Max 10 files)</small>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleMultiFileChange}
                      />
                    </div>
                    {formData.certificates.length > 0 && (
                      <div className="file-list">
                        {formData.certificates.map((file, index) => (
                          <div key={index} className="file-item">
                            <FaCheckCircle className="file-success" />
                            <span>{file.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {errors.certificates && <span className="error-message">{errors.certificates}</span>}
                  </div>

                  <div className="form-group file-upload">
                    <label>ID Proof (Aadhar/PAN/Passport) *</label>
                    <div className={`upload-area ${errors.idProof ? 'error' : ''}`}>
                      <FaUpload className="upload-icon" />
                      <p>Drag & drop or <span>browse</span> ID proof</p>
                      <small>Supported: JPG, PNG, PDF (Max 2MB)</small>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={(e) => handleFileChange(e, 'idProof')}
                      />
                    </div>
                    {formData.idProof && (
                      <div className="file-info">
                        <FaCheckCircle className="file-success" />
                        <span>{formData.idProof.name}</span>
                      </div>
                    )}
                    {errors.idProof && <span className="error-message">{errors.idProof}</span>}
                  </div>
                </div>
              )}

              {/* Step 4: Bank Details */}
              {step === 4 && (
                <div className="form-step">
                  <h2>Bank Details</h2>
                  
                  <div className="form-group">
                    <label>Account Holder Name</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      disabled
                    />
                  </div>

                  <div className="form-group">
                    <label>Account Number *</label>
                    <input
                      type="text"
                      value={formData.accountNumber}
                      onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
                      className={errors.accountNumber ? 'error' : ''}
                      placeholder="Enter account number"
                    />
                    {errors.accountNumber && <span className="error-message">{errors.accountNumber}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>IFSC Code *</label>
                      <input
                        type="text"
                        value={formData.ifscCode}
                        onChange={(e) => setFormData({...formData, ifscCode: e.target.value})}
                        className={errors.ifscCode ? 'error' : ''}
                        placeholder="e.g., SBIN0001234"
                      />
                      {errors.ifscCode && <span className="error-message">{errors.ifscCode}</span>}
                    </div>

                    <div className="form-group">
                      <label>Bank Name</label>
                      <input
                        type="text"
                        value={formData.bankName}
                        onChange={(e) => setFormData({...formData, bankName: e.target.value})}
                        placeholder="Enter bank name"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>PAN Number *</label>
                    <input
                      type="text"
                      value={formData.panNumber}
                      onChange={(e) => setFormData({...formData, panNumber: e.target.value})}
                      className={errors.panNumber ? 'error' : ''}
                      placeholder="e.g., ABCDE1234F"
                    />
                    {errors.panNumber && <span className="error-message">{errors.panNumber}</span>}
                  </div>

                  <div className="form-checkbox">
                    <input type="checkbox" id="verify" />
                    <label htmlFor="verify">
                      I confirm that the bank details provided are correct and I am the account holder
                    </label>
                  </div>
                </div>
              )}

              {/* Form Navigation */}
              <div className="form-navigation">
                {step > 1 && (
                  <button type="button" className="btn btn-secondary" onClick={handlePrevious}>
                    Previous
                  </button>
                )}
                
                {step < 4 ? (
                  <button type="button" className="btn btn-primary" onClick={handleNext}>
                    Next Step
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="why-join">
        <div className="container">
          <h2 className="section-title">Why Join NKS?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-number">01</div>
              <h3>Competitive Salary</h3>
              <p>Best in industry compensation with performance bonuses</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">02</div>
              <h3>Professional Growth</h3>
              <p>Regular training and development programs</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">03</div>
              <h3>Flexible Schedule</h3>
              <p>Work-life balance with flexible teaching hours</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">04</div>
              <h3>Recognition</h3>
              <p>Awards and recognition for outstanding teachers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeTeacher;