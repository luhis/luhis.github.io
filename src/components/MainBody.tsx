import React from "react";
import { Hero, Heading, Container, Box, Media } from "react-bulma-components";

const MainBody: React.FC = () => {
  return (
    <Hero size="fullheight">
      <Hero.Body>
        <Container fluid>
          <Heading>Summary</Heading>
          <p>
            I am a principally a .Net Developer. I have 8 years of experience
            working with various Microsoft languages and frameworks. I have 2
            years of experience working with React and TypeScript. I have a
            sizeable amount of F# experience from personal projects that has led
            me to pick up functional and immutable styles in my work.
          </p>
          <Heading>Education</Heading>
          <Box>
            <Media>
              <Media.Content>
                <p>
                  <strong>Computing Science with Industrial Experience</strong>
                  <small>(University of Manchester)</small>{" "}
                  <small>Sept 2004 – Jun 2008</small>
                  <br /> 1st
                </p>
              </Media.Content>
            </Media>
          </Box>
          <Heading>Experience</Heading>
          <Heading>Work</Heading>
          <Box>
            <Media>
              <Media.Content>
                <p>
                  <strong>Auk Technology</strong> <small>(Developer)</small>{" "}
                  <small>August 2020 - Present</small>
                  <br />
                  Working on inflation trading systems.
                </p>
              </Media.Content>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Content>
                <p>
                  <strong>Mindshare (WPP)</strong> <small>(Developer)</small>{" "}
                  <small>December 2019 - July 2020</small>
                  <br />
                  Produced internal tools for use in the media industry.
                </p>
              </Media.Content>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Content>
                <p>
                  <strong>IQVIA</strong> <small>(Developer)</small>{" "}
                  <small>June 2019 - December 2019</small>
                  <br />
                  Worked for a medical data processing company to product
                  querying and reporting tools.
                </p>
              </Media.Content>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Content>
                <p>
                  <strong>Creative Technologies (Schroders)</strong>{" "}
                  <small>(Developer)</small> <small>Dec 2016 - June 2019</small>
                  <br /> Working in an Agile team in a SAFe architecture I
                  developed solutions for a financial services company. I have
                  just completed a project where I created a completely
                  immutable ReactJS front end that connects to a .Net Core API I
                  wrote to allow clients to download documents from our system.
                </p>
              </Media.Content>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Content>
                <p>
                  <strong>Into University Partnerships</strong>{" "}
                  <small>(Senior Developer)</small>{" "}
                  <small>Jan 2016 - Dec 2016</small>
                  <br /> Working as part of an Agile team I developed tools for
                  an E-Learning application.
                </p>
              </Media.Content>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Content>
                <p>
                  <strong>TLM Nexus</strong> <small>(Developer)</small>{" "}
                  <small>Jan 2015 - Dec 2016</small>
                  <br /> I worked on a project rewriting a legacy WebForms
                  aircraft maintenance management system into a modular MVC
                  site.
                </p>
              </Media.Content>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Content>
                <p>
                  <strong>Gendis</strong> <small>(Project Engineer)</small>{" "}
                  <small>Feb 2011 - Dec 2015</small>
                  <br /> I worked on a variety of projects in a small company
                  producing security products and software including a cloud
                  based building access control system.
                </p>
              </Media.Content>
            </Media>
          </Box>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default MainBody;
