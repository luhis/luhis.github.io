// If you don't want to use TypeScript you can delete this file!
import React from "react";
import { Column, Columns } from "trunx";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import MainBody from "../components/MainBody";
import LeftCol from "../components/LeftCol";

const UsingTypescript: React.FC = () => {
  return (
    <Layout>
      <SEO title="Matthew McCorry CV" />
      <Columns>
        <Column isOneQuarter>
          <LeftCol />
        </Column>
        <Column>
          <MainBody />
        </Column>
      </Columns>
    </Layout>
  );
};

export default UsingTypescript;
