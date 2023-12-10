"use client";
import { useEffect, useState } from "react";

import Header from "../(components)/Header/Header";
import SideBar from "../(components)/sideBar/SideBar";
import { FaEdit, FaTrash } from "react-icons/fa";

// import dbConnect from "@/config/db";
// import { doctorModel } from "@/model/doctors";

// dbConnect();

// const fetchData = async () => {
//   try {
//     const data = await doctorModel.find();
//     console.log("data", data);
//     return data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };
const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenedit, setIsModalOpenedit] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [student, setstudent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isAddingStudent, setIsAddingStudent] = useState(false);
  const [isUpdatingStudent, setIsUpdatingStudent] = useState(false);
  const [isDeletingStudent, setIsDeletingStudent] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModaledit = () => {
    setIsModalOpenedit(false);
  };

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:3000/api/doctor");
    const result = await response.json();
    console.log("result", result);
    setData(result.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
            onClick={openModal}
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
                  <tr
                    key={i}
                    className="bg-gray-100 mt-3 text-[#292D32] text-center border-b border-[#122E99]"
                  >
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

      {isModalOpenedit && (
        <div className="fixed text-center inset-0 flex items-center justify-center modal-overlay">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded shadow-md w-[90vh]">
              <div className="flex justify-end">
                <button
                  onClick={closeModaledit}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h1 className="text-2xl font-semibold mb-6">Update Student</h1>
              <form
                // onSubmit={handleUpdate}
                className="mx-auto"
              >
                <div className="mb-6">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter title"
                    // onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Student Id
                  </label>
                  <input
                    type="number"
                    id="studentid"
                    name="studentid"
                    // value={studentid}
                    className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter Student Id"
                    // onChange={(e) => setstudentid(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="option"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Select an Option
                  </label>
                  <select
                    id="option"
                    name="option"
                    // onChange={(e) => setSelectedCourse(e.target.value)}
                    className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="Web and Mobile developnment">
                      Web and Mobile developnment
                    </option>
                    <option value="Graphics Gesigning">
                      Graphics Gesigning
                    </option>
                    <option value="CCNP">CCNP</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Phone No
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    // value={phone}
                    className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter Phone No"
                    onChange={(e) => setphone(e.target.value)}
                  />
                  <label
                    htmlFor="description"
                    className="block text-sm mt-5 font-medium text-gray-600"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    // value={address}
                    className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter Address "
                    onChange={(e) => setaddress(e.target.value)}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white py-3 w-[75%] px-6 rounded-lg hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
                  >
                    {/* {isUpdatingStudent ? "Updating Student..." : "Update Student"} */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed text-center inset-0 flex items-center justify-center modal-overlay">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded shadow-md w-[90vh]">
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h1 className="text-2xl font-semibold mb-6">Add Doctor</h1>
              <form
                // onSubmit={handelSubmit}
                className="mx-auto"
              >
                <div className="mb-6">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter Doctor Name"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Specialization
                  </label>
                  <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter Doctor Specialization"
                    onChange={(e) => setstudentid(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>

                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    className="mt-1 p-2 w-full lg:w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter Doctor Email"
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#122E99] text-white py-3 w-[75%] px-6 rounded-lg hover:bg-[#122E99] focus:outline-none focus:bg-[#122E99]"
                  >
                    Add Doctor
                    {/* {isAddingStudent ? "Adding Student..." : "Add Student"} */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
