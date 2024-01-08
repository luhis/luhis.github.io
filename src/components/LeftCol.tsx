import React from "react";
import { Hero, Heading, Container, Menu } from "react-bulma-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import Contact from "./Contact";
import Hobbies from "./Hobbies";
import SocialMedia from "./SocialMedia";

type ImageData = {
  readonly placeholderImage: {
    readonly childImageSharp: { readonly gatsbyImageData: IGatsbyImageData };
  };
};

const LeftCol: React.FC = () => {
  const data = useStaticQuery<ImageData>(graphql`
    {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <Hero color="light" size="fullheight">
      <Hero.Header>
        <figure className="image">
          <GatsbyImage
            image={data.placeholderImage.childImageSharp.gatsbyImageData}
            alt="profile picture"
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
