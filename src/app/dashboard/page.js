import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { db } from "@/app/lib/prisma_db";
import { redirect } from "next/navigation";
import UploadMaterial_Dialog from "../components/New_Components/UploadMaterial_Dialog/UploadMaterial_Dialog";
import EditPrivacy_Dialog from "../components/New_Components/EditPrivacy_Dialog";
import { Footer } from "flowbite-react";

export default async function dashboard() {
  const session = await getServerSession(AuthOptions);

  if (session.user.position === "Superadmin") {
    redirect("/superadmin/dashboard/");
  }
  if (session.user.position === "Secretary") {
    redirect("/secretary/dashboard/");
  }

  const fileCount = await db.file.count();

  const activities = await db.activity.findMany();

  const activitiesFormatted = activities.map((activity) => ({
    ...activity,
    createdAt: new Date(activity.createdAt).toLocaleString(),
  }));

  return (
    <div className="flex items-center flex-col w-screen h-screen ">
      <div className="bg-[#AD5606] w-full md:h-[12%] flex items-center justify-center">
        <img
          className="sm:w-[27%] sm:h-[100%] md:w-[35%] md:h-[100%] lg:w-[27%] lg:h-[100%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div className="flex mt-[2%] px-10">
        <h1 className="text-black text-[20px] sm:text-sm md:text-md lg:text-lg">
          WELCOME, <br />{" "}
          <span className="text-[#5B0505] text-[30px] font-semibold -mt-4">
            FACULTY
          </span>
        </h1>
        <div>
          <img
            className="h-[50%] w-[90%] mt-[1%] ml-[3%] sm:w-[80%] sm:h-[40%] md:w-[100%] md:h-[55%] md:mt-[1%] md:ml-[1%] lg:w-[95%] lg:h-[40%] lg:mt-[1%] lg:ml-[3%]"
            alt="Filler"
            src="../photos/Filler.png"
          />
        </div>
        <div>
          <img
            className="h-[40%] w-[50%] mt-[2%] ml-[3%] sm:w-[50%] sm:h-[50%] md:w-[40px] md:h-[55%] md:mt-[10%] md:ml-[18%] lg:w-[100%] lg:h-[40%] lg:mt-[20%] lg:ml-[-1%]"
            alt="Notification Logo"
            src="../photos/Notificationlogo.png"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center content-center md:flex-row mt-[.5%] px-10 gap-x-12 ">
        <div className="text-center bg-[#B4ABAB] text-[#5B0505] w-[440px] h-[320px] py-0 rounded-lg sm:w-[500px] sm:h-[280px] md:w-[50%] md:h-[60%] lg:w-[110%] lg:h-[60%]">
          <p className="mt-8 text-4xl font-semibold">ARCHIVED MATERIALS</p>
          <p className="mt-12 text-9xl text-[#5B0505] font-semibold">
            {fileCount}
          </p>
        </div>
        <div>
          <img
            className="ml-16 w-[325px] h-auto object-cover hidden sm:hidden md:h-[60%] lg:w-[110%] lg:h-[60%] "
            src="../photos/ccsLogo.png"
            alt="CCS Logo"
          />
        </div>
        <div className=" text-center bg-[#B4ABAB] text-[#5B0505] w-[500px] sm:w-[500px] sm:h-[540px] mt-4 md:-0 md:w-full">
          <p className=" mt-1 text-1xl font-bold">CALENDAR</p>
        </div>
      </div>

      <div className="flex flex-col -mt-[11%] w-[50%] px-10">
        <div className="mt-[1%] text-center bg-[#5B0505] text-white h-[90px] rounded-lg">
          <button className="mt-2 text-4xl font-semibold">
            <EditPrivacy_Dialog sessionUser={session.user} />
          </button>
        </div>
        <div className="mt-[2%] text-center bg-[#5B0505] text-white h-[90px] rounded-lg">
          <button className="mt-4 text-4xl font-semibold">
            <UploadMaterial_Dialog sessionUser={session.user} />
          </button>
        </div>
      </div>
    </div>
  );
}
