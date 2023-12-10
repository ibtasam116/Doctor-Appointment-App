import React from "react";
import Navbar from "../(components)/navbar/navbar";
import Home_header from "./home_sections/home_header/home_header";
import Clinic_and_specialities from "@/app/home/home_sections/Clinic_and_specialities_card/Clinic_and_specialities_card";
import Footer from "../(components)/footer/footer";

export default function page() {
  return (
    <>
      <Navbar />
      <Home_header />
      <Clinic_and_specialities />
      <Footer />
    </>
  );
}
