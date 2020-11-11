// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  FaHome,
  FaEnvelopeOpen,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"
import { Column, Hero, Image, Title, Container, Menu } from "rbx"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import MainBody from "../components/MainBody"

const UsingTypescript: React.FC = () => {
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
  return (
    <Layout>
      <SEO />
      <Column.Group>
        <Column size="one-quarter">
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
                  </Menu.List>
                </Menu>
              </Container>
            </Hero.Body>
          </Hero>
        </Column>
        <Column>
          <MainBody />
        </Column>
      </Column.Group>
    </Layout>
  )
}

export default UsingTypescript
