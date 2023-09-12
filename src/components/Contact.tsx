import React from "react";
import { FaHome, FaEnvelopeOpen, FaPhone } from "react-icons/fa";
import { Menu } from "react-bulma-components";

const Contact: React.FC = () => (
  <React.Fragment>
    Contact
    <Menu.List>
      <Menu>
        <div className="px-3 py-2">
          <FaPhone /> +44 (0)7851 326 402
        </div>
      </Menu>
      <Menu>
        <a href="mailto:mccorry@gmail.com" className="icon-text">
          <FaEnvelopeOpen /> mccorry@gmail.com
        </a>
      </Menu>
      <Menu>
        <div className="px-3 py-2">
          <FaHome /> Brighton, UK
        </div>
      </Menu>
    </Menu.List>
  </React.Fragment>
);

export default Contact;
