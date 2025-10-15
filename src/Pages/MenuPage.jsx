import React from 'react';
import { Link } from 'react-router-dom'; // 'Back to Home' ke liye
import './MenuPage.css';
import { IoArrowBack } from "react-icons/io5";
import { useScrollToTop } from "../hooks/useScrollToTop";


// Sample menu data - Veg only, expanded categories
const menuData = [
    {
        category: 'Appetizers',
        items: [
            { name: 'Paneer Tikka', price: '₹280', desc: 'Marinated cottage cheese grilled to perfection.', img: '/public/img/pneertika.png' },
            { name: 'Vegetable Spring Roll', price: '₹200', desc: 'Crispy rolls stuffed with mixed veggies.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760525169/34dc97db0fa8c512134b823431d95714_b6jeqm.png' },
            { name: 'Corn Chaat', price: '₹180', desc: 'Sweet corn tossed with spices and lemon.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760525495/mixed-salad-with-avocado-tomatoes-sweet-corn_ylrppq.jpg' },
        ]
    },
    {
        category: 'Main Course',
        items: [
            { name: 'Dal Makhani', price: '₹350', desc: 'Creamy black lentils cooked overnight.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760525585/freshly-cooked-vegetarian-pumpkin-soup-with-cilantro-garnish-generated-by-ai_vge2su.jpg' },
            { name: 'Shahi Paneer', price: '₹380', desc: 'Cottage cheese in a rich, creamy tomato gravy.', img: '/public/img/paner.jpg' },
            { name: 'Veg Kofta', price: '₹360', desc: 'Vegetable balls in creamy cashew gravy.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760526003/view-ready-eat-delicious-meal-go_v9dk9o.jpg' },
            { name: 'Mixed Veg Curry', price: '₹330', desc: 'Seasonal vegetables cooked with aromatic spices.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760526128/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_pjjw41.jpg' },
            { name: 'Paneer Butter Masala', price: '₹400', desc: 'Paneer cubes in buttery tomato gravy.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760526262/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_1_idpmii.jpg' },
        ]
    },
    {
        category: 'Breads',
        items: [
            { name: 'Garlic Naan', price: '₹80', desc: 'Soft leavened bread with garlic and butter.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760526344/pakistani-food-wooden-board-top-view_flhue2.jpg' },
            { name: 'Lachha Paratha', price: '₹70', desc: 'Crispy, multi-layered whole wheat bread.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760526487/609c8fcab82b7dffebaf4041b456ad7c_msn0y4.jpg' },
            { name: 'Butter Naan', price: '₹60', desc: 'Soft naan brushed with butter.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760526623/Homemade-Naan-Bread-Restaurant-Style-Vegan-16-1400x2100_bu3f3i.jpg' },
        ]
    },
    {
        category: 'Salads',
        items: [
            { name: 'Green Salad', price: '₹150', desc: 'Fresh greens with olive oil dressing.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760526730/erasebg-transformed_1_qddbd6.png' },
            { name: 'Fruit Salad', price: '₹160', desc: 'Seasonal fruits served fresh.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760526873/Pngtree_healthy_rainbow_fruit_salad_with_19675368_d0pqev.png' },
            { name: 'Greek Salad', price: '₹170', desc: 'Veggies with feta cheese and olives.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465238/greek-salad.jpg' },
        ]
    },
    {
        category: 'Drinks',
        items: [
            { name: 'Fresh Lime Soda', price: '₹90', desc: 'Refreshing lime soda with mint.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465239/fresh-lime-soda.jpg' },
            { name: 'Mango Lassi', price: '₹120', desc: 'Sweet mango yogurt drink.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465240/mango-lassi.jpg' },
            { name: 'Masala Chai', price: '₹60', desc: 'Traditional spiced tea.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465241/masala-chai.jpg' },
        ]
    },
    {
        category: 'Desserts',
        items: [
            { name: 'Gulab Jamun', price: '₹120', desc: 'Soft milk dumplings in sugar syrup.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465242/gulab-jamun.jpg' },
            { name: 'Rasmalai', price: '₹150', desc: 'Soft paneer patties in sweetened milk.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465243/rasmalai.jpg' },
            { name: 'Chocolate Brownie', price: '₹180', desc: 'Rich chocolate brownie with nuts.', img: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760465244/chocolate-brownie.jpg' },
        ]
    },
];


const MenuPage = () => {
    useScrollToTop();

    return (
       <>
       
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
       
       </>
    );
};

export default MenuPage;