import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import {useInView} from 'react-intersection-observer'
import { useDispatch, useSelector } from 'react-redux'
import {changeLocation}from "../store/uiSlice"
import { useRouter } from 'next/router'
import HomeSection from '../components/base/HomeSection'
import ServicesSection from '../components/base/ServicesSection'
import { RootState } from "../store/store"

const Home: NextPage = () => {
  const dispatch = useDispatch()
    const router = useRouter()
    const location = useSelector((state: RootState) => state.location.location)
    const parthName = router.pathname

const {ref : homeRef, inView : homInView} = useInView({threshold : 0.2})
const {
  ref: servicesRef,
  inView: servicesInView,
} = useInView({ threshold: 0.2 })

useEffect(() => {
 
  if(homInView && servicesInView) {

    dispatch(changeLocation("home"))
  }else if(homInView && !servicesInView) {

        dispatch(changeLocation("home"))

  }else if(!homInView && servicesInView) {
        dispatch(changeLocation("services"))
  }


}, [homInView,
servicesInView,
 dispatch, parthName])

  return (
    <>
      <section ref={homeRef} id="home" className="p-10 relative">
        <HomeSection />
        <div className="fixed left-[5px] top-[50%] md:hidden">
          <div
            className={`first border-primary-light hover:bg-primary-light ${
              location == "home" ? "bg-primary-light" : ""
            } border-4 h-[20px] w-[20px] rounded-full cursor-pointer`}
            onClick={() => router.push("/#home")}
          ></div>
          <div
            className={`second border-card-two-light  ${
              location == "services" ? "bg-card-two" : ""
            } border-4 hover:bg-card-two  h-[20px] w-[20px] mt-[20px] rounded-full cursor-pointer`}
            onClick={() => router.push("/#services")}
          ></div>
        </div>
      </section>

      <section ref={servicesRef} id="services" className="p-10">
        <ServicesSection />
      </section>

    </>
  )
}

export default Home
