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
      <div className="flex flex-col w-screen h-screen overflow-y-auto">
        <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center">
          <Image
            className="
            w-[60%] h-auto object-cover flex items-center justify-center
            sm:w-[60%] sm:h-[100%] sm:object-cover sm:flex sm:items-center sm:justify-center
            md:w-[60%] md:h-[100%] md:object-cover md:flex md:items-center md:justify-center
            lg:w-[40%] lg:h-[100%] lg:object-cover lg:flex lg:items-center lg:justify-center
            xl:w-[35%] xl:h-[100%] xl:object-cover xl:flex xl:items-center xl:justify-center
            2xl:w-[30%] 2xl:h-[100%] 2xl:object-cover 2xl:flex 2xl:items-center 2xl:justify-center
            "
            alt="E-Archiving System"
            src="/photos/E-Archiving System.png"
            width={2125}
            height={499}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="
              w-full overflow-auto overflow-x-auto h-auto p-4 max-w-md place-content-center
              sm:max-w-xl sm:overflow-x-auto sm:w-full sm:h-auto sm:p-4
              md:overflow-x-auto md:w-full md:h-auto md:p-4
              lg:max-w-[90%]
              xl:max-w-[90%] 
              2xl:max-w-[90%] 2xl:my-6
              ">
              <h1 className="
                text-[30px] mt-5 mb-3 font-semibold text-[#5B0505] text-center
                sm:text-[33px] sm:mt-5 sm:mb-3 sm:font-semibold sm:text-[#5B0505] sm:text-center
                md:text-[36px] md:mt-5 md:mb-3 md:font-semibold md:text-[#5B0505] md:text-center
                lg:text-[39px] lg:mt-5 lg:mb-3 lg:font-semibold lg:text-[#5B0505] lg:text-center
                xl:text-[42px] xl:mt-5 xl:mb-3 xl:font-semibold xl:text-[#5B0505] xl:text-center
                2xl:text-[50px] 2xl:mt-5 2xl:mb-5 2xl:font-semibold 2xl:text-[#5B0505] 2xl:text-center
                ">
                {user.name} {params.id}
              </h1>
              <form action={updateUser}>
                <div className="flex justify-center">
                  <div className="border-solid border-2 outline-[#737373] w-[800px] h-[77px] 
                  text-center py-2 rounded-lg
                  sm:text-center  sm:w-[800px] sm:h-[77px] sm:py-3 sm:rounded-lg
                  md:text-center  md:w-[800px] md:h-[77px] md:py-4 md:rounded-lg
                  lg:text-center  lg:w-[800px] lg:h-[77px] lg:py-5 lg:rounded-lg
                  xl:text-center  xl:w-[800px] xl:h-[77px] xl:py-5 xl:rounded-lg
                  2xl:text-center 2xl:w-[800px] 2xl:h-[77px] 2xl:py-8 2xl:rounded-lg">
                    <select
                      className="-mt-10 font-semibold w-10/12 text-[25px] text-[#5B0505]
                      sm:font-semibold sm:text-[20px]
                      md:font-semibold md:text-[19px]
                      lg:font-semibold lg:text-[21px] lg:ml-24
                      xl:font-semibold xl:text-[23px] xl:ml-24
                      2xl:font-semibold 2xl:text-[25px] 2xl:ml-24
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
                    <h1>
                      <HiPencilAlt
                        className="ml-4 -mt-[50px] 
                        sm:w-[65px] sm:h-[65px]
                        md:w-[800px] md:h-[77px]
                        lg:w-[800px] lg:h-[77px]
                        xl:w-[800px] xl:h-[77px]
                        2xl:w-[65px] 2xl:h-[65px]"
                        color="#000000"
                        opacity="26%"
                      />
                    </h1>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <div className=" bg-[#BCBCBC] w-[800px] h-[77px] md:h-20">
                    <input
                      type="email"
                      name="email"
                      placeholder={`${user.email}`}
                      className="mt-4 ml-28 text-xl 
                      text-[#5B0505] w-[650px] h-[50px] text-shadow-inner border-none"
                    />
                    <h1>
                      <FaUserAlt
                        className="-mt-14 ml-6"
                        size="50"
                        color="#000000"
                        opacity="26%"
                        style={{ top: "675px", left: "870px" }}
                      />
                    </h1>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <div className=" bg-[#BCBCBC] w-[800px] h-[77px] md:h-20">
                    <input
                      type="password"
                      name="password"
                      placeholder=" PASSWORD"
                      className="mt-4 ml-28 text-xl 
                      text-[#5B0505] inline-block justify-around  w-[650px] h-[50px] text-shadow-inner border-none"
                    />
                    <h1>
                      <FaLock
                        className="-mt-14 ml-6"
                        size="50"
                        color="#000000"
                        opacity="26%"
                      />
                    </h1>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <div className=" bg-[#BCBCBC] w-[800px] h-[77px] md:h-20">
                    <input
                      type="password"
                      name="passwordconfirm"
                      placeholder="CONFIRM PASSWORD"
                      className="mt-4 ml-28 text-xl 
                      text-[#5B0505]  w-[650px] h-[50px] text-shadow-inner border-none"
                    />
                    <h1>
                      <FaLock
                        className="-mt-14 ml-6"
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
                    className=" bg-[#737373] text-[20px] font-bold text-white text-center inline-block w-[300px] h-[38px]  hover:bg-gray-400"
                  >
                    CONFIRM
                  </button>

                  <button
                    type="confirm"
                    className="ml-5 bg-[#737373] text-[20px] font-bold text-white text-center inline-block w-[300px] h-[38px]  hover:bg-gray-400"
                  >
                    BACK
                  </button>
                </div>
              </form>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>


      </div>
    </>
  );
};

export default page;
