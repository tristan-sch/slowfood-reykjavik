export type MediaItem = {
  id: string
  mediaItemUrl: string
  altText: string
}

export type Link = {
  url: string
  title: string
}

export type CustomImage = {
  sourceUrl: string
  altText: string
  id?: string
  imageLink?: {
    imageLink: string
  }
}

export type Content = {
  heading?: string
  textblock?: string
  textblockSecondary?: string
  textblockTertiary?: string
}

export type CategoriesTypes = {
  edges: Array<{
    node: {
      name: string
    }
  }>
}
