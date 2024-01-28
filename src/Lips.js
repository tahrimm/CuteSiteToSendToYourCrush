import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import eyes1 from './lips.jpeg'
import eyes2 from './lips2.jpg'
import eyes3 from './lips3.jpg'
function Lips() {
  const [linkClicked, setLinkClicked] = useState(false);
    return (
      <div className="container1">
        <h1 className="greeting">Your Lips</h1>
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
              to="/her-ass"
              onClick={() => setLinkClicked(true)}
              className="nav-link"
            >
              Click To be surprised
            </Link>      
      </div>
    );
  };


export default Lips
