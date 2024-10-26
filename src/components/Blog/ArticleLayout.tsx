import { Button } from '@/components/Button/Button'
import { NextImage } from '@/components/NextImage'
import { SinglePostTypes } from '@/types/queryTypes'
import { formatDate, sanitizeAllHtmlContent } from '@/utils/utils'

type Props = {
  singlePost: SinglePostTypes
}

export const ArticleLayout = ({ singlePost }: Props) => {
  const sanitizedContent = sanitizeAllHtmlContent(singlePost.content)

  return (
    <div className="mx-auto max-w-2xl">
      <article className="mb-20">
        <header className="flex flex-col">
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-white">
            {singlePost.title}
          </h1>
          <time
            dateTime="article.date"
            className="order-first flex items-center text-base text-zinc-400"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-200" />
            <span className="ml-3">{formatDate(singlePost.date)}</span>
          </time>
        </header>
        <div className="mt-32 sm:mt-8 ">
          <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:shrink-0">
            <NextImage
              className="rounded-xl shadow-2xl ring-1 ring-white/10"
              alt={singlePost.featuredImage.node.altText || ''}
              src={singlePost.featuredImage.node.mediaItemUrl}
            />
          </div>
        </div>
        <div
          className="mt-8 text-justify"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      </article>
      <Button className="text-sm" href="/blog" variant="secondary">
        Back to blog
      </Button>
    </div>
  )
}
