import dbConnect from "@/config/db";
import { doctorModel } from "@/model/doctors";

dbConnect();

const fetchData = async () => {
  try {
    const data = await doctorModel.find();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

import React from "react";

const page = async () => {
  const data = await fetchData();

  return (
    <>
      <div>Doctor</div>
      {data.map((item) => {
        return (
          <>
            <th>{item.name}</th>
            <th>{item.specialization}</th>
            <th>{item.contactInfo}</th>
          </>
        );
      })}
    </>
  );
};
export default page;
