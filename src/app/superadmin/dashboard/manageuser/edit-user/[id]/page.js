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
      <div className="flex flex-col w-screen h-screen">
        <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center">
          <Image
            className="w-[27%] h-[100%] object-cover flex items-center justify-center"
            alt="E-Archiving System"
            src="/photos/E-Archiving System.png"
            width={300}
            height={100}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>

        <div className="w-auto mx-auto mt-[10%]">
          <h1 className="text-[60px] mt-2 mb-5 font-semibold text-[#5B0505] text-center">
            {user.name} {params.id}
          </h1>
          <form action={updateUser}>
            <div className="flex justify-center">
              <div className=" bg-[#BCBCBC] w-[800px] h-[77px] ">
                <select
                  className="mt-4 ml-28 text-xl 
                text-[#5B0505] w-[650px] h-[50px] text-shadow-inner cursor-pointer border-none"
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
                    className=" -mt-14 ml-6"
                    size="55"
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
      </div>
    </>
  );
};

export default page;
