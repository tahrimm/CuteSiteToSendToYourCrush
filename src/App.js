import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./Last";
import Eyes from "./Eyes";
import Lips from "./Lips";
import Smile from "./Smile";
import "./App.css"; // Import your custom CSS file
import Voice from "./Voice";
import Last from "./Last";

function App() {
  const [linkClicked, setLinkClicked] = useState(false);

  return (
    <div className="app-container">
      {!linkClicked && (
        <div className="main">
          <h1 className="greeting">Hi, [name]</h1>
          <p className="message">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius velit
            voluptas atque neque culpa ipsum temporibus quae libero autem
            accusamus. Iste, corporis quos eius tempora nihil temporibus aut
            autem in!
          </p>
          <Link
            to="/her-eyes"
            onClick={() => setLinkClicked(true)}
            className="nav-link"
          >
            Click To See
          </Link>
        </div>
      )}
      <Routes>
        <Route path="/her-eyes" element={<Eyes />} />
        <Route path="/her-Smile" element={<Smile />} />
        <Route path="/her-voice" element={<Voice />} />
        <Route path="/her-lips" element={<Lips />} />
        <Route path="/her-ass" element={<Last />} />
      </Routes>
    </div>
  );
}

export default App;
