import React, {useState} from "react"
import { BsArrowLeftShort } from "react-icons/bs"
import { BiAddToQueue } from "react-icons/bi"
import { AiOutlineFileDone } from "react-icons/ai"
import { BsListTask } from "react-icons/bs"
import { MdNotificationsNone, MdOutlineManageSearch } from "react-icons/md"
import { FiLogOut, FiActivity } from "react-icons/fi"
import { useRouter } from "next/router"
import Image from "next/image"

import UserImage from "../../public/titlesearch.jpg"

const DashboardOptions = () => {
    const [isToggled, setIsToggled] = useState(true)
  const router = useRouter()
  const pathname = router.pathname
const dashboardOptions = [
  { Icon: FiActivity, name: "Activity", path: "/dashboard" },
  { Icon: BiAddToQueue, name: "New Request", path: "/dashboard/new-request" },
  { Icon: BsListTask, name: "Request List", path: "/dashboard/request-list" },
  {
    Icon: AiOutlineFileDone,
    name: "Completed List",
    path: "/dashboard/completed-list",
  },
  {
    Icon: MdOutlineManageSearch,
    name: "Manage Request",
    path: "/dashboard/manage-request",
  },
  {
    Icon: MdNotificationsNone,
    name: "Notifications",
    path: "/dashboard/notifications",
  },
]

  return (
    <div
      className={`flex rounded-lg transition-all duration-200 ease-in-out ${
        isToggled ? "w-[40px] md:w-[75px]" : "w-[100px] md:w-[200px]"
      } relative h-[90vh] items-center justify-center`}
    >
      {/* Options */}

      <div className="w-[100%] h-[90%] pt-[60px] pb-[20px] relative">
        <ul className="text-center w-[100%] flex-col">
          {dashboardOptions.map(({ name, Icon, path }, inx) => {
            return (
              <li
                onClick={() => router.push(path)}
                key={inx}
                className={`opacity-[0.7] hover:opacity-[1] cursor-pointer hover:bg-primary-light hover:border-l-4 md:hover:border-l-8 hover:border-text-color-light hover:text-text-color-dark ${
                  pathname == path
                    ? "opacity-[1] bg-primary-light border-l-4 md:border-l-8 border-text-color-light text-text-color-dark"
                    : ""
                } mt-[10px] mb-[20px] p-[5px] flex items-center ${
                  isToggled ? "justify-center" : "justify-start"
                } gap-[10px] font-bold`}
              >
                <Icon
                  size={`${isToggled ? 30 : 25}`}
                  className="transition-all duration-200 ease-in-out"
                />{" "}
                <p
                  className={`transition-all duration-200 ease-in-out ${
                    isToggled ? "text-[0px]" : "text-[10px] md:text-[14px]"
                  } `}
                >
                  {name}
                </p>
              </li>
            )
          })}
        </ul>

        <div
          className={`cursor-pointer hover:text-primary-dark text-primary-light mt-[10px] mb-[20px] p-[5px] flex items-center ${
            isToggled ? "justify-center" : "justify-start"
          } gap-[10px] font-bold`}
        >
          <FiLogOut
            size={`${isToggled ? 30 : 25}`}
            className="transition-all duration-200 ease-in-out"
          />
          <p
            className={`transition-all duration-200 ease-in-out ${
              isToggled ? "text-[0px]" : "text-[10px] md:text-[14px]"
            } `}
          >
            Logout
          </p>
        </div>

        {/* manage account */}
        <div
          className={`cursor-pointer absolute shadow-xl bottom-0 left-0 bg-text-color-dark rounded-full hover:text-primary-dark text-primary-light mt-[10px] mb-[20px] p-[7px] flex items-center ${
            isToggled ? "justify-center" : "justify-start"
          } gap-[10px] font-bold`}
        >
          <Image
            width={25}
            height={25}
            alt="user"
            src={UserImage}
            className="transition-all self-center duration-200 ease-in-out rounded-full shadow-2xl ring-inset ring-primary-light object-cover"
          />
          <p
            className={`transition-all text-primary-light duration-200 ease-in-out ${
              isToggled ? "text-[0px]" : "text-[10px] md:text-[14px]"
            } `}
          >
            Manage Account
          </p>
        </div>
      </div>

      {/* Toggle button */}
      <div
        onClick={() => setIsToggled(!isToggled)}
        className="absolute hover:bg-text-color-dark
   hover:border-primary-light cursor-pointer text-[24px] text-text-color top-[50px] bg-card-two right-[-20px] hover:text-primary-light  p-[10px] rounded-full "
      >
        <BsArrowLeftShort
          className={`transition-all duration-500 ease-in-out ${
            isToggled ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
    </div>
  )
}

export default DashboardOptions
