import { IGatsbyImageData } from "gatsby-plugin-image";

export type ImageData = {
  readonly placeholderImage: {
    readonly childImageSharp: { readonly gatsbyImageData: IGatsbyImageData };
  };
};
