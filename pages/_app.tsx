import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/base/Header'
import Footer from '../components/base/Footer'
import { store } from "../store/store"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
  <Provider store={store}>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </Provider>
  )
}

export default MyApp
