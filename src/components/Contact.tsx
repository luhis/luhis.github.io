import React from "react";
import { FaHome, FaEnvelopeOpen, FaPhone } from "react-icons/fa";
import { Menu } from "rbx";

const Contact: React.FC = () => (
  <React.Fragment>
    <Menu.Label>Contact</Menu.Label>
    <Menu.List>
      <Menu.List.Item>
        <FaPhone /> +44 (0)7851 326 402
      </Menu.List.Item>
      <Menu.List.Item>
        <a href="mailto:mccorry@gmail.com" className="icon-text">
          <FaEnvelopeOpen /> mccorry@gmail.com
        </a>
      </Menu.List.Item>
      <Menu.List.Item>
        <a>
          <FaHome /> Brighton, UK
        </a>
      </Menu.List.Item>
    </Menu.List>
  </React.Fragment>
);

export default Contact;
