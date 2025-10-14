import React from 'react';
import './SpecialOffers.css';

const SpecialOffers = () => {
  return (
    <section id="menu" className="offers-section">
      <div className="offers-container">
        
        {/* --- Left Side: Static Image (No Slider) --- */}
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
            <li className="offer-item">
              <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384696/breakfast_rx3zbu.png" alt="Breakfast" className="offer-thumb" />
              <div className="offer-details">
                <h4>GRAND BREAKFAST</h4>
                <p>Fried eggs, fried bacon, toast, fresh tomato salad, cup of coffee or tea</p>
              </div>
              <div className="offer-price">$15</div>
            </li>
            <li className="offer-item">
              <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/c_crop,ar_1:1/v1760434929/Untitled_design_2_wq6pm6.png" alt="Lunch" className="offer-thumb" />
              <div className="offer-details">
                <h4>GRAND LUNCH</h4>
                <p>Warm chicken wings, portobello mushrooms, fresh mozzarella, coffee or tea</p>
              </div>
              <div className="offer-price">$22</div>
            </li>
            <li className="offer-item">
              <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384694/dinner_btc5fk.png" alt="Dinner" className="offer-thumb" />
              <div className="offer-details">
                <h4>GRAND DINNER</h4>
                <p>Grilled Beef steak, roasted red potatoes with rosemary, mushrooms sauce, wine</p>
              </div>
              <div className="offer-price">$28</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
