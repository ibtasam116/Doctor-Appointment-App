import React from "react";
import Header from "./(components)/Header/Header";
import SideBar from "./(components)/sideBar/SideBar";
import AdminHome from "@/app/dashboard/adminHome/page"

export default function page() {
  return (
    <>
      <Header />
      <SideBar />
      <div className="p-5 md:ml-[279px]">
        <AdminHome />
      </div>
    </>
  );
}
