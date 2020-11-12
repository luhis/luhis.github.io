import React from "react";
import { Link } from "gatsby";
import {
  FaHome,
  FaEnvelopeOpen,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaBlog,
} from "react-icons/fa";
import { Hero, Image, Title, Container, Menu } from "rbx";
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image";

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
  `)
  return (<Hero color="light" size="fullheight">
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
          <Menu.Label>Contact</Menu.Label>
          <Menu.List>
            <Menu.List.Item>
              <FaPhone />
          +44 (0)7851 326 402
        </Menu.List.Item>
            <Menu.List.Item>
              <a href="mailto:mccorry@gmail.com" className="icon-text">
                <FaEnvelopeOpen />
            mccorry@gmail.com
          </a>
            </Menu.List.Item>
            <Menu.List.Item>
              <a>
                <FaHome />
            Brighton, UK
          </a>
            </Menu.List.Item>
          </Menu.List>
          <Menu.Label>Hobbies</Menu.Label>
          <Menu.List>
            <Menu.List.Item>
              <a>Electronics</a>
            </Menu.List.Item>
            <Menu.List.Item>
              <a>Grass Autotest racing</a>
            </Menu.List.Item>
            <Menu.List.Item>
              <a>Ancient History</a>
            </Menu.List.Item>
          </Menu.List>
          <Menu.Label>Social Media</Menu.Label>
          <Menu.List>
            <Menu.List.Item>
              <a
                href="https://www.linkedin.com/in/matthew-mccorry/"
                className="icon-text"
              >
                <FaLinkedin />
            matthew-mccorry
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
          </Menu.List>
        </Menu>
      </Container>
    </Hero.Body>
  </Hero>);
};

export default LeftCol;