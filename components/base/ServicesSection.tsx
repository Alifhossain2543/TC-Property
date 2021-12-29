import React from 'react'
import TitleSearch from '../../public/titlesearch.jpg'
import Comparablehome from '../../public/comparablemarket.jpg'
import Buildinginfo from '../../public/buildinginfo.jpg'
import Doublecheck from '../../public/doublecheck.jpg'
import Image from 'next/image'
import {motion} from 'framer-motion'

const services = [
  {
    name: "Title Search",
    desc: "We provide you the most accurate title search. You'll get all the information about which lien is currently active and how much is the debt and what's the loan term. We provide you the accurate amortization of these liens. You'll get a report of the current lender. As always you'll get a copy of Deed Of Trust and all related files (Assignment and the STR).",
    image: TitleSearch,
  },
  {
    name: "Comparable Market Analysis",
    desc: "We have a seperate team to perform a comparable merket analysis. They'll provide you the most accurate comparable homes and their zestimates. They'll go over all the listing sites to analyze what's the given values are. You'll get the most reliable CMA by choosing this service.",
    image: Comparablehome,
  },
  {
    name: "Collect Building information",
    desc: "By choosing this service you'll get all the building information about the property you're interested in. You'll get every information from year-built to Owner information and the Deeds. Our team follow up the official sites to get all the information.",
    image: Buildinginfo,
  },
  {
    name: "Accurate Report!",
    desc: "You want a MOST MOST MOST accurate report? Then, here you go. This is a service where our most experienced memebers perform a double check before you get the report. They check everything form start to end and make sure everything is at it's right state.",
    image: Doublecheck,
  },
]

const ServicesSection = () => {
  const variants = {
    offscreen: {
      y: "100%",
    },
    onscreen: {
      y: 0,
      
      transition: {
        type: "spring",
  
        duration: 0.7,
      },
    },
  }
    return (
      <div className="mt-[15px]">
        <h1 className="text-[25px] lg:text-[30px] text-center text-primary-light uppercase font-extrabold">
          Our Services :
        </h1>
        <div className="lg:flex lg:flex-wrap lg:pl-[80px] lg:pr-[80px] lg:pt-[10px] lg:pb-[10px] justify-around m-[20px] items-center ">
          {services.map(({ name, desc, image }, inx) => {
            return (
              <motion.div

                key={inx}
                className="lg:w-[40%] flex flex-col gap2  mt-10 mb-10"
                viewport={{ once: true, amount: 0 }}
                whileInView="onscreen"
                initial="offscreen"
                variants={variants}
              >
                <Image
                placeholder="blur"
                  width={100}
                  height={100}
                  src={image}
                  alt={name}
                  className="mb-[10px] object-contain select-none"
                />
                <h1 className="text-[25px] opacity-[0.8] font-extrabold text-center mt-20px] ">
                  {name}
                </h1>
                <p className="opacity-[0.7] text-[15px] p-5 text-center">
                  {desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    )
}

export default ServicesSection
