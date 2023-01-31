import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { RiSnapchatLine } from "react-icons/ri";

function Footer() {
  return (
    <footer>
      <ul className="ul">
        <li>
          <FiTwitter />
        </li>
        <li>
          <FiInstagram />
        </li>
        <li>
          <FaTiktok />
        </li>
        <li>
          <RiSnapchatLine />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
