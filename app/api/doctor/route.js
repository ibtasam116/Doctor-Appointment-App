import dbConnect from "@/config/db";
import { doctorModel } from "@/model/doctors";
import { NextResponse } from "next/server";
dbConnect();

export const GET = async (req, route) => {
  try {
    const data = await doctorModel.find();
    console.log("data", data);
    return NextResponse.json({ message: "success", users: data });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "error", error });
  }
};
