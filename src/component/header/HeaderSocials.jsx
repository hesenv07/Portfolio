import React from "react";
import { BsLinkedin ,BsInstagram} from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/arifhesenov/"
        target="_blank"
        rel="noopener noreferrer"
      > 
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/hesenv07"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/progr.az/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;