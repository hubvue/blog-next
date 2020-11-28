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

export interface Contacts {
  facebook: string
  linkedin: string
  github: string
  twitter: string
  telegram: string
  instagram: string
  email: string
  rss: string
  vkontakte: string
  line: string
  gitlab: string
  weibo: string
  codepen: string
  youtube: string
  soundcloud: string
  medium: string,
  [key: string]: string
}

export interface Author {
  name: string
  bio: string
  photo: string
  contacts: Contacts
}

export interface Menu {
  label: string
  path: string
}
export interface SiteMetadata {
  author: Author
  menu: Menu[]
  url: string
  title: string
  subtitle: string
  copyright: string
  disqusShortname: string
}

export interface Entry {
  getIn(args: string[]): string
}
export type WidgetFor = (arg: string) => string