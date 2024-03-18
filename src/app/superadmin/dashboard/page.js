import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/app/lib/prisma_db";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import CreateAccount_Dialog from "@/app/components/New_Components/CreateAccount_Dialog/CreateAccount_Dialog";
import ActivityTable_Superadmin from "@/app/components/NewTable/Dashboard/Superadmin/ActivityTable_Superadmin";
import Image from "next/image";
import CalendarComponent from "@/app/components/Calendar";

async function page() {
  const session = await getServerSession(AuthOptions);

  if (session.user.position === "Faculty") {
    redirect("/faculty/dashboard/");
  }

  if (session.user.position === "Secretary") {
    console.log("push");
    redirect("/secretary/dashboard/");
  }

  const fileCount = await db.file.count();
  const userCount = await db.user.count();
  const secCount = await db.user.count({ where: { position: "Secretary" } });

  console.log(fileCount);
  console.log(userCount);

  const activities = await db.activity.findMany();
  console.log(activities);

  const activitiesFormatted = activities.map((activity) => ({
    ...activity,
    createdAt: new Date(activity.createdAt).toLocaleString(),
  }));

  return (
    <div className="flex flex-col w-screen h-screen ">
      <div className="bg-[#AD5606] w-full max-w-prose md:h-[12%] md:max-w-screen-md lg:max-w-screen-lg flex items-center justify-center">
        <Image
          className="sm:w-[27%] sm:h-[100%] md:w-[60%] md:h-[100%] lg:w-[40%] lg:h-[100%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
          height={`40`}
          width={`100`}
        />
      </div>

      <div className="flex mt-[2%] px-10 w-[55%] ml-0">
        <h1 className="text-[#5B0505] text-[15px] font-semibold sm:text-sm md:text-md lg:text-lg">
          WELCOME, <br />{" "}
          <span className="text-[#5B0505] text-[20px] font-semibold -mt-4">
            FACULTY
          </span>
        </h1>
        <Image
          className=" h-[40%] w-[100%] mt-[1%] ml-[30%] sm:w-[70%] sm:h-[35%] md:w-[70%] md:h-[35%] lg:w-[70%] lg:h-[50%]"
          alt="Filler"
          src="/photos/Filler.png"
          height={`40`}
          width={`100`}
        />
        <Image
          className="h-[40%] w-[90px] mt-[.8%] ml-[15%] sm:w-[50%] sm:h-[35%] md:w-[60%] md:h-[40%] lg:w-[10%] lg:h-[50%]"
          alt="Notification Logo"
          src="/photos/Notificationlogo.png"
          height={`40`}
          width={`90`}
        />
      </div>

      <div className="flex mt-3 px-10 gap-x-8 sm:w-[100%] sm:h-[35%] md:w-[60%] md:h-[40%] lg:w-[10%] lg:h-[50%]">
        <div className="text-center bg-[#5B0505] text-white w-[100%] h-[50px] rounded-lg ">
          <button className="mt-3 font-bold sm:text-sm md:text-md lg:text-lg">
            VIEW MATERIALS
          </button>
        </div>
        <div className="text-center bg-[#5B0505] text-white w-[100%] h-[50px] rounded-lg sm:text-sm md:text-md lg:text-lg">
          <CreateAccount_Dialog />
        </div>
        <div className="text-center bg-[#B4ABAB] text-[#5B0505] w-96 h-20">
          {/*  <p className="mt-5 text-1xl font-bold sm:text-sm md:text-md lg:text-lg">
            CALENDAR
          </p> */}
          <CalendarComponent />
        </div>
      </div>

      <div className="flex place-items-center flex-row -mt-[5%] px-10 gap-x-3">
        <div className="text-center bg-[#B4ABAB] text-[#5B0505] w-[100%] py-10 px-10 rounded-lg sm:w-[1000px] sm:h-[80%] md:w-[60%] md:h-[40%] lg:w-[10%] lg:h-[50%]">
          <p className="-mt-5 text-4xl font-bold sm:text-sm md:text-md lg:text-lg">
            ARCHIVED MATERIALS
          </p>
          <p className="mt-5 text-9xl text-[#5B0505] font-semibold sm:text-5xl md:text-md lg:text-lg">
            {fileCount}
          </p>
        </div>
        <div className="text-center bg-[#5B0505] text-white w-[440px] h-[320px] py-10 px-10 rounded-lg sm:w-[1000px] sm:h-[80%] md:w-[60%] md:h-[40%] lg:w-[10%] lg:h-[50%]">
          <p className="-mt-5 text-4xl font-bold sm:text-sm md:text-md lg:text-lg">
            NO. OF FACULTY
          </p>
          <p className="mt-5 text-9xl text-[#FFFFFF] font-semibold sm:text-5xl md:text-lg lg:text-xl">
            {userCount}
          </p>
        </div>
        <div className="text-center bg-[#B4ABAB] text-[#5B0505] w-[440px] h-[320px] py-10 px-10 rounded-lg sm:w-[1000px] sm:h-[80%] md:w-[60%] md:h-[40%] lg:w-[10%] lg:h-[50%]">
          <p className="-mt-5 text-4xl font-bold sm:text-sm md:text-md lg:text-lg">
            NO. OF SECRETARY
          </p>
          <p className="mt-5 text-9xl text-[#5B0505] font-semibold sm:text-5xl md:text-md lg:text-lg">
            {secCount}
          </p>
        </div>
        <div className="text-[#5B0505] w-auto h-auto p-4 mx-4 ">
          <Image
            className="ml-5 mt-24 w-56 h-auto object-cover sm:w-[100%] sm:h-[35%] md:w-[60%] md:h-[40%] lg:w-[10%] lg:h-[50%]"
            src="/photos/ccsLogo.png"
            alt="CCS Logo"
            height={`40`}
            width={`100`}
          />
        </div>
      </div>

      <div
        className="
       w-auto h-screen items-center font-[Times New Roman] rounded-lg px-10 overflow-y-auto
      2xl:mt-8 2xl:w-full 2xl:h-screen 2xl:items-center 2xl:font-[Times New Roman] 2xl:rounded-lg 2xl:px-10 2xl:overflow-y-auto sm:w-[100%] sm:h-[35%] md:w-[60%] md:h-[40%] lg:w-[10%] lg:h-[50%]
      "
      >
        <ActivityTable_Superadmin activity={activitiesFormatted} />
      </div>
    </div>
  );
}

export default page;
