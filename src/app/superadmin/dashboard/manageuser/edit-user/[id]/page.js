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
      <div className="flex flex-col w-screen h-auto items-center overflow-y-auto bg-slate-50">
        <div
          className="
      bg-[#AD5606] w-[100%] h-[7%] flex items-center justify-center
      2xl:bg-[#AD5606] 2xl:w-[100%] 2xl:h-[12%] 2xl:flex 2xl:items-center 2xl:justify-center"
        >
          <Image
            className="
          w-[60%] h-auto object-cover flex items-center justify-center
          sm:w-[45%] sm:h-auto sm:object-cover sm:flex sm:items-center sm:justify-center
          md:w-[40%] md:h-auto md:object-cover md:flex md:items-center md:justify-center
          lg:w-[30%] lg:h-auto lg:object-cover lg:flex lg:items-center lg:justify-center
          xl:w-[25%] xl:h-auto xl:object-cover xl:flex xl:items-center xl:justify-center
          2xl:w-[30%] 2xl:h-auto 2xl:object-cover 2xl:flex 2xl:items-center 2xl:justify-center
          "
            alt="E-Archiving System"
            src="/photos/E-Archiving System.png"
            width={2125}
            height={499}
          />
        </div>

        <Card className="
        flex w-[90%] h-auto mt-4 items-center justify-center bg-slate-50
        sm:flex sm:w-[80%] sm:h-auto sm:mt-4 sm:items-center sm:justify-center
        md:flex md:w-[80%] md:h-auto md:mt-4 md:items-center md:justify-center
        lg:flex lg:w-[70%] lg:h-auto lg:mt-4 lg:items-center lg:justify-center
        xl:flex xl:w-[70%] xl:h-auto xl:mt-4 xl:items-center xl:justify-center
        2xl:flex 2xl:w-[60%] 2xl:mt-4 2xl:items-center 2xl:justify-center
        ">
          <CardContent >
            <div className="
          w-auto h-auto
          sm:w-auto sm:h-auto
          md:w-auto md:h-auto
          lg:w-auto lg:h-auto
          xl:w-auto xl:h-auto
          2xl:w-auto 2xl:h-auto
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

              {/* <form action={updateUser} className="flex flex-col w-auto h-[93%] overflow-x-hidden">
                <div className='m-5 flex flex-auto w-auto h-screen'>
                  <div className="grid grid-cols-2 gap-4 mt-16
                      sm:grid-cols-2 sm:gap-4 sm:mt-16
                      md:grid-cols-2 md:gap-4 md:mt-16
                      lg:grid-cols-2 lg:gap-4 lg:mt-16
                      xl:grid-cols-2 xl:gap-4 xl:mt-16
                      2xl:grid-cols-2 2xl:gap-4 2xl:mt-16 2xl:text-start">
                    <div className="text-[#000000] overflow-x-hidden">
                      <p className="mt-10 text-[14px] md:text-[23px]">Position:</p>
                      <p className="mt-5 text-[14px] md:text-[23px]">Current Password:</p>
                      <p className="mt-5 text-[14px] md:text-[23px]">New Password:</p>
                      <p className="mt-5 text-[14px] md:text-[23px]">Confirm Password:</p>
                    </div>


                    <div className=" w-auto h-auto 
                  text-start py-2 rounded-lg
                  sm:text-start  sm:w-[800px] sm:h-[77px] sm:py-3 sm:rounded-lg
                  md:text-start  md:w-[800px] md:h-[77px] md:py-4 md:rounded-lg
                  lg:text-start  lg:w-[800px] lg:h-[77px] lg:py-5 lg:rounded-lg
                  xl:text-start  xl:w-[800px] xl:h-[77px] xl:py-5 xl:rounded-lg
                  2xl:text-start 2xl:w-auto 2xl:h-[30px]  2xl:rounded-lg mt-9 ">

                    <select
                      className="font-semibold text-[25px] text-[#5B0505] text-start bg-transparent py-3 w-72 border-solid border-2 outline-[#737373] -mt-40
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
                    {/* <input type="email" name='emailUpd' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner
                      2xl:flex 2xl:w-full 2xl:items-center 2xl:justify-center" /> */}
                      {/* <input type="password" name='currentPass' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner
                      2xl:flex 2xl:w-full 2xl:items-center 2xl:justify-center" />
                      <input type="password" name='newPass' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner
                      2xl:flex 2xl:w-full 2xl:items-center 2xl:justify-center" />
                      <input type="password" name='newPassConfirm' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner
                      2xl:flex 2xl:w-full 2xl:items-center 2xl:justify-center" />

                    </div>
                  </div> */} 
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
                <div className="mt-4 border-solid border-2 outline-[#737373] w-[800px] h-[77px] 
                  text-center py-2 rounded-lg
                  sm:text-center  sm:w-[800px] sm:h-[77px] sm:py-3 sm:rounded-lg
                  md:text-center  md:w-[800px] md:h-[77px] md:py-4 md:rounded-lg
                  lg:text-center  lg:w-[800px] lg:h-[77px] lg:py-5 lg:rounded-lg
                  xl:text-center  xl:w-[800px] xl:h-[77px] xl:py-5 xl:rounded-lg
                  2xl:text-center 2xl:w-[800px] 2xl:h-[77px] 2xl:py-8 2xl:rounded-lg">
                  <div className="-mt-10 font-semibold w-10/12 text-[25px] text-[#5B0505]
                      sm:font-semibold sm:text-[20px]
                      md:font-semibold md:text-[19px]
                      lg:font-semibold lg:text-[21px] lg:ml-24
                      xl:font-semibold xl:text-[23px] xl:ml-24
                      2xl:font-semibold 2xl:text-[25px] 2xl:ml-24">
                    <input
                      type="email"
                      name="email"
                      placeholder={`${user.email}`}
                      className="mt-4 text-xl 
                      text-[#5B0505] w-[650px] h-[50px]  border-none"
                    />
                    <h1>
                      <FaUserAlt
                        className="-mt-[50px] 
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
              {/* </form> */}
            {/* </div> */}
          
          </CardContent>

        </Card>


      </div>
    </>
  );
};

export default page;
