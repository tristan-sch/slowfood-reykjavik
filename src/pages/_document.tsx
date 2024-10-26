import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="h-full text-base antialiased dark:bg-red-950">
      <Head />
      <body className="flex min-h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
