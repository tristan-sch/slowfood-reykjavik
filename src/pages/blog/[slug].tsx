import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { ArticleLayout } from '@/components/Blog/ArticleLayout'
import { Layout } from '@/components/Layout'
import { Page } from '@/components/Page'
import { getPosts, getSinglePostBySlug } from '@/pages/api/api'
import { SinglePostTypes } from '@/types/queryTypes'

type Props = {
  post: SinglePostTypes
}

const SinglePostPage: NextPage<Props> = ({ post }) => {
  return (
    <Layout title={post.title}>
      <Page>
        <ArticleLayout singlePost={post} />
      </Page>
    </Layout>
  )
}

export default SinglePostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()
  const paths = posts.map((post) => ({
    params: { slug: post.node.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getSinglePostBySlug(params?.slug as string)

  return {
    props: {
      post,
    },
    revalidate: 10,
  }
}
