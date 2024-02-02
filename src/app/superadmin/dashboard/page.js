import React from 'react'
import { db } from '@/app/lib/prisma_db'
import { revalidatePath } from 'next/cache'
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";

import Create_Dialog from '@/app/components/New_Components/Create_Dialog';



async function page() {

  const session = await getServerSession(AuthOptions)


  if (session.user.position === "Faculty") {
    redirect('/faculty/dashboard/')
  }

  if (session.user.position === "Secretary") {
    console.log("push")
    redirect('/secretary/dashboard/')
  }

  const fileCount = await db.file.count()
  const userCount = await db.user.count()
  const secCount = await db.user.count({ where: { position: "Secretary" } })

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
          className="w-[30%] h-[100%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div className="flex mt-[2%] px-10">
        <h1 className="text-black text-[20px]">
          WELCOME, <br /> <h1 className='text-[#5B0505] text-[50px] font-semibold -mt-4'>ADMIN</h1>
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

      <div className="flex mt-3 px-10 gap-x-8">
        <div className='text-center bg-[#5B0505] text-white w-[685px] h-[80px] rounded-lg'>
          <button className='mt-5 text-3xl font-bold'>
            VIEW MATERIALS
          </button>
        </div>

        <Create_Dialog />
        <div className='text-center bg-[#B4ABAB] text-[#5B0505] w-96 h-56'>
          <p className=' mt-16 text-1xl font-bold'>
            CALENDAR
          </p>
        </div>
      </div>

      <div className="flex -mt-[5%] px-10 gap-x-12">
        <div className='text-center bg-[#B4ABAB] text-[#5B0505] w-[440px] h-[320px] py-6 rounded-lg'>
          <p className='mt-8 text-4xl font-semibold'>
            ARCHIVED MATERIALS
          </p>
          <p className='mt-12 text-9xl text-[#5B0505] font-semibold'>
            {fileCount}
          </p>
        </div>
        <div className='text-center bg-[#5B0505] text-white w-[440px] h-[320px] py-6 rounded-lg'>
          <p className='mt-8 text-4xl font-bold'>
            NO. OF FACULTY
          </p>
          <p className='mt-12 text-9xl text-[#FFFFFF] font-semibold'>
            {userCount}
          </p>
        </div>
        <div className='text-center bg-[#B4ABAB] text-[#5B0505] w-[440px] h-[320px] py-6 rounded-lg'>
          <p className='mt-8 text-4xl font-bold'>
            NO. OF SECRETARY
          </p>
          <p className='mt-12 text-9xl text-[#5B0505] font-semibold'>
            {secCount}
          </p>
        </div>
        <div className='text-center text-[#5B0505] w-auto h-auto p-4 mx-4'>
          <img
            className='ml-10 mt-24 w-56 h-auto object-cover'
            src="/photos/ccsLogo.png"
            alt="CCS Logo"
          />
        </div>
      </div>

      <div className='flex -mt-[2%] w-full h-screen items-center md:h-20 font-[Times New Roman] px-10'>
        <table className="mt-10 table table-fixed md:table-fixed w-full text-center rounded-lg">
          <thead className='bg-[#5B0505] text-2xl text-white'>
            <tr>
              <th className='py-2'>NAME</th>
              <th>POSITION</th>
              <th>LAST ACTIVITY</th>
              <th>DATE AND TIME</th>
            </tr>
          </thead>
          <tbody className='bg-[#B4ABAB] text-black text-xl'>

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