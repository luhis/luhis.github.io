export interface PostSummary {
  readonly id: number;
  readonly frontmatter: {
    readonly title: string;
    readonly author: string;
    readonly date: string;
    readonly tags: string;
  };
  readonly fields: {
    readonly slug: string;
  };
  readonly excerpt: string;
}

export interface Post {
  readonly id: number;
  readonly frontmatter: {
    readonly title: string;
    readonly author: string;
    readonly date: string;
    readonly tags: string;
  };
  readonly fields: {
    readonly slug: string;
  };
  readonly html: string;
}
