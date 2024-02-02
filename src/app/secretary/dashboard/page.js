import React from 'react'
import { db } from '@/app/lib/prisma_db'
import { redirect } from "next/navigation";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"
import UploadMaterial_Dialog from '@/app/components/New_Components/UploadMaterial_Dialog';
import CreateAccount_Dialog from '@/app/components/New_Components/CreateAccount_Dialog';
import Link from 'next/link';

async function page() {

  const session = await getServerSession(AuthOptions)

  if (session.user.position === "Superadmin") {
    redirect('/superadmin/dashboard/')
  }
  if (session.user.position === "Faculty") {
    redirect('/faculty/dashboard/')
  }

  const fileCount = await db.file.count()
  const userCount = await db.user.count()

  console.log(fileCount)
  console.log(userCount)


  const activities = await db.activity.findMany()
  console.log(activities)

  const activitiesFormatted = activities.map(activity => ({
    ...activity,
    createdAt: new Date(activity.createdAt).toLocaleString(),
  }));
  return (
    <div className='flex flex-col w-screen h-screen'>
      <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center">
        <img
          className="w-[27%] h-[100%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="../photos/E-Archiving System.png"
        />
      </div>


      <div className="flex mt-[2%] ">
        <h1 className="text-black text-[30px] ml-[3%]">
          WELCOME, <br /> SECRETARY
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

      <div className="flex ml-[2%] mt-[2%]">
        <div className='text-center bg-[#B4ABAB] text-[#5B0505] w-[455px] h-[270px] p-4 mx-4 rounded-lg'>
          <p className='mt-5 text-3xl font-bold'>
            ARCHIVED MATERIALS
          </p>
          <p className='mt-10 text-8xl text-[#5B0505] font-bold'>
            {fileCount}
          </p>
        </div>
        <div className='text-center bg-[#5B0505] text-white w-[455px] h-[270px] p-4 mx-4 rounded-lg'>
          <p className='mt-5 text-3xl font-bold'>
            NO. OF FACULTY
          </p>
          <p className='mt-10 text-8xl text-[#FFFFFF] font-bold'>
            {userCount}
          </p>
        </div>
        <div className="flex flex-col">
          <div className='text-center bg-[#5B0505] text-[white] w-[455px] h-[80px] p-4 mx-4 rounded-lg'>
            <CreateAccount_Dialog />
          </div>
          <div className='mt-3.5 text-center bg-[#B4ABAB] text-[#5B0505] w-[455px] h-[80px] p-4 mx-4 rounded-lg'>
            <Link href={'/secretary/dashboard/archiving'}>
              <button className='mt-2 text-3xl font-bold'>
                VIEW MATERIALS
              </button>
            </Link>
          </div>
          <div className='mt-3.5 text-center bg-[#5B0505] text-white w-[455px] h-[80px] p-4 mx-4 rounded-lg'>
            <UploadMaterial_Dialog />
          </div>
        </div>
        <div className="flex flex-col">
          <div className='ml-10 text-center bg-[#B4ABAB] text-[#5B0505] w-[200px] h-[140px] p-4 mx-4'>
            <p className=' mt-5 text-1xl font-bold'>
              CALENDAR
            </p>
          </div>
          <div className='text-center text-[#5B0505] w-[150px] h-[150px] p-4 mx-4'>
            <img
              className='ml-12 mt-0 w-full h-full object-cover'
              src="../photos/ccsLogo.png"
              alt="CCS Logo"
            />
          </div>
        </div>
      </div>

      <div className='flex ml-[2.8%] mt-[4%] w-[1700px] h-screen items-center md:h-20 font-[Times New Roman]'>
        <table className="mt-10 table table-fixed md:table-fixed w-[1800px] text-center rounded-lg">
          <thead className='bg-[#5B0505] text-white text-2xl'>
            <tr>
              <th className='py-2'>NAME</th>
              <th>POSITION</th>
              <th>LAST ACTIVITY</th>
              <th>DATE AND TIME</th>
            </tr>
          </thead>
          <tbody className='bg-[#D9D9D9] text-black text-xl'>

            {activitiesFormatted.map((activity) => (
              <tr key={activity.id}>
                <td className='py-2'>{activity.name}</td>
                <td>{activity.position}</td>
                <td>{activity.type}</td>
                <td>{activity.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page