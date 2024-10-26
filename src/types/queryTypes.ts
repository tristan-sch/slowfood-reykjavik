import { CategoriesTypes, Content, MediaItem } from '@/types/sharedQueryTypes'

export type SettingsDetails = {
  title: string
  description: string
  url: string
}

// Blog Posts Types
export type PostsResponse = {
  edges: PostsTypes
  pageInfo: PageInfo
}

export type PostsTypes = Array<{
  node: SinglePostTypes
}>

export type SinglePostTypes = {
  id: string
  title: string
  date: string
  content: string
  categories: CategoriesTypes
  featuredImage: { node: MediaItem }
  slug: string
}

// Necessary to load more posts
export type PageInfo = {
  endCursor: string
  startCursor: string
}

type MenuItem = {
  id: string
  label: string
  parentId: string
  path: string
}

export type Menu = {
  id: string
  databaseId: number
  name: string
  menuItems: {
    edges: Array<{
      node: MenuItem
    }>
  }
}

export type MenusTypes = {
  nodes: Array<Menu>
}

export type BannerTypes = {
  activate: boolean
  link: string
} & Content
