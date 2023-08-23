import React from "react";
import { Link } from "gatsby";
import { FaLinkedin, FaGithub, FaBlog, FaGlobe } from "react-icons/fa";
import { FaWalkieTalkie } from "react-icons/fa6";
import { Menu } from "react-bulma-components";

const SocialMedia: React.FC = () => (
  <React.Fragment>
    Social Media
    <Menu.List>
      <Menu>
        <a
          href="https://www.linkedin.com/in/matthew-mccorry/"
          className="icon-text"
        >
          <FaLinkedin /> matthew-mccorry
        </a>
      </Menu>
      <Menu>
        <a href="https://github.com/luhis" className="icon-text">
          <FaGithub /> luhis
        </a>
      </Menu>
      <Menu>
        <Link to="/blog" className="icon-text">
          <FaBlog /> Blog
        </Link>
      </Menu>
      <Menu>
        <Link to="/" className="icon-text">
          <FaGlobe /> Website
        </Link>
      </Menu>
      <Menu>
        <a>
          <FaWalkieTalkie title="70cm, 2m" /> M7ORY
        </a>
      </Menu>
    </Menu.List>
  </React.Fragment>
);

export default SocialMedia;
