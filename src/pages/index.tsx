// If you don't want to use TypeScript you can delete this file!
import React from "react";
import { Columns } from "react-bulma-components";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import MainBody from "../components/MainBody";
import LeftCol from "../components/LeftCol";

const UsingTypescript: React.FC = () => {
  return (
    <Layout>
      <SEO title="Matthew McCorry CV" />
      <Columns>
        <Columns.Column size={3}>
          <LeftCol />
        </Columns.Column>
        <Columns.Column>
          <MainBody />
        </Columns.Column>
      </Columns>
    </Layout>
  );
};

export default UsingTypescript;
