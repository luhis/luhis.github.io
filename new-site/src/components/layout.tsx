/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {Container} from "rbx"

import "rbx/index.css";

const Layout: React.FC<{children: readonly JSX.Element[]}> = ({ children }) => {
  return (
    <Container fluid>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    </Container>
  )
}

export default Layout
