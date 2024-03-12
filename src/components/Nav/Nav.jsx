
import React, { useState, useEffect } from 'react';
import myImage from './assets/logo1.png';

export default function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });


      closeMobileMenu();
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  return (




    <>
      <nav style={{ cursor: 'pointer' }}>
        <div className="nav__content">
          <div className="logo" >
            <a href="https://www.instagram.com/hyusha_clan/">
             <img src={myImage} alt="logo" />
            </a>
          </div>
          <label htmlFor="check" className="checkbox">
            <i className="fa-solid fa-bars fa-xl" onClick={toggleMobileMenu}></i>
          </label>
          <input type="checkbox" name="check" id="check" checked={isMobileMenuOpen} />
          <ul className={isMobileMenuOpen ? 'mobile-menu-open' : ''}>
            <li>
              <a onClick={() => handleNavClick('home')}>
                <i className="fa-solid fa-house-chimney"></i> About Us
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick('about')}>
                {/* <i className="fa-solid fa-wrench "></i> Tech */}
                <i class="fa-solid fa-globe"></i> Anime
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick('team')}>
                {/* <i className="fa-solid fa-people-group"></i> Team */}
                <i class="fa-solid fa-heart"></i> K POP
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick('resume')}>
                {/* <i className="fa-solid fa-file"></i> Resume */}
                <i class="fa-solid fa-music"></i> Series and Music
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick('projects')}>
                {/* <i className="fa-solid fa-gears"></i> Projects */}
                <i class="fa-solid fa-basketball"></i> Sports
              </a>
            </li>
            <li>
              <a onClick={() => handleNavClick('contact')}>
                <i className="fa-solid fa-id-badge"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
