import React from 'react';
import { Link } from 'gatsby';
import assets from "../data/assetUrls";

const Footer = ({ bgColour, honeydew }) => (
  <div>
    <div className="anotherFooterFlex">
      <Link to="/">
        <img src={assets.logo}className="footerLogo" alt="Jump to start of website" />
      </Link>
      <div className="footerIconDiv">
        <a href="https://www.instagram.com/shaibrides">
          <img src={require("../icons/insta.svg")} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/shaibrides">
          <img src={require("../icons/facebook.svg")} alt="Facebook" />
        </a>
      </div>
    </div>
    <span className="smallPrint text-cyan-500">
      © B29 2021. Artwork by ... . Website by <a href="">Meghan Avery</a>.
    </span>
  </div>
);

export default Footer;
