import sanitizeHtml from 'sanitize-html'

import { NextImage } from '@/components/NextImage'
import { Link } from '@/components/NextLink'
import { PostsTypes } from '@/types/queryTypes'
import { formatDate } from '@/utils/utils'

type Props = {
  posts: PostsTypes
  isThreeColumns?: boolean
}

export const ArticlesGridPreview = ({ posts, isThreeColumns = false }: Props) => {
  const articles = isThreeColumns ? posts : posts.slice(1, 5)

  return (
    <ul
      role="list"
      className={`${
        isThreeColumns
          ? 'md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-0 lg:gap-x-20'
          : 'gap-6 sm:grid-cols-2'
      } grid grid-cols-1`}
    >
      {articles.map((post) => (
        <li
          key={post.node.id}
          className={`${
            isThreeColumns
              ? 'md:border-b md:border-t-0 md:pt-0 md:pt-10'
              : 'md:pt-10 lg:border-b lg:border-t-0 lg:pt-0'
          } group border-t border-gray-300 pb-4 pt-12`}
        >
          <article>
            <Link href={`/blog/${post.node.slug}`}>
              <div
                className={`${
                  isThreeColumns ? 'max-h-48' : ''
                } relative aspect-[3/2] lg:shrink-0`}
              >
                <NextImage
                  className="rounded-lg group-hover:cursor-pointer group-hover:text-primaryNeutral dark:group-hover:text-white dark:group-hover:underline dark:group-hover:underline-offset-4"
                  alt={post.node.featuredImage.node.altText || ''}
                  src={post.node.featuredImage.node.mediaItemUrl}
                />
              </div>
              <div className="group relative max-w-xl">
                <time
                  dateTime={post.node.date}
                  className="block text-sm leading-6 text-gray-600 group-hover:text-primaryNeutral dark:text-white dark:group-hover:text-white dark:group-hover:underline dark:group-hover:underline-offset-4"
                >
                  {formatDate(post.node.date)}
                </time>
                <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-primaryNeutral dark:text-white dark:group-hover:text-white dark:group-hover:underline dark:group-hover:underline-offset-4">
                  <span className="absolute inset-0" />
                  {post.node.title}
                </h2>
                {isThreeColumns && (
                  <p
                    className="my-5 line-clamp-3 text-sm leading-6 group-hover:text-primaryNeutral dark:group-hover:text-white dark:group-hover:underline dark:group-hover:underline-offset-4"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(post.node.content || ''),
                    }}
                  />
                )}
              </div>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  )
}
