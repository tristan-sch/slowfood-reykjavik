import { createContext, ReactNode, useEffect, useState } from 'react'
import { getCookie, setCookie } from 'cookies-next'
import { ThemeProvider, useTheme } from 'next-themes'

type AppContextProps = {
  previousPathname?: string
  isSamePreviousPathname?: boolean
  activePage: string
  setActivePage: (pageName: string) => void
}

const ThemeWatcher = () => {
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const onMediaChange = () => {
      const systemTheme = media.matches ? 'dark' : 'light'
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }

    onMediaChange()
    media.addEventListener('change', onMediaChange)

    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export const AppContext = createContext<AppContextProps>({
  activePage: '',
  setActivePage: () => {},
})

export const Providers = ({ children }: { children: ReactNode }) => {
  const [activePage, setActivePageState] = useState('')

  const setActivePage = (pageName: string) => {
    setCookie('activePage', pageName)
    setActivePageState(pageName)
  }

  useEffect(() => {
    const activePage = getCookie('activePage')
    if (activePage) {
      setActivePageState(activePage)
    }
  }, [])

  return (
    <ThemeProvider attribute="class">
      <AppContext.Provider value={{ activePage, setActivePage }}>
        <ThemeWatcher />
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  )
}
