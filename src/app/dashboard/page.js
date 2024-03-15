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
    <div className="flex flex-col w-auto h-full">
      <div className="bg-[#AD5606] w-auto h-[80%] flex items-center justify-center">
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
        <img
          className="h-[50%] w-[90%] mt-[1%] ml-[3%] sm:w-[80%] sm:h-[40%] md:w-[80%] md:h-[40%] lg:w-[70%] lg:h-[50%]"
          alt="Filler"
          src="../photos/Filler.png"
        />
        <img
          className="h-[70%] w-[90px] mt-[.8%] ml-[2%] sm:w-[50%] sm:h-[50%] md:w-[60%] md:h-[50%] lg:w-[10%] lg:h-[50%]"
          alt="Notification Logo"
          src="../photos/Notificationlogo.png"
        />
      </div>

      <div className="flex flex-row items-center justify-center content-center sm:grid-row-2 gap-4 sm:mt-3 lg:mt-20 lg:ml-3">
       <div className="text-center bg-[#B4ABAB] text-[#5B0505] w-[440px] h-[320px] py-0 rounded-lg sm:w-[300px] sm:h-[280px] md:w-[50%] md:h-[60%] lg:w-[50%] lg:h-[150%]">
          <p className="mt-8 text-4xl font-semibold">ARCHIVED MATERIALS</p>
          <p className="mt-20 text-8xl text-[#5B0505] font-semibold">
            {fileCount}
          </p>
        </div>


        <div className=" -mt-[30%] ml-8 w-80 h-40 lg:w-[70px] lg:h-[70px] hidden md:block">
          <img
            src="../photos/ccsLogo.png"
            alt="CCS Logo"
          />
        </div>

        <div className=" text-center bg-[#B4ABAB] text-[#5B0505] ml-4 sm:w-[300px] sm:h-[280px] mt-4 md:-0 md:w-full lg:w-[50%] lg:h-[150%]">
          <p className=" mt-1 text-4xl font-bold">CALENDAR</p>
        </div>
      </div>

      <div class="flex flex-col mt-[10%] w-full sm:w-[50%] gap-4 m-4">
  <div class="flex flex-col sm:flex-row gap-4">
    <div class="text-center bg-[#5B0505] text-white w-full sm:w-[300px] h-[90px] rounded-lg">
      <button class="mt-2 text-4xl font-semibold sm:text-3xl">
        <EditPrivacy_Dialog sessionUser={session.user} />
      </button>
    </div>
    <div class="text-center bg-[#5B0505] text-white w-full sm:w-[300px] h-[90px] rounded-lg">
      <button class="mt-1 text-4xl font-semibold sm:text-3xl">
        <UploadMaterial_Dialog sessionUser={session.user} />
      </button>
    </div>
  </div>
</div>


    </div>
  );
}
