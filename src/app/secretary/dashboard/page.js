import React from "react";
import { db } from "@/app/lib/prisma_db";
import { redirect } from "next/navigation";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UploadMaterial_Dialog from "@/app/components/New_Components/UploadMaterial_Dialog/UploadMaterial_Dialog";
import CreateAccount_Dialog from "@/app/components/New_Components/CreateAccount_Dialog/CreateAccount_Dialog";
import Link from "next/link";
import ActivityTable_Secretary from "@/app/components/NewTable/Dashboard/Secretary/ActivityTable_Secretary";

async function page() {
  const session = await getServerSession(AuthOptions);

  if (session.user.position === "Superadmin") {
    redirect("/superadmin/dashboard/");
  }
  if (session.user.position === "Faculty") {
    redirect("/faculty/dashboard/");
  }

  const fileCount = await db.file.count();
  const userCount = await db.user.count();

  console.log(fileCount);
  console.log(userCount);

  const activities = await db.activity.findMany();
  console.log(activities);

  const activitiesFormatted = activities.map((activity) => ({
    ...activity,
    createdAt: new Date(activity.createdAt).toLocaleString(),
  }));
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto">
      <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center">
        <img
          className="
          w-[60%] h-auto object-cover flex items-center justify-center
<<<<<<< HEAD
          sm:w-[30%] sm:h-[100%] sm:object-cover sm:flex sm:items-center sm:justify-center
          md:w-[30%] md:h-[100%] md:object-cover md:flex md:items-center md:justify-center
=======
          sm:w-[60%] sm:h-[100%] sm:object-cover sm:flex sm:items-center sm:justify-center
          md:w-[60%] md:h-[100%] md:object-cover md:flex md:items-center md:justify-center
          lg:w-[40%] lg:h-[100%] lg:object-cover lg:flex lg:items-center lg:justify-center
          xl:w-[35%] xl:h-[100%] xl:object-cover xl:flex xl:items-center xl:justify-center
>>>>>>> b608e1d63e26dcb08ffd4003075d570e65ea3e40
          2xl:w-[30%] 2xl:h-[100%] 2xl:object-cover 2xl:flex 2xl:items-center 2xl:justify-center
          "
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div
        className="
      flex mt-[2%] px-1
      sm:flex sm:mt-[2%] sm:px-2
      md:flex md:mt-[2%] md:px-4
      lg:flex lg:mt-[2%] lg:px-6
      xl:flex xl:mt-[2%] xl:px-8
      2xl:flex 2xl:mt-[2%] 2xl:px-10
      "
      >
        <h1
          className="
        text-black text-[15px]
        sm:text-black sm:text-[16px]
        md:text-black md:text-[17px]
        lg:text-black lg:text-[18px]
        xl:text-black xl:text-[19spx]
        2xl:text-black 2xl:text-[20px]
        "
        >
          WELCOME, <br />{" "}
          <span
            className="
          text-[#5B0505] text-[25px] font-semibold -mt-4
          sm:text-[#5B0505] sm:text-[30px] sm:font-semibold sm:-mt-4
          md:text-[#5B0505] md:text-[35px] md:font-semibold md:-mt-4
          lg:text-[#5B0505] lg:text-[40px] lg:font-semibold lg:-mt-4
          xl:text-[#5B0505] xl:text-[45px] xl:font-semibold xl:-mt-4
          2xl:text-[#5B0505] 2xl:text-[50px] 2xl:font-semibold 2xl:-mt-4
          "
          >
            SECRETARY
          </span>
        </h1>
        <img
          className="
          h-[50%] w-[45%] mt-[2%] ml-[2%] 
          sm:h-[50%] sm:w-[60%] sm:mt-[2%] sm:ml-[2%]
          md:h-[50%] md:w-[61%] md:mt-[2%] md:ml-[2%]
          lg:h-[50%] lg:w-[67%] lg:mt-[2%] lg:ml-[2%]
          xl:h-[50%] xl:w-[70%] xl:mt-[2%] xl:ml-[2%]
          2xl:h-[50%] 2xl:w-[90%] 2xl:mt-[1%] 2xl:ml-[3%]
          "
          alt="Filler"
          src="../photos/Filler.png"
        />
        <img
          className="
          h-[70%] w-[45px] mt-[.8%] ml-[1%]
          sm:h-[70%] sm:w-[60px] sm:mt-[.8%] sm:ml-[1.3%]
          md:h-[70%] md:w-[75px] md:mt-[.8%] md:ml-[1.6%]
          lg:h-[70%] lg:w-[80px] lg:mt-[.8%] lg:ml-[1.8%]
          xl:h-[70%] xl:w-[85px] xl:mt-[.8%] xl:ml-[1.8%]
          2xl:h-[70%] 2xl:w-[90px] 2xl:mt-[.8%] 2xl:ml-[2%]
          "
          alt="Notification Logo"
          src="../photos/Notificationlogo.png"
        />
      </div>

      <div
        className="
      flex flex-col items-center mt-4 px-0 gap-x-0
      sm:flex sm:flex-col sm:items-center sm:mt-4 sm:px-0 sm:gap-x-0
      md:flex md:flex-col md:items-center md:mt-4 md:px-0 md:gap-x-0
      lg:flex lg:flex-col lg:items-center lg:mt-4 lg:px-0 lg:gap-x-0
      xl:flex xl:flex-row xl:items-center xl:mt-4 xl:px-10 xl:gap-x-12
      2xl:flex-row 2xl:mt-[1%] 2xl:px-10 2xl:gap-x-12
      "
      >
        <div
          className="
        text-center bg-[#B4ABAB] text-[#5B0505] w-[90%] h-[200px] py-2 rounded-lg
        sm:text-center sm:bg-[#B4ABAB] sm:text-[#5B0505] sm:w-[80%] sm:h-[230px] sm:py-3 sm:rounded-lg
        md:text-center md:bg-[#B4ABAB] md:text-[#5B0505] md:w-[70%] md:h-[260px] md:py-4 md:rounded-lg
        lg:text-center lg:bg-[#B4ABAB] lg:text-[#5B0505] lg:w-[60%] lg:h-[290px] lg:py-5 lg:rounded-lg
        xl:text-center xl:bg-[#B4ABAB] xl:text-[#5B0505] xl:w-[50%] xl:h-[310px] xl:py-5 xl:rounded-lg
        2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[440px] 2xl:h-[320px] 2xl:py-6 2xl:rounded-lg
        "
        >
          <p
            className="
          mt-4 text-xl font-semibold
          sm:mt-5 sm:text-2xl sm:font-semibold
          md:mt-5 md:text-3xl md:font-semibold
          lg:mt-5 lg:text-4xl lg:font-semibold
          xl:mt-5 xl:text-3xl xl:font-semibold
          2xl:mt-8 2xl:text-4xl 2xl:font-semibold
          "
          >
            ARCHIVED MATERIALS
          </p>
          <p
            className="
          mt-8 text-7xl text-[#5B0505] font-semibold
          sm:mt-9 sm:text-7xl sm:text-[#5B0505] sm:font-semibold
          md:mt-10 md:text-8xl md:text-[#5B0505] md:font-semibold
          lg:mt-11 lg:text-8xl lg:text-[#5B0505] lg:font-semibold
          xl:mt-11 xl:text-8xl xl:text-[#5B0505] xl:font-semibold
          2xl:mt-12 2xl:text-9xl 2xl:text-[#5B0505] 2xl:font-semibold
          "
          >
            {fileCount}
          </p>
        </div>
        <div
          className="
        text-center bg-[#5B0505] text-white w-[90%] h-[200px] py-2 rounded-lg my-4
        sm:text-center sm:bg-[#5B0505] sm:text-white sm:w-[80%] sm:h-[230px] sm:py-3 sm:rounded-lg sm:my-4
        md:text-center md:bg-[#5B0505] md:text-white md:w-[70%] md:h-[260px] md:py-4 md:rounded-lg md:my-4
        lg:text-center lg:bg-[#5B0505] lg:text-white lg:w-[60%] lg:h-[290px] lg:py-5 lg:rounded-lg lg:my-4
        xl:text-center xl:bg-[#5B0505] xl:text-white xl:w-[50%] xl:h-[310px] xl:py-5 xl:rounded-lg xl:my-4
        2xl:text-center 2xl:bg-[#5B0505] 2xl:text-white 2xl:w-[440px] 2xl:h-[320px] 2xl:py-6 2xl:rounded-lg
        "
        >
          <p
            className="
            mt-4 text-xl font-semibold
            sm:mt-5 sm:text-2xl sm:font-semibold
            md:mt-5 md:text-3xl md:font-semibold
            lg:mt-5 lg:text-4xl lg:font-semibold
            xl:mt-5 xl:text-3xl xl:font-semibold
            2xl:mt-8 2xl:text-4xl 2xl:font-semibold
          "
          >
            NO. OF FACULTY
          </p>
          <p
            className="
          mt-8 text-7xl text-[#FFFFFF] font-semibold
          sm:mt-9 sm:text-7xl sm:text-[#FFFFFF] sm:font-semibold
          md:mt-10 md:text-8xl md:text-[#FFFFFF] md:font-semibold
          lg:mt-11 lg:text-8xl lg:text-[#FFFFFF] lg:font-semibold
          xl:mt-11 xl:text-8xl xl:text-[#FFFFFF] xl:font-semibold
          2xl:mt-12 2xl:text-9xl 2xl:text-[#FFFFFF] 2xl:font-semibold
          "
          >
            {userCount}
          </p>
        </div>
        <div
          className="
        flex flex-col items-center w-full
        sm:flex-col sm:items-center sm:w-full
        2xl:flex-col 2xl:items-center

        "
        >
          <div
            className="
          text-center bg-[#5B0505] text-[white] w-[90%] h-[80px] p-4 rounded-lg
          sm:text-center sm:bg-[#5B0505] sm:text-[white] sm:w-[80%] sm:h-[80px] sm:p-4 sm:rounded-lg
          md:text-center md:bg-[#5B0505] md:text-[white] md:w-[70%] md:h-[80px] md:p-4 md:rounded-lg
          lg:text-center lg:bg-[#5B0505] lg:text-[white] lg:w-[60%] lg:h-[80px] lg:p-4 lg:rounded-lg
          xl:text-center xl:bg-[#5B0505] xl:text-[white] xl:w-[480px] xl:h-[80px] xl:p-4 xl:rounded-lg
          2xl:text-center 2xl:bg-[#5B0505] 2xl:text-[white] 2xl:w-[480px] 2xl:h-[90px] 2xl:p-4 2xl:mx-4 2xl:rounded-lg
          "
          >
            <CreateAccount_Dialog sessionUser={session.user} />
          </div>
          <div
            className="
          text-center bg-[#B4ABAB] text-[#5B0505] w-[90%] h-[80px] p-4 rounded-lg mt-4
          sm:text-center sm:bg-[#B4ABAB] sm:text-[#5B0505] sm:w-[80%] sm:h-[80px] sm:p-4 sm:rounded-lg sm:mt-4
          md:text-center md:bg-[#B4ABAB] md:text-[#5B0505] md:w-[70%] md:h-[80px] md:p-4 md:rounded-lg md:mt-4
          lg:text-center lg:bg-[#B4ABAB] lg:text-[#5B0505] lg:w-[60%] lg:h-[80px] lg:p-4 lg:rounded-lg lg:mt-4
          xl:text-center xl:bg-[#B4ABAB] xl:text-[#5B0505] xl:w-[480px] xl:h-[80px] xl:p-4 xl:rounded-lg xl:mt-4
          2xl:mt-6 2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[480px] 2xl:h-[90px] 2xl:p-4 2xl:mx-4 2xl:rounded-lg
          "
          >
            <Link href={"/secretary/dashboard/archiving"}>
              <button
                className="
              mt-2 text-xl font-bold
              sm:mt-2 sm:text-xl sm:font-bold
              md:mt-2 md:text-2xl md:font-bold
              lg:mt-2 lg:text-2xl lg:font-bold
              xl:mt-2 xl:text-3xl xl:font-bold
              2xl:mt-2 2xl:text-3xl 2xl:font-bold
              "
              >
                VIEW MATERIALS
              </button>
            </Link>
          </div>
          <div
            className="
            text-center bg-[#5B0505] text-white w-[90%] h-[80px] p-4 rounded-lg mt-4
            sm:text-center sm:bg-[#5B0505] sm:text-white sm:w-[80%] sm:h-[80px] sm:p-4 sm:rounded-lg sm:mt-4
            md:text-center md:bg-[#5B0505] md:text-white md:w-[70%] md:h-[80px] md:p-4 md:rounded-lg md:mt-4
            lg:text-center lg:bg-[#5B0505] lg:text-white lg:w-[60%] lg:h-[80px] lg:p-4 lg:rounded-lg lg:mt-4
            xl:text-center xl:bg-[#5B0505] xl:text-white xl:w-[480px] xl:h-[80px] xl:p-4 xl:rounded-lg xl:mt-4
            2xl:mt-6 2xl:text-center 2xl:bg-[#5B0505] 2xl:text-white 2xl:w-[480px] 2xl:h-[90px] 2xl:p-4 2xl:mx-4 2xl:rounded-lg
            "
          >
            <Link href={"/secretary/dashboard/viewfaculty"}>
              <button
                className="
                mt-2 text-xl font-bold
                sm:mt-2 sm:text-xl sm:font-bold
                md:mt-2 md:text-2xl md:font-bold
                lg:mt-2 lg:text-2xl lg:font-bold
                xl:mt-2 xl:text-3xl xl:font-bold
                2xl:mt-2 2xl:text-3xl 2xl:font-bold
                "
              >
                VIEW FACULTY
              </button>
            </Link>
          </div>
        </div>
        <div
          className="
        flex flex-col items-center
        2xl:flex 2xl:flex-col"
        >
          <div
            className="
          text-center bg-[#B4ABAB] text-[#5B0505] w-[150%] h-56 mt-4 rounded-lg
          2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-72 2xl:h-44
          "
          >
            <p className=" mt-16 text-1xl font-bold">CALENDAR</p>
          </div>
          <div
            className="
          w-auto h-auto items-center mt-4
          2xl:w-auto 2xl:h-auto
          "
          >
            <img
              className="
              w-48 h-auto object-cover
              2xl:ml-16 2xl:w-36 2xl:h-auto 2xl:object-cover
              "
              src="../photos/ccsLogo.png"
              alt="CCS Logo"
            />
          </div>
        </div>
      </div>

      <div
        className="
      -mt-60 w-full h-screen items-center font-[Times New Roman] rounded-lg px-10 overflow-y-auto
      2xl:mt-8 2xl:w-full 2xl:h-screen 2xl:items-center 2xl:font-[Times New Roman] 2xl:rounded-lg 2xl:px-10 2xl:overflow-y-auto
      "
      >
        <ActivityTable_Secretary activity={activitiesFormatted} />
      </div>
    </div>
  );
}
export default page;
