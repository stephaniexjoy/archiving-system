import React from "react";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { db } from "@/app/lib/prisma_db";
import Link from "next/link";
import EditProfile_Dialog from "@/app/components/New_Components/EditProfile_Dialog";
import EditPrivacy_Dialog from "@/app/components/New_Components/EditPrivacy_Dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function page() {
  const session = await getServerSession(AuthOptions);

  const user = await db.user.findUnique({
    where: { id: parseInt(session.user.id) },
  });
  return (
    <div className="flex flex-col w-screen h-screen items-center overflow-y-auto">
      <div className="
      bg-[#AD5606] w-[100%] h-[7%] flex items-center justify-center
      2xl:bg-[#AD5606] 2xl:w-[100%] 2xl:h-[12%] 2xl:flex 2xl:items-center 2xl:justify-center">
        <img
          className="
          w-[60%] h-auto object-cover flex items-center justify-center
          2xl:w-[30%] 2xl:h-[100%] 2xl:object-cover 2xl:flex 2xl:items-center 2xl:justify-center
          "
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>
      <Card className="
      flex w-[90%] h-auto mt-4
      2xl:flex 2xl:max-w-[1000px] 2xl:mt-4
      ">
        <CardContent className="
        w-auto h-auto
        2xl:w-auto 2xl:h-auto
        ">
          <div className="
          flex flex-col w-auto items-center py-1
          2xl:flex 2xl:flex-col 2xl:w-auto 2xl:items-center 2xl:py-1
          ">
            <img
              className="
              mt-16 rounded-full w-[60%] h-auto object-cover mb-0
              2xl:mt-16 2xl:rounded-full 2xl:w-40 2xl:h-40 2xl:object-cover 2xl:mb-5
              "
              alt="profile"
              src="/profile.jpg"
            />
          </div>

          <div className="
          flex flex-col w-full items-center
          2xl:flex 2xl:flex-col 2xl:w-full 2xl:items-center
          ">
            <div className="
            flex flex-col columns-2
            2xl:flex 2xl:flex-col 2xl:columns-2
            ">
              <div className="
              flex flex-row gap-x-0 text-[#5B0505] ml-4 h-20 mt-16
              2xl:flex 2xl:flex-row 2xl:gap-x-8 2xl:text-[#5B0505] 2xl:ml-10 2xl:h-20 2xl:mt-16
              ">
                <div>
                  <h1 className="
                  text-[15px]
                  2xl:text-[25px]
                  ">Name:</h1>
                </div>
                <div>
                  <h1 className="
                  text-[15px] ml-24 font-bold uppercase
                  2xl:text-[25px] 2xl:ml-[141px] 2xl:font-bold 2xl:uppercase
                  ">
                    {user.name}
                  </h1>
                </div>
              </div>
              <div className="
              -mt-14 flex flex-row text-[#5B0505] gap-x-8 ml-4 h-20
              2xl:-mt-10 2xl:flex 2xl:flex-row 2xl:text-[#5B0505] 2xl:gap-x-8 2xl:ml-10 2xl:h-20
              ">
                <div>
                  <h1 className=" 
                  text-[15px]
                  2xl:text-[25px]
                  ">Age:</h1>
                </div>
                <div>
                  <h1 className="
                  text-[15px] ml-20 font-bold
                  2xl:text-[25px] 2xl:ml-[163px] 2xl:font-bold
                  ">
                    {user.age}
                  </h1>
                </div>
              </div>
              <div className="
              -mt-14 flex flex-row gap-x-8 text-[#5B0505] ml-4 h-20
              2xl:-mt-10 2xl:flex 2xl:flex-row 2xl:gap-x-8 2xl:text-[#5B0505] 2xl:ml-10 2xl:h-20
              ">
                <div>
                  <h1 className="
                  text-[15px]
                  2xl:text-[25px]
                  ">Sex:</h1>
                </div>
                <div>
                  <h1 className="
                  text-[15px] ml-20 font-bold uppercase
                  2xl:text-[25px] 2xl:ml-[166px] 2xl:font-bold 2xl:uppercase
                  ">
                    {user.sex}
                  </h1>
                </div>
              </div>
              <div className="
              -mt-14 flex flex-row gap-x-8 text-[#5B0505] ml-4 h-20
              2xl:-mt-10 2xl:flex 2xl:flex-row 2xl:gap-x-8 2xl:text-[#5B0505] 2xl:ml-10 2xl:h-20
              ">
                <div>
                  <h1 className=" 
                  text-[15px]
                  2xl:text-[25px]
                  ">Employee No:</h1>
                </div>
                <div>
                  <h1 className="
                  text-[15px] ml-2 font-bold uppercase
                  2xl:text-[25px] 2xl:ml-[55px] 2xl:font-bold 2xl:uppercase
                  ">
                    {user.employee_no}
                  </h1>
                </div>
              </div>
              <div className="
              -mt-14 flex flex-row gap-x-8 text-[#5B0505] ml-4 h-20
              2xl:-mt-10 2xl:flex 2xl:flex-row 2xl:gap-x-8 2xl:text-[#5B0505] 2xl:ml-10 2xl:h-20
              ">
                <div>
                  <h1 className="
                  text-[15px]
                  2xl:text-[25px]
                  ">Department:</h1>
                </div>
                <div>
                  <h1 className="
                  text-[15px] ml-4 font-bold uppercase
                  2xl:text-[25px] 2xl:ml-[69px] 2xl:font-bold 2xl:uppercase
                  ">
                    College of Computer Studies
                  </h1>
                </div>
              </div>
              <div className="
              -mt-0 flex flex-row gap-x-8 text-[#5B0505] ml-4 h-20
              2xl:-mt-10 2xl:flex 2xl:flex-row 2xl:gap-x-8 2xl:text-[#5B0505] 2xl:ml-10 2xl:h-20
              ">
                <div>
                  <h1 className="
                  text-[15px]
                  2xl:text-[25px]
                  ">Designation:</h1>
                </div>
                <div>
                  <h1 className="
                  text-[15px] ml-4 font-bold uppercase
                  2xl:text-[25px] 2xl:ml-[70px] 2xl:font-bold 2xl:uppercase
                  ">
                    {user.designation}
                  </h1>
                </div>
              </div>
              <div className="
              -mt-14 flex flex-row gap-x-8 text-[#5B0505] ml-4 h-20
              2xl:-mt-10 2xl:flex 2xl:flex-row 2xl:gap-x-8 2xl:text-[#5B0505] 2xl:ml-10 2xl:h-20
              ">
                <div>
                  <h1 className="
                  text-[15px]
                  2xl:text-[25px]
                  ">Institutional Email:</h1>
                </div>
                <div>
                  <h1 className="
                  text-[15px] ml-4 font-bold
                  2xl:text-[25px] 2xl:ml-[3px] 2xl:font-bold
                  ">
                    {user.email}
                  </h1>
                </div>
              </div>
            </div>
            <div className="bg-[#AD5606] mb-5 rounded-lg">
              <EditProfile_Dialog />
            </div>
            <div className="bg-[#AD5606] rounded-lg">
              <EditPrivacy_Dialog />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default page;
