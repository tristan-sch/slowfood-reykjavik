import { useContext, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { AppContext } from '@/context/providers'

/** Necessary to know what styles to apply */
export const useSetActivePage = () => {
  const pathname = usePathname()
  const { setActivePage } = useContext(AppContext)

  useEffect(() => {
    const pageName = pathname === '/' ? 'HomePage' : pathname.replace('/', '')
    setActivePage(pageName)
  }, [pathname, setActivePage])
}
