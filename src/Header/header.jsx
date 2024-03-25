import React, { useState } from "react";
import "./headerstyles.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <header className="navbar">
      <nav className="nav-title">
        <a href="#">Anonime</a>
      </nav>
      <nav className="box">
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">List anime</a>
            </li>
          </ul>
        </nav>
        <nav className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </nav>
      </nav>
    </header>
  );
}

export default Header;
