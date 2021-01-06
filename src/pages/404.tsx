import { Title } from "trunx";
import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Title>NOT FOUND</Title>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
