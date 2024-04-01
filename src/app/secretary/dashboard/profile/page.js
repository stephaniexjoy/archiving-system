import React from "react";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { db } from "@/app/lib/prisma_db";
import Link from "next/link";
import EditProfile_Dialog from "@/app/components/New_Components/EditProfile_Secretary/EditProfile_Dialog";
import EditPrivacy_Dialog from "@/app/components/New_Components/Edit_Privacy_Dialog/EditPrivacy_Dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

async function page() {
  const session = await getServerSession(AuthOptions);

  const sessionPhoto = session.user.image;
  console.log(sessionPhoto);

  const user = await db.user.findUnique({
    where: { id: parseInt(session.user.id) },
  });
  return (
    <div className="flex flex-col w-screen h-screen items-center overflow-y-auto bg-slate-50">
      <Card
        className="
        flex w-[90%] h-auto mt-4 items-center justify-center bg-slate-50
        sm:flex sm:w-[80%] sm:h-auto sm:mt-4 sm:items-center sm:justify-center
        md:flex md:w-[80%] md:h-auto md:mt-4 md:items-center md:justify-center
        lg:flex lg:w-[70%] lg:h-auto lg:mt-4 lg:items-center lg:justify-center
        xl:flex xl:w-[70%] xl:h-auto xl:mt-4 xl:items-center xl:justify-center
        2xl:flex 2xl:w-[60%] 2xl:mt-4 2xl:items-center 2xl:justify-center
        "
      >
        <CardContent
          className="
          w-auto h-auto
          sm:w-auto sm:h-auto
          md:w-auto md:h-auto
          lg:w-auto lg:h-auto
          xl:w-auto xl:h-auto
          2xl:w-auto 2xl:h-auto
          "
        >
          <div
            className="
            flex flex-col w-auto items-center py-1
            sm:flex sm:flex-col sm:w-auto sm:items-center sm:py-1
            md:flex md:flex-col md:w-auto md:items-center md:py-1
            lg:flex lg:flex-col lg:w-auto lg:items-center lg:py-1
            xl:flex xl:flex-col xl:w-auto xl:items-center xl:py-1
            2xl:flex 2xl:flex-col 2xl:w-auto 2xl:items-center 2xl:py-1
            "
          >
            {sessionPhoto ? (
              <Image
                className="
              mt-16 rounded-full w-[60%] h-auto object-cover mb-0
              sm:mt-16 sm:rounded-full sm:w-[50%] sm:h-auto sm:object-cover sm:mb-0
              md:mt-16 md:rounded-full md:w-[50%] md:h-auto md:object-cover md:mb-0
              lg:mt-16 lg:rounded-full lg:w-[50%] lg:h-auto lg:object-cover lg:mb-0
              xl:mt-16 xl:rounded-full xl:w-[50%] xl:h-auto xl:object-cover xl:mb-0
              2xl:mt-16 2xl:rounded-full 2xl:w-[35%] 2xl:h-auto 2xl:object-cover 2xl:mb-5
              "
                alt="profile"
                src={`${sessionPhoto}`}
                width={474}
                height={474}
              />
            ) : (
              <Image
                className="
              mt-16 rounded-full w-[60%] h-auto object-cover mb-0
              sm:mt-16 sm:rounded-full sm:w-[50%] sm:h-auto sm:object-cover sm:mb-0
              md:mt-16 md:rounded-full md:w-[50%] md:h-auto md:object-cover md:mb-0
              lg:mt-16 lg:rounded-full lg:w-[50%] lg:h-auto lg:object-cover lg:mb-0
              xl:mt-16 xl:rounded-full xl:w-[50%] xl:h-auto xl:object-cover xl:mb-0
              2xl:mt-16 2xl:rounded-full 2xl:w-[35%] 2xl:h-auto 2xl:object-cover 2xl:mb-5
              "
                alt="profile"
                src="/profile.jpg"
                width={474}
                height={474}
              />
            )}
          </div>

          <div
            className="
            grid grid-cols-2 gap-4 mt-16
            sm:grid-cols-2 sm:gap-4 sm:mt-16
            md:grid-cols-2 md:gap-4 md:mt-16
            lg:grid-cols-2 lg:gap-4 lg:mt-16
            xl:grid-cols-2 xl:gap-4 xl:mt-16
            2xl:grid-cols-2 2xl:gap-4 2xl:mt-16 2xl:text-start
            "
          >
            {[
              { label: "Name", value: user.name },
              { label: "Age", value: user.age },
              { label: "Sex", value: user.sex },
              { label: "Employee No", value: user.employee_no },
              { label: "Department", value: "College of Computer Studies" },
              { label: "Designation", value: user.designation },
              { label: "Institutional Email", value: user.email },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className="
                  text-[15px] text-[#5B0505]
                  sm:text-[17px] sm:text-[#5B0505]
                  md:text-[19px] md:text-[#5B0505]
                  lg:text-[21px] lg:text-[#5B0505]
                  xl:text-[23px] xl:text-[#5B0505]
                  2xl:text-[25px] 2xl:text-[#5B0505]
                  "
                >
                  {item.label}:
                </div>
                <div
                  className="
                  text-[15px] text-[#5B0505] font-bold
                  sm:text-[17px] sm:text-[#5B0505]
                  md:text-[19px] md:text-[#5B0505]
                  lg:text-[21px] lg:text-[#5B0505]
                  xl:text-[23px] xl:text-[#5B0505]
                  2xl:text-[25px] 2xl:text-[#5B0505]
                  "
                >
                  {item.value}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#AD5606] rounded-lg mt-16">
              <EditProfile_Dialog user={user} />
            </div>
            <div className="bg-[#AD5606] rounded-lg mt-5">
              <EditPrivacy_Dialog sessionUser={session.user} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default page;
