import React from "react";
import { Menu } from "react-bulma-components";
import { Link } from "gatsby";

const Contact: React.FC = () => (
  <React.Fragment>
    Contact
    <Menu.List>
      <Menu>
        <a href="tel:+447851326402" className="icon-text">
          📞 +44 (0)7851 326 402
        </a>
      </Menu>
      <Menu>
        <a href="mailto:mccorry@gmail.com" className="icon-text">
          ✉️ mccorry@gmail.com
        </a>
      </Menu>
      <Menu>
        <Link to="/freelanceWorkContactForm" className="menu-item">
          🔨 Freelance Work
        </Link>
      </Menu>
      <Menu>
        <a href="https://maps.google.com/?q=Brighton,UK" className="menu-item">
          🏠 Brighton, UK
        </a>
      </Menu>
      <Menu>
        <div className="menu-item">📻 M7ORY</div>
      </Menu>
    </Menu.List>
  </React.Fragment>
);

export default Contact;
