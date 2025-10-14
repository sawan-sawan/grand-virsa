import React from 'react';
import { Link } from 'react-router-dom'; // 'Back to Home' ke liye
import './MenuPage.css';
import { IoArrowBack } from "react-icons/io5";
import { useScrollToTop } from "../hooks/useScrollToTop";

// Sample menu data - Aap ise badal sakte hain
const menuData = [
    {
        category: 'Appetizers',
        items: [
            { name: 'Paneer Tikka', price: '₹280', desc: 'Marinated cottage cheese grilled to perfection.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465227/paneer-tikka_g6d8pl.jpg' },
            { name: 'Hara Bhara Kebab', price: '₹250', desc: 'Spinach and vegetable patties, deep-fried.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465225/hara-bhara-kebab_c6kffh.jpg' },
        ]
    },
    {
        category: 'Main Course',
        items: [
            { name: 'Dal Makhani', price: '₹350', desc: 'Creamy black lentils cooked overnight.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465223/dal-makhani_y4j7sa.jpg' },
            { name: 'Shahi Paneer', price: '₹380', desc: 'Cottage cheese in a rich, creamy tomato gravy.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465229/shahi-paneer_w2z9vj.jpg' },
            { name: 'Butter Chicken', price: '₹450', desc: 'Tender chicken in a velvety tomato sauce.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465221/butter-chicken_f9a8bq.jpg' },
        ]
    },
    {
        category: 'Breads',
        items: [
            { name: 'Garlic Naan', price: '₹80', desc: 'Soft leavened bread with garlic and butter.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465224/garlic-naan_y1xmqp.jpg' },
            { name: 'Lachha Paratha', price: '₹70', desc: 'Crispy, multi-layered whole wheat bread.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465226/lachha-paratha_qxq0zw.jpg' },
        ]
    },
];

const MenuPage = () => {
    useScrollToTop();

    return (
        <div className="menu-page-section">
            <div className="menu-page-container">
                <div className="menu-header">
                    <h3 className="menu-subtitle">Taste the Tradition</h3>
                    <h2 className="menu-title">OUR FULL MENU</h2>
                    <div className="title-dot-menu"></div>
                </div>

                {menuData.map((category, index) => (
                    <div key={index} className="menu-category">
                        <h2 className="category-title">{category.category}</h2>
                        <div className="menu-grid">
                            {category.items.map((item, itemIndex) => (
                                <div className="menu-card" key={itemIndex}>
                                    <img src={item.img} alt={item.name} className="menu-card-img" />
                                    <div className="menu-card-body">
                                        <div className="menu-card-header">
                                            <h4 className="menu-item-name">{item.name}</h4>
                                            <p className="menu-item-price">{item.price}</p>
                                        </div>
                                        <p className="menu-item-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="back-to-home-container">
                    <Link to="/" className="back-to-home-btn">
                        <IoArrowBack className="back-icon" /> Back to Menu
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default MenuPage;