import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const darkMode = false;
  return (
    <Html lang="en" className={darkMode ? 'dark' : ''}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
