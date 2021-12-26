import { closeSync } from 'fs'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import {useInView} from 'react-intersection-observer'
import { useDispatch } from 'react-redux'
import {changeLocation}from "../store/uiSlice"
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const dispatch = useDispatch()
    const router = useRouter()

    const parthName = router.pathname

const {ref : homeRef, inView : homInView, entry: homeEntry} = useInView({threshold : 0.5})
const {
  ref: servicesRef,
  inView: servicesInView,
  entry: servicesEntry,
} = useInView({ threshold: 0.5 })
const {
  ref: expertiseRef,
  inView: expertiseInview,
  entry: expertiseEntry,
} = useInView({ threshold: 0.5 })

  // const home = homeEntry?.target.id
  // const services = servicesEntry?.target.id
  // const expertise = expertiseEntry?.target.id

//   console.log(
//     homInView + "Home in view"
//   )
//   console.log(servicesInView + "Services in view")
// console.log(expertiseInview + "Expertise in view")

useEffect(() => {
 
  if(homInView && servicesInView) {
    dispatch(changeLocation("home"))
  }else if(homInView && !servicesInView) {
        dispatch(changeLocation("home"))

  }else if(!homInView && servicesInView) {
        dispatch(changeLocation("services"))
  }else if (servicesInView && expertiseInview) {
            dispatch(changeLocation("services"))

  }else if (servicesInView && !expertiseInview) {
                dispatch(changeLocation("services"))

  }else if (!servicesInView && expertiseInview) {
    dispatch(changeLocation("expertise"))
  }

}, [homInView,
servicesInView,
expertiseInview, dispatch, parthName])

  return (
    <>
      {/* Main Content */}
      <section ref={homeRef} id="home" className="h-[80vh]">
        <h1 className="text-3xl text-text-color font-bold">This is home!</h1>
      </section>

      <section ref={servicesRef} id="services" className="h-[80vh]">
        <h1 className="text-3xl text-text-color font-bold">This is Service!</h1>
      </section>

      <section ref={expertiseRef} id="expertise" className="h-[80vh]">
        <h1 className="text-3xl text-text-color font-bold">
          This is Expertise!
        </h1>
      </section>
    </>
  )
}

export default Home
