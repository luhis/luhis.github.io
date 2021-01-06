import React from "react";
import { FaHome, FaEnvelopeOpen, FaPhone } from "react-icons/fa";
import { Menu } from "trunx";

const Contact: React.FC = () => (
  <React.Fragment>
    <Menu.Label>Contact</Menu.Label>
    <Menu.List>
      <Menu>
        <a>
          <FaPhone /> +44 (0)7851 326 402
        </a>
      </Menu>
      <Menu>
        <a href="mailto:mccorry@gmail.com" className="icon-text">
          <FaEnvelopeOpen /> mccorry@gmail.com
        </a>
      </Menu>
      <Menu>
        <a>
          <FaHome /> Brighton, UK
        </a>
      </Menu>
    </Menu.List>
  </React.Fragment>
);

export default Contact;
