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
      <div className="flex flex-col w-screen h-screen overflow-y-auto items-center">
        <Card
          className="
        flex w-[90%] h-auto mt-4 items-center justify-center bg-slate-50
        sm:flex sm:w-[80%] sm:h-auto sm:mt-4 sm:items-center sm:justify-center
        md:flex md:w-[80%] md:h-auto md:mt-4 md:items-center md:justify-center
        lg:flex lg:w-[70%] lg:h-auto lg:mt-4 lg:items-center lg:justify-center
        xl:flex xl:w-[70%] xl:h-auto xl:mt-4 xl:items-center xl:justify-center
        2xl:flex 2xl:w-[60%] 2xl:mt-10 2xl:items-center 2xl:justify-center
        "
        >
          <CardContent>
            <div
              className="
          w-auto h-auto
          sm:w-auto sm:h-auto
          md:w-auto md:h-auto
          lg:w-auto lg:h-auto
          xl:w-auto xl:h-auto
          2xl:w-auto 2xl:h-auto
          "
            >
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
                {user.name} {params.id}
              </h1>

              <form action={updateUser}>
                <div className="flex justify-center">
                  <div
                    className="
                  sm:text-center sm:w-[800px] sm:h-[77px] sm:py-3 sm:rounded-lg
                  md:text-center md:w-[800px] md:h-[77px] md:py-4 md:rounded-lg
                  lg:text-center lg:w-[800px] lg:h-[77px] lg:py-5 lg:rounded-lg
                  xl:text-center xl:w-[800px] xl:h-[77px] xl:py-5 xl:rounded-lg
                  2xl:text-center 2xl:w-[800px] 2xl:h-[77px] 2xl:py-8 2xl:rounded-lg"
                  >
                    <div
                      className="
                      w-auto h-auto
                      sm:w-auto sm:h-auto
                      md:w-auto md:h-auto
                      lg:w-auto lg:h-auto
                      xl:w-auto xl:h-auto
                      2xl:w-auto 2xl:h-auto
                      "
                    >
                      <select
                        className="-mt-10 ml-10 font-semibold w-[250px] h-10 text-[20px] text-[#5B0505] bg-transparent rounded-lg border-solid border-2 outline-[#737373]
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
                          className="-ml-[10px] -mt-[40px] w-[40px] h-[40px]
                        sm:w-[40px] sm:h-[65px] sm:ml-[250px] sm:-mt-[55px]
                        md:w-[800px] md:h-[77px]
                        lg:w-[800px] lg:h-[77px]
                        xl:w-[800px] xl:h-[77px]
                        2xl:w-[55px] 2xl:h-[65px] 2xl:ml-64 2xl:-mt-[55px]"
                          color="#000000"
                          opacity="26%"
                        />
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div
                    className="w-10 h-10 mt-4
                  text-center py-2 rounded-lg 
                  sm:text-center  sm:w-[800px] sm:h-[77px] sm:py-3 sm:rounded-lg
                  md:text-center  md:w-[800px] md:h-[77px] md:py-4 md:rounded-lg
                  lg:text-center  lg:w-[800px] lg:h-[77px] lg:py-5 lg:rounded-lg
                  xl:text-center  xl:w-[800px] xl:h-[77px] xl:py-5 xl:rounded-lg
                  2xl:text-center 2xl:w-[800px] 2xl:h-[77px] 2xl:py-8 2xl:rounded-lg"
                  >
                    <div
                      className="
                      w-auto h-auto
                      sm:w-auto sm:h-auto
                      md:w-auto md:h-auto
                      lg:w-auto lg:h-auto
                      xl:w-auto xl:h-auto
                      2xl:w-auto 2xl:h-auto
                      "
                    >
                      <input
                        contextMenu=""
                        type="email"
                        name="email"
                        placeholder={`${user.email}`}
                        className="-mt-10 font-semibold w-[250px] text-[20px] text-[#5B0505] bg-transparent border-solid border-2 outline-[#737373] -ml-[85px] py-1 rounded-lg
                          sm:font-semibold sm:text-[20px] sm:ml-10 sm:-mt-10
                          md:font-semibold md:text-[19px]
                          lg:font-semibold lg:text-[21px] lg:ml-24
                          xl:font-semibold xl:text-[23px] xl:ml-24
                          2xl:font-semibold 2xl:text-[25px] 2xl:ml-24 2xl:-mt-10
                          "
                      />
                      <h1>
                        <FaUserAlt
                          className="-ml-[130px] -mt-[37px] w-[30px] h-[30px]
                        sm:w-[30px] sm:h-[65px] sm:ml-[250px] sm:-mt-[100px]
                        md:w-[800px] md:h-[77px]
                        lg:w-[800px] lg:h-[77px]
                        xl:w-[800px] xl:h-[77px]
                        2xl:w-[45px] 2xl:h-[45px] 2xl:-mt-[50px] 2xl:ml-64"
                          color="#000000"
                          opacity="26%"
                        />
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div
                    className="w-10 h-10 mt-4
                  text-center py-2 rounded-lg 
                  sm:text-center  sm:w-[800px] sm:h-[77px] sm:py-3 sm:rounded-lg
                  md:text-center  md:w-[800px] md:h-[77px] md:py-4 md:rounded-lg
                  lg:text-center  lg:w-[800px] lg:h-[77px] lg:py-5 lg:rounded-lg
                  xl:text-center  xl:w-[800px] xl:h-[77px] xl:py-5 xl:rounded-lg
                  2xl:text-center 2xl:w-[800px] 2xl:h-[77px] 2xl:py-8 2xl:rounded-lg"
                  >
                    <div
                      className="
                      w-auto h-auto
                      sm:w-auto sm:h-auto
                      md:w-auto md:h-auto
                      lg:w-auto lg:h-auto
                      xl:w-auto xl:h-auto
                      2xl:w-auto 2xl:h-auto
                      "
                    >
                      <input
                        type="password"
                        name="password"
                        placeholder=" Password"
                        className="-mt-2 font-semibold w-[250px] text-[20px] text-[#5B0505] bg-transparent border-solid border-2 outline-[#737373] -ml-[65px] rounded-lg
                      sm:font-semibold sm:text-[20px] sm:ml-[695px] sm:-mt-96
                      md:font-semibold md:text-[19px]
                      lg:font-semibold lg:text-[21px] lg:ml-24
                      xl:font-semibold xl:text-[23px] xl:ml-24
                      2xl:font-semibold 2xl:text-[25px] 2xl:ml-[730px]
                      "
                      />
                      <h1>
                        <FaLock
                          className="-ml-[111px] -mt-[37px] w-[30px] h-[30px]
                        sm:w-[30px] sm:h-[65px] sm:ml-[650px] sm:-mt-[50px]
                        md:w-[800px] md:h-[77px]
                        lg:w-[800px] lg:h-[77px]
                        xl:w-[800px] xl:h-[77px]
                        2xl:w-[45px] 2xl:h-[45px] 2xl:ml-[658px] 2xl:-mt-10"
                          color="#000000"
                          opacity="26%"
                        />
                      </h1>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div
                      className="w-10 h-10 mt-4
                  text-center py-2 rounded-lg mb-3
                  sm:text-center  sm:w-[800px] sm:h-[77px] sm:py-3 sm:rounded-lg
                  md:text-center  md:w-[800px] md:h-[77px] md:py-4 md:rounded-lg
                  lg:text-center  lg:w-[800px] lg:h-[77px] lg:py-5 lg:rounded-lg
                  xl:text-center  xl:w-[800px] xl:h-[77px] xl:py-5 xl:rounded-lg
                  2xl:text-center 2xl:w-[800px] 2xl:h-[77px] 2xl:py-8 2xl:rounded-lg"
                    >
                      <div
                        className="
                      w-auto h-auto
                      sm:w-auto sm:h-auto
                      md:w-auto md:h-auto
                      lg:w-auto lg:h-auto
                      xl:w-auto xl:h-auto
                      2xl:w-auto 2xl:h-auto
                      "
                      >
                        <input
                          type="password"
                          name="passwordconfirm"
                          placeholder="Confirm Password"
                          className="mt-12 font-semibold w-[250px] text-[20px] text-[#5B0505] bg-transparent border-solid border-2 outline-[#737373] -ml-[103px] rounded-lg
                      sm:font-semibold sm:text-[20px] sm:-ml-[750px] sm:-mt-42
                      md:font-semibold md:text-[19px]
                      lg:font-semibold lg:text-[21px] lg:ml-24
                      xl:font-semibold xl:text-[23px] xl:ml-24
                      2xl:font-semibold 2xl:text-[25px] 2xl:-ml-[700px]
                      "
                        />
                        <h1>
                          <FaLock
                            className="-ml-[150px] -mt-[37px] w-[30px] h-[30px]
                        sm:w-[30px] sm:h-[65px]  sm:-mt-14
                        md:w-[800px] md:h-[77px]
                        lg:w-[800px] lg:h-[77px]
                        xl:w-[800px] xl:h-[77px]
                        2xl:w-[45px] 2xl:h-[45px] 2xl:-mt-[50px] 2xl:-ml-[140px]"
                            color="#000000"
                            opacity="26%"
                          />
                        </h1>
                      </div>
                    </div>
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
                    <div className="flex items-center">
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

                  <div>
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
