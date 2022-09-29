import React from "react";
import "./footer.css";
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
          Arif Hasanov
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/arif.hasanov.750"><FaFacebookF /></a>
        <a href="https://www.instagram.com/progr.az/"><FiInstagram /></a>
        <a href="https://twitter.com/hesenv_007"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Arif Hasanov. All rights reserved.</small>
        {console.log("%c  Arif Həsənov ♡  tərifindən dizayn edilib ","background:#16141c;color:#fff;")}
      </div>
    </footer>
  );
};

export default Footer;

