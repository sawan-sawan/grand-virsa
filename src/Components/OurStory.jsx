import React, { useEffect, useRef, useState } from 'react';
import './OurStory.css';
import { IoRestaurantOutline, IoBedOutline, IoLeafOutline } from 'react-icons/io5';
import { useScrollToTop } from "../hooks/useScrollToTop";

const OurStory = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      icon: <IoRestaurantOutline />,
      title: 'Gourmet Dining',
      description:
        'Savor exquisite dishes prepared by our master chefs using fresh, locally-sourced ingredients.'
    },
    {
      icon: <IoBedOutline />,
      title: 'Luxurious Stays',
      description:
        'Relax in our elegantly designed rooms and suites, each offering stunning views and premium comfort.'
    },
    {
      icon: <IoLeafOutline />,
      title: 'Natural Serenity',
      description:
        'Escape the everyday and immerse yourself in the tranquil beauty of our lush, natural surroundings.'
    }
  ];

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
useScrollToTop();
  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="our-story-section-new"
    >
      {/* animate the inner container instead of the whole section */}
      <div className={`story-container reveal-up ${isVisible ? 'active' : ''}`}>
        {/* Left Column for the Image */}
        <div className={`story-image-wrapper slide-in`}>
          <img 
            src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760437913/Untitled_design_2_fa35km.png" 
            alt="Resort Dining View" 
            className="story-main-image" 
          />
        </div>

        {/* Right Column for the Content */}
        <div className="story-content-wrapper">
          <div className="story-header">
            <h1 className="story-main-title">Our Story</h1>
            <p className="story-subtitle">
              Discover a place where luxury meets nature, and every meal is a celebration of local tastes and culinary artistry.
            </p>
          </div>
          
          <div className="story-features-section">
            <div className="features-list">
              {features.map((feature, index) => (
                <div className="feature-item-new" key={index}>
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-text">
                    <h3 className="feature-title-new">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
