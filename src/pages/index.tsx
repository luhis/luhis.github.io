// If you don't want to use TypeScript you can delete this file!
import React from "react";
import { Column } from "rbx";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import MainBody from "../components/MainBody";
import LeftCol from "../components/LeftCol";

const UsingTypescript: React.FC = () => {
  return (
    <Layout>
      <SEO title="Matthew McCorry CV" />
      <Column.Group>
        <Column size="one-quarter">
          <LeftCol />
        </Column>
        <Column>
          <MainBody />
        </Column>
      </Column.Group>
    </Layout>
  );
};

export default UsingTypescript;
