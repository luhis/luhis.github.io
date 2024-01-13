/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Button, Container } from "react-bulma-components";

import CookieConsent from "./CookieConsent";
import PrivacyPolicy from "./PrivacyPolicy";

const Layout: React.FC = ({ children }) => {
  return (
    <Container max>
      <main>{children}</main>
      <footer>
        <Button.Group>
          <PrivacyPolicy />
          <span>© {new Date().getFullYear()} Mangaji Lrd</span>
        </Button.Group>
        <CookieConsent />
      </footer>
    </Container>
  );
};

export default Layout;
