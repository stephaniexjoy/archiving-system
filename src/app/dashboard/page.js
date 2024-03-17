import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/app/lib/prisma_db";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import EditPrivacy_Dialog from "../components/New_Components/EditPrivacy_Dialog";
import UploadMaterial_Dialog from "../components/New_Components/UploadMaterial_Dialog/UploadMaterial_Dialog";

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
    <div className="flex flex-col w-screen h-screen">
      <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center ">
        <img
          className="w-[60%] h-auto object-cover flex items-center justify-center
          sm:w-[30%] sm:h-[100%] sm:object-cover sm:flex sm:items-center sm:justify-center
          md:w-[30%] md:h-[100%] md:object-cover md:flex md:items-center md:justify-center
          lg:w-[30%] lg:h-[100%] lg:object-cover lg:flex lg:items-center lg:justify-center
          xl:w-[30%] xl:h-[100%] xl:object-cover xl:flex xl:items-center xl:justify-center
          2xl:w-[30%] 2xl:h-[100%] 2xl:object-cover 2xl:flex 2xl:items-center 2xl:justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div className="flex mt-[2%] px-1">
        <h1 className="text-black text-[15px] 2xl:text-black text:[20px]">
          WELCOME, <br />{" "}
          <span className="text-[#5B0505] text-[25px] font-semibold -mt-4 2xl:text-[#5B0505] 2xl:text-[50px] 2xl:font-semibold 2xl:-mt-4">
            FACULTY
          </span>
        </h1>
        <img
          className=" h-[50%] w-[45%] mt-[2%] ml-[2%]
          2xl:h-[50%] 2xl:w-[90%] 2xl:mt-[1%] 2xl:ml-[3%]
         "
          alt="Filler"
          src="../photos/Filler.png"
        />
        <img
          className="h-[70%] w-[45px] mt-[.8%] ml-2
          2xl:h-[70%] 2xl:w-[90px] 2xl:mt-[.8%] 2xl:ml-[2%]"
          alt="Notification Logo"
          src="../photos/Notificationlogo.png"
        />
      </div>

      <div className="flex flex-col mt-[1%] items-center px-1 gap-x-12
      2xl:flex-row 2xl:mt-[1%] 2xl:justify-center 2xl:gap-x-12">
        <div className="text-center bg-[#B4ABAB] text-[#5B0505] w-[80%] h-[200px] py-2 rounded-lg
        2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[440px] 2xl:h-[320px] 2xl:py-6 2xl:rounded-lg">
          <p className="mt-4 text-xl font-semibold
          2xl:mt-8 2xl:text-4xl 2xl:font-semibold">ARCHIVED MATERIALS</p>
          <p className="mt-8 text-7xl text-[#5B0505] font-semibold">
            {fileCount}
          </p>
        </div>

        <div className="hidden 2xl:block 2xl:ml-9 2xl:w-36 2xl:h-auto 2xl:object-cover">
          <img src="../photos/ccsLogo.png" alt="CCS Logo" />
        </div>

        <div className="text-center bg-[#B4ABAB] text-[#5B0505] w-[80%] h-[200px] mt-4 rounded-lg
        2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[440px] 2xl:h-[320px] 2xl:mt-4 2xl:rounded-lg">
          <p className="mt-4 text-xl font-semibold
          2xl:mt-8 2xl:text-4xl 2xl:font-semibold">CALENDAR</p>
        </div>
      </div>

      <div className="flex flex-col mt-[1%] items-center">
        <div className="text-center bg-[#5B0505] text-white w-[60%] h-[80px] p-1 rounded-lg mt-9 space-y-12">
          <div className="text-center bg-[#5B0505] text-white h-[45%] rounded-lg -mt-2">
            <button className="mt-2 text-[20px] font-semibold">
              <EditPrivacy_Dialog sessionUser={session.user} />
            </button>
          </div>
          <div className="text-center bg-[#5B0505] text-white w-[100%] h-[80px] p-1 rounded-lg mt-2">
            <button className="mt-1 text-2xl font-semibold">
              <UploadMaterial_Dialog sessionUser={session.user} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
