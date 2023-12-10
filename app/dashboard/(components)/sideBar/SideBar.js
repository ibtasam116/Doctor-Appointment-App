"use client";
import img from "../../assets/images/Ellipse31.jpg";
import more from "../../assets/svg/more-square1.svg";
import svg1 from "../../assets/svg/element-2 1.svg";
import svg2 from "../../assets/svg/chart-square.svg";
import svg3 from "../../assets/svg/personalcard.svg";
import svg4 from "../../assets/svg/briefcase.svg";
import svg5 from "../../assets/svg/user-square.svg";
import svg6 from "../../assets/svg/calendar.svg";
import svg7 from "../../assets/svg/frame.svg";
import svg8 from "../../assets/svg/setting-2.svg";
import SideBarList from "../sideBarList/SideBarList";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-24 top-12 sm:top-4 inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
      >
        {show ? (
          <AiOutlineMenu className="w-6 h-6" />
        ) : (
          <AiOutlineClose className="w-6 h-6" />
        )}
      </button>

      <aside
        id="logo-sideba"
        className={`absolute  left-0 z-40 transition-transform -translate-x-full md:translate-x-0 bg-white ${
          show
            ? "hidden md:inline transition-transform "
            : "inline translate-x-0 transition-transform"
        }`}
        aria-label="Sidebar"
      >
        <div className="w-[273px] h-[892px] overflow-y-auto flex flex-col flex-shrink-0 border-r-[1px] border-_borderColor">
          <a href="#" className="flex items-center justify-around my-8">
            <div className="flex items-center justify-between ml-4">
              <Image
                src={img}
                className="w-[52px] h-[52px] mr-3"
                alt="Profile"
              />
              <div className="flex flex-col">
                <span className="text-black text-[18px] font-[700] leading-normal tracking-[0.18px]">
                  ADMIN
                </span>
                <span className="text-_gray text-[13px] font-[400] leading-normal tracking-[0.13px]">
                  Muhamamd Ibtasam
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="w-[30.55px] h-[30.55px] relative">
                <Image src={more} alt="more" />
              </div>
            </div>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/dashboard"
                className={`w-[272px] h-[62px] flex items-center py-4 px-10 relative`}
              >
                <div
                  className={`w-[6px] h-[40px] bg-_main rounded-e-[8px] absolute left-0`}
                ></div>
                <Image src={svg1} className="w-[29px] h-[29px]" alt="icon1" />
                <span className="ml-5 text-[18.971px]">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/doctor"
                className={`w-[272px] h-[62px] flex items-center py-4 px-10 relative`}
              >
                <div
                  className={`w-[6px] h-[40px] bg-_main rounded-e-[8px] absolute left-0`}
                ></div>
                <Image src={svg5} className="w-[29px] h-[29px]" alt="icon1" />
                <span className="ml-5 text-[18.971px]">Doctors</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/patients"
                className={`w-[272px] h-[62px] flex items-center py-4 px-10 relative`}
              >
                <div
                  className={`w-[6px] h-[40px] bg-_main rounded-e-[8px] absolute left-0`}
                ></div>
                <Image src={svg3} className="w-[29px] h-[29px]" alt="icon1" />
                <span className="ml-5 text-[18.971px]">Patients</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`w-[272px] h-[62px] flex items-center py-4 px-10 relative`}
              >
                <div
                  className={`w-[6px] h-[40px] bg-_main rounded-e-[8px] absolute left-0`}
                ></div>
                <Image src={svg2} className="w-[29px] h-[29px]" alt="icon1" />
                <span className="ml-5 text-[18.971px]">Appointments</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`w-[272px] h-[62px] flex items-center py-4 px-10 relative`}
              >
                <div
                  className={`w-[6px] h-[40px] bg-_main rounded-e-[8px] absolute left-0`}
                ></div>
                <Image src={svg6} className="w-[29px] h-[29px]" alt="icon1" />
                <span className="ml-5 text-[18.971px]">Schedule</span>
              </Link>
            </li>
            <div className="border border-dashed border-_borderGray"></div>
            <li>
              <Link
                href="/"
                className={`w-[272px] h-[62px] flex items-center py-4 px-10 relative`}
              >
                <div
                  className={`w-[6px] h-[40px] bg-_main rounded-e-[8px] absolute left-0`}
                ></div>
                <Image src={svg7} className="w-[29px] h-[29px]" alt="icon1" />
                <span className="ml-5 text-[18.971px]">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`w-[272px] h-[62px] flex items-center py-4 px-10 relative`}
              >
                <div
                  className={`w-[6px] h-[40px] bg-_main rounded-e-[8px] absolute left-0`}
                ></div>
                <Image src={svg8} className="w-[29px] h-[29px]" alt="icon1" />
                <span className="ml-5 text-[18.971px]">Setting</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export default SideBar;
