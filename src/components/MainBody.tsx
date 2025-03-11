import React from "react";
import { Hero, Heading, Container, Box, Media } from "react-bulma-components";

const MainBody: React.FC = () => {
  return (
    <Hero size="fullheight">
      <Hero.Body>
        <Container max>
          <Heading>Summary</Heading>
          <p>
            I am a principally a .Net Developer. I have 12 years of experience
            working with various Microsoft languages and frameworks. I have 6
            years of experience working with React and TypeScript. I have a
            sizeable amount of F# experience from personal projects that has led
            me to pick up functional and immutable styles in my work.
          </p>
          <Heading>Education</Heading>
          <Box>
            <Media>
              <Media.Item>
                <p>
                  <strong>Computing Science with Industrial Experience</strong>{" "}
                  <small>(University of Manchester)</small>{" "}
                  <small>Sept 2004 – Jun 2008</small>
                  <br /> 1st
                </p>
              </Media.Item>
            </Media>
          </Box>
          <Heading>Experience</Heading>
          <Heading>Work</Heading>
          <Box>
            <Media>
              <Media.Item>
                <p>
                  <strong>The People&apos;s Pension</strong>{" "}
                  <small>(Senior Developer)</small>{" "}
                  <small>November 2024 - Present</small>
                  <br />
                  Developed a DotNetCore integration to the government Pension
                  Dashboard using Service Bus, hosted on Azure. Collaborated
                  with the test team on writing SpecFlow integration tests and
                  created a test suite based on government schemas for seamless
                  integration testing.
                </p>
              </Media.Item>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Item>
                <p>
                  <strong>T Rowe Price</strong>{" "}
                  <small>(Senior Developer)</small>{" "}
                  <small>October 2022 - November 2024</small>
                  <br />
                  Worked to migrate legacy .net Framework banking applications
                  to DotNetCore
                </p>
              </Media.Item>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Item>
                <p>
                  <strong>Essensys</strong> <small>(Developer)</small>{" "}
                  <small>July 2021 - September 2022</small>
                  <br />
                  Worked to maintain and add new features to a legacy office
                  management system. Technologies used: .Net Framework,
                  AngularJS. Integrations with various systems: Stripe,
                  GoCardless, Ezeep
                </p>
              </Media.Item>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Item>
                <p>
                  <strong>Auk Technology</strong> <small>(Developer)</small>{" "}
                  <small>August 2020 - July 2021</small>
                  <br />
                  Working in a small team work on various financial projects
                  from a legacy inflation trading system in Vue 2, a legacy Gas
                  Trading Platform in Angular 2, to a greenfield cryptocurrency
                  trading system in React.
                </p>
              </Media.Item>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Item>
                <p>
                  <strong>Mindshare (WPP)</strong> <small>(Developer)</small>{" "}
                  <small>December 2019 - July 2020</small>
                  <br />
                  Produced internal tools for use in the media industry.
                </p>
              </Media.Item>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Item>
                <p>
                  <strong>IQVIA</strong> <small>(Developer)</small>{" "}
                  <small>June 2019 - December 2019</small>
                  <br />
                  Worked for a medical data processing company to product
                  querying and reporting tools.
                </p>
              </Media.Item>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Item>
                <p>
                  <strong>Creative Technologies (Schroders)</strong>{" "}
                  <small>(Developer)</small> <small>Dec 2016 - June 2019</small>
                  <br /> Working in an Agile team in a SAFe architecture I
                  developed solutions for a financial services company. I have
                  just completed a project where I created a completely
                  immutable ReactJS front end that connects to a .Net Core API I
                  wrote to allow clients to download documents from our system.
                </p>
              </Media.Item>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Item>
                <p>
                  <strong>Into University Partnerships</strong>{" "}
                  <small>(Senior Developer)</small>{" "}
                  <small>Jan 2016 - Dec 2016</small>
                  <br /> Working as part of an Agile team I developed tools for
                  an E-Learning application.
                </p>
              </Media.Item>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Item>
                <p>
                  <strong>TLM Nexus</strong> <small>(Developer)</small>{" "}
                  <small>Jan 2015 - Dec 2016</small>
                  <br /> I worked on a project rewriting a legacy WebForms
                  aircraft maintenance management system into a modular MVC
                  site.
                </p>
              </Media.Item>
            </Media>
          </Box>
          <Box>
            <Media>
              <Media.Item>
                <p>
                  <strong>Gendis</strong> <small>(Project Engineer)</small>{" "}
                  <small>Feb 2011 - Dec 2015</small>
                  <br /> I worked on a variety of projects in a small company
                  producing security products and software including a cloud
                  based building access control system.
                </p>
              </Media.Item>
            </Media>
          </Box>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default MainBody;
