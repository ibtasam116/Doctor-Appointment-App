import React from "react";
import trendImg from "../../../assets/svg/bx_trending-up.svg";
import Image from "next/image";


export default function TopCards() {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-0 md:ml-10">
      <div
        className={`lg:max-w-[450px] xl:max-w-[300px] max-h-[139px] bg-white border-[2px] border-_borderColor rounded-[6px] p-5 flex flex-col justify-center  flex-shrink-0`}
      >
        <div className="flex">
          <h4 className="text-_cardColor text-[16px] font-[700] leading-normal tracking-[0.16px] flex-shrink-0">
            Patients
          </h4>
          <span
            className={`ml-3 pl-0.5 pr-1 flex items-center gap-[3px] bg-opacity-[0.1] rounded-[50px]`}
          >
            <Image src={trendImg} alt="Trending Image" />
            <span className="text-[14px] font-[400] leading-normal tracking-[0.14px]">
              10.0%
            </span>
          </span>
        </div>
        <h1 className="text-[28px] font-[700] my-1 leading-normal tracking-[0.28px]">
          856
        </h1>
        <p className="text-_card text-[14px] font-[400] leading-normal tracking-[0.14px]">
          Active
        </p>
      </div>
      <div
        className={`lg:max-w-[450px] xl:max-w-[300px] max-h-[139px] bg-white border-[2px] border-_borderColor rounded-[6px] p-5 flex flex-col justify-center  flex-shrink-0`}
      >
        <div className="flex">
          <h4 className="text-_cardColor text-[16px] font-[700] leading-normal tracking-[0.16px] flex-shrink-0">
            Appointments
          </h4>
          <span
            className={`ml-3 pl-0.5 pr-1 flex items-center gap-[3px] bg-opacity-[0.1] rounded-[50px]`}
          >
            <Image src={trendImg} alt="Trending Image" />
            <span className="text-[14px] font-[400] leading-normal tracking-[0.14px]">
              22.0%
            </span>
          </span>
        </div>
        <h1 className="text-[28px] font-[700] my-1 leading-normal tracking-[0.28px]">
          3,342
        </h1>
        <p className="text-_card text-[14px] font-[400] leading-normal tracking-[0.14px]">
          Active
        </p>
      </div>
      <div
        className={`lg:max-w-[450px] xl:max-w-[300px] max-h-[139px] bg-white border-[2px] border-_borderColor rounded-[6px] p-5 flex flex-col justify-center  flex-shrink-0`}
      >
        <div className="flex">
          <h4 className="text-_cardColor text-[16px] font-[700] leading-normal tracking-[0.16px] flex-shrink-0">
            Doctors
          </h4>
          <span
            className={`ml-3 pl-0.5 pr-1 flex items-center gap-[3px] bg-opacity-[0.1] rounded-[50px]`}
          >
            <Image src={trendImg} alt="Trending Image" />
            <span className="text-[14px] font-[400] leading-normal tracking-[0.14px]">
              12.0%
            </span>
          </span>
        </div>
        <h1 className="text-[28px] font-[700] my-1 leading-normal tracking-[0.28px]">
          77
        </h1>
        <p className="text-_card text-[14px] font-[400] leading-normal tracking-[0.14px]">
          Active
        </p>
      </div>
    </div>
  );
}
