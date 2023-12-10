import React from "react";
import ccapital from "../../assets/svg/headerSvg/CCapital.svg";
import csmall from "../../assets/svg/headerSvg/csmall.svg";
import searchIcon from "../../assets/svg/headerSvg/icons_search.svg";
import notification from "../../assets/svg/headerSvg/mi_notification.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="max-w-[1440px] max-h-[102px] mx-auto border-b border-_borderColor bg-white">
      <div className="grid grid-cols-12 py-3 sm:py-5">
        <div className="col-span-12 sm:col-span-5 md:col-span-3 lg:col-span-2 flex justify-center items-center lg:ml-10">
          <h3 className="text-[27.389px] font-[800] leading-normal tracking-[0.274px] ms-2 flex text-[#122E99]">
            DashBoard
          </h3>
        </div>
        <div className="col-span-9 sm:col-span-5 md:col-span-7  lg:col-span-9 flex items-center">
          <div className="relative ms-4 md:ms-16">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Image
                src={searchIcon}
                className="w-[24px] h-[24px] text-_textLightGray"
                alt="searchIcon"
              />
            </div>
            <input
              type="search_"
              id="default-search"
              className="block w-full p-2 pl-10 text-md text-gray-900 border-none outline-none focus:border-none placeholder:text-_textLightGray placeholder:text-[20px] placeholder:font-[400] placeholder:leading-normal placeholder:tracking-[0.2px] placeholder:pl-1 mt-0.5"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 flex items-center justify-end sm:justify-center">
          <div className="bg-[#EBEBEB] p-[7.5px] rounded-[15px] cursor-pointer inline-flex justify-center items-center">
            <Image
              src={notification}
              className="w-[30px] h-[30px]"
              alt="miNotification"
            />
          </div>
          <div className="md:ml-1 md:mr-3 cursor-pointer font-bold text-[#122E99]">
            <Link href='/'>
            Logout
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
