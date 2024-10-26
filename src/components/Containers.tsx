import React, { ReactNode } from 'react'

type ContainerProps = {
  id?: string
  className?: string
  children?: ReactNode
}

export const ContainerWithBackground = ({
  id,
  className = '',
  children,
  ...props
}: ContainerProps) => {
  return (
    <div
      id={id}
      className={`rounded-lg bg-gray-100 px-12 py-20 md:px-24 lg:px-16 dark:border dark:border-gray-400 dark:bg-red-950 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
