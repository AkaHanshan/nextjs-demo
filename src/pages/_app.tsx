import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { globalData } from '@/data/globalData'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme={globalData.theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
