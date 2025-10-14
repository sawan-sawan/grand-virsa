import React, { useEffect, useRef, useState } from 'react';
import './FeastSection.css';

const FeastSection = () => {
  // State aur Ref hooks animation ke liye
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver ka logic jo scroll ko detect karega
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animation ek baar hi chalega
        }
      },
      { threshold: 0.3 } // Section ka 30% dikhne par animate hoga
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // Section par ref lagaya gaya hai
    <section className="feast-section" ref={sectionRef}>
      
      {/* Content container par dynamic classes lagayi gayi hain */}
      <div className={`feast-content reveal-up ${isVisible ? 'active' : ''}`}>
        <h3 className="feast-subtitle">Exquisite cuisine</h3>
        <h2 className="feast-title">FEAST FOR YOUR SENSES</h2>
        <div className="feast-divider">
          <span className="feast-line"></span>
          <img 
            src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384699/spoonicon_icpoms.png" 
            alt="Feast Icon" 
            className="feast-icon-img" 
          />
          <span className="feast-line"></span>
        </div>
      </div>
    </section>
  );
};

export default FeastSection;