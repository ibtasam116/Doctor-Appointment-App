import React from "react";
import TopCards from "./(components)/topCards/TopCards";
import graph from "../assets/images/graph1.png";
import Image from "next/image";

export default function page() {
  return (
    <>
      <TopCards />
      <div className="grid grid-cols-1 my-7 overflow-x-auto">
        <div className="w-full bg-white border-[2px] border-_borderColor rounded-[6px] px-6">
          <div className="flex items-center justify-center mb-9">
            <Image src={graph} height={300}/>
          </div>
        </div>
      </div>
    </>
  );
}
