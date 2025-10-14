
import React from 'react';
import './HeroSection.css'; 
import { useScrollToTop } from "../hooks/useScrollToTop";

const HeroSection = () => {
  useScrollToTop();

  return (
    <section id='home' className="hero-section">
      
      <div className="hero-content-wrapper">
        <h2 className="hero-new-subtitle">Welcome to</h2>
        <h1 className="hero-new-title">Grand Virsa</h1>
        <p className="hero-new-tagline">Where Flavor Meets Passion</p>
      </div>

      <div className="hero-presented-by">
        <p>Presented by <strong>Grand Virsa</strong></p>
      </div>
    </section>
  );
};

export default HeroSection;