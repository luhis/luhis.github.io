import React from "react";
import { Link } from "gatsby";
import { FaLinkedin, FaGithub, FaBlog, FaGlobe } from "react-icons/fa";
import { Menu } from "rbx";

const SocialMedia: React.FC = () => (
  <React.Fragment>
    <Menu.Label>Social Media</Menu.Label>
    <Menu.List>
      <Menu.List.Item>
        <a
          href="https://www.linkedin.com/in/matthew-mccorry/"
          className="icon-text"
        >
          <FaLinkedin /> matthew-mccorry
        </a>
      </Menu.List.Item>
      <Menu.List.Item>
        <a href="https://github.com/luhis" className="icon-text">
          <FaGithub /> luhis
        </a>
      </Menu.List.Item>
      <Menu.List.Item>
        <Link to="/blog" className="icon-text">
          <FaBlog /> Blog
        </Link>
      </Menu.List.Item>
      <Menu.List.Item>
        <Link to="/" className="icon-text">
          <FaGlobe /> Website
        </Link>
      </Menu.List.Item>
    </Menu.List>
  </React.Fragment>
);

export default SocialMedia;
