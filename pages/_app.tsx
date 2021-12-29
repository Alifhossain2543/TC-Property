import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/base/Header'
import Footer from '../components/base/Footer'
import { store } from "../store/store"
import { Provider } from "react-redux"
import ProgressBar from "@badrap/bar-of-progress"
import Router from 'next/router'
import {useRouter} from 'next/router'
import DashboardOptions from '../components/base/DashboardOptions'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pathnanme = router.pathname
  const progress = new ProgressBar({
  size: 1,
  color: "#e53935",
  className: "bar-of-progress",
  delay: 100,
})
  Router.events.on("routeChangeStart", progress.start)
  Router.events.on("routeChangeComplete", progress.finish)
  Router.events.on("routeChangeError", progress.finish)
  
  return (
    <Provider store={store}>
      <Header />
      {pathnanme.includes("/dashboard") ? (
        <div className='flex bg-card-two'>
          <DashboardOptions />

          <Component {...pageProps} />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
      <Footer />
    </Provider>
  )
}

export default MyApp
