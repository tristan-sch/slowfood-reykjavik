type SectionHeaderProps = {
  headingId: string
  headingText: string
  highlightText: string
  description: string
  className?: string
}

export const SectionHeader = ({
  headingId,
  headingText,
  highlightText,
  description,
  className = '',
}: SectionHeaderProps) => {
  return (
    <div className={`mb-10 ${className}`}>
      <h2
        id={headingId}
        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
      >
        {headingText}{' '}
        <span className="text-primaryNeutral dark:text-white dark:underline dark:underline-offset-8">
          {highlightText}
        </span>
      </h2>
      <p className="mt-4 text-gray-500 dark:text-white">{description}</p>
    </div>
  )
}
