import React, { useState } from "react";
import { TiThMenu } from 'react-icons/ti';
// import "../../scss/components/nav/navbar.scss";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main--nav">
        {/* 1st logo part  */}
        <div className="main--nav__logo">
          <div className="h2">
            <span>P</span>oker
            <span>P</span>lannIng
          </div>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons
              ? "main--nav__menu--link main--nav__mobile--menu--link"
              : "main--nav__menu--link"
          }
        >
          <ul>
            <li>
              <a className="body" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="body" href="/about">
                about
              </a>
            </li>
            <li>
              <a className="body" href="/contact">
                contact
              </a>
            </li>
            <li>
              <a className="body" href="#" target="/">
                <div>Logout</div>{" "}
              </a>
            </li>
          </ul>
        </div>

        {/* 3rd pages links */}
        <div className="main--nav__social--media">

          {/* hamburget menu start  */}
          <div className="main--nav__social--media__hamburger--menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <div><TiThMenu/></div>{" "}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
