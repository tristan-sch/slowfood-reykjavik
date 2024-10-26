import { GetStaticProps, NextPage } from 'next'

import { BlogLayout } from '@/components/Blog/BlogLayout'
import { Layout } from '@/components/Layout'
import { Page } from '@/components/Page'
import { getPostsNew } from '@/pages/api/api'
import { PageInfo, PostsTypes } from '@/types/queryTypes'
import { postsPerPage } from '@/utils/constants'

type Props = {
  initialPosts: PostsTypes
  initialPageInfo: PageInfo
}

const BlogPage: NextPage<Props> = ({ initialPosts, initialPageInfo }) => {
  return (
    <Layout title="Blog">
      <Page
        title="From the blog"
        subtitle="Learn how to grow your business with our expert advice."
      >
        <BlogLayout initialPosts={initialPosts} initialPageInfo={initialPageInfo} />
      </Page>
    </Layout>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const { edges: initialPosts, pageInfo: initialPageInfo } = await getPostsNew(
    postsPerPage,
    null,
  )

  return {
    props: {
      initialPosts,
      initialPageInfo,
    },
    revalidate: 10,
  }
}
