import React from "react";
import { FaHome, FaEnvelopeOpen, FaPhone } from "react-icons/fa";
import { FaPersonDigging } from "react-icons/fa6";
import { Menu } from "react-bulma-components";
import { Link } from "gatsby";
import { FaWalkieTalkie } from "react-icons/fa6";

const Contact: React.FC = () => (
  <React.Fragment>
    Contact
    <Menu.List>
      <Menu>
        <a href="tel:+447851326402" className="icon-text">
          <FaPhone /> +44 (0)7851 326 402
        </a>
      </Menu>
      <Menu>
        <a href="mailto:mccorry@gmail.com" className="icon-text">
          <FaEnvelopeOpen /> mccorry@gmail.com
        </a>
      </Menu>
      <Menu>
        <Link to="/freelanceWorkContactForm" className="menu-item">
          <FaPersonDigging /> Freelance Work
        </Link>
      </Menu>
      <Menu>
        <a href="https://maps.google.com/?q=Brighton,UK" className="menu-item">
          <FaHome /> Brighton, UK
        </a>
      </Menu>
      <Menu>
        <div className="menu-item">
          <FaWalkieTalkie title="70cm, 2m, Meshtastic" /> M7ORY
        </div>
      </Menu>
    </Menu.List>
  </React.Fragment>
);

export default Contact;
