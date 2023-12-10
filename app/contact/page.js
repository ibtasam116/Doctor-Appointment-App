import dbConnect from "@/config/db";
import { userModel } from "@/model/users";

dbConnect();

const fetchData = async () => {
  try {
    const data = await userModel.find();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

import React from "react";

export default function page() {
    const data = fetchData()

  return (
    <>
      <div>Contact</div>
      <div>Contact</div>
    </>
  );
}
