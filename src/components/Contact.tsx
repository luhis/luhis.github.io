import React from "react";
import { FaHome, FaEnvelopeOpen, FaPhone } from "react-icons/fa";
import { Menu } from "react-bulma-components";

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
        <div className="menu-item">
          <FaHome /> Brighton, UK
        </div>
      </Menu>
    </Menu.List>
  </React.Fragment>
);

export default Contact;
