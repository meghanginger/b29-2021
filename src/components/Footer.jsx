import React from 'react';
import { Link } from 'gatsby';
import assets from "../data/assetUrls";

const Footer = ({ bgColour, honeydew }) => (
  <div>
    <div className="">
      <Link to="/">
        <img src={assets.logo}className="w-1/5" alt="Jump to start of website" />
      </Link>
      <div className="flex">
        <a href="https://www.instagram.com/shaibrides">
          <img src={require("../icons/insta.svg")} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/shaibrides">
          <img src={require("../icons/facebook.svg")} alt="Facebook" />
        </a>
      </div>
    </div>
    <span className="text-cyan">
      © B29 2021. Artwork by ... . Website by <a href="">Meghan Avery</a>.
    </span>
  </div>
);

export default Footer;
