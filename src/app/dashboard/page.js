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
          sm:w-[60%] sm:h-[100%] sm:object-cover sm:flex sm:items-center sm:justify-center
          md:w-[60%] md:h-[100%] md:object-cover md:flex md:items-center md:justify-center
          lg:w-[40%] lg:h-[100%] lg:object-cover lg:flex lg:items-center lg:justify-center
          xl:w-[35%] xl:h-[100%] xl:object-cover xl:flex xl:items-center xl:justify-center
          2xl:w-[30%] 2xl:h-[100%] 2xl:object-cover 2xl:flex 2xl:items-center 2xl:justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div
        className="flex mt-[2%] px-1
      sm:flex sm:mt-[2%] sm:px-2
      md:flex md:mt-[2%] md:px-4
      lg:flex lg:mt-[2%] lg:px-6
      xl:flex xl:mt-[2%] xl:px-8
      2xl:flex 2xl:mt-[2%] 2xl:px-10"
      >
        <h1
          className="text-black text-[15px]
        sm:text-black sm:text-[16px]
        md:text-black md:text-[17px]
        lg:text-black lg:text-[18px]
        xl:text-black xl:text-[19px]
        2xl:text-black text:[20px]"
        >
          WELCOME, <br />{" "}
          <span
            className="text-[#5B0505] text-[25px] font-semibold -mt-4
          sm:text-[#5B0505] sm:text-[30px] sm:font-semibold sm:-mt-4
          md:text-[#5B0505] md:text-[35px] md:font-semibold md:-mt-4
          lg:text-[#5B0505] lg:text-[40px] lg:font-semibold lg:-mt-4
          xl:text-[#5B0505] xl:text-[45px] xl:font-semibold xl:-mt-4
          2xl:text-[#5B0505] 2xl:text-[50px] 2xl:font-semibold 2xl:-mt-4"
          >
            FACULTY
          </span>
        </h1>
        <img
          className=" h-[50%] w-[45%] mt-[2%] ml-[2%]
          sm:h-[50%] sm:w-[60%] sm:mt-[2%] sm:ml-[2%]
          md:h-[50%] md:w-[61%] md:mt-[2%] md:ml-[2%]
          lg:h-[50%] lg:w-[73%] lg:mt-[2%] lg:ml-[2%]
          xl:h-[50%] xl:w-[74%] xl:mt-[2%] xl:ml-[2%] 
          2xl:h-[50%] 2xl:w-[75%] 2xl:mt-[1%] 2xl:ml-[3%]
         "
          alt="Filler"
          src="../photos/Filler.png"
        />
        <img
          className="h-[70%] w-[45px] mt-[.8%] ml-[1%]
          sm:h-[70%] sm:w-[60px] sm:mt-[.8%] sm:ml-[1.3%]
          md:h-[70%] md:w-[75px] md:mt-[.8%] md:ml-[1.6%]
          lg:h-[70%] lg:w-[83px] lg:mt-[.8%] lg:ml-[1.8%]
          xl:h-[70%] xl:w-[84px] xl:mt-[.8%] xl:ml-[1.8%]
          2xl:h-[70%] 2xl:w-[85px] 2xl:mt-[.8%] 2xl:ml-[2%]"
          alt="Notification Logo"
          src="../photos/Notificationlogo.png"
        />
      </div>

      <div
        className="flex flex-col items-center px-0 gap-x-0
      sm:flex sm:flex-col sm:items-center sm:mt-4 sm:px-0 sm:gap-x-0
      md:flex md:flex-col md:items-center md:mt-4 md:px-0 md:gap-x-0
      lg:flex lg:flex-col lg:items-center lg:mt-4 lg:px-0 lg:gap-x-0
      xl:flex xl:flex-row xl:items-center xl:mt-4 xl:px-10 xl:gap-x-12
      2xl:flex-row 2xl:mt-[1%] 2xl:justify-center 2xl:gap-x-12"
      >
        <div
          className="text-center bg-[#B4ABAB] text-[#5B0505] w-[90%] h-[200px] py-2 rounded-lg
          sm:text-center sm:bg-[#B4ABAB] sm:text-[#5B0505] sm:w-[80%] sm:h-[230px] sm:py-3 sm:rounded-lg
          md:text-center md:bg-[#B4ABAB] md:text-[#5B0505] md:w-[70%] md:h-[260px] md:py-4 md:rounded-lg
          lg:text-center lg:bg-[#B4ABAB] lg:text-[#5B0505] lg:w-[60%] lg:h-[290px] lg:py-5 lg:rounded-lg
          xl:text-center xl:bg-[#B4ABAB] xl:text-[#5B0505] xl:w-[50%] xl:h-[310px] xl:py-5 xl:rounded-lg
          2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[440px] 2xl:h-[320px] 2xl:py-6 2xl:rounded-lg"
        >
          <p
            className="mt-4 text-xl font-semibold
          sm:mt-5 sm:text-2xl sm:font-semibold
          md:mt-5 md:text-3xl md:font-semibold
          lg:mt-5 lg:text-4xl lg:font-semibold
          xl:mt-5 xl:text-3xl xl:font-semibold
          2xl:mt-8 2xl:text-4xl 2xl:font-semibold"
          >
            ARCHIVED MATERIALS
          </p>
          <p className="mt-8 text-7xl text-[#5B0505] font-semibold
          sm:mt-9 sm:text-7xl sm:text-[#5B0505] sm:font-semibold
          md:mt-10 md:text-8xl md:text-[#5B0505] md:font-semibold
          lg:mt-11 lg:text-8xl lg:text-[#5B0505] lg:font-semibold
          xl:mt-11 xl:text-8xl xl:text-[#5B0505] xl:font-semibold
          2xl:mt-12 2xl:text-9xl 2xl:text-[#5B0505] 2xl:font-semibold">
            {fileCount}
          </p>
        </div>

        <div className="hidden 2xl:block 2xl:ml-9 2xl:w-36 2xl:h-auto 2xl:object-cover">
          <img src="../photos/ccsLogo.png" alt="CCS Logo" />
        </div>

        <div
          className="text-center bg-[#B4ABAB] text-[#5B0505] w-[90%] h-[200px] mt-4 rounded-lg
          sm:text-center sm:bg-[#B4ABAB] sm:text-[#5B0505] sm:w-[80%] sm:h-[230px] sm:mt-4 sm:rounded-lg
          md:text-center md:bg-[#B4ABAB] md:text-[#5B0505] md:w-[70%] md:h-[260px] md:mt-4 md:rounded-lg
          lg:text-center lg:bg-[#B4ABAB] lg:text-[#5B0505] lg:w-[60%] lg:h-[290px] lg:mt-4 lg:rounded-lg
          xl:text-center xl:bg-[#B4ABAB] xl:text-[#5B0505] xl:w-[50%] xl:h-[310px] xl:mt-4 xl:rounded-lg
          2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[440px] 2xl:h-[320px] 2xl:mt-4 2xl:rounded-lg"
        >
          <p
            className="mt-4 text-xl font-semibold
          2xl:mt-8 2xl:text-4xl 2xl:font-semibold"
          >
            CALENDAR
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6 px-0 gap-x-2">
        <div className=" text-center bg-[#5B0505] text-[white] h-[40px] rounded-lg space-y-3">
          <div className="text-center bg-[#5B0505] text-white rounded-lg mt-1">
            <EditPrivacy_Dialog sessionUser={session.user} />
          </div>
          <div className="text-center bg-[#5B0505] text-white p-3 rounded-lg">
            <UploadMaterial_Dialog sessionUser={session.user} />
          </div>
        </div>
      </div>
    </div>
  );
}
