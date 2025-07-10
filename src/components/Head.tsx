/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import React, { FunctionComponent } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import { ImageData } from "../types/imageData";

const metas = (profileImage: IGatsbyImageData) => [
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
  {
    name: "og:url",
    content: "mccorry.dev",
  },
  {
    name: "og:title",
    content: "Matt McCorry's Dev Site",
  },
  {
    name: "og:description",
    content: "Contract C# and TypeScript developer in Brighton, UK",
  },
  {
    name: "og:image",
    content: profileImage.images.sources![0].srcSet.split(" ")[0],
  },
];

const SEO: FunctionComponent<{ readonly title: string }> = ({ title }) => {
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
    <>
      <html lang="en" />
      <title>{title}</title>
      {metas(data.placeholderImage.childImageSharp.gatsbyImageData).map(m => (
        <meta
          key={m.name}
          property={m.property}
          name={m.name}
          content={m.content}
        />
      ))}
    </>
  );
};
export default SEO;
