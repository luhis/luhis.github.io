import React from "react";
import { Link } from "gatsby";
import { Menu } from "react-bulma-components";

const SocialMedia: React.FC = () => (
  <React.Fragment>
    Social Media
    <Menu.List>
      <Menu renderAs="nav">
        <Link to="/" className="icon-text">
          🌐 Website
        </Link>
      </Menu>
      <Menu renderAs="nav">
        <Link to="/blog" className="icon-text">
          ✍️ Blog
        </Link>
      </Menu>
      <Menu renderAs="nav">
        <Link to="/demos" className="icon-text">
          💻 Demos
        </Link>
      </Menu>
      <Menu renderAs="nav">
        <a
          href="https://www.linkedin.com/in/matthew-mccorry/"
          className="icon-text"
        >
          🔗 matthew-mccorry
        </a>
      </Menu>
      <Menu renderAs="nav">
        <a href="https://github.com/luhis" className="icon-text">
          🐙 luhis
        </a>
      </Menu>
    </Menu.List>
  </React.Fragment>
);

export default SocialMedia;
