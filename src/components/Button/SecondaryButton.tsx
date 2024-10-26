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

const secondaryRedClass = `border-primaryNeutral text-primaryNeutral hover:border-gray-900 hover:text-gray-900 hover:shadow-md dark:border-gray-100 dark:text-white dark:hover:border-gray-100 dark:hover:text-gray-200 dark:hover:shadow-md`
const secondaryWhiteClass = `border-gray-100 text-white hover:border-gray-100 hover:text-gray-200 hover:shadow-md dark:border-white dark:text-white dark:hover:border-gray-900 dark:hover:text-gray-900 dark:hover:shadow-md`

const baseClasses = `items-center justify-center whitespace-nowrap rounded-md px-3.5 py-2.5 text-base font-semibold leading-6 transition-all duration-300 ease-in-out`
const typeClasses = `${baseClasses} border underline-offset-4`

const variantMapping: Record<string, string> = {
  'secondary-red': secondaryRedClass,
  'secondary-white': secondaryWhiteClass,
}

export const SecondaryButton: FC<ButtonProps> = ({
  isSubmit = false,
  className = '',
  isWhite = false,
  isExternalLink = false,
  children,
  ...props
}) => {
  const variantKey = `secondary-${isWhite ? 'white' : 'red'}`
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
