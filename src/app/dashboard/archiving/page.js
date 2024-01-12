"use client"
import TypeModal from "@/app/components/TypeModal";
import ProgramModal from "@/app/components/ProgramModal";
import MaterialModal from "@/app/components/MaterialModal";
import InstructorModal from "@/app/components/InstructorModal";
import { FaSearch } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import UploadModal from "@/app/components/UploadModal";


export default function archiving() {


    return (
        <div className="flex flex-col w-auto h-screen">
        <div className="flex flex-col w-auto h-screen items-center py-10">
          <img
            className="mr-20 w-full md:w-[850px] h-[150px] object-cover"
            alt=""
            src="../photos/E-Archiving System.png"
          />
  
          <div className=" bg-[#AD5606]  w-screen h-[850px] mt-5">
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
              <div className="top-[125px] left-[10px] md:left-[1300px] bg-[#6A6A6A] w-[50px] h-[45px] shadow-lg cursor-pointer" />
              <UploadModal />
            </div>
  
            <div className="flex space-x-64 flex-row gap-x-8 md:ml-20 font-semibold">
              <div className="inline-block text-[14px] md:text-[23px] text-orange-200">
                MATERIAL
              </div>
  
              <div className="inline-block text-[14px] md:text-[23px] text-orange-200">
                TYPE
              </div>
              <div className="inline-block text-[14px] md:text-[23px] text-orange-200">
                PROGRAM
              </div>
              <div className="inline-block text-[14px] md:text-[23px] text-orange-200">
                INSTRUCTOR
              </div>
              <div className="inline-block text-[14px] md:text-[23px] text-orange-200">
                SORT BY
              </div>
            </div>
            <div className="bg-[#DABB9C] h-[640px] m-6 ">
              <div className="flex space-x-36 flex-row gap-x-8 ml-4 md:ml-10 md:h-20 ">
                <div className="dropdown">
                  <div className="top-[210px] left-[300px] mt-5 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer ">
                    <select
                      className=" text-orange-200 text-2xl font-bold w-[270px] cursor-pointer md:left-[1250px] bg-[#bd8551]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
                      name="type"
                      id="type"
                    >
                      <option value="select">--Select--</option>
                      <option value="learning materials">
                        Learning Materials
                      </option>
                      <option value="training and seminar">
                        Training and Seminar
                      </option>
                      <option value="reserch conducted">
                        Research Conducted
                      </option>
                      <option value="extension conducted">
                        Extension Conducted
                      </option>
                      <option value="educational qualification">
                        Educational Qualification
                      </option>
                      <option value="faculty profile">Faculty Profile</option>
                    </select>
                    <div className="button">
                      <div className="top-[65px] left-[10px] text-center bg-[#675454] text-orange-200 outline-color rounded shadow-lg w-[130px]">
                        <MaterialModal />
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="top-[210px] left-[540px] mt-5 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer">
                  <select
                    className=" text-orange-200 text-2xl font-bold w-[270px] cursor-pointer md:left-[1250px] bg-[#bd8551]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
                    name="type"
                    id="type"
                  >
                    <option value="select">--Select--</option>
                    <option value="pdf">PDF</option>
                    <option value="ppt">PPT</option>
                    <option value="docx">DOCX</option>
                  </select>
                  <div className="button">
                    <div className="top-[65px] left-[10px] text-center bg-[#675454]  outline-color text-orange-200 rounded w-[130px] ">
                      <TypeModal />
                    </div>
                  </div>
                </div>
  
                <div className="top-[210px] left-[740px] mt-5 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer">
                  <select
                    className=" text-orange-200 text-2xl font-bold w-[270px] cursor-pointer md:left-[1250px] bg-[#bd8551]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
                    name="type"
                    id="type"
                  >
                    <option value="select">--Select--</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Programming Languages">
                      Programming Languages
                    </option>
                    <option value="Platform Technologie">
                      Platform Technologies
                    </option>
                  </select>
                  <div className="button">
                    <div className="top-[65px] left-[10px] text-center  bg-[#675454] outline-color text-orange-200 rounded shadow-lg w-[130px]">
                      <ProgramModal />
                    </div>
                  </div>
                </div>
  
                <div className="top-[210px] left-[970px] mt-5 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer">
                  <select
                    className=" text-orange-200 text-2xl font-bold w-[270px] cursor-pointer md:left-[1250px] bg-[#bd8551]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
                    name="type"
                    id="type"
                  >
                    <option value="select">--Select--</option>
                    <option value="Prince Andres">Prince Andres</option>
                    <option value="John Ryan Ual">John Ryan Ual</option>
                    <option value="Marco Del Rosario">Marco Del Rosario</option>
                  </select>
                  <div className="button">
                    <div className="top-[65px] left-[10px] text-center bg-[#675454] text-orange-200 outline-color rounded shadow-lg w-[130px]">
                      <InstructorModal />
                    </div>
                  </div>
                </div>
                <div className=" top-[210px] left-[970px] mt-5 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer">
                  <input
                    type="date"
                    className="text-orange-200 text-2xl font-bold w-[270px] cursor-pointer md:left-[1250px] bg-[#bd8551]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
                    name="type"
                    id="type "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
