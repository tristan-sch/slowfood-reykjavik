type PageProps = {
  gridContent: Array<{
    title: string
    content: string
  }>
}

export const GridList = ({ gridContent }: PageProps) => {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {gridContent.map((item) => (
        <div key={item.title} className="group relative bg-white p-6 dark:bg-black">
          <div />
          <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-200">
              {item.content}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
          />
        </div>
      ))}
    </div>
  )
}
