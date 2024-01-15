import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { HiPencilAlt } from "react-icons/hi";

const page = () => {
  return (
    <div className="flex flex-col w-auto h-screen">
      <div className="flex flex-col w-auto h-screen items-center py-10">
        <img
          className="mr-20 w-full md:w-[850px] h-[150px] object-cover"
          alt=""
          src="/photos/E-Archiving System.png"
        />

        <div className=" bg-[#AD5606]  w-screen h-[50px] mt-5"></div>
        <div className=" bg-[#DABB9C]  w-screen h-[850px] ">
          <h1 className=" text-[50px] mt-2 my-12 font-semibold  text-orange-900 text-center ">
            PRINCE ANDRES
          </h1>
          <div className="flex justify-center">
            <div className=" bg-white w-[600px] h-[77px] md:h-20 ">
              <select
                className="mt-3 ml-36 text-3xl 
                  text-[#A89F9F] inline-block w-[400px] justify-around text-shadow-inner cursor-pointer"
                name="type"
                id="position"
              >
                <option value="position">POSITION</option>
                <option value="learning materials">Learning Materials</option>
                <option value="training and seminar">
                  Training and Seminar
                </option>
                <option value="reserch conducted">Research Conducted</option>
                <option value="extension conducted">Extension Conducted</option>
                <option value="educational qualification">
                  Educational Qualification
                </option>
                <option value="faculty profile">Faculty Profile</option>
              </select>
              <h1>
                <HiPencilAlt
                  className=" -mt-14 ml-6"
                  size="55"
                  color="#000000"
                  opacity="26%"
                />
              </h1>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className=" bg-white w-[600px] h-[77px] md:h-20">
              <input
                type="user"
                name="username"
                placeholder=" EMAIL"
                className="mt-6 ml-36 text-3xl 
                    text-[#A89F9F] inline-block w-[400px] h-[37px] text-shadow-inner"
              />
              <h1>
                <FaUserAlt
                  className="-mt-10 ml-6"
                  size="50"
                  color="#000000"
                  opacity="26%"
                  style={{ top: "675px", left: "870px" }}
                />
              </h1>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className=" bg-white w-[600px] h-[77px] md:h-20">
              <input
                type="pass"
                name="password"
                placeholder=" PASSWORD"
                className="mt-6 ml-36 text-3xl 
                    text-[#A89F9F] inline-block justify-around  w-[400px] h-[37px] text-shadow-inner"
              />
              <h1>
                <FaLock
                  className="-mt-10 ml-6"
                  size="50"
                  color="#000000"
                  opacity="26%"
                />
              </h1>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className=" bg-white w-[600px] h-[77px] md:h-20">
              <input
                type="confirmpassword"
                name="password"
                placeholder="CONFIRM PASSWORD"
                className="mt-6 ml-36 text-3xl 
                    text-[#A89F9F]  w-[400px] h-[37px] text-shadow-inner"
              />
              <h1>
                <FaLock
                  className="-mt-10 ml-6"
                  size="50"
                  color="#000000"
                  opacity="26%"
                />
              </h1>
            </div>
          </div>
          <div className=" mt-10 flex justify-center  ">
            <button
              type="confirm"
              className=" bg-[#737373] text-[20px] font-bold text-white text-center inline-block w-[247px] h-[38px]  hover:bg-gray-400"
            >
              CONFIRM
            </button>
            <button
              type="confirm"
              className="ml-10 bg-[#737373] text-[20px] font-bold text-white text-center inline-block w-[247px] h-[38px]  hover:bg-gray-400"
            >
              BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
