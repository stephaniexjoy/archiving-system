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
    <div className="flex flex-col w-screen h-screen">
      <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center">
        <img
          className="
          w-[60%] h-auto object-cover flex items-center justify-center
          sm:w-[30%] sm:h-[100%] sm:object-cover sm:flex sm:items-center sm:justify-center
          md:w-[30%] md:h-[100%] md:object-cover md:flex md:items-center md:justify-center

          2xl:w-[30%] 2xl:h-[100%] 2xl:object-cover 2xl:flex 2xl:items-center 2xl:justify-center
          "
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div
        className="
      flex mt-[2%] px-1
      2xl:flex 2xl:mt-[2%] 2xl:px-10
      "
      >
        <h1
          className="
        text-black text-[15px]
        2xl:text-black 2xl:text-[20px]
        "
        >
          WELCOME, <br />{" "}
          <span
            className="
          text-[#5B0505] text-[25px] font-semibold -mt-4
          2xl:text-[#5B0505] 2xl:text-[50px] 2xl:font-semibold 2xl:-mt-4
          "
          >
            SECRETARY
          </span>
        </h1>
        <img
          className="
          h-[50%] w-[45%] mt-[2%] ml-[2%]
          2xl:h-[50%] 2xl:w-[90%] 2xl:mt-[1%] 2xl:ml-[3%]
          "
          alt="Filler"
          src="../photos/Filler.png"
        />
        <img
          className="
          h-[70%] w-[45px] mt-[.8%] ml-[1%]
          2xl:h-[70%] 2xl:w-[90px] 2xl:mt-[.8%] 2xl:ml-[2%]
          "
          alt="Notification Logo"
          src="../photos/Notificationlogo.png"
        />
      </div>

      <div
        className="
      flex flex-col items-center mt-[1%] px-1 gap-x-12
      2xl:flex-row 2xl:mt-[1%] 2xl:px-10 2xl:gap-x-12
      "
      >
        <div
          className="
        text-center bg-[#B4ABAB] text-[#5B0505] w-[80%] h-[200px] py-2 rounded-lg
        2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[440px] 2xl:h-[320px] 2xl:py-6 2xl:rounded-lg
        "
        >
          <p
            className="
          mt-4 text-xl font-semibold
          2xl:mt-8 2xl:text-4xl 2xl:font-semibold
          "
          >
            ARCHIVED MATERIALS
          </p>
          <p
            className="
          mt-8 text-7xl text-[#5B0505] font-semibold
          2xl:mt-12 t2xl:ext-9xl 2xl:text-[#5B0505] 2xl:font-semibold
          "
          >
            {fileCount}
          </p>
        </div>
        <div
          className="
        text-center bg-[#5B0505] text-white w-[80%] h-[200px] py-2 rounded-lg my-4
        2xl:text-center 2xl:bg-[#5B0505] 2xl:text-white 2xl:w-[440px] 2xl:h-[320px] 2xl:py-6 2xl:rounded-lg
        "
        >
          <p
            className="
          mt-4 text-xl font-semibold
          2xl:mt-8 2xl:text-4xl 2xl:font-bold
          "
          >
            NO. OF FACULTY
          </p>
          <p
            className="
          mt-8 text-7xl text-[#FFFFFF] font-semibold
          2xl:mt-12 2xl:text-9xl 2xl:text-[#FFFFFF] 2xl:font-semibold
          "
          >
            {userCount}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="
          text-center bg-[#5B0505] text-[white] w-[130%] h-[80px] p-4 rounded-lg
          2xl:text-center 2xl:bg-[#5B0505] 2xl:text-[white] 2xl:w-[480px] 2xl:h-[90px] 2xl:p-4 2xl:mx-4 2xl:rounded-lg
          "
          >
            <CreateAccount_Dialog sessionUser={session.user} />
          </div>
          <div
            className="
          text-center bg-[#B4ABAB] text-[#5B0505] w-[130%] h-[80px] p-4 rounded-lg mt-4
          2xl:mt-6 2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[480px] 2xl:h-[90px] 2xl:p-4 2xl:mx-4 2xl:rounded-lg
          "
          >
            <Link href={"/secretary/dashboard/archiving"}>
              <button
                className="
              mt-2 text-xl font-bold
              2xl:mt-2 2xl:text-3xl 2xl:font-bold
              "
              >
                VIEW MATERIALS
              </button>
            </Link>
          </div>
          <div
            className="
          text-center bg-[#5B0505] text-white w-[130%] h-[80px] p-4 rounded-lg mt-4
          2xl:mt-6 2xl:text-center 2xl:bg-[#5B0505] 2xl:text-white 2xl:w-[480px] 2xl:h-[90px] 2xl:p-4 2xl:mx-4 2xl:rounded-lg
          "
          >
            <Link href={"/secretary/dashboard/viewfaculty"}>
              <button
                className="
              mt-2 text-xl font-bold
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
        {/*  <table
          className="
        min-w-full table-fixed w-full text-center
        2xl:min-w-full 2xl:table-fixed 2xl:w-full 2xl:text-center
        "
        >
          <thead
            className="
          bg-[#5B0505] text-white text-2xl
          2xl:bg-[#5B0505] 2xl:text-white 2xl:text-2xl
          "
          >
            <tr>
              <th
                className="
              py-2
              2xl:py-2
              "
              >
                NAME
              </th>
              <th>POSITION</th>
              <th>LAST ACTIVITY</th>
              <th>DATE AND TIME</th>
            </tr>
          </thead>
          <tbody
            className="
          bg-[#B4ABAB] text-black text-xl
          2xl:bg-[#B4ABAB] 2xl:text-black 2xl:text-xl
          "
          >
            {activitiesFormatted.map((activity) => (
              <tr key={activity.id}>
                <td
                  className="
                py-2
                2xl:py-2
                "
                >
                  {activity.name}
                </td>
                <td>{activity.position}</td>
                <td>{activity.type}</td>
                <td>{activity.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
        <ActivityTable_Secretary activity={activitiesFormatted} />
      </div>
    </div>
  );
}
export default page;
