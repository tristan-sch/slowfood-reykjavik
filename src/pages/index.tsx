import { GetStaticProps, NextPage } from 'next'

import { Form } from '@/components/Form'
import { Layout } from '@/components/Layout'
import { getPostsNew } from '@/pages/api/api'
import { About } from '@/sections/About'
import { Blog } from '@/sections/Blog'
import { Features } from '@/sections/Features'
import { Guide } from '@/sections/Guide'
import { Hero } from '@/sections/Hero'
import { PostsResponse } from '@/types/queryTypes'
import { postsPerPage } from '@/utils/constants'

type Props = {
  posts: PostsResponse
}

const HomePage: NextPage<Props> = ({ posts }) => {
  return (
    <Layout displayBanner>
      <Hero />
      <Blog posts={posts.edges} />
      <Features />
      <Guide />
      <About />
      <Form />
    </Layout>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  const [posts] = await Promise.all([getPostsNew(postsPerPage)])

  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}
