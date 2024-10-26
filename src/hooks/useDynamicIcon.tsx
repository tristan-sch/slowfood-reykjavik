import { ComponentType, SVGProps } from 'react'
import * as HeroIcons from '@heroicons/react/24/outline'

type HeroIconType = {
  [K in keyof typeof HeroIcons]?: ComponentType<SVGProps<SVGSVGElement>>
}

export const useDynamicIcon = (
  iconName: keyof HeroIconType,
): ComponentType<SVGProps<SVGSVGElement>> | null => {
  // Safely access the icon using the iconName as a key
  const Icon = HeroIcons[iconName] as ComponentType<SVGProps<SVGSVGElement>> | undefined

  return Icon || null
}
