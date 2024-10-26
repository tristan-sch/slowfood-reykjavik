import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ContainerWithBackground } from '@/components/Containers'

type PageProps = {
  children?: ReactNode
  title?: string
  subtitle?: string
}

export const Page: FC<PageProps> = ({ children, title, subtitle }) => {
  const { asPath } = useRouter()
  return (
    <>
      <Breadcrumbs asPath={asPath} />
      <div className="pb-20 pt-10 xl:relative">
        <ContainerWithBackground>
          <div>
            {title && (
              <div className="mx-auto my-10 max-w-3xl text-center">
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">{title}</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100">
                  {subtitle}
                </p>
              </div>
            )}
            {children}
          </div>
        </ContainerWithBackground>
      </div>
    </>
  )
}
