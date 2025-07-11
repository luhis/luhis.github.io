import React from "react";
import { Hero, Heading, Container, Menu } from "react-bulma-components";
import { StaticImage } from "gatsby-plugin-image";

import Contact from "./Contact";
import Hobbies from "./Hobbies";
import SocialMedia from "./SocialMedia";

const LeftCol: React.FC = () => {
  return (
    <Hero color="light" size="fullheight">
      <Hero.Header>
        <figure className="image">
          <StaticImage
            src="../images/profile.jpg"
            placeholder="blurred"
            alt="profile picture"
            width={300}
            layout="constrained"
          />
        </figure>
        <Heading>Matthew McCorry</Heading>
        <Heading subtitle>.Net and TypeScript Developer</Heading>
      </Hero.Header>
      <Hero.Body>
        <Container>
          <Menu>
            <Contact />
            <SocialMedia />
            <Hobbies />
          </Menu>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default LeftCol;
