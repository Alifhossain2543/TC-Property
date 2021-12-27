import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import Homesection from '../../public/homesection.jpg'

const HomeSection = () => {
    return (
      <div className="flex justify-center items-center md:flex-row flex-col-reverse md:justify-between mb-[40px]">
        {/* Title and image for home section */}
        <div className="flex flex-col lg:w-[50%] p-[50px] w-full items-center justify-center">
          <h1 className='md:text-[30px] lg:text-[40px] uppercase text-primary-light font-extrabold mb-[20px]'>Get The Information You are Lookingn For!!! </h1>
          <p className='opacity-[0.8] text-[14px] mb-[20px] leading-[25px]'>
            We are a company to help you to get all kind of information about
            the property you are interested in. We have experienced Title
            searcher, Comparable Market analyzer and property infomation
            collector (Tax owed, Tax assessed, Building information and
            Zestimates compare from other sites) who have been working on this
            field for years. We are available 24/7 to deliver you the information <strong className='text-primary-light text-[14px] lg:text-[18px]'>You are looking for!!! </strong> You will get the most accurate
            report possible within a very short time.
          </p>

          <div className="headerBtn w-[200px] mt-[20px]">
            <Link href="/">Get A Free Report!</Link>
          </div>
        </div>
        <div className='w-[70%] lg:w-[50%] flex'>
          <Image
            className='self-center object-contain'
            src={Homesection}
            alt="home section image"
          />
        </div>
      </div>
    )
}

export default HomeSection
