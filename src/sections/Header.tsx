import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'

import { Button } from '@/components/Button/Button'
import { TomatoIcon } from '@/components/Icons/TomatoIcon'
import { Logo } from '@/components/Logo'
import { Link } from '@/components/NextLink'
import { Tooltip } from '@/components/Tooltip'
import { useIsMounted } from '@/hooks/useIsMounted'
import { mainMenuData } from '@/mocks/mockData'

export const Header = () => {
  const isMounted = useIsMounted()
  const [open, setOpen] = useState(false)

  const { resolvedTheme, setTheme } = useTheme()
  const otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

  return (
    <section aria-label="header">
      <div className="px-6 py-6 md:px-12 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center justify-between lg:w-auto">
            <Logo logoClassName="block lg:hidden" />
            <div className="flex items-center space-x-4 lg:hidden">
              <Tooltip
                text={resolvedTheme === 'dark' ? 'Light Tomato Mode' : 'Dark Tomato Mode'}
              >
                <button
                  type="button"
                  aria-label={
                    isMounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'
                  }
                  onClick={() => setTheme(otherTheme)}
                >
                  <span className="sr-only">Dark mode</span>
                  <TomatoIcon
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 text-primaryNeutral hover:text-gray-800 dark:text-white dark:hover:text-gray-200 dark:hover:shadow-md"
                  />
                </button>
              </Tooltip>
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryNeutral dark:focus:ring-white"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
              </button>
            </div>
          </div>
          <nav className="hidden flex-1 items-center justify-between lg:flex">
            <div className="flex items-center">
              <Logo logoClassName="hidden lg:block" />
            </div>
            <div className="flex flex-grow justify-center lg:space-x-10">
              {mainMenuData.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 underline-offset-4 transition-all duration-300 ease-in-out hover:underline dark:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-8">
              <Tooltip
                text={resolvedTheme === 'dark' ? 'Light Tomato Mode' : 'Dark Tomato Mode'}
              >
                <button
                  type="button"
                  aria-label={
                    isMounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'
                  }
                  onClick={() => setTheme(otherTheme)}
                >
                  <span className="sr-only">Dark mode</span>
                  <TomatoIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-primaryNeutral hover:text-gray-800 dark:text-white dark:hover:text-gray-200 dark:hover:shadow-md"
                  />
                </button>
              </Tooltip>
              <Button
                className="text-sm"
                href="https://www.slowfood.com/be-part-of-the-change/"
                variant="secondary"
                isExternalLink
              >
                Join the movement
              </Button>
              <Button
                className="text-sm"
                href="https://donate.slowfood.com/en/"
                isExternalLink
              >
                Donate
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile */}
      <Dialog open={open} onClose={setOpen} className="relative z-10 lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-50" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex w-full">
              <DialogPanel
                transition
                className="pointer-events-auto w-full transform transition duration-500 ease-in-out data-[closed]:translate-x-full"
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-primaryNeutral py-6 shadow-xl dark:bg-red-950">
                  <div className="px-4 md:px-12">
                    <div className="flex items-center justify-between">
                      <Logo white />
                      <div className="flex justify-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryNeutral dark:focus:ring-white"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-10 flex-1 px-8 md:px-12">
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {mainMenuData.map((item) => (
                              <li key={item.title}>
                                <Link
                                  onClick={() => setOpen(false)}
                                  key={item.title}
                                  href={item.href}
                                  className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-100 hover:bg-gray-100 hover:text-primaryNeutral dark:hover:bg-gray-900 dark:hover:text-white"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                    <div className="mt-10 flex flex-col items-start space-y-6">
                      <Button
                        onClick={() => setOpen(false)}
                        className="text-sm"
                        href="/#form"
                        isWhite
                      >
                        Get our newsletter
                      </Button>
                      <Button
                        onClick={() => setOpen(false)}
                        className="text-sm"
                        href="mailto:xxx[at]slowfood.is"
                        variant="secondary"
                        isWhite
                      >
                        Contact us
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </section>
  )
}
