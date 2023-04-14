import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { globalData } from '@/data/globalData'
import { Navbar } from '@/components/navBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme={globalData.theme}>
      {/* make sure the navBar is on the top */}
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
