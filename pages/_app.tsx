import '../styles/globals.css'
import '../components/style/kontakt.css';
import '../components/style/products.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
