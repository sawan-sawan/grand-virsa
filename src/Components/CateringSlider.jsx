
import React from 'react';
import Slider from 'react-slick';
import './CateringSlider.css';

const CateringSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    customPaging: i => (
      <div className="slick-dot-custom"></div>
    )
  };

  const slidesData = [
    {
      image: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384693/catering_1_cgkipx.jpg',
      subtitle: 'Catering',
      title: 'BUSINESS EVENTS',
      points: ['Meetings', 'Team buildings', 'Corporate parties'],
      description: 'Planning an important business meeting with your partners? Impress them with lunch in Royal Plate. Royal Plate covers everything from business lunches, to custom team building programs and corporate parties.'
    },
    {
      image: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384696/catering_2_pdd9dm.jpg',
      subtitle: 'Catering',
      title: 'PRIVATE EVENTS',
      points: ['Birthdays', 'Family reunion', 'Or just because'],
      description: 'Whether you are celebrating your birthday, have a family reunion or something else, we’ll make it enjoying and memorable. Our experts have years of experience in party planning and will make sure it is a delicious success.'
    },
    {
      image: 'https://res.cloudinary.com/dnyv7wabr/image/upload/v1760384699/catering_3_bxl4yc.jpg',
      subtitle: 'Catering',
      title: 'SPECIAL OCCASIONS',
      points: ['Weddings', 'Anniversaires', 'Baby showers'],
      description: 'Exquisite & creative cousine, friendly atmosphere and highly professional staff will make your special day beautiful & enjoyable. You can select from couple of pre-made menus for every occasion that should please many different palates.'
    }
  ];

  return (
    <section id='catering' className="catering-section">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slide-item">
            <div className="slide-image-container">
              <img src={slide.image} alt={slide.title} />
            </div>
            <div className="slide-content-container">
              <h3 className="slide-subtitle">{slide.subtitle}</h3>
              <h2 className="slide-title">{slide.title}</h2>
              <ul className="slide-points">
                {slide.points.map((point, pIndex) => (
                  <li key={pIndex}>{point}</li>
                ))}
              </ul>
              <p className="slide-description">{slide.description}</p>
              <a href="#" className="slide-link">MORE DETAILS</a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CateringSlider;