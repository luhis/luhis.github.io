// If you don't want to use TypeScript you can delete this file!
import React from "react";
import { Columns } from "react-bulma-components";

import Layout from "../components/Layout";
import SEO from "../components/Head";
import LeftCol from "../components/LeftCol";
import FreelanceContact from "../components/FreelanceContact";

export const Head = () => <SEO title="Matthew McCorry's Demos" />;

const UsingTypescript: React.FC = () => {
  return (
    <Layout>
      <Columns>
        <Columns.Column size={3}>
          <LeftCol />
        </Columns.Column>
        <Columns.Column>
          <FreelanceContact />
        </Columns.Column>
      </Columns>
    </Layout>
  );
};

export default UsingTypescript;
