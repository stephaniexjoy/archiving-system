import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { db } from "@/app/lib/prisma_db";
import { redirect } from "next/navigation";
import UploadMaterial_Dialog from "../components/New_Components/UploadMaterial_Dialog";
import EditPrivacy_Dialog from "../components/New_Components/EditPrivacy_Dialog";

export default async function dashboard() {
  const session = await getServerSession(AuthOptions);

  console.log(session.user.position);

  if (session.user.position === "Superadmin") {
    redirect('/superadmin/dashboard/');
  }
  if (session.user.position === "Secretary") {
    console.log("push");
    redirect('/secretary/dashboard/');
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
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow">
        <div className="bg-[#AD5606] w-full h-[12%] flex items-center justify-center">
          <img
            className="w-[27%] h-[100%] object-cover flex items-center justify-center"
            alt="E-Archiving System"
            src="/photos/E-Archiving System.png"
          />
        </div>

        <div className="flex mt-[2%] ">
          <h1 className="text-black text-[30px] ml-[3%]">
            WELCOME, <br /> FACULTY
          </h1>
          <img
            className="h-[50%] w-[1300px] mt-[1%] ml-[5%]"
            alt="Filler"
            src="../photos/Filler.png"
          />
          <img
            className="h-[70%] w-[80px] mt-[.8%] ml-[2.5%]"
            alt="Notification Logo"
            src="../photos/Notificationlogo.png"
          />
        </div>

        <div className="flex flex-row ml-[2%] mt-3">
          <div className='text-center bg-[#B4ABAB] text-[#5B0505] w-[455px] h-[270px] p-4 mx-4 rounded-lg'>
            <p className='mt-5 text-3xl font-bold'>
              ARCHIVED MATERIALS
            </p>
            <p className='mt-10 text-8xl text-[#5B0505] font-bold'>
              {fileCount}
            </p>
          </div>
          <div>
            <img
              className='ml-24 w-[280px] h-auto object-cover'
              src="../photos/ccsLogo.png"
              alt="CCS Logo"
            />
          </div>
          <div className='ml-24 text-center bg-[#B4ABAB] text-[#5B0505] w-[500px] h-[475px] p-4 mx-4'>
            <p className=' mt-5 text-1xl font-bold'>
              CALENDAR
            </p>
          </div>
        </div>

        <div className="flex flex-col ml-[2%] -mt-[10.5%] w-[50%]">
          <div className='mt-[1%] text-center bg-[#5B0505] text-white h-[80px] p-1 mx-4 rounded-lg'>
            <button className='mt-2 text-3xl font-bold'>
              <EditPrivacy_Dialog />
            </button>
          </div>
          <div className='mt-[2%] text-center bg-[#5B0505] text-white h-[80px] p-1 mx-4 rounded-lg'>
            <button className='mt-2 text-3xl font-bold'>
              <UploadMaterial_Dialog />
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}
