import React from "react";
import { Hero, Image, Title, Container, Menu } from "rbx";
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
        <Image.Container square>
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="profile picture"
          />
        </Image.Container>
        <Title>Matthew McCorry</Title>
        <Title subtitle>.Net and TypeScript Developer</Title>
      </Hero.Head>
      <Hero.Body class="align-start">
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
