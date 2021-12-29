import React, { useEffect, useState } from "react"
import Image from "next/image"
import logo from "../../public/favicon.png"
import { useRouter } from "next/router"
import { RootState } from "../../store/store"
import { useDispatch, useSelector } from "react-redux"
import { changeLocation } from "../../store/uiSlice"
import UserImage from '../../public/titlesearch.jpg'
import Link from "next/link"
const Header = () => {
  const [isLoggedin, setIsLoggedIn] = useState(true)
  const dispatch = useDispatch()
  const location = useSelector((state: RootState) => state.location.location)

  const router = useRouter()

  const parthName = router.pathname

  const redirect = (e: any) => {
    if (parthName !== "/") {
      const redirectTo = e.target?.getAttribute("data-id")
      dispatch(changeLocation(redirectTo))
      router.push(`/#${redirectTo}`)
    }
  }

  useEffect(() => {
    if (parthName != "/") {
      dispatch(changeLocation(""))
    }
  }, [parthName, dispatch])

  return (
    <div className="sticky backdrop-blur-[7px] top-0 left-0 h-[8vh] flex items-center pl-5 pr-5 justify-between shadow-sm overflow-hidden z-10">
      <div className="flex items-center md:justify-start md:w-[30%] h-full font-extrabold gap-3 w-[60%] text-[15px] justify-start md:pl-[40px] select-none">
        <Image
          onClick={() => router.push("/")}
          src={logo}
          placeholder="blur"
          alt="logo"
          height={40}
          width={40}
          className="cursor-pointer"
        />
        <h1
          className="text-primary-light cursor-pointer hover:text-secondary opacity-[0.7] hover:opacity-[1] text-[18px]"
          onClick={() => router.push("/")}
        >
          TC Searcher
        </h1>
      </div>
      <div className="flex h-full w-[70%] justify-end gap-20">
        {/*Nav Items */}
        <nav className="hidden md:flex h-full">
          <ul className="flex items-center h-full gap-[50px] text-[15px]">
            <li
              className={`navlink ${
                parthName == "/" && location == "home" ? "active" : ""
              }`}
            >
              {" "}
              <a onClick={redirect} href="#home" data-id="home">
                {" "}
                Home{" "}
              </a>
            </li>
            <li
              className={`navlink ${
                parthName == "/" && location == "services" ? "active" : ""
              }`}
            >
              <a onClick={redirect} data-id="services" href="#services">
                {" "}
                Services{" "}
              </a>
            </li>
          </ul>
        </nav>
        {!isLoggedin ? (
          <div className="headerBtn self-center">
            <Link href="/signin">Login/Signup</Link>
          </div>
        ) : (
          <div
            onClick={() => router.push("/dashboard")}
            className={`navlink ${
              parthName.includes("dashboard") ? "active" : ""
            } flex gap-2 items-center justify-center self-center`}
          >
            <Image
              width={35}
              height={35}
              className="rounded-full shadow-2xl ring-inset ring-primary-light object-cover"
              src={UserImage}
              alt="avatar"
            />
            <Link href="/dashboard">Dashboard</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
