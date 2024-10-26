import { ComponentPropsWithoutRef, FC } from 'react'

import { Link } from '@/components/NextLink'

type ButtonProps = {
  isSubmit?: boolean
  className?: string
  isWhite?: boolean
  isExternalLink?: boolean
} & (
  | ComponentPropsWithoutRef<typeof Link>
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
)

const primaryRedClass = `bg-primaryNeutral text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white`
const primaryWhiteClass = `bg-white text-gray-900 hover:bg-primaryNeutral hover:text-white dark:bg-white dark:hover:bg-gray-700`

const baseClasses = `items-center justify-center whitespace-nowrap rounded-md px-3.5 py-2.5 text-base font-semibold leading-6 transition-all duration-300 ease-in-out`
const focusClasses = `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryNeutral`
const typeClasses = `${baseClasses} ${focusClasses} border border-transparent shadow-sm hover:shadow-md`

const variantMapping: Record<string, string> = {
  'primary-red': primaryRedClass,
  'primary-white': primaryWhiteClass,
}

export const PrimaryButton: FC<ButtonProps> = ({
  isSubmit = false,
  className = '',
  isWhite = false,
  isExternalLink = false,
  children,
  ...props
}) => {
  const variantKey = `primary-${isWhite ? 'white' : 'red'}`
  const buttonClasses = `${typeClasses} ${variantMapping[variantKey]} ${className}`

  return typeof props.href === 'undefined' ? (
    <button className={buttonClasses} type={isSubmit ? 'submit' : 'button'} {...props}>
      {children}
    </button>
  ) : (
    <Link
      className={buttonClasses}
      {...props}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noreferrer' : undefined}
    >
      {children}
    </Link>
  )
}
