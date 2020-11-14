/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react"
import { Helmet } from "react-helmet"

const SEO: FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      meta={[
        {
          name: `author`,
          content: "Matthew McCorry",
        },
        {
          property: `description`,
          content: "C#, F# and TypeScript developer in Brighton, UK",
        },
        {
          property: `keywords`,
          content: "HTML,CSS,XML,JavaScript,TypeScript,F#,C#,.Net,Brighton",
        },
        {
          property: `geo.region`,
          content: "GB-ESX",
        },
        {
          name: `geo.placename`,
          content: "Brighton",
        },
        {
          name: `geo.position`,
          content: "50.82;-0.14",
        },
        {
          name: `ICBM`,
          content: "50.82, -0.14",
        },
        {
          name: `viewport`,
          content: "width=device-width, initial-scale=1",
        },
      ]}
    />
  )
}
export default SEO
