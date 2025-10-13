import React from 'react';
import './OurStory.css';
import { FaArrowRight } from 'react-icons/fa';

const OurStory = () => {
  return (
    <section id='our-story' className="our-story-section-new">
      <div className="story-left-column">
        <div className="story-top-accent"></div>
        <h1 className="story-main-title">Our Story</h1>
        <div className="story-dots">
          {[...Array(9)].map((_, i) => <span key={i}></span>)}
        </div>
        <div className="mission-statement">
          <h2><span className="icon-circle"><FaArrowRight /></span>Mission Statement</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="story-features">
          <div className="feature-item">
            <div className="feature-title"><span className="icon-circle"><FaArrowRight /></span>Family Recipes</div>
            <span className="feature-number">100</span>
          </div>
          <div className="feature-item">
            <div className="feature-title"><span className="icon-circle"><FaArrowRight /></span>Farm-to-Table</div>
            <span className="feature-number">50</span>
          </div>
          <div className="feature-item">
            <div className="feature-title"><span className="icon-circle"><FaArrowRight /></span>Cultural Heritage</div>
            <span className="feature-number">20</span>
          </div>
        </div>
      </div>
      <div className="story-right-column">
        <div className="story-image-collage">
          <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384702/storyimg1_dtyrwo.png" alt="Restaurant Interior" className="collage-img-1" />
          <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384692/storyimg2_g3oyg4.png" alt="Chef with burger" className="collage-img-2" />
          <div className="story-bottom-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;