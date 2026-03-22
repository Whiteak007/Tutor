import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Import Pages
import Home from './pages/Home';
import Scholarship from './pages/Scholarship';
import Teachers from './pages/Teachers';
import TeacherDetail from './pages/TeacherDetail';
import BecomeTeacher from './pages/BecomeTeacher';
import TeacherTraining from './pages/TeacherTraining';
import Community from './pages/Community';
import Contact from './pages/Contact';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teacher/:id" element={<TeacherDetail />} />
            <Route path="/become-teacher" element={<BecomeTeacher />} />
            <Route path="/teacher-training" element={<TeacherTraining />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;