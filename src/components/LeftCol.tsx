import React from "react";
import { Hero, Heading, Container, Menu } from "react-bulma-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Contact from "./Contact";
import Hobbies from "./Hobbies";
import SocialMedia from "./SocialMedia";

const LeftCol: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Hero color="light" size="fullheight">
      <Hero.Head>
        <figure className="image">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="profile picture"
          />
        </figure>
        <Heading>Matthew McCorry</Heading>
        <Heading subtitle>.Net and TypeScript Developer</Heading>
      </Hero.Head>
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
