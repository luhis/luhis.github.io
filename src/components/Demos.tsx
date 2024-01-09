import React from "react";
import { Card, Section } from "react-bulma-components";
import { FaLink } from "react-icons/fa6";

const demoExamples = [
  {
    title: "Abandoned Car Removal",
    link: "https://abandoned.mccorry.dev",
    description: "App to help removal of abandoned vehicles.",
  },
  {
    title: "AutoTest App",
    link: "https://mangaji-autotest.azurewebsites.net",
    description: "Online AutoTest and AutoSolo app",
  },
  {
    title: "Tax Optimiser",
    link: "https://taxoptimiser.mccorry.dev/nationalInsuranceOptimiser/",
    description: "Optimise PAYE taxes using additional pension contributions",
  },
  {
    title: "Rona",
    link: "https://lemon-island-041890d03.azurestaticapps.net",
    description:
      "Mock NHS Covid tracking app.  It used to scan the poster QR codes, decode the JWT token contained and display a fake check-in screen.  Hope we don't need this one again!",
  },
];

const Contact: React.FC = () => (
  <React.Fragment>
    {demoExamples.map(d => (
      <Section key={d.title}>
        <Card>
          <Card.Header>
            <Card.Header.Title>{d.title}</Card.Header.Title>
            <Card.Header.Icon renderAs="a" href={d.link} target="_blank">
              <FaLink />{" "}
            </Card.Header.Icon>
          </Card.Header>
          <Card.Content>{d.description}</Card.Content>
        </Card>
      </Section>
    ))}
  </React.Fragment>
);

export default Contact;
