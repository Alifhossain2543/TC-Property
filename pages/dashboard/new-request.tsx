import { NextPage } from 'next'
import React from 'react'
import {Tooltip} from '@chakra-ui/react'

const NewRequest : NextPage = () => {

const requestHandler = (e : any) => {
e.preventDefault()
    console.log(e)
}
    return (
      <div className="dPage">
        <h1 className="text-center mt-[30px] text-primary-light/[0.8] font-extrabold text-[25px]">
          Describe your request :{" "}
        </h1>
        <div className="w-full">
          <form className="flex-col" onSubmit={requestHandler}>
            <div className="gap-[40px] flex justify-center flex-wrap mt-[40px]">
              <div>
                <label
                  className="block text-text-color/[0.8] font-extrabold text-[18px] mb-2 "
                  htmlFor="state"
                >
                  Select State :{" "}
                  <Tooltip label="We're currently working on other States." placement='right' className='!bg-primary-light/[0.8]' >
                    <span className="pl-[10px] cursor-pointer">?</span>
                  </Tooltip>
                  {/* <span className='text-[10] rounded-full bg-primary-light p-[10px] ml-[10px] cursor-pointer'>?</span> */}
                </label>
                <select
                  className="bg-text-color-dark border-b-2  pt-2 pb-2 outline-none border-primary-light/[0.8]"
                  name="state"
                  id="state"
                >
                  <option value="select">Select</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="Texas">Texas</option>
                </select>
              </div>
              <div>
                <label
                  className="block mb-2 text-text-color/[0.8] font-extrabold text-[18px]"
                  htmlFor="county"
                >
                  County Name :
                </label>
                <input
                  placeholder="Put County Name"
                  className="bg-text-color-dark border-b-2 w-[150px] pt-2 pb-1 outline-none border-primary-light/[0.8]"
                  name="county"
                  id="county"
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-text-color/[0.8] font-extrabold text-[18px]"
                  htmlFor="property"
                >
                  Property Address :
                </label>
                <input
                  placeholder="Put property address"
                  className="bg-text-color-dark border-b-2 w-[250px] pt-2 pb-1 outline-none border-primary-light/[0.8]"
                  name="property"
                  id="property"
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-[40px]">
              <div className="flex-col">
                <h1 className="text-primary-light/[.7] font-extrabold text-center text-[20px]">
                  Select Services :
                </h1>
                <div className="mt-[20px] flex-wrap items-center justify-center flex gap-20 ">
                  <div className="mt-[10px] text-text-color/[0.8] hover:text-primary-light/[0.8]  mb-[10px]">
                    <label
                      className="mr-[10px] cursor-pointer text-[14px] font-bold "
                      htmlFor="title"
                    >
                      Title Search
                    </label>
                    <input
                      className="border-b-2 cursor-pointer pt-2 pb-1 outline-none border-primary-light/[0.8]"
                      name="property"
                      type="checkbox"
                      id="title"
                    />
                  </div>

                  <div className="mt-[10px] text-text-color/[0.8] hover:text-primary-light/[0.8]  mb-[10px]">
                    <label
                      className="mr-[10px] cursor-pointer text-[14px] font-bold "
                      htmlFor="market"
                    >
                      Market Analysis
                    </label>
                    <input
                      className="border-b-2 cursor-pointer pt-2 pb-1 outline-none border-primary-light/[0.8]"
                      name="property"
                      type="checkbox"
                      id="market"
                    />
                  </div>

                  <div className="mt-[10px] text-text-color/[0.8] hover:text-primary-light/[0.8]  mb-[10px]">
                    <label
                      className="mr-[10px] cursor-pointer text-[14px] font-bold "
                      htmlFor="building"
                    >
                      Building Info
                    </label>
                    <input
                      className="border-b-2 cursor-pointer pt-2 pb-1 outline-none border-primary-light/[0.8]"
                      name="property"
                      type="checkbox"
                      id="building"
                    />
                  </div>

                  <div className="mt-[10px] text-text-color/[0.8] hover:text-primary-light/[0.8]  mb-[10px]">
                    <label
                      className="mr-[10px] cursor-pointer text-[14px] font-bold "
                      htmlFor="double"
                    >
                      Double Report
                    </label>
                    <input
                      className="border-b-2 cursor-pointer pt-2 pb-1 outline-none border-primary-light/[0.8]"
                      name="property"
                      type="checkbox"
                      id="double"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex-col items-center placeholder:text-[12px] justify-center">
                <h1 className="mb-[10px] text-primary/[0.8] font-extrabold mt-[40px]">
                  Desscription :
                </h1>
                <textarea
                  maxLength={1000}
                  rows={5}
                  className="border-2 text-[14px] outline-none border-primary-light/[0.8] p-[5px] placeholder:text-[12px] w-[300px] md:w-[500px] lg:w-[600px] "
                  placeholder="Describe if you need any additional services or which format you want to recieve it...(Max - 1000w)"
                />
              </div>
            </div>
            <div className="flex mt-[5px] items-center justify-center">
              <button type="submit" className="headerBtn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default NewRequest
