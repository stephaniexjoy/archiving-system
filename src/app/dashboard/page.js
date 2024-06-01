import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/app/lib/prisma_db";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import CalendarComponent from "../components/Calendar";
import EditPrivacy_Dialog from "../components/New_Components/Edit_Privacy_Dialog/EditPrivacy_Dialog";
import UploadMaterial_Dialog from "../components/New_Components/UploadMaterial_Dialog/UploadMaterial_Dialog";
import Notification_Panel from "../components/Notifications/Notification_Panel";
import Image from "next/image";
import RedirectButton from "../components/New_Components/Buttons/Dashboard/RedirectButton";
import CreateAccount_Dialog from "@/app/components/New_Components/CreateAccount_Dialog/CreateAccount_Dialog";
import ActivityTable_Superadmin from "@/app/components/NewTable/Dashboard/Superadmin/ActivityTable_Superadmin";
import Link from "next/link";
import ActivityTable_Secretary from "@/app/components/NewTable/Dashboard/Secretary/ActivityTable_Secretary";

function AdminDashboard({ fileCount, userCount, activity }) {
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto">
      <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center"></div>

      <div
        className="
  flex mt-[2%] px-1 gap-x-5
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
            ADMIN
          </span>
        </h1>
        <Image
          className="
      h-[50%] w-[67%] mt-[2%] ml-[2%] 
      sm:h-[50%] sm:w-[60%] sm:mt-[2%] sm:ml-[2%]
      md:h-[50%] md:w-[61%] md:mt-[2%] md:ml-[2%]
      lg:h-[50%] lg:w-[67%] lg:mt-[2%] lg:ml-[2%]
      xl:h-[50%] xl:w-[70%] xl:mt-[2%] xl:ml-[2%]
      2xl:h-[50%] 2xl:w-[90%] 2xl:mt-[1%] 2xl:ml-[3%]
      "
          alt="Filler"
          src="/photos/Filler.png"
          width={992}
          height={44}
        />
      </div>

      <div>
        <div
          className="
      flex flex-col items-center mt-4 px-0 gap-x-0
      sm:flex sm:flex-col sm:items-center sm:mt-4 sm:px-0 sm:gap-x-0
      md:flex md:flex-col md:items-center md:mt-4 md:px-0 md:gap-x-0
      lg:flex lg:flex-col lg:items-center lg:mt-4 lg:px-0 lg:gap-x-0
      xl:flex-row xl:items-center xl:mt-4 xl:px-10 xl:gap-x-8
      2xl:flex-row 2xl:mt-[1%] 2xl:gap-x-8
    "
        >
          <div
            className="
      text-center bg-[#5B0505] text-[white] w-[90%] h-[80px] p-4 rounded-lg mb-5
      sm:text-center sm:bg-[#5B0505] sm:text-[white] sm:w-[80%] sm:h-[80px] sm:p-4 sm:rounded-lg
      md:text-center md:bg-[#5B0505] md:text-[white] md:w-[70%] md:h-[80px] md:p-4 md:rounded-lg
      lg:text-center lg:bg-[#5B0505] lg:text-[white] lg:w-[60%] lg:h-[80px] lg:p-4 lg:rounded-lg
      xl:text-center xl:bg-[#5B0505] xl:text-[white] xl:w-[88%] xl:h-[80px] xl:p-4 xl:rounded-lg
      2xl:text-center 2xl:bg-[#5B0505] 2xl:text-[white] 2xl:w-[72.5%] 2xl:h-[90px] 2xl:p-4 2xl:mx-4 2xl:rounded-lg
      "
          >
            <CreateAccount_Dialog />
          </div>
        </div>

        <div
          className="
    flex flex-col items-center gap-y-5 
    sm:flex sm:flex-col sm:items-center
    md:flex md:flex-col md:items-center 
    lg:flex lg:flex-col lg:items-center 
    xl:flex-row xl:items-center  xl:px-10 xl:gap-x-8
    2xl:flex-row  2xl:gap-x-8 2xl:-mt-20
    "
        >
          <div
            className="
        text-center bg-[#B4ABAB] text-[#5B0505] w-[90%] h-[200px] py-2 rounded-lg
        sm:text-center sm:bg-[#B4ABAB] sm:text-[#5B0505] sm:w-[80%] sm:h-[230px] sm:py-3 sm:rounded-lg
        md:text-center md:bg-[#B4ABAB] md:text-[#5B0505] md:w-[70%] md:h-[260px] md:py-4 md:rounded-lg
        lg:text-center lg:bg-[#B4ABAB] lg:text-[#5B0505] lg:w-[60%] lg:h-[290px] lg:py-5 lg:rounded-lg
        xl:text-center xl:bg-[#B4ABAB] xl:text-[#5B0505] xl:w-[80%] xl:h-[310px] xl:py-5 xl:rounded-lg
        2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[35%] 2xl:h-[250px] 2xl:py-5 2xl:rounded-lg 2xl:ml-5 2xl:mt-20
        "
          >
            <p
              className="
          mt-4 text-xl font-semibold
          sm:mt-5 sm:text-2xl sm:font-semibold
          md:mt-5 md:text-3xl md:font-semibold
          lg:mt-5 lg:text-4xl lg:font-semibold
          xl:mt-5 xl:text-3xl xl:font-semibold
          2xl:mt-2 2xl:text-4xl 2xl:font-semibold
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
          2xl:mt-7 2xl:text-9xl 2xl:text-[#5B0505] 2xl:font-semibold
          "
            >
              {fileCount}
            </p>
          </div>
          <div
            className="
        text-center bg-[#5B0505] text-[white] w-[90%] h-[200px] py-2 rounded-lg
        sm:text-center sm:bg-[#5B0505]  sm:w-[80%] sm:h-[230px] sm:py-3 sm:rounded-lg
        md:text-center md:bg-[#5B0505]  md:w-[70%] md:h-[260px] md:py-4 md:rounded-lg
        lg:text-center lg:bg-[#5B0505]  lg:w-[60%] lg:h-[290px] lg:py-5 lg:rounded-lg
        xl:text-center xl:bg-[#5B0505]  xl:w-[80%] xl:h-[310px] xl:py-5 xl:rounded-lg
        2xl:text-center 2xl:bg-[#5B0505]  2xl:w-[35%] 2xl:h-[250px] 2xl:py-8 2xl:rounded-lg 2xl:mt-20
        "
          >
            <p
              className="
      mt-4 text-xl font-semibold
      sm:mt-5 sm:text-2xl sm:font-semibold
      md:mt-5 md:text-3xl md:font-semibold
      lg:mt-5 lg:text-4xl lg:font-semibold
      xl:mt-5 xl:text-3xl xl:font-semibold
      2xl:-mt-1 2xl:text-4xl 2xl:font-semibold
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
      2xl:mt-7 2xl:text-9xl 2xl:text-[#FFFFFF] 2xl:font-semibold
      "
            >
              {userCount}
            </p>
          </div>
          <div
            className="
          text-center bg-[#B4ABAB] text-[#5B0505] w-auto h-64 rounded-lg
          sm:text-center sm:bg-[#B4ABAB] sm:text-[#5B0505] sm:w-auto sm:h-[250px] sm:mt-4 sm:rounded-lg
          md:text-center md:bg-[#B4ABAB] md:text-[#5B0505] md:w-auto md:h-64 md:rounded-lg
          lg:text-center lg:bg-[#B4ABAB] lg:text-[#5B0505] lg:w-auto lg:h-64 lg:rounded-lg 
          xl:text-center xl:bg-[#B4ABAB] xl:text-[#5B0505] xl:w-auto xl:h-64 xl:rounded-lg 
          2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-auto 2xl:h-[350px] 2xl:ml-4 
          "
          >
            <div className="mt-32 md:mt-36 lg:mt-28 xl:mt-32 2xl:mt-44">
              <CalendarComponent />
            </div>
          </div>
          {/* <div
          className="
          w-auto h-auto items-center 
          sm:w-auto sm:h-auto sm:items-center sm:mt-4
          md:w-auto md:h-auto md:items-center md:mt-4
          lg:w-auto lg:h-auto lg:items-center lg:mt-4
          xl:w-auto xl:h-auto xl:items-center xl:mt-4
          2xl:w-auto 2xl:h-auto
          "
        >
          <Image
            className="
          w-52 h-auto object-cover
          sm:w-52 sm:h-auto sm:object-cover
          md:w-52 md:h-auto md:object-cover
          lg:w-52 lg:h-auto lg:object-cover
          xl:-ml-4 xl:w-40 xl:h-auto xl:object-cover
          2xl:ml-4 2xl:w-56 2xl:h-auto 2xl:object-cover
          "
            src="../photos/ccsLogo.png"
            alt="CCS Logo"
            width={2201}
            height={2201}
          />
        </div> */}

          <div
            className="
      w-[90%] h-screen items-center font-[Times New Roman] rounded-lg py-4 overflow-y-auto
      sm:w-[80%] sm:h-screen sm:items-center sm:font-[Times New Roman] sm:rounded-lg sm:py-4 sm:overflow-y-auto
      md:w-[70%] md:h-screen md:items-center md:font-[Times New Roman] md:rounded-lg md:py-4 md:overflow-y-auto
      lg:w-[60%] lg:h-screen lg:items-center lg:font-[Times New Roman] lg:rounded-lg lg:py-4 lg:overflow-y-auto
      xl:w-0 xl:h-0 xl:hidden
      2xl:w-0 2xl:h-0 2xl:hidden
      "
          >
            <ActivityTable_Superadmin activity={activity} />
          </div>
        </div>
        <div
          className="
      w-0 h-0 hidden
      sm:w-0 sm:h-0 sm:hidden
      md:w-0 md:h-0 md:hidden
      lg:w-0 lg:h-0 lg:hidden
      xl:inline-block xl:flex-col xl:mt-8 xl:w-full xl:h-screen xl:items-center xl:font-[Times New Roman] xl:rounded-lg xl:px-10 xl:overflow-y-aut
      2xl:inline-block 2xl:flex-col 2xl:mt-8 2xl:w-full 2xl:h-auto 2xl:items-center 2xl:font-[Times New Roman] 2xl:rounded-lg 2xl:px-10 2xl:overflow-y-auto
      "
        >
          <ActivityTable_Superadmin activity={activity} />
        </div>
      </div>
    </div>
  );
}

function FacultyDashboard({ fileCount, session }) {
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto bg-slate-50">
      <div
        className="
    flex mt-[2%] px-1
    sm:flex sm:mt-[2%] sm:px-2
    md:flex md:mt-[2%] md:px-4
    lg:flex lg:mt-[2%] lg:px-6
    xl:flex xl:mt-[2%] xl:px-8
    2xl:flex 2xl:mt-[2%] 2xl:px-10"
      >
        <h1
          className="
      text-black text-[15px]
      sm:text-black sm:text-[16px]
      md:text-black md:text-[17px]
      lg:text-black lg:text-[18px]
      xl:text-black xl:text-[19px]
      2xl:text-black text:[20px]"
        >
          WELCOME, <br />{" "}
          <span
            className="
        text-[#5B0505] text-[25px] font-semibold -mt-4
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
          className="
      h-[50%] w-[45%] mt-[2%] ml-[2%]
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
        className="
    flex flex-col items-center px-0 gap-x-0 gap-y-4
    sm:flex sm:flex-col sm:items-center sm:mt-4 sm:px-0 sm:gap-x-
    md:flex md:flex-col md:items-center md:mt-4 md:px-0 md:gap-x-0
    lg:flex lg:flex-col lg:items-center lg:mt-4 lg:px-0 lg:gap-x-0
    xl:flex xl:flex-row xl:items-center xl:mt-4 xl:px-10 xl:gap-x-12
    2xl:flex-row 2xl:mt-[1%] 2xl:px-10 2xl:gap-x-12"
      >
        <div
          className="
      text-center bg-[#B4ABAB] text-[#5B0505] w-[90%] h-[260px] py-2 rounded-lg
      sm:text-center sm:bg-[#B4ABAB] sm:text-[#5B0505] sm:w-[80%] sm:h-[290px] sm:py-3 sm:rounded-lg
      md:text-center md:bg-[#B4ABAB] md:text-[#5B0505] md:w-[70%] md:h-[320px] md:py-4 md:rounded-lg
      lg:text-center lg:bg-[#B4ABAB] lg:text-[#5B0505] lg:w-[60%] lg:h-[360px] lg:py-5 lg:rounded-lg
      xl:text-center xl:bg-[#B4ABAB] xl:text-[#5B0505] xl:w-[40%] xl:h-[360px] xl:py-5 xl:rounded-lg
      2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[460px] 2xl:h-[360px] 2xl:py-6 2xl:rounded-lg"
        >
          <p
            className="
        mt-4 text-xl font-semibold
        sm:mt-5 sm:text-2xl sm:font-semibold
        md:mt-5 md:text-3xl md:font-semibold
        lg:mt-5 lg:text-4xl lg:font-semibold
        xl:mt-5 xl:text-3xl xl:font-semibold
        2xl:mt-8 2xl:text-4xl 2xl:font-semibold"
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
        2xl:mt-12 2xl:text-9xl 2xl:text-[#5B0505] 2xl:font-semibold"
          >
            {fileCount}
          </p>
        </div>

        <div
          className="
      text-center items-center content-center bg-[#B4ABAB] text-[#5B0505] w-[90%] h-[260px] mt-0 rounded-lg
      sm:text-center sm:bg-[#B4ABAB] sm:text-[#5B0505] sm:w-[80%] sm:h-[290px] sm:mt-0 sm:rounded-lg
      md:text-center md:bg-[#B4ABAB] md:text-[#5B0505] md:w-[70%] md:h-[320px] md:mt-0 md:rounded-lg
      lg:text-center lg:bg-[#B4ABAB] lg:text-[#5B0505] lg:w-[60%] lg:h-[360px] lg:mt-0 lg:rounded-lg
      xl:text-center xl:bg-[#B4ABAB] xl:text-[#5B0505] xl:w-[25%] xl:h-[360px] xl:mt-0 xl:rounded-lg
      2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[320px] 2xl:h-[360px] 2xl:rounded-lg"
        >
          <CalendarComponent />
        </div>

        <div
          className="
      flex flex-col items-center space-y-8 mb-11
      sm:flex sm:flex-col sm:items-center sm:space-y-8 sm:mb-11
      md:flex md:flex-col md:items-center md:space-y-8 md:mb-11
      lg:flex lg:flex-col lg:items-center lg:space-y-8 lg:mb-11
      xl:flex xl:flex-col xl:items-center xl:space-y-7 xl:mb-0
      2xl:flex 2xl:flex-col 2xl:items-center 2xl:space-y-8 2xl:mb-0
      "
        >
          <Image
            className="
        w-64 h-auto object-cover
        sm:w-80 sm:h-auto sm:object-cover
        md:w-80 md:h-auto md:object-cover
        lg:w-80 lg:h-auto lg:object-cover
        xl:w-36 xl:h-auto xl:object-cover
        2xl:ml-9 2xl:w-36 2xl:h-auto 2xl:object-cover"
            src="/photos/newccsLogo.png"
            alt="CCS Logo"
            width={2201}
            height={2201}
          />
          <div
            className="
        text-center bg-[#5B0505] text-white w-[120%] h-[80px] p-4 rounded-lg
        sm:text-center sm:bg-[#5B0505] sm:text-white sm:w-[150%] sm:h-[80px] sm:p-4 sm:rounded-lg sm:mt-4
        md:text-center md:bg-[#5B0505] md:text-white md:w-[170%] md:h-[80px] md:p-4 md:rounded-lg md:mt-4
        lg:text-center lg:bg-[#5B0505] lg:text-white lg:w-[180%] lg:h-[80px] lg:p-4 lg:rounded-lg lg:mt-4
        xl:text-center xl:bg-[#5B0505] xl:text-white xl:w-[480px] xl:h-[80px] xl:p-4 xl:rounded-lg xl:mt-4
        2xl:mt-6 2xl:text-center 2xl:bg-[#5B0505] 2xl:text-white 2xl:w-[480px] 2xl:h-[90px] 2xl:p-4 2xl:mx-4 2xl:rounded-lg"
          >
            <EditPrivacy_Dialog sessionUser={session.user} />
          </div>
          <div
            className="
        text-center bg-[#5B0505] text-white w-[120%] h-full p-4 rounded-lg 
        sm:text-center  sm:text-white sm:w-[150%] sm:h-[80px] sm:p-4 sm:rounded-lg sm:mt-4
        md:text-center  md:text-white md:w-[170%] md:h-[80px] md:p-4 md:rounded-lg md:mt-4
        lg:text-center  lg:text-white lg:w-[180%] lg:h-[80px] lg:p-4 lg:rounded-lg lg:mt-4
        xl:text-center  xl:text-white xl:w-[480px] xl:h-[80px] xl:p-4 xl:rounded-lg xl:mt-4
         2xl:text-center  2xl:text-white 2xl:w-[480px] 2xl:h-[90px]  2xl:rounded-lg"
          >
            {/*  <UploadMaterial_Dialog sessionUser={session.user} /> */}
            <RedirectButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function SecretaryDashboard({ fileCount, session, userCount, activity }) {
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-auto bg-slate-50">
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
        <Image
          className="
      h-[50%] w-[45%] mt-[2%] ml-[2%] 
      sm:h-[50%] sm:w-[60%] sm:mt-[2%] sm:ml-[2%]
      md:h-[50%] md:w-[61%] md:mt-[2%] md:ml-[2%]
      lg:h-[50%] lg:w-[67%] lg:mt-[2%] lg:ml-[2%]
      xl:h-[50%] xl:w-[70%] xl:mt-[2%] xl:ml-[2%]
      2xl:h-[50%] 2xl:w-[90%] 2xl:mt-[1%] 2xl:ml-[3%]
      "
          alt="Filler"
          src="/photos/Filler.png"
          height={44}
          width={992}
        />
        <Image
          className="
      h-[70%] w-[45px] mt-[.8%] ml-[1%]
      sm:h-[70%] sm:w-[60px] sm:mt-[.8%] sm:ml-[1.3%]
      md:h-[70%] md:w-[75px] md:mt-[.8%] md:ml-[1.6%]
      lg:h-[70%] lg:w-[80px] lg:mt-[.8%] lg:ml-[1.8%]
      xl:h-[70%] xl:w-[85px] xl:mt-[.8%] xl:ml-[1.8%]
      2xl:h-[70%] 2xl:w-[90px] 2xl:mt-[.8%] 2xl:ml-[2%]
      "
          alt="Notification Logo"
          src="/photos/Notificationlogo.png"
          height={108}
          width={121}
        />
      </div>

      <div
        className="
    flex flex-col items-center mt-4 px-0 gap-x-0
    sm:flex sm:flex-col sm:items-center sm:mt-4 sm:px-0 sm:gap-x-0
    md:flex md:flex-col md:items-center md:mt-4 md:px-0 md:gap-x-0
    lg:flex lg:flex-col lg:items-center lg:mt-4 lg:px-0 lg:gap-x-0
    xl:flex-row xl:items-center xl:mt-4 xl:px-10 xl:gap-x-8
    2xl:flex-row 2xl:mt-[1%] 2xl:gap-x-8
    "
      >
        <div
          className="
    text-center bg-[#B4ABAB] text-[#5B0505] w-[90%] h-[200px] py-2 rounded-lg
    sm:text-center sm:bg-[#B4ABAB] sm:text-[#5B0505] sm:w-[80%] sm:h-[230px] sm:py-3 sm:rounded-lg
    md:text-center md:bg-[#B4ABAB] md:text-[#5B0505] md:w-[70%] md:h-[260px] md:py-4 md:rounded-lg
    lg:text-center lg:bg-[#B4ABAB] lg:text-[#5B0505] lg:w-[60%] lg:h-[290px] lg:py-5 lg:rounded-lg
    xl:text-center xl:bg-[#B4ABAB] xl:text-[#5B0505] xl:w-[80%] xl:h-[310px] xl:py-5 xl:rounded-lg
    2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[70%] 2xl:h-[320px] 2xl:py-8 2xl:rounded-lg
    "
        >
          <p
            className="
      mt-4 text-xl font-semibold
      sm:mt-5 sm:text-2xl sm:font-semibold
      md:mt-5 md:text-3xl md:font-semibold
      lg:mt-5 lg:text-4xl lg:font-semibold
      xl:mt-5 xl:text-3xl xl:font-semibold
      2xl:mt-2 2xl:text-4xl 2xl:font-semibold
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
    xl:text-center xl:bg-[#5B0505] xl:text-white xl:w-[80%] xl:h-[310px] xl:py-8 xl:rounded-lg xl:my-4
    2xl:text-center 2xl:bg-[#5B0505] 2xl:text-white 2xl:w-[70%] 2xl:h-[320px] 2xl:py-8 2xl:rounded-lg
    "
        >
          <p
            className="
        mt-4 text-xl font-semibold
        sm:mt-5 sm:text-2xl sm:font-semibold
        md:mt-5 md:text-3xl md:font-semibold
        lg:mt-5 lg:text-4xl lg:font-semibold
        xl:mt-12 xl:text-3xl xl:font-semibold
        2xl:mt-2 2xl:text-4xl 2xl:font-semibold
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
    md:flex-col md:items-center md:w-full
    lg:flex-col lg:items-center lg:w-full
    xl:flex-col xl:items-center xl:space-y-8 xl:-ml-4
    2xl:flex-col 2xl:items-center 2xl:-ml-4

    "
        >
          <div
            className="
      text-center bg-[#5B0505] text-[white] w-[90%] h-[80px] p-4 rounded-lg
      sm:text-center sm:bg-[#5B0505] sm:text-[white] sm:w-[80%] sm:h-[80px] sm:p-4 sm:rounded-lg
      md:text-center md:bg-[#5B0505] md:text-[white] md:w-[70%] md:h-[80px] md:p-4 md:rounded-lg
      lg:text-center lg:bg-[#5B0505] lg:text-[white] lg:w-[60%] lg:h-[80px] lg:p-4 lg:rounded-lg
      xl:text-center xl:bg-[#5B0505] xl:text-[white] xl:w-[90%] xl:h-[80px] xl:p-4 xl:rounded-lg
      2xl:text-center 2xl:bg-[#5B0505] 2xl:text-[white] 2xl:w-[90%] 2xl:h-[90px] 2xl:p-4 2xl:mx-4 2xl:rounded-lg
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
      xl:text-center xl:bg-[#B4ABAB] xl:text-[#5B0505] xl:w-[90%] xl:h-[80px] xl:p-4 xl:rounded-lg xl:mt-4
      2xl:mt-6 2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[90%] 2xl:h-[90px] 2xl:p-4 2xl:mx-4 2xl:rounded-lg
      "
          >
            <Link href={"/secretary/dashboard/archiving"}>
              <button
                className="
          mt-2 text-xl font-bold
          sm:mt-2 sm:text-xl sm:font-bold
          md:mt-2 md:text-2xl md:font-bold
          lg:mt-2 lg:text-2xl lg:font-bold
          xl:mt-2 xl:text-2xl xl:font-bold
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
        xl:text-center xl:bg-[#5B0505] xl:text-white xl:w-[90%] xl:h-[80px] xl:p-4 xl:rounded-lg xl:mt-4
        2xl:mt-6 2xl:text-center 2xl:bg-[#5B0505] 2xl:text-white 2xl:w-[90%] 2xl:h-[90px] 2xl:p-4 2xl:mx-4 2xl:rounded-lg
        "
          >
            <Link href={"/secretary/dashboard/viewfaculty"}>
              <button
                className="
            mt-2 text-xl font-bold
            sm:mt-2 sm:text-xl sm:font-bold
            md:mt-2 md:text-2xl md:font-bold
            lg:mt-2 lg:text-2xl lg:font-bold
            xl:mt-2 xl:text-2xl xl:font-bold
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
      flex flex-col items-center w-full
      sm:flex-col sm:items-center sm:w-full
      md:flex-col md:items-center md:w-full
      lg:flex-col lg:items-center lg:w-full
      xl:flex-col xl:items-center xl:w-full
      2xl:flex-row"
        >
          <div
            className="
        text-center bg-[#B4ABAB] text-[#5B0505] w-[90%] h-64 mt-4 rounded-lg
        sm:text-center sm:bg-[#B4ABAB] sm:text-[#5B0505] sm:w-[80%] sm:h-64 sm:mt-4 sm:rounded-lg
        md:text-center md:bg-[#B4ABAB] md:text-[#5B0505] md:w-[70%] md:h-64 md:mt-4 md:rounded-lg
        lg:text-center lg:bg-[#B4ABAB] lg:text-[#5B0505] lg:w-[60%] lg:h-64 lg:mt-4 lg:rounded-lg
        xl:text-center xl:bg-[#B4ABAB] xl:text-[#5B0505] xl:w-[100%] xl:h-36 xl:mt-0 xl:rounded-lg xl:-ml-8 xl:overflow-auto
        2xl:text-center 2xl:bg-[#B4ABAB] 2xl:text-[#5B0505] 2xl:w-[70%] 2xl:h-80 2xl:mt-0 2xl:-ml-4 2xl:overflow-hidden
        "
          >
            <div className="mt-32 2xl:mt-40">
              <CalendarComponent />
            </div>
          </div>
          <div
            className="
      w-auto h-auto items-center mt-4
      sm:w-auto sm:h-auto sm:items-center sm:mt-4
      md:w-auto md:h-auto md:items-center md:mt-4
      lg:w-auto lg:h-auto lg:items-center lg:mt-4
      xl:w-auto xl:h-auto xl:items-center xl:mt-4
      2xl:w-auto 2xl:h-auto
      "
          >
            <Image
              className="
          w-52 h-auto object-cover
          sm:w-52 sm:h-auto sm:object-cover
          md:w-52 md:h-auto md:object-cover
          lg:w-52 lg:h-auto lg:object-cover
          xl:-ml-4 xl:w-40 xl:h-auto xl:object-cover
          2xl:ml-4 2xl:w-56 2xl:h-auto 2xl:object-cover
          "
              src="/photos/newccsLogo.png"
              alt="CCS Logo"
              height={2201}
              width={2201}
            />
          </div>
        </div>
        <div
          className="
      w-[90%] h-screen items-center font-[Times New Roman] rounded-lg py-4 overflow-y-auto
      sm:w-[80%] sm:h-screen sm:items-center sm:font-[Times New Roman] sm:rounded-lg sm:py-4 sm:overflow-y-auto
      md:w-[70%] md:h-screen md:items-center md:font-[Times New Roman] md:rounded-lg md:py-4 md:overflow-y-auto
      lg:w-[60%] lg:h-screen lg:items-center lg:font-[Times New Roman] lg:rounded-lg lg:py-4 lg:overflow-y-auto
      xl:w-0 xl:h-0 xl:hidden
      2xl:w-0 2xl:h-0 2xl:hidden
      "
        >
          <ActivityTable_Secretary activity={activity} />
        </div>
      </div>
      <div
        className="
      w-0 h-0 hidden
      sm:w-0 sm:h-0 sm:hidden
      md:w-0 md:h-0 md:hidden
      lg:w-0 lg:h-0 lg:hidden
      xl:inline-block xl:flex-col xl:mt-8 xl:w-full xl:h-screen xl:items-center xl:font-[Times New Roman] xl:rounded-lg xl:px-10 xl:overflow-y-aut
      2xl:inline-block 2xl:flex-col 2xl:mt-8 2xl:w-full 2xl:h-screen 2xl:items-center 2xl:font-[Times New Roman] 2xl:rounded-lg 2xl:px-10 2xl:overflow-y-auto
      "
      >
        <ActivityTable_Secretary activity={activity} />
      </div>
    </div>
  );
}

export default async function page() {
  const session = await getServerSession(AuthOptions);
  console.log(session);

  /*  if (session.user.position === "Admin") {
    redirect("/superadmin/dashboard/");
  }
  if (session.user.position === "Secretary") {
    redirect("/secretary/dashboard/");
  } */

  const fileCount = await db.file.count();
  const userCount = await db.user.count();

  const activities = await db.activity.findMany();

  const activitiesFormatted = activities.map((activity) => ({
    ...activity,
    createdAt: new Date(activity.createdAt).toLocaleString(),
  }));

  if (session.user.position === "Admin") {
    return (
      <AdminDashboard
        fileCount={fileCount}
        userCount={userCount}
        activity={activitiesFormatted}
      />
    );
  }
  if (session.user.position === "Secretary") {
    return (
      <SecretaryDashboard
        fileCount={fileCount}
        session={session}
        userCount={userCount}
        activity={activitiesFormatted}
      />
    );
  }

  return <FacultyDashboard fileCount={fileCount} session={session} />;
}
