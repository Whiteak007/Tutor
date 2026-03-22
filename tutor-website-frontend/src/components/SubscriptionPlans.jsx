import React from 'react';
import { FaCheckCircle, FaClock, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import './SubscriptionPlans.css';

const SubscriptionPlans = () => {
  const plans = [
    {
      name: 'Basic Plan',
      description: 'Group Classes',
      price: '1200',
      period: 'mo',
      features: [
        'Background Checks',
        'Tut-I Growth Mentors',
        'Weekly Tests',
        'Study Material'
      ],
      icon: <FaUserGraduate />,
      color: 'basic',
      popular: false
    },
    {
      name: 'Standard Plan',
      description: 'Group + Doubts Support',
      price: '2000',
      period: 'mo',
      features: [
        'Scholarship Support',
        'Tu-11 Portal Access',
        '24/7 Doubt Clearing',
        'Parent-Teacher Meetings',
        'Performance Reports'
      ],
      icon: <FaClock />,
      color: 'standard',
      popular: true
    },
    {
      name: 'Premium Plan',
      description: '1-1 Personal Mentor',
      price: '5000',
      period: 'mo',
      features: [
        'Personal Mentor',
        'Customized Learning Plan',
        'Daily Progress Tracking',
        'Career Counseling',
        'Unlimited Doubt Sessions',
        'Premium Study Material'
      ],
      icon: <FaChalkboardTeacher />,
      color: 'premium',
      popular: false
    }
  ];

  return (
    <section className="subscription-plans">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">
            Subscription <span>Plans</span>
          </h2>
          <p className="section-subtitle">
            Choose the perfect plan for your learning journey
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div className={`plan-card ${plan.color} ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              
              <div className="plan-header">
                <div className="plan-icon">{plan.icon}</div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="plan-price">
                <span className="currency">₹</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheckCircle className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn btn-${plan.color}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;