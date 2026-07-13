import React from "react";
import { Columns } from "react-bulma-components";

import Layout from "../components/Layout";
import SEO from "../components/Head";
import CV from "../components/CV";
import LeftCol from "../components/LeftCol";

export const Head = () => <SEO title="Matthew McCorry CV" />;

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Columns>
        <Columns.Column size={3}>
          <LeftCol />
        </Columns.Column>
        <Columns.Column>
          <CV />
        </Columns.Column>
      </Columns>
    </Layout>
  );
};

export default HomePage;
