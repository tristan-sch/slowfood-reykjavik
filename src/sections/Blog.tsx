import { ArticlesGridPreview } from '@/components/Blog/components/ArticlesGridPreview'
import { FeaturedArticlePreview } from '@/components/Blog/components/FeaturedArticlePreview'
import { Button } from '@/components/Button/Button'
import { ContainerWithBackground } from '@/components/Containers'
import { SectionHeader } from '@/components/Text/SectionHeader'
import { PostsTypes } from '@/types/queryTypes'

type Props = {
  posts: PostsTypes
}

export const Blog = ({ posts }: Props) => {
  return (
    <section aria-labelledby="blog-heading" className="py-10 sm:py-20">
      <ContainerWithBackground id="blog">
        <div className="mb-12">
          <SectionHeader
            headingId="blog-heading"
            headingText="Read our"
            highlightText="blog"
            description="Learn how to grow your business with our expert advice."
          />
          <Button className="text-sm" href="/blog" variant="secondary">
            See all
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:gap-y-16 lg:grid-cols-2">
          <FeaturedArticlePreview singlePost={posts[0].node} />
          <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
            <ArticlesGridPreview posts={posts} />
          </div>
        </div>
      </ContainerWithBackground>
    </section>
  )
}
