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
    <div className="flex flex-col w-[250%] h-[100%]">
      <div className="bg-[#AD5606] w-[40%] h-[80%] flex items-center justify-center">
        <img
          className="w-[50%] sm:w-[27%] sm:h-[100%] md:w-[35%] md:h-[100%] lg:w-[27%] lg:h-[100%] object-cover items-center justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div className="flex mt-[2%] px-10 w-[23%] -ml-[4%]">
        <h1 className="text-black text-[15px]">
          WELCOME, <br />{" "}
          <span className="text-[#5B0505] text-[20px] font-semibold -mt-4">
            FACULTY
          </span>
        </h1>
        <img
          className="w-[300%] h-[30%] mt-[10%] ml-[30%]"
          alt="Filler"
          src="../photos/Filler.png"
        />
        <img
          className="h-[70%] w-[90px] mt-[.8%] ml-[2%]"
          alt="Notification Logo"
          src="../photos/Notificationlogo.png"
        />
      </div>

      <div className="flex flex-col items-center justify-center content-center -ml-[64%]">
       <div className="text-center bg-[#B4ABAB] text-[#5B0505]  py-0 rounded-lg w-[20%]  h-96 ">
          <p className="mt-7 text-2xl font-bold">ARCHIVED MATERIALS</p>
          <p className="mt-5 text-4xl text-[#5B0505] font-semibold">
            {fileCount}
          </p>
        </div>


        <div className=" -mt-[30%] ml-8 w-80 h-40 lg:w-[70px] lg:h-[70px] hidden md:block">
          <img
            src="../photos/ccsLogo.png"
            alt="CCS Logo"
          />
        </div>

        <div className=" text-center bg-[#B4ABAB] text-[#5B0505] mt-4 py-0 rounded-lg w-[20%] h-[100%]">
          <p className=" mt-1 text-3xl font-semibold">CALENDAR</p>
        </div>
      </div>

      <div class="flex flex-col mt-[5%] w-[35%] ml-2">
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
