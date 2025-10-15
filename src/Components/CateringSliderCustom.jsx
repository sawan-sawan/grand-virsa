import React, { useEffect, useRef, useState } from 'react';
import './CateringSliderCustom.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useScrollToTop } from "../hooks/useScrollToTop";

// Aap events ka data yahan aasani se badal sakte hain
const cateringEvents = [
  {
    title: 'Grand Weddings',
    description: 'Aapke khaas din ke liye shaahi khaane ka anubhav, jise aapke mehman hamesha yaad rakhenge.',
    imgSrc: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760469850/wedding-catering_lqlz8r.jpg'
  },
  {
    title: 'Corporate Functions',
    description: 'Aapke business meetings, seminars, aur parties ke liye professional catering services.',
    imgSrc: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760469849/corporate-event_u9t3sa.jpg'
  },
  {
    title: 'Kitty Parties',
    description: 'Aapki social gatherings ke liye lazeez snacks aur mocktails, ek shaandaar mahaul ke saath.',
    imgSrc: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760469849/kitty-party_u5tpsh.jpg'
  },
  {
    title: 'Birthday Parties',
    description: 'Custom menu aur themed cakes ke saath jashn manayein, jo har umar ke logon ko pasand aayega.',
    imgSrc: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760469848/birthday-party_c0lq8x.jpg'
  }
];

const CateringSliderCustom = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll par section ko reveal karne ke liye animation logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Slider ke buttons ke liye scroll logic
  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * 0.8; // Slide 80% width se scroll hogi
      sliderRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };
useScrollToTop();
  return (
    <section id="catering" className="cat-slider-section" ref={sectionRef}>
      <div className={`cat-slider-container reveal-up ${isVisible ? 'active' : ''}`}>
        <div className="cat-slider-header">
          <h3 className="cat-slider-subtitle">Memorable Events</h3>
          <h2 className="cat-slider-title">OUR CATERING SERVICES</h2>
          <div className="title-dot-cat-slider"></div>
        </div>

        <div className="cat-slider-wrapper">
          <button 
            className="cat-slider-arrow cat-slider-arrow-left" 
            onClick={() => handleScroll('left')}
            aria-label="Previous Slide"
          >
            <FaChevronLeft />
          </button>
          
          <div className="cat-slider-viewport" ref={sliderRef}>
            {cateringEvents.map((event, index) => (
              <div className="cat-slider-slide" key={index}>
                <div className="cat-slider-card">
                  <img src={event.imgSrc} alt={event.title} className="cat-slider-card-img" />
                  <div className="cat-slider-card-overlay">
                    <h4 className="cat-slider-card-title">{event.title}</h4>
                    <p className="cat-slider-card-desc">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="cat-slider-arrow cat-slider-arrow-right" 
            onClick={() => handleScroll('right')}
            aria-label="Next Slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CateringSliderCustom;
