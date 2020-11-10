import React from "react"
import { Hero, Title, Container, Box, Media } from "rbx"

const MainBody: React.FC = () => {
  return (<Hero size="fullheight">
    <Hero.Body align="start">
      <Container fluid>
        <Title>Summary</Title>
        <p>I am a principally a .Net Developer. I have 8 years of experience working with various Microsoft languages and frameworks.
        I have 2 years of experience working with React and TypeScript. I have a sizeable amount of F# experience from personal projects that has led me to pick up functional and immutable styles in my work.
                              </p>
        <Title>Education</Title>
        <Box>
          <Media>
            <Media.Item>
              <p>
                <strong>Computing Science with Industrial Experience</strong>
                <small>(University of Manchester)</small> <small>Sept 2004 – Jun 2008</small>
                <br /> 1st
                                          </p>
            </Media.Item>
          </Media>
        </Box>
        <Title>Experience</Title>
        <Title>Work</Title>
        <Box>
          <Media>
            <Media.Item>
              <p>
                <strong>Auk Technology</strong> <small>(Developer)</small> <small>August 2020 - Present</small>
                <br />Work on inflating trading systems.</p>
            </Media.Item>
          </Media>
        </Box>
        <Box>
          <Media>
            <Media.Item>
              <p>
                <strong>Mindshare (WPP)</strong> <small>(Developer)</small> <small>December 2019 - July 2020</small>
                <br />Produced internal tools for use in the media industry.</p>
            </Media.Item>
          </Media>
        </Box>
        <Box>
          <Media>
            <Media.Item>
              <p>
                <strong>IQVIA</strong> <small>(Developer)</small> <small>June 2019 - December 2019</small>
                <br />Worked for a medical data processing company to product querying and reporting tools.</p>
            </Media.Item>
          </Media>
        </Box>
        <Box>
          <Media>
            <Media.Item>
              <p>
                <strong>Creative Technologies (Schroders)</strong> <small>(Developer)</small> <small>Dec 2016 - June 2019</small>
                <br /> Working in an Agile team in a SAFe architecture I developed solutions for a financial services company. I have just completed a project where I created a completely immutable ReactJS front end that connects to a .Net Core API I wrote to allow clients to download documents from our system.
                                          </p>
            </Media.Item>
          </Media>
        </Box>
        <Box>
          <Media>
            <Media.Item>
              <p>
                <strong>Into University Partnerships</strong> <small>(Senior Developer)</small> <small>Jan 2016 - Dec 2016</small>
                <br /> Working as part of an Agile team I developed tools for an E-Learning application.
                                          </p>
            </Media.Item>
          </Media>
        </Box>
        <Box>
          <Media>
            <Media.Item>
              <p>
                <strong>TLM Nexus</strong> <small>(Developer)</small> <small>Jan 2015 - Dec 2016</small>
                <br /> I worked on a project rewriting a legacy WebForms aircraft maintenance management system into a modular MVC site.
                    </p>
            </Media.Item>
          </Media>
        </Box>
        <Box>
          <Media>
            <Media.Item>
              <p>
                <strong>Gendis</strong> <small>(Project Engineer)</small> <small>Feb 2011 - Dec 2015</small>
                <br /> I worked on a variety of projects in a small company producing security products and software including a cloud based building access control system.
                      </p>
            </Media.Item>
          </Media>
        </Box>
      </Container>
    </Hero.Body>
  </Hero>)
};

export default MainBody
