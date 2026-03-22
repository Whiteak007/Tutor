import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',      // Changed to match input names
    user_email: '',     // Changed to match input names
    user_phone: '',     // Changed to match input names
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Replace these with your actual EmailJS credentials
    emailjs
      .sendForm(
        "service_qwrdaba",  // Replace with your EmailJS Service ID
        "template_roa92df",  // Replace with your EmailJS Template ID
        form.current,
        "oZMQkEXOzvMr22T0k"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitted(true);
          // Reset form data
          setFormData({
            user_name: '',
            user_email: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          setIsSubmitting(false);
          setError('Failed to send message. Please try again.');
          console.error("Error sending message:", error);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="info-title">Get in Touch</h2>
            <p className="info-description">
              Have questions about our tutoring services? We're here to help!
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+91 9264109039</p>
                  <p>Mon-Sat, 9am to 7pm</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>nksimpacteducation@gmail.com</p>
                  <p>support@tutorfinder.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>Office</h4>
                  <p>Bhagwanpur Chowk, Muzaffarpur</p>
                  <p>842 001, (Bihar) India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <h2 className="form-title">Send us a Message</h2>

                {error && <div className="error-message">{error}</div>}

                <div className="form-group">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name *"
                    value={formData.user_name}      // Changed from formData.name
                    onChange={handleChange}
                    required
                  />
                </div>
                

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email *"
                      value={formData.user_email}    // Changed from formData.email
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      id = "subject"
                      name="subject"
                      placeholder="Your Phone"
                      value={formData.subject}    // Changed from formData.phone
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7164.612236807968!2d85.3517525924667!3d26.12156010851003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed110029accbd7%3A0x7a2c249041e2f9eb!2sBhagwanpur%20Golambar!5e0!3m2!1sen!2sin!4v1773505063793!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="location-map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;