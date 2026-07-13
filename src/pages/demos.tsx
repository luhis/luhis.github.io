import React from "react";
import { Columns } from "react-bulma-components";

import Layout from "../components/Layout";
import SEO from "../components/Head";
import LeftCol from "../components/LeftCol";
import Demos from "../components/Demos";

export const Head = () => <SEO title="Matthew McCorry's Demos" />;

const DemosPage: React.FC = () => {
  return (
    <Layout>
      <Columns>
        <Columns.Column size={3}>
          <LeftCol />
        </Columns.Column>
        <Columns.Column>
          <Demos />
        </Columns.Column>
      </Columns>
    </Layout>
  );
};

export default DemosPage;
