import Image from 'next/image'
import { useTheme } from 'next-themes'

import { Link } from '@/components/NextLink'
import { useSetActivePage } from '@/hooks/useSetActivePage'

type Props = {
  logoClassName?: string
  white?: boolean
}

export const Logo = ({ logoClassName, white }: Props) => {
  useSetActivePage()
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === 'dark'

  return (
    <div className="flex justify-start lg:flex-1">
      <Link href="/">
        <span className="sr-only">Slow Food Reykjavík</span>
        <Image
          className={logoClassName?.toString()}
          src={
            white || isDarkMode
              ? '/slowfood-reykjavík-logo-white.png'
              : '/slowfood-reykjavík-logo.png'
          }
          alt="Slow Food Reykjavík logo"
          width={125}
          height={23}
          style={{ width: 'auto', height: 'auto' }}
          placeholder="blur"
          blurDataURL={
            white ? '/slowfood-reykjavík-logo-white.png' : '/slowfood-reykjavík-logo.png'
          }
        />
      </Link>
    </div>
  )
}
