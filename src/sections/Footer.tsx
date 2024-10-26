import { Logo } from '@/components/Logo'
import { Link } from '@/components/NextLink'
import { footerNavigation } from '@/mocks/mockData'

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div
        id="contact"
        className="border-t border-gray-900/10 px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 dark:border-gray-100/50"
      >
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex justify-center lg:justify-start">
              <Logo logoClassName="block" />
            </div>
            <p className="text-center text-sm leading-6 text-gray-600 lg:text-left dark:text-gray-300">
              If you have any questions, please contact us at xxx[at]slowfood.is
            </p>
            <div className="flex justify-center space-x-6 lg:justify-start">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="sm:grid sm:grid-cols-2 sm:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  News
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.news.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 sm:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Presidia
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.presidia.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  About us
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.about.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 sm:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Guides
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.guides.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 dark:border-gray-100/50">
          <p className="text-xs leading-5 text-gray-500 dark:text-gray-300">
            &copy; 2024 Slow Food, Inc. All rights reserved. This website does not use
            cookies.
          </p>
        </div>
      </div>
    </footer>
  )
}
