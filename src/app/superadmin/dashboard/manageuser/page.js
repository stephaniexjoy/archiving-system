"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

export default function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState("");
  const [designation, setDesignation] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [license, setLicense] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation and submit the data
    try {
      console.log(
        name,
        email,
        password,
        position,
        designation,
        specialization,
        license
      );
      const response = await axios.post("/api/users/create-user", {
        name,
        email,
        password,
        position,
        designation,
        specialization,
        license,
      });
      // Assuming your API returns a success message
      console.log(response.data.message);
      // Perform any additional actions or show a success message to the user
    } catch (error) {
      // Handle error responses from the API
      console.error(error);
      // Show an error message to the user
    }

    /* setName('');
    setEmail('');
    setPassword('');
    setPosition('');
    setDesignation('');
    setSpecialization('');
    setLicense(''); */
  };

  return (
    <div className="ml-40 flex flex-col w-auto h-screen">
      <div className="flex flex-col w-auto h-screen items-center py-10">
        <img
          className="mr-20 w-full md:w-[850px] h-[150px] object-cover"
          alt=""
          src="/photos/E-Archiving System.png"
        />

        <div className="border items-center bg-[#AD5606] w-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-auto mt-10 p-16 rounded-lg shadow-lg">
          <div className="flex flex-row gap-x-5 items-center ml-4 md:ml-48 mb-5 mt-5 md:h-20">
            <h1 className="inline-block md:text-[45px] opacity-60 font-semibold md:shadow-zinc-400">
              FIND
            </h1>
            <input
              type="search"
              name="find"
              placeholder=""
              className="top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[50px] items-center md:text-shadow-inner"
            />
            <div className="top-[120px] left-[1100px] bg-[#6A6A6A] w-[50px] h-[45px] shadow-lg">
              <h1>
                <FaSearch size="40" style={{ top: "100px", left: "10px" }} />
              </h1>
            </div>

            <div className="button">
              <button className="top-[125px] left-[10px] md:left-[1300px] bg-[#6A6A6A] text-center  w-[100px] h-[45px] shadow-lg cursor-pointer md:text-[20px]  font-bold  ">
                {" "}
                CREATE
                {/* CREATE MODAl */}
              </button>
            </div>
          </div>
          <div className="bg-[#DABB9C] py-10 border w-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-auto mt-10 p-16 rounded-lg shadow-lg">
            <h1 className=" text-[35px] mb-5 font-semibold text-orange-900 text-center ">
              MANAGE ACCOUNTS
            </h1>
            <div>
              <div class="container flex justify-center mx-auto">
                <div class="flex flex-col">
                  <div class="w-full">
                    <div class="border-b border-gray-200 shadow">
                      <table class="divide-y divide-gray-300">
                        <tbody class="bg-[#837979] divide-y divide-gray-300">
                          <tr class="whitespace-nowrap">
                            <td class="px-6 py-4">
                              <div class="mr-[500px] text-xl font-semibold text-white">
                                Prince Andres
                              </div>
                            </td>
                            <td></td>
                            <td></td>
                            <td class="px-6 py-4">
                              <a href="#" class="px-4 py-1 text-base font-semibold text-white bg-[#675454] rounded-md">EDIT</a>
                            </td>
                            <td class="px-6 py-4">
                              <a href="#" class="px-4 py-1 text-base font-semibold text-white bg-[#675454] rounded-md">VIEW</a>
                            </td>
                            <td class="px-6 py-4">
                              <a href="#" class="px-4 py-1 text-base font-semibold text-white bg-[#675454] rounded-md">DELETE</a>
                            </td>
                          </tr>
                          <tr class="whitespace-nowrap">
                            <td class="px-6 py-4">
                              <div class="text-xl font-semibold text-white">
                                Prince Andres
                              </div>
                            </td>
                            <td></td>
                            <td></td>
                            <td class="px-6 py-4">
                              <a href="#" class="px-4 py-1 text-base font-semibold text-white bg-[#675454] rounded-md">EDIT</a>
                            </td>
                            <td class="px-6 py-4">
                              <a href="#" class="px-4 py-1 text-base font-semibold text-white bg-[#675454] rounded-md">VIEW</a>
                            </td>
                            <td class="px-6 py-4">
                              <a href="#" class="px-4 py-1 text-base font-semibold text-white bg-[#675454] rounded-md">DELETE</a>
                            </td>
                          </tr>
                          <tr class="whitespace-nowrap">
                            <td class="px-6 py-4">
                              <div class="text-xl font-semibold text-white">
                                Prince Andres
                              </div>
                            </td>
                            <td></td>
                            <td></td>
                            <td class="px-6 py-4">
                              <a href="#" class="px-4 py-1 text-base font-semibold text-white bg-[#675454] rounded-md">EDIT</a>
                            </td>
                            <td class="px-6 py-4">
                              <a href="#" class="px-4 py-1 text-base font-semibold text-white bg-[#675454] rounded-md">VIEW</a>
                            </td>
                            <td class="px-6 py-4">
                              <a href="#" class="px-4 py-1 text-base font-semibold text-white bg-[#675454] rounded-md">DELETE</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>



              {/* <div className="row">
                <div className="flex flex-row justify-between w-auto bg-[#837979] items-center m-8 py-2 px-3">
                  <p className="text-2xl m-2 ml-10 font-semibold">
                    Prince Andres
                  </p>
                  <div className="flex-justify">
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      EDIT
                    </button>
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      VIEW
                    </button>
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      DELETE
                    </button>
                  </div>
                </div>

                <div className="flex flex-row justify-between w-auto bg-[#837979] items-center m-8 py-2 px-3">
                  <p className="text-2xl m-2 ml-10 font-semibold">
                    John Ryan Ual
                  </p>
                  <div className="flex-justify">
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      EDIT
                    </button>
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      VIEW
                    </button>
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      DELETE
                    </button>
                  </div>
                </div>
                <div className="flex flex-row justify-between w-auto bg-[#837979] items-center m-8 py-2 px-3">
                  <p className="text-2xl m-2 ml-10 font-semibold">
                    Marco Del Rosario
                  </p>
                  <div className="flex-justify">
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      EDIT
                    </button>
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      VIEW
                    </button>
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      DELETE
                    </button>
                  </div>
                </div>

                <div className="flex flex-row justify-between w-auto bg-[#837979] items-center m-8 py-2 px-3">
                  <p className="text-2xl m-2 ml-10 font-semibold">
                    Prince Andres
                  </p>
                  <div className="flex-justify">
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      EDIT
                    </button>
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      VIEW
                    </button>
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      DELETE
                    </button>
                  </div>
                </div>

                <div className="flex flex-row justify-between w-auto bg-[#837979] items-center m-8 py-2 px-3">
                  <p className="text-2xl m-2 ml-10 font-semibold">
                    John Ryan Ual
                  </p>
                  <div className="flex-justify">
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      EDIT
                    </button>
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      VIEW
                    </button>
                    <button className="bg-[#5a5151] w-36 rounded-lg m-2 h-8 hover:bg-gray-400">
                      DELETE
                    </button>
                  </div>
                </div>
              </div> */}








              {/*
              <form
                className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded-md text-gray-700"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border rounded-md text-gray-700"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-2 border rounded-md text-gray-700"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="position"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Position:
                  </label>
                  <select
                    id="position"
                    className="w-full p-2 border rounded-md text-gray-700"
                    value={position}
                    onChange={(e) => {
                      setPosition(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Select your Position
                    </option>
                    <option value="Associate Dean">Associate Dean</option>
                    <option value="Secretary">Secretary</option>
                    <option value="Faculty">Faculty</option>
                    <option value="Unit Head">Unit Head</option>
                    <option value="Coordinator">Coordinator</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="designation"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Designation:
                  </label>
                  <select
                    id="designation"
                    className="w-full p-2 border rounded-md text-gray-700"
                    value={designation}
                    onChange={(e) => {
                      setDesignation(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Select your Designation
                    </option>
                    <option value="Dean">Dean</option>
                    <option value="Regular">Regular</option>
                    <option value="Faculty-Regular">Faculty (Regular)</option>
                    <option value="Faculty-PartTime">
                      Faculty (Part Time)
                    </option>
                    <option value="JobOrder">Job Order</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="specialization"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Specialization:
                  </label>
                  <input
                    type="text"
                    id="specialization"
                    className="w-full p-2 border rounded-md text-gray-700"
                    placeholder="Enter your Specialization"
                    value={specialization}
                    onChange={(e) => {
                      setSpecialization(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="license"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Eligibility/Professional License:
                  </label>
                  <input
                    type="text"
                    id="license"
                    className="w-full p-2 border rounded-md text-gray-700"
                    placeholder="Enter your license"
                    value={license}
                    onChange={(e) => {
                      setLicense(e.target.value);
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                >
                  Submit
                </button>
              </form>
             </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
