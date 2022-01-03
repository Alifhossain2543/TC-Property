import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const ErrorPage : NextPage = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      router.push("/")
      
    }, [router])

    return (
      <>
        {isLoading ? (
          <div className="dPage flex items-center justify-center text-[40px] text-center">
            <AiOutlineLoading3Quarters className="animate-spin" />
          </div>
        ) : (
          <>
            {" "}
            <div className="dPage flex items-center justify-center text-center">
              Page Not Found.
            </div>{" "}
          </>
        )}
      </>
    )
}

export default ErrorPage
