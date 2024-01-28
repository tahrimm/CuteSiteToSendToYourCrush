import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import eyes1 from './eyes1.jpg';
import eyes2 from './eye2.jpg';
import eyes3 from './eyes3.webp';

const Eyes = () => {
    const [linkClicked, setLinkClicked] = useState(false);
  return (
    <div className="container1">
      <h1 className="greeting">Your Eyes</h1>
      <div className="image-container">
        <div className="eyeimage">
          <img src={eyes1} alt="Eye 1" />
        </div>
        <div className="eyeimage">
          <img src={eyes2} alt="Eye 2" />
        </div>
        <div className="eyeimage">
          <img src={eyes3} alt="Eye 3" />
        </div>
      </div>
      <Link
            to="/her-smile"
            onClick={() => setLinkClicked(true)}
            className="nav-link"
          >
            Click To See More
          </Link>      
    </div>
  );
};

export default Eyes;
