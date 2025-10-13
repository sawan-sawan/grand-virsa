
import React from 'react';
import './SpecialOffers.css';

const SpecialOffers = () => {
  return (
    <section id="menu" className="offers-section">
      <div className="offers-container">
        <div className="offers-image-collage">
          <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384703/menuimgs_1_aiddt0.jpg" alt="Stir Fry" />
          <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384700/menuimgs_2_am4p0n.jpg" alt="Braised Meat" />
          <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384703/menuimgs_3_cbz2j7.jpg" alt="Coffee Beans" />
          <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384702/menuimgs_4_heymfi.jpg" alt="Pepper Steak" />
        </div>

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
              <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384697/lunch_gixjiy.png" alt="Lunch" className="offer-thumb" />
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