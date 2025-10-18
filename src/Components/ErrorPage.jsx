import React from 'react';
import '../Components/ErrorPage.css'; // CSS file wahi rahegi

const ErrorPage = () => {
  
  // Yeh function tab ko band karne ki koshish karega
  const handleCloseTab = () => {
    window.close();
  };

  return (
    <div className="error-body">
      <div className="error-container">
        <div className="error-code">404</div>
        <div className="error-message">Oops! Page Nahi Mila</div>
        <p className="error-description">
          Aisa lagta hai ki aap jis page ko dhoondh rahe hain, woh yahan nahi hai ya use hata diya gaya hai.
        </p>
        
        {/* Humne 'Link' ko 'button' se badal diya hai */}
        {/* onClick event par handleCloseTab function call hoga */}
        <button onClick={handleCloseTab} className="home-button">
          Yeh Tab Band Karein
        </button>
        
      </div>
    </div>
  );
};

export default ErrorPage;