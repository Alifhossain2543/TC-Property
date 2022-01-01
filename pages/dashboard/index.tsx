import React, { useEffect, useState } from "react"
import { NextPage } from "next"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import Link from "next/link"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
}

const Dashboard: NextPage = () => {
  const [greetings, setGreetings] = useState("")
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  const monthNumber: number[] = []
  const hours = new Date().getHours()
  const getMonth = new Date().getMonth()
  const currentMonth = getMonth + 1

  if (currentMonth > 5) {
    const target = +currentMonth - 6
    for (let i = target; i < +currentMonth; i++) {
      monthNumber.push(i)
    }
  } else if (currentMonth <= 5) {
    const arrayLength = 6

    for (let i = 0; i < currentMonth; i++) {
      monthNumber.push(i)
    }

    for (let i = 11; i > currentMonth; i--) {
      if (monthNumber.length !== arrayLength) {
        monthNumber.unshift(i)
      }
    }
  }

  const monthToDisplay = monthNumber.map((i) => months[i] )



  const labels = [...monthToDisplay]

  const data = {
    labels,
    datasets: [
      {
        label: "Total Request",
        data: [20, 45, 0, 100, 220, 40],
        borderColor: "#e53935",
        backgroundColor: "#e5393566",
      },
      {
        label: "Pending Request",
        data: [77, 23, 4, 123, 199, 56],
        borderColor: "#ef6c00",
        backgroundColor: "#ef6c0066",
      },
      {
        label: "Completed Request",
        data: [122, 232, 77, 14, 18, 6],
        borderColor: "#6effff",
        backgroundColor: "#6effff66",
      },
    ],
  }

  useEffect(() => {
    if (hours > 4 && hours < 12) {
      setGreetings("Good Morning")
    } else if (hours >= 15 && hours <= 17) {
      setGreetings("Good Afternoon")
    } else if (hours > 17 && hours <= 19) {
      setGreetings("Good Evening")
    } else {
      setGreetings("Welcome")
    }
  }, [hours])

  return (
    <div className="dPage">
      <div className="w-full p-[5px]">
        <h4
          className="opacity-[0.7] font-extrabold
         text-[16px]"
        >
          {greetings},
        </h4>
        <h1 className="text-[30px] opacity-[0.7] text-primary-light font-extrabold ml-[30px]">
          John Doe
        </h1>
      </div>

      <div className="flex w-full font-extrabold gap-[20px] text-[14px] underline text-right justify-end">
        <h4 className="text-card-color hover:text-card-color-dark">
          <Link href={"/dashboard/new-request"}>New Request</Link>
        </h4>
        <h4 className="text-card-color hover:text-card-color-dark">
          <Link href={"/dashboard/manage-account"}>Manage Account</Link>
        </h4>
      </div>

      <div
        className="flex items-center justify-center
       flex-wrap mt-[30px] gap-[30px] "
      >
        {/* Request sent */}
        <div className="flex-col items-center justify-center">
          <div className="card hover:shadow-[0px_0px_10px] hover:shadow-text-color/[0.7] flex items-center justify-center shadow-[0px_0px_8px] shadow-text-color/[0.3]">
            <h1 className="text-center text-[40px] text-primary/[0.8]">0</h1>
          </div>
          <h4 className="text-center hover:text-primary/[0.8] cursor-pointer hover:after:ml-[10px] transition-all duration-500 ease-in-out hover:after:content-['>'] text-primary mt-[5px] text-[13px] text-text-color/[0.8] font-extrabold">
            <Link href="/dashboard/request-list"> Pendign Request</Link>
          </h4>
        </div>
        {/* Request Pending */}
        <div className="flex-col items-center justify-center">
          <div className="card hover:shadow-[0px_0px_10px] hover:shadow-text-color/[0.7]  flex items-center justify-center shadow-[0px_0px_8px] shadow-text-color/[0.3] ">
            <h1 className="text-center text-[25px] text-primary/[0.8]">
              $1,920.00
            </h1>
          </div>
          <h4 className="text-center hover:text-primary/[0.8] cursor-pointer hover:after:ml-[10px] transition-all duration-500 ease-in-out hover:after:content-['>'] text-primary mt-[5px] text-[13px] text-text-color/[0.8] font-extrabold">
            <Link href="/dashboard/completed-list">Total Spent</Link>
          </h4>
        </div>
        {/* Reviews Pending */}
        <div className="flex-col items-center justify-center">
          <div className="card hover:shadow-[0px_0px_10px] hover:shadow-text-color/[0.7]  flex items-center justify-center shadow-[0px_0px_8px] shadow-text-color/[0.3] ">
            <h1 className="text-center text-[40px] text-primary/[0.8]">0</h1>
          </div>
          <h4 className="text-center hover:text-primary/[0.8] cursor-pointer hover:after:ml-[10px] transition-all duration-500 ease-in-out hover:after:content-['>'] text-primary mt-[5px] text-[13px] text-text-color/[0.8] font-extrabold">
            <Link href="/dashboard/reviews">Pendign Reviews</Link>
          </h4>
        </div>{" "}
        {/* Recent Notification */}
        <div className="flex-col items-center justify-center">
          <div className="card hover:shadow-[0px_0px_10px] hover:shadow-text-color/[0.7]  flex items-center justify-center shadow-[0px_0px_8px] shadow-text-color/[0.3] !w-[250px] ">
            <h1 className="text-center text-[40px] text-primary/[0.8]">0</h1>
          </div>
          <h4 className="text-center hover:text-primary/[0.8] cursor-pointer hover:after:ml-[10px] transition-all duration-500 ease-in-out hover:after:content-['>'] text-primary mt-[5px] text-[13px] text-text-color/[0.8] font-extrabold">
            <Link href="/dashboard/notifications">Unread Notification</Link>
          </h4>
        </div>
        {/* Graph */}
      </div>
      <div className="m-[20px] mt-[50px] flex-col">
        <h4
          className="text-center font-extrabold
     text-primary/[0.8]"
        >
          Activities :
        </h4>

        <div className="mt-[5px] flex p-[20px] items-center justify-center">
          <div className="w-[60%]">
            <Line options={options} data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
