import React from 'react';
import './Header.css';
import userPhoto from "../img/profile.jpg";

function Header() {
  return (
    <div className="header-container">
      {/* <img src="../img/profile.jpg" alt="Your Name" className="header-image" /> */}
      <img src={userPhoto} alt="uchinarupower" className="header-image" />
      <div className="header-info">
        <div className="nickname">UCHIKAWA Keisuke a.k.a uchinarupower</div>
        <div className="details">M1 | Tokyo Institute of Technology</div>
        <div className="details">Ohue Lab</div>
      </div>
    </div>
  );
}

export default Header;
