import Image from 'next/image'
import sanitizeHtml from 'sanitize-html'

import { Link } from '@/components/NextLink'
import { useIsMounted } from '@/hooks/useIsMounted'
import { SinglePostTypes } from '@/types/queryTypes'
import { formatDate } from '@/utils/utils'

type Props = {
  singlePost: SinglePostTypes
}

export const FeaturedArticlePreview = ({ singlePost }: Props) => {
  const isMounted = useIsMounted()

  return (
    <article key={singlePost.id} className="group">
      <Link href={`/blog/${singlePost.slug}`}>
        <div className="relative aspect-[16/9] w-full sm:aspect-[2/1] lg:aspect-[3/2]">
          <Image
            className="rounded-lg group-hover:cursor-pointer group-hover:text-primaryNeutral dark:group-hover:text-white dark:group-hover:underline dark:group-hover:underline-offset-4"
            alt={singlePost.featuredImage.node.altText}
            src={singlePost.featuredImage.node.mediaItemUrl}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 1024px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL={singlePost.featuredImage.node.mediaItemUrl}
          />
        </div>
        <div className="group-hover:text-primaryNeutral dark:group-hover:text-white dark:group-hover:underline dark:group-hover:underline-offset-4">
          <div className="mt-8 flex items-center gap-x-4 text-xs">
            <time
              dateTime={singlePost.date}
              className="group-hover:text-primaryNeutral dark:group-hover:text-white dark:group-hover:underline dark:group-hover:underline-offset-4"
            >
              {formatDate(singlePost.date)}
            </time>
          </div>

          <div className="group relative">
            <h3 className="mt-3 max-w-80 text-3xl font-semibold leading-9 group-hover:text-primaryNeutral dark:group-hover:text-white">
              <span className="absolute inset-0" />
              {singlePost.title}
            </h3>

            {isMounted && (
              <p
                className="roup-hover:text-primaryNeutral mt-5 line-clamp-3 text-sm leading-6"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(singlePost.content || ''),
                }}
              />
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}
