import React, { ReactNode } from 'react'

type TooltipProps = {
  text: string
  className?: string
  children?: ReactNode
}

export const Tooltip = ({ text, className = '', children }: TooltipProps) => {
  return (
    <div className={`group relative ${className}`}>
      {children}
      <div className="absolute bottom-full left-1/2 z-10 mb-2 hidden -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white group-hover:block">
        {text}
      </div>
    </div>
  )
}
