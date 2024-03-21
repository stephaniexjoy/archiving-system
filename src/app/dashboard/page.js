import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/app/lib/prisma_db";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import CalendarComponent from "../components/Calendar";
import EditPrivacy_Dialog from "../components/New_Components/EditPrivacy_Dialog";
import UploadMaterial_Dialog from "../components/New_Components/UploadMaterial_Dialog/UploadMaterial_Dialog";
import Notification_Panel from "../components/Notifications/Notification_Panel";
import Image from "next/image";

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
    <div className="flex flex-col w-screen h-screen overflow-y-auto">
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
        <Image
          className=" h-[50%] w-[45%] mt-[2%] ml-[2%]
          sm:h-[50%] sm:w-[60%] sm:mt-[2%] sm:ml-[2%]
          md:h-[50%] md:w-[61%] md:mt-[2%] md:ml-[2%]
          lg:h-[50%] lg:w-[73%] lg:mt-[2%] lg:ml-[2%]
          xl:h-[50%] xl:w-[74%] xl:mt-[2%] xl:ml-[2%] 
          2xl:h-[50%] 2xl:w-[75%] 2xl:mt-[1%] 2xl:ml-[3%]
         "
          alt="Filler"
          src="/photos/Filler.png"
          width={992}
          height={44}
        />
        <Notification_Panel />
      </div>

      <div
        className="flex flex-col items-center px-0 gap-x-0 gap-y-4
      sm:flex sm:flex-col sm:items-center sm:mt-4 sm:px-0 sm:gap-x-
      md:flex md:flex-col md:items-center md:mt-4 md:px-0 md:gap-x-0
      lg:flex lg:flex-col lg:items-center lg:mt-4 lg:px-0 lg:gap-x-0
      xl:flex xl:flex-row xl:items-center xl:mt-4 xl:px-10 xl:gap-x-12
      2xl:flex-row 2xl:mt-[1%] 2xl:px-10 2xl:gap-x-12"
      >
        <div
          className="text-center bg-[#B4ABAB] text-[#5B0505] w-[90%] h-[260px] py-2 rounded-lg
          sm:text-center sm:bg-[#B4ABAB] sm:text-[#5B0505] sm:w-[80%] sm:h-[290px] sm:py-3 sm:rounded-lg
          md:text-center md:bg-[#B4ABAB] md:text-[#5B0505] md:w-[70%] md:h-[320px] md:py-4 md:rounded-lg
          lg:text-center lg:bg-[#B4ABAB] lg:text-[#5B0505] lg:w-[60%] lg:h-[360px] lg:py-5 lg:rounded-lg
          xl:text-center xl:bg-[#B4ABAB] xl:text-[#5B0505] xl:w-[50%] xl:h-[360px] xl:py-5 xl:rounded-lg
          2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[460px] 2xl:h-[360px] 2xl:py-6 2xl:rounded-lg"
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
          <p
            className="mt-8 text-7xl text-[#5B0505] font-semibold
          sm:mt-9 sm:text-7xl sm:text-[#5B0505] sm:font-semibold
          md:mt-10 md:text-8xl md:text-[#5B0505] md:font-semibold
          lg:mt-11 lg:text-8xl lg:text-[#5B0505] lg:font-semibold
          xl:mt-11 xl:text-8xl xl:text-[#5B0505] xl:font-semibold
          2xl:mt-12 2xl:text-9xl 2xl:text-[#5B0505] 2xl:font-semibold"
          >
            {fileCount}
          </p>
        </div>

        <div
          className="text-center items-center content-center bg-[#B4ABAB] text-[#5B0505] w-[90%] h-[260px] mt-0 rounded-lg
          sm:text-center sm:bg-[#B4ABAB] sm:text-[#5B0505] sm:w-[80%] sm:h-[290px] sm:mt-0 sm:rounded-lg
          md:text-center md:bg-[#B4ABAB] md:text-[#5B0505] md:w-[70%] md:h-[320px] md:mt-0 md:rounded-lg
          lg:text-center lg:bg-[#B4ABAB] lg:text-[#5B0505] lg:w-[60%] lg:h-[360px] lg:mt-0 lg:rounded-lg
          xl:text-center xl:bg-[#B4ABAB] xl:text-[#5B0505] xl:w-[50%] xl:h-[360px] xl:mt-0 xl:rounded-lg
          2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[460px] 2xl:h-[360px] 2xl:mt-0 2xl:rounded-lg"
        >
          <CalendarComponent />
        </div>

        <div className="flex flex-col items-center space-y-8 mb-11">
          <Image
            className="w-48 h-auto object-cover
            2xl:ml-9 2xl:w-36 2xl:h-auto 2xl:object-cover"
            src="/photos/ccsLogo.png"
            alt="CCS Logo"
            width={2201}
            height={2201}
          />
          <div
            className="text-center bg-[#5B0505] text-white w-[90%] h-[80px] p-4 rounded-lg
          sm:text-center sm:bg-[#5B0505] sm:text-white sm:w-[80%] sm:h-[80px] sm:p-4 sm:rounded-lg sm:mt-4
          md:text-center md:bg-[#5B0505] md:text-white md:w-[70%] md:h-[80px] md:p-4 md:rounded-lg md:mt-4
          lg:text-center lg:bg-[#5B0505] lg:text-white lg:w-[60%] lg:h-[80px] lg:p-4 lg:rounded-lg lg:mt-4
          xl:text-center xl:bg-[#5B0505] xl:text-white xl:w-[480px] xl:h-[80px] xl:p-4 xl:rounded-lg xl:mt-4
          2xl:mt-6 2xl:text-center 2xl:bg-[#5B0505] 2xl:text-white 2xl:w-[480px] 2xl:h-[90px] 2xl:p-4 2xl:mx-4 2xl:rounded-lg"
          >
            <EditPrivacy_Dialog sessionUser={session.user} />
          </div>
          <div
            className="text-center bg-[#5B0505] text-white w-[90%] h-[80px] p-4 rounded-lg 
          sm:text-center sm:bg-[#5B0505] sm:text-white sm:w-[80%] sm:h-[80px] sm:p-4 sm:rounded-lg sm:mt-4
          md:text-center md:bg-[#5B0505] md:text-white md:w-[70%] md:h-[80px] md:p-4 md:rounded-lg md:mt-4
          lg:text-center lg:bg-[#5B0505] lg:text-white lg:w-[60%] lg:h-[80px] lg:p-4 lg:rounded-lg lg:mt-4
          xl:text-center xl:bg-[#5B0505] xl:text-white xl:w-[480px] xl:h-[80px] xl:p-4 xl:rounded-lg xl:mt-4
          2xl:mt-6 2xl:text-center 2xl:bg-[#5B0505] 2xl:text-white 2xl:w-[480px] 2xl:h-[90px] 2xl:p-4 2xl:mx-4 2xl:rounded-lg"
          >
            <UploadMaterial_Dialog sessionUser={session.user} />
          </div>
        </div>
      </div>
    </div>
  );
}
