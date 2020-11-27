export interface Node {
  fields: {
    slug: string,
    categorySlug?: string,
    tagSlugs?: string[]
  },
  frontmatter: {
    date: string,
    description?: string,
    category?: string,
    tags?: string[],
    title: string,
    socialImage?: {
      publicURL: string
    }
  },
  html: string,
  id: string
}

export interface Edge {
  node: Node
}

export interface IconType {
  path: string
  viewBox: string
}

export interface Group {
  fieldValue: string
  totalCount: number
}

export interface AllMarkDownRemark {
  allMarkdownRemark: {
    edges: Edge[]
  }
  group: Group[]
}

export interface PageContext {
  tag: string
  category: string
  currentPage: number
  prevPagePath: string
  nextPagePath: string
  hasPrevPage: boolean
  hasNextPage: boolean
}