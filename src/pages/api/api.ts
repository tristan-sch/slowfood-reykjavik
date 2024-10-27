import { PostsResponse, SettingsDetails, SinglePostTypes } from '@/types/queryTypes'

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL

type ApiData = {
  generalSettings: SettingsDetails
  posts: PostsResponse
  post: SinglePostTypes
}

type ApiResponse = {
  data: ApiData
  errors?: Array<string>
}

type Variables = {
  first?: number | null
  after?: string | null
  slug?: string
}

const fetchAPI = async (query: string, variables?: Variables) => {
  const headers = { 'Content-Type': 'application/json' }

  if (!API_URL) {
    throw new Error('API_URL is missing')
  }

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    if (!res.ok) {
      const errorBody = await res.text()
      console.error('Response body:', errorBody)
      throw new Error('Failed to fetch API')
    }

    const json: ApiResponse = await res.json()
    if (json.errors) {
      console.error('API errors:', json.errors)
      throw new Error('Failed to fetch API')
    }

    return json.data
  } catch (error) {
    console.error('Fetch API error:', error)
    throw new Error('Failed to fetch API')
  }
}

export async function getSettings() {
  const data = await fetchAPI(
    `
      query settings {
        generalSettings {
          title
          description
          url
        }
      }
    `,
  )
  return data.generalSettings
}

export const getPostsNew = async (first: number, after?: string | null) => {
  const variables = {
    first: first || null,
    after: after !== undefined ? after : null,
  }

  const data = await fetchAPI(
    `
    query GetPostsEdges($first: Int, $after: String) {
      posts(first: $first, after: $after) {
        edges {
          node {
            id
            slug
            title
            date
            categories {
              edges {
                node {
                  name
                }
              }
            }
            content
            featuredImage {
              node {
                id
                altText
                mediaItemUrl
              }
            }
          }
        }
        pageInfo {
          endCursor
          startCursor
        }
      }
    }
    `,
    variables,
  )
  return data.posts
}

export async function getTotalPostsCount() {
  const data = await fetchAPI(
    `
    query getTotalPostsCountEdges {
      posts(first: 10000) {
        edges {
          node {
            id
          }
        }
      }
    }
    `,
  )
  return data.posts.edges.length
}

export async function getPosts() {
  const data = await fetchAPI(
    `
    query GetPostsEdges {
      posts(first: 10000) {
        edges {
          node {
            id
            slug
            title
            date
            categories {
             edges {
              node {
                name
              }
            }
            }
            content
            featuredImage {
              node {
                id
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `,
  )
  return data.posts.edges
}

export async function getSinglePostBySlug(slug: string) {
  const data = await fetchAPI(
    `
    query GetSinglePostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        databaseId
        title
        uri
        content
        date
          featuredImage {
              node {
                id
                altText
                mediaItemUrl
              }
          }
      }
    }
    `,
    {
      slug,
    },
  )
  return data.post
}
