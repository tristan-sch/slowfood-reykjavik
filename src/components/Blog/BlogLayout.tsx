import { useEffect, useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

import { ArticlesGridPreview } from '@/components/Blog/components/ArticlesGridPreview'
import { Button } from '@/components/Button/Button'
import { useIsMounted } from '@/hooks/useIsMounted'
import { getPostsNew, getTotalPostsCount } from '@/pages/api/api'
import { PageInfo, PostsTypes } from '@/types/queryTypes'
import { postsPerPage } from '@/utils/constants'
import { scrollToTop } from '@/utils/utils'

type Props = {
  initialPosts: PostsTypes
  initialPageInfo: PageInfo
}

export const BlogLayout = ({ initialPosts, initialPageInfo }: Props) => {
  const [totalPostsCount, setTotalPostsCount] = useState(0)
  const [posts, setPosts] = useState(initialPosts)
  const [pageInfo, setPageInfo] = useState(initialPageInfo)
  const [loading, setLoading] = useState(false)
  const isMounted = useIsMounted()

  const isLoadMoreButton = totalPostsCount !== posts.length

  useEffect(() => {
    const fetchTotalCount = async () => {
      const count = await getTotalPostsCount()
      setTotalPostsCount(count)
    }
    fetchTotalCount()
  }, [])

  const loadMorePosts = async () => {
    const variables = {
      first: postsPerPage,
      after: pageInfo.endCursor,
    }

    if (loading) {
      return null
    }

    setLoading(true)

    try {
      const data = await getPostsNew(variables.first, variables.after)
      const newPosts = data.edges
      const newPageInfo = data.pageInfo

      setPosts((prevPosts) => [...prevPosts, ...newPosts])
      setPageInfo(newPageInfo)
    } catch (error) {
      console.error('Error loading more posts:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <>
      <ArticlesGridPreview posts={posts} isThreeColumns />
      <div className="mt-10 flex flex-col items-center justify-between sm:mt-20 sm:flex-row sm:px-0">
        {isLoadMoreButton && (
          <div className="mb-10 sm:mb-4 md:mb-0">
            <Button onClick={loadMorePosts} className="text-sm" variant="secondary">
              Load more posts
            </Button>
          </div>
        )}
        <button type="button" onClick={scrollToTop}>
          <ChevronUpIcon
            aria-hidden="true"
            className="h-6 w-6 text-gray-500 hover:text-primaryNeutral dark:text-gray-300"
          />
        </button>
      </div>
    </>
  )
}
