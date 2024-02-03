import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { db } from "@/app/lib/prisma_db";
import { redirect } from "next/navigation";
import UploadMaterial_Dialog from "../components/New_Components/UploadMaterial_Dialog";
import EditPrivacy_Dialog from "../components/New_Components/EditPrivacy_Dialog";
import { Footer } from "flowbite-react";

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
    <>
      <div className='flex flex-col w-screen h-screen'>
        <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center">
          <img
            className="w-[30%] h-[100%] object-cover flex items-center justify-center"
            alt="E-Archiving System"
            src="/photos/E-Archiving System.png"
          />
        </div>

        <div className="flex mt-[2%] px-10">
          <h1 className="text-black text-[20px]">
            WELCOME, <br /> <h1 className='text-[#5B0505] text-[50px] font-semibold -mt-4'>FACULTY</h1>
          </h1>
          <img
            className="h-[50%] w-[90%] mt-[1%] ml-[3%]"
            alt="Filler"
            src="../photos/Filler.png"
          />
          <img
            className="h-[70%] w-[90px] mt-[.8%] ml-[2%]"
            alt="Notification Logo"
            src="../photos/Notificationlogo.png"
          />
        </div>

        <div className="flex flex-row mt-[.5%] px-10 gap-x-12">
          <div className='text-center bg-[#B4ABAB] text-[#5B0505] w-[440px] h-[320px] py-0 rounded-lg'>
            <p className='mt-8 text-4xl font-semibold'>
              ARCHIVED MATERIALS
            </p>
            <p className='mt-12 text-9xl text-[#5B0505] font-semibold'>
              {fileCount}
            </p>
          </div>
          <div>
            <img
              className='ml-16 w-[325px] h-auto object-cover'
              src="../photos/ccsLogo.png"
              alt="CCS Logo"
            />
          </div>
          <div className='ml-10 text-center bg-[#B4ABAB] text-[#5B0505] w-[900px] h-[540px]'>
            <p className=' mt-5 text-1xl font-bold'>
              CALENDAR
            </p>
          </div>
        </div>

        <div className="flex flex-col -mt-[11%] w-[50%] px-10">
          <div className='mt-[1%] text-center bg-[#5B0505] text-white h-[90px] rounded-lg'>
            <button className='mt-2 text-4xl font-semibold'>
              <EditPrivacy_Dialog />
            </button>
          </div>
          <div className='mt-[2%] text-center bg-[#5B0505] text-white h-[90px] rounded-lg'>
            <button className='mt-4 text-4xl font-semibold'>
              <UploadMaterial_Dialog />
            </button>
          </div>
        </div>

      <Footer className="bg-[#5B0505] w-full h-auto flex items-center justify-center bottom-0 top-auto mb-0 mt-auto rounded-none">
        <div className="flex px-10">
          <div className="flex flex-col w-1/2">
            <div className="flex flex-row">
              <div className="flex items-start justify-start mt-2 mb-2">
                <img src="/photos/lspuLogo.png" alt="First Image" className="w-12 h-auto" />
              </div>
              <div className="flex items-start justify-start ml-3 mt-2 mb-2">
                <img src="/photos/ccsLogo.png" alt="Second Image" className="w-12 h-auto" />
              </div>
            </div>
            <div className="w-1/2 flex items-start justify-start">
              <p className="text-[#AD5606] text-xl font-semibold">CONTACT US</p>
            </div>
            <div className="w-1/2 flex items-start justify-start">
              <img src="/photos/callLogo.png" alt="Second Image" className="w-7 h-auto" />
              <p className="ml-3 text-white font-semibold">(049) 554-3033</p>
            </div>
            <div className="w-1/2 flex items-start justify-start">
              <img src="/photos/emailLogo.png" alt="Second Image" className="w-7 h-auto mt-1" />
              <p className="ml-3 text-white font-semibold">ccs_spc@lspu.edu.ph</p>
            </div>
            <div className="w-1/2 flex items-start justify-start">
              <img src="/photos/locationLogo.png" alt="Second Image" className="w-7 h-auto" />
              <p className="ml-3 text-white font-semibold">Brgy. Del Remedio, San Pablo City, Philippines</p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <h2 className="text-[#AD5606] text-3xl font-bold mt-2 mb-2">ABOUT</h2>
            <p className="text-white text-[17px]">The E-Archiving System endeavors to address the challenges posed by traditional document storage and retrieval methods, aiming to streamline processes, improve efficiency, and provide a comprehensive solution for the dynamic environment of the CCS. Recognizing the significance of accessible and organized data, our team has rallied with a shared commitment to bring forth a solution that not only meets the current needs of the faculty but also anticipates future demands.</p>
          </div>
        </div>
      </Footer>
      </div>
    </>
  )
}
