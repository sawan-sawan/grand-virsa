import React, { useEffect, useRef, useState } from 'react';
import './SpecialOffers.css';

const SpecialOffers = () => {
  // OurStory component se state aur ref logic ko copy kiya gaya hai
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // OurStory se same useEffect hook yahan daal diya hai
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animation ek baar hi chalega
        }
      },
      { threshold: 0.2 } // Same trigger point as OurStory
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // section par ref lagaya gaya hai
    <section id="menu" className="offers-section" ref={sectionRef}>
      
      {/* Container par naye animation ki classes lagayi gayi hain */}
      <div className={`offers-container reveal-up ${isVisible ? 'active' : ''}`}>
        
        {/* --- Left Side: Static Image --- */}
        <div className="offer-main-image-wrapper">
          <img 
            src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760441248/Untitled_design_5_rsc0be.png" 
            alt="Special Offer" 
            className="static-offer-image"
          />
        </div>

        {/* --- Right Side: Offers Content --- */}
        <div className="offers-content">
          <h3 className="offers-subtitle">From the menu</h3>
          <h2 className="offers-title">SPECIAL OFFERS</h2>
          <div className="title-dot"></div>

          <ul className="offers-list">
            {/* Ab '.offer-item' CSS ke through animate honge */}
            <li className="offer-item">
              <img 
                src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384696/breakfast_rx3zbu.png" 
                alt="Breakfast" 
                className="offer-thumb" 
              />
              <div className="offer-details">
                <h4>GRAND BREAKFAST</h4>
                <p>Fried eggs, crispy bacon, butter toast, fresh tomato salad, with coffee or tea.</p>
              </div>
              <div className="offer-price">₹249</div>
            </li>

            <li className="offer-item">
              <img 
                src="https://res.cloudinary.com/dnyv7wabr/image/upload/c_crop,ar_1:1/v1760434929/Untitled_design_2_wq6pm6.png" 
                alt="Lunch" 
                className="offer-thumb" 
              />
              <div className="offer-details">
                <h4>GRAND LUNCH</h4>
                <p>Warm chicken wings, portobello mushrooms, fresh mozzarella, with coffee or tea.</p>
              </div>
              <div className="offer-price">₹449</div>
            </li>

            <li className="offer-item">
              <img 
                src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384694/dinner_btc5fk.png" 
                alt="Dinner" 
                className="offer-thumb" 
              />
              <div className="offer-details">
                <h4>GRAND DINNER</h4>
                <p>Grilled beef steak, roasted red potatoes with rosemary, mushroom sauce, and wine.</p>
              </div>
              <div className="offer-price">₹699</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;