import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import smile from './smile1.png'
import smile2 from './smile2.jpg'

function Smile() {
    const [linkClicked, setLinkClicked] = useState(false);
    return (
      <div className="container1">
        <h1 className="greeting">Your Smile</h1>
        <div className="image-container">
          <div className="eyeimage">
            <img src={smile} alt="Eye 1" />
          </div>
          <div className="eyeimage">
            <img src={smile2} alt="Eye 2" />
          </div>
          <div className="eyeimage">
            <img src={smile} alt="Eye 1" />
          </div>
        </div>
        <Link
              to="/her-voice"
              onClick={() => setLinkClicked(true)}
              className="nav-link"
            >
              Click To See More
            </Link>      
      </div>
    );
  };

export default Smile
