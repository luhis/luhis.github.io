import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Hero, Content } from "react-bulma-components";

const MainBody: React.FC = () => {
  const data = useStaticQuery<Queries.CVQuery>(graphql`
    query CV {
      file(
        sourceInstanceName: { eq: "markdownComponents" }
        name: { eq: "cv" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  return (
    <Hero size="fullheight">
      <Hero.Body>
        <Content
          dangerouslySetInnerHTML={{
            __html: data?.file?.childMarkdownRemark?.html || "",
          }}
        />
      </Hero.Body>
    </Hero>
  );
};

export default MainBody;
