import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { HiPencilAlt } from "react-icons/hi";
import { db } from "@/app/lib/prisma_db";
import bcrypt from "bcrypt";

const page = async ({ params }) => {
  const user = await db.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  console.log(user);

  const updateUser = async (formData) => {
    "use server";

    const positionUpd = formData.get("position");
    const emailUpd = formData.get("email");
    const passwordUpd = formData.get("password");
    const passConfirm = formData.get("passwordconfirm");

    const passUpdHashed = await bcrypt.hash(passwordUpd, 12);

    if (passwordUpd === passConfirm) {
      const updUser = await db.user.update({
        where: { id: user.id },
        data: {
          // Update the fields you want to modify
          position: positionUpd,
          email: emailUpd,
          password: passUpdHashed,
          // Add other fields as needed
        },
      });
    }
  };

  return (
    <div className="flex flex-col w-auto h-screen">
      <div className="flex flex-col w-auto h-screen items-center py-10">
        <img
          className="mr-20 w-full md:w-[850px] md:ml-80 h-[150px] object-cover"
          alt=""
          src="/photos/E-Archiving System.png"
        />

        <div className="border bg-[#AD5606] w-auto md:max-w-screen-md md:ml-96 md:h-auto lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-full mt-10 p-8 rounded-lg shadow-lg">
          <div className="border bg-[#DABB9C] p-6 w-auto md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto  py-2 rounded-lg shadow-lg">
            <div className="flex flex-col gap-x-10 md:ml-10 md:mr-10 md:h-auto">
              <h1 className=" text-[50px] mt-2 my-12 font-semibold  text-orange-900 text-center  ">
                {user.name} {params.id}
              </h1>
              <form action={updateUser}>
                <div className="flex justify-center">
                  <div className=" bg-white w-[600px] h-[77px] md:h-20 ">
                    <select
                      className="mt-5 ml-36 text-xl 
                text-[#A89F9F] inline-block w-[400px] justify-around text-shadow-inner cursor-pointer border-none"
                      name="position"
                      id="position"
                    >
                      <option value={user.position}>{user.position}</option>
                      <option value="Associate Dean">Associate Dean</option>
                      <option value="Secretary">Secretary</option>
                      <option value="Faculty">Faculty</option>
                      <option value="Unit Head">Unit Head</option>
                      <option value="Coordinator">Coordinator</option>
                    </select>
                    <h1>
                      <HiPencilAlt
                        className=" -mt-12 ml-6"
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
                      type="email"
                      name="email"
                      placeholder={`${user.email}`}
                      className="mt-6 ml-36 text-xl 
                text-[#A89F9F] inline-block w-[400px] h-[37px] text-shadow-inner border-none"
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
                      type="password"
                      name="password"
                      placeholder=" PASSWORD"
                      className="mt-6 ml-36 text-xl 
                text-[#A89F9F] inline-block justify-around  w-[400px] h-[37px] text-shadow-inner border-none"
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
                      type="password"
                      name="passwordconfirm"
                      placeholder="CONFIRM PASSWORD"
                      className="mt-6 ml-36 text-xl 
                text-[#A89F9F]  w-[400px] h-[37px] text-shadow-inner border-none"
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
                    type="submit"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
