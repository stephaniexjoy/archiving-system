import { db } from "@/app/lib/prisma_db";
import bcrypt from "bcrypt";
import Image from "next/image";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <>
      <div className="flex flex-col w-screen h-screen  items-center">
        <Card
          className="
        flex w-[100%] h-auto mt-4 items-center justify-center bg-slate-50
        sm:flex sm:w-[80%] sm:h-auto sm:mt-4 sm:items-center sm:justify-center
        md:flex md:w-[80%] md:h-auto md:mt-4 md:items-center md:justify-center
        lg:flex lg:w-[70%] lg:h-auto lg:mt-4 lg:items-center lg:justify-center
        xl:flex xl:w-[70%] xl:h-auto xl:mt-4 xl:items-center xl:justify-center
        2xl:flex 2xl:w-[60%] 2xl:mt-10 2xl:items-center 2xl:justify-center
        "
        >
          <CardContent>
            <div className="w-auto h-auto">
              <h1
                className="
                text-[30px] mt-5 mb-3 font-semibold text-[#5B0505] text-center
                sm:text-[33px] sm:mt-5 sm:mb-3 sm:font-semibold sm:text-[#5B0505] sm:text-center
                md:text-[36px] md:mt-5 md:mb-3 md:font-semibold md:text-[#5B0505] md:text-center
                lg:text-[39px] lg:mt-5 lg:mb-3 lg:font-semibold lg:text-[#5B0505] lg:text-center
                xl:text-[42px] xl:mt-5 xl:mb-3 xl:font-semibold xl:text-[#5B0505] xl:text-center
                2xl:text-[50px] 2xl:mt-5 2xl:mb-5 2xl:font-semibold 2xl:text-[#5B0505] 2xl:text-center
                "
              >
                {user.name}
              </h1>

              <form action={updateUser}>
                <div className="flex justify-center items-center">
                  <div className="space-y-4">
                    <div className="flex flex-row items-center gap-2">
                      <div className="items-center">
                        <HiPencilAlt
                          size={45}
                          className="items-center"
                          color="#000000"
                          opacity="26%"
                        />
                      </div>
                      <div className="items-center justify-center">
                        <select
                          className="font-semibold w-[250px] h-10 text-[20px] text-[#5B0505] bg-transparent rounded-lg border-solid border-2 outline-[#737373]
                      sm:font-semibold sm:text-[20px] 
                      md:font-semibold md:text-[19px]
                      lg:font-semibold lg:text-[21px] 
                      xl:font-semibold xl:text-[23px] 
                      2xl:font-semibold 2xl:text-[25px]
                      "
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
                      </div>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <div className="items-center">
                        <FaUserAlt
                          size={45}
                          className=""
                          color="#000000"
                          opacity="26%"
                        />
                      </div>
                      <div className="items-center justify-center">
                        <input
                          contextMenu=""
                          type="email"
                          name="email"
                          placeholder={`${user.email}`}
                          className="font-semibold w-[250px] text-[20px] text-[#5B0505] bg-transparent border-solid border-2 outline-[#737373]  py-1 rounded-lg
                          sm:font-semibold sm:text-[20px] 
                          md:font-semibold md:text-[19px]
                          lg:font-semibold lg:text-[21px] 
                          xl:font-semibold xl:text-[23px] 
                          2xl:font-semibold 2xl:text-[25px] 
                          "
                        />
                      </div>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <div className="items-center">
                        <FaLock
                          size={45}
                          className=""
                          color="#000000"
                          opacity="26%"
                        />
                      </div>
                      <div className="items-center justify-center">
                        <input
                          type="password"
                          name="password"
                          placeholder=" Password"
                          className=" font-semibold w-[250px] text-[20px] text-[#5B0505] bg-transparent border-solid border-2 outline-[#737373] rounded-lg
                      sm:font-semibold sm:text-[20px] 
                      md:font-semibold md:text-[19px]
                      lg:font-semibold lg:text-[21px] 
                      xl:font-semibold xl:text-[23px] 
                      2xl:font-semibold 2xl:text-[25px] 
                      "
                        />
                      </div>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                      <div className="items-center">
                        <FaLock
                          size={45}
                          className=""
                          color="#000000"
                          opacity="26%"
                        />
                      </div>
                      <div className="items-center justify-center">
                        <input
                          type="password"
                          name="passwordconfirm"
                          placeholder="Confirm Password"
                          className=" font-semibold w-[250px] text-[20px] text-[#5B0505] bg-transparent border-solid border-2 outline-[#737373] rounded-lg
                      sm:font-semibold sm:text-[20px] 
                      md:font-semibold md:text-[19px]
                      lg:font-semibold lg:text-[21px] 
                      xl:font-semibold xl:text-[23px] 
                      2xl:font-semibold 2xl:text-[25px]
                      "
                        />
                      </div>
                    </div>
                    <div
                      className="
                  flex w-full h-auto items-center justify-evenly 
                  sm:flex sm:w-full sm:h-auto sm:items-center sm:justify-evenly 
                  md:flex md:w-full md:h-auto md:items-center md:justify-evenly
                  lg:flex lg:w-full lg:h-auto lg:items-center lg:justify-evenly
                  xl:flex xl:w-full xl:h-auto xl:items-center xl:justify-evenly
                  2xl:flex 2xl:w-full 2xl:h-auto 2xl:items-center 2xl:justify-evenly
                  "
                    >
                      <div className="flex flex-row">
                        <div className="flex items-center space-x-6">
                          <button
                            type="confirm"
                            className="mt-20 bg-[#737373] text-[15px] text-white text-center w-[100px] h-[30px] hover:bg-gray-400
                      sm:bg-[#737373] sm:text-[17px] sm:text-white sm:text-center sm:w-[130px] sm:h-[32px]
                      md:bg-[#737373] md:text-[19px] md:text-white md:text-center md:w-[130px] md:h-[34px]
                      lg:bg-[#737373] lg:text-[21px] lg:text-white lg:text-centerlg: lg:w-[180px] lg:h-[36px]
                      xl:bg-[#737373] xl:text-[23px] xl:text-white xl:text-center xl:w-[220px] xl:h-[38px]
                      2xl:bg-[#737373] 2xl:text-[25px] 2xl:text-white 2xl:text-center 2xl:w-[250px] 2xl:h-[40px]
                        "
                          >
                            BACK
                          </button>
                          <button
                            type="submit"
                            className="mt-20 bg-[#737373] text-[15px] text-white text-center w-[100px] h-[30px] hover:bg-gray-400
                        sm:bg-[#737373] sm:text-[17px] sm:text-white sm:text-center sm:w-[130px] sm:h-[32px]
                        md:bg-[#737373] md:text-[19px] md:text-white md:text-center md:w-[130px] md:h-[34px]
                        lg:bg-[#737373] lg:text-[21px] lg:text-white lg:text-centerlg: lg:w-[180px] lg:h-[36px]
                        xl:bg-[#737373] xl:text-[23px] xl:text-white xl:text-center xl:w-[220px] xl:h-[38px]
                        2xl:bg-[#737373] 2xl:text-[25px] 2xl:text-white 2xl:text-center 2xl:w-[250px] 2xl:h-[40px]
                          "
                          >
                            CONFIRM
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default page;
