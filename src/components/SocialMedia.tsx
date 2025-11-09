import React from "react";
import { Link } from "gatsby";
import {
  FaLinkedin,
  FaGithub,
  FaBlog,
  FaGlobe,
  FaLaptop,
} from "react-icons/fa";
import { Menu } from "react-bulma-components";

const SocialMedia: React.FC = () => (
  <React.Fragment>
    Social Media
    <Menu.List>
      <Menu renderAs="nav">
        <Link to="/" className="icon-text">
          <FaGlobe /> Website
        </Link>
      </Menu>
      <Menu renderAs="nav">
        <Link to="/blog" className="icon-text">
          <FaBlog /> Blog
        </Link>
      </Menu>
      <Menu renderAs="nav">
        <Link to="/demos" className="icon-text">
          <FaLaptop /> Demos
        </Link>
      </Menu>
      <Menu renderAs="nav">
        <a
          href="https://www.linkedin.com/in/matthew-mccorry/"
          className="icon-text"
        >
          <FaLinkedin /> matthew-mccorry
        </a>
      </Menu>
      <Menu renderAs="nav">
        <a href="https://github.com/luhis" className="icon-text">
          <FaGithub /> luhis
        </a>
      </Menu>
    </Menu.List>
  </React.Fragment>
);

export default SocialMedia;
