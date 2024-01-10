import { GatsbyNode } from "gatsby";
import { FileSystemNode, createFilePath } from "gatsby-source-filesystem";

export const onCreateNode: GatsbyNode<FileSystemNode>["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`,
      trailingSlash: false,
    }).substring(1);
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
