import React from "react";
import { Hero, Title, Container, Menu, Subtitle } from "trunx";
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
    <Hero isLight isFullheight>
      <Hero.Head>
        <figure className="image">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="profile picture"
          />
        </figure>
        <Title>Matthew McCorry</Title>
        <Subtitle>.Net and TypeScript Developer</Subtitle>
      </Hero.Head>
      <Hero.Body isAlignContentStart>
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
