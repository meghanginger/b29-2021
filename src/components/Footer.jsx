import React from 'react';
import assets from "../data/assetUrls";

const Footer = () => (
  <div className="flex flex-col items-center p-1">
    <hr className="border border-black w-2/3 my-3" />
    <div className="flex flex-col md:flex-row justify-center items-center">
      <img src={assets.logo}className="w-1/2 md:w-1/4" alt="B29 music logo" />
      <div className="flex">
        <a href="https://www.instagram.com/shaibrides">
          <img src={require("../icons/insta.svg")} alt="Instagram" className="svgBlack w-10 p-1"/>
        </a>
        <a href="https://www.facebook.com/shaibrides">
          <img src={require("../icons/facebook.svg")} alt="Facebook" className="svgBlack w-10 p-1"/>
        </a>
      </div>
    </div>
    <span className="italic text-xs text-center">
    © B29 2021. Artwork by ... . Website by <a href="https://www.linkedin.com/in/meghanavery/" className="font-bold">Meghan Avery</a>.
    </span>
  </div>
);

export default Footer;
