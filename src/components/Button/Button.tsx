import { ComponentPropsWithoutRef, FC } from 'react'

import { Link } from '@/components/NextLink'

import { PrimaryButton } from './PrimaryButton'
import { SecondaryButton } from './SecondaryButton'

type ButtonVariant = 'primary' | 'secondary'
type ButtonProps = {
  variant?: ButtonVariant
  isSubmit?: boolean
  className?: string
  isWhite?: boolean
  isExternalLink?: boolean
} & (
  | ComponentPropsWithoutRef<typeof Link>
  | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
)

export const Button: FC<ButtonProps> = (props) => {
  const { variant = 'primary' } = props

  if (variant === 'primary') {
    return <PrimaryButton {...props} />
  }

  return <SecondaryButton {...props} />
}
