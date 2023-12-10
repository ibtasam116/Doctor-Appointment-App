// "use client";
// import React, { useState } from "react";
import Header from "../(components)/Header/Header";
import SideBar from "../(components)/sideBar/SideBar";
import { FaEdit, FaTrash } from "react-icons/fa";

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
const page = async () => {
  // const [loading, setLoading] = useState(false);
  const data = await fetchData();
  return (
    <>
      <Header />
      <SideBar />
      <div className="p-5 md:ml-[279px]">
        <h1 className="text-3xl text-[#122E99] font-bold mb-15">Doctor List</h1>
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold mb-4 text-center text-white"></h2>
          <button
            className="text-white bg-[#122E99] rounded-lg py-1 px-5 mb-3"
            // onClick={openModal}
          >
            Add +
          </button>
        </div>
        <table className="w-full table-auto">
          <thead className="bg-[#122E99] text-white">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Specialization</th>
              <th className="px-4 py-2">Contact Information</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((item, i) => {
              return (
                <>
                  <tr key={i} className="bg-gray-100 mt-3 text-[#292D32] text-center border-b border-[#122E99]">
                    <td className="px-4 py-2">{i + 1}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.specialization}</td>
                    <td className="px-4 py-2">{item.contactInfo}</td>
                    <td className="px-4 py-2">
                      <button
                        className="text-blue-500 hover:text-blue-700 mr-5"
                        // onClick={() => openModaledit(item)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        // onClick={() => handleDelete(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;
