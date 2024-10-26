import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

import { Link } from '@/components/NextLink'

type BreadcrumbsProps = {
  asPath: string
}

export const Breadcrumbs = ({ asPath }: BreadcrumbsProps) => {
  const pages = asPath
    .split('/')
    .filter(Boolean)
    .map((segment, index, arr) => {
      const href = `/${arr.slice(0, index + 1).join('/')}`
      return {
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        href: href,
        current: index === arr.length - 1,
      }
    })

  return (
    <nav aria-label="Breadcrumb" className="mt-4 flex flex-col px-6 md:px-12 lg:px-8">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link
              href="/"
              className="text-gray-500 hover:text-primaryNeutral dark:text-gray-300"
            >
              <HomeIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.slice(0, -1).map((page, index) => (
          <li key={page.name} className={`flex items-center ${index > 0 ? 'flex' : ''}`}>
            <ChevronRightIcon
              aria-hidden="true"
              className="h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-300"
            />
            <Link
              href={page.href}
              aria-current={page.current ? 'page' : undefined}
              className="ml-4 text-sm font-medium text-gray-500 underline-offset-4 transition-all duration-300 ease-in-out hover:underline dark:text-gray-300"
            >
              {page.name}
            </Link>
          </li>
        ))}
        <li className="flex items-center">
          <ChevronRightIcon
            aria-hidden="true"
            className="h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-300"
          />
          <Link
            href={pages[pages.length - 1].href}
            aria-current="page"
            className="ml-4 text-sm font-medium text-gray-500 underline-offset-4 transition-all duration-300 ease-in-out hover:underline dark:text-gray-300"
          >
            {pages[pages.length - 1].name}
          </Link>
        </li>
      </ol>
    </nav>
  )
}
