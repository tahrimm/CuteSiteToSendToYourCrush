import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import eyes1 from './laugh.avif'
import eyes2 from './laugh2.avif'
function Voice() {
    const [linkClicked, setLinkClicked] = useState(false);
    return (
      <div className="container1">
        <h1 className="greeting">Your Voice</h1>
        <div className="image-container">
          <div className="eyeimage">
            <img src={eyes1} alt="Eye 1" />
          </div>
          <div className="eyeimage">
            <img src={eyes2} alt="Eye 2" />
          </div>
          <div className="eyeimage">
            <img src={eyes1} alt="Eye 3" />
          </div>
        </div>
        <Link
              to="/her-lips"
              onClick={() => setLinkClicked(true)}
              className="nav-link"
            >
              Click To See More
            </Link>      
      </div>
    );
  };
export default Voice
