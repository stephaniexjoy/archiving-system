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
          className="w-[27%] h-[100%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="../photos/E-Archiving System.png"
        />
      </div>


      <div className="flex mt-[2%] ">
        <h1 className="text-black text-[30px] ml-[3%]">
          WELCOME, <br /> ADMIN
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


      {/*add CreateModal.js & add View Materials page*/}
      <div className="flex ml-[2%] mt-3">
        <div className='text-center bg-[#5B0505] text-white w-[700px] h-[80px] p-1 mx-4 rounded-lg'>
          <button className='mt-5 text-3xl font-bold'>
            VIEW MATERIALS
          </button>
        </div>
       
            <Create_Dialog />
        <div className='ml-10 text-center bg-[#B4ABAB] text-[#5B0505] w-[200px] h-[180px] p-4 mx-4'>
          <p className=' mt-5 text-1xl font-bold'>
            CALENDAR
          </p>
        </div>
      </div>


      <div className="flex ml-[2%] mt-[-3%]">
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
        <div className='text-center bg-[#B4ABAB] text-[#5B0505] w-[455px] h-[270px] p-4 mx-4 rounded-lg'>
          <p className='mt-5 text-3xl font-bold'>
            NO. OF SECRETARY
          </p>
          <p className='mt-10 text-8xl text-[#5B0505] font-bold'>
            {secCount}
          </p>
        </div>
        <div className='text-center text-[#5B0505] w-[220px] h-[220px] p-4 mx-4'>
          <img
            className='ml-5 mt-16 w-full h-full object-cover'
            src="../photos/ccsLogo.png"
            alt="CCS Logo"
          />
        </div>
      </div>


      <div className='flex ml-[2.8%] mt-[7%] w-[1700px] h-screen items-center md:h-20 font-[Times New Roman]'>
        <table className="mt-10 table table-fixed md:table-fixed w-[1800px] text-center rounded-lg">
          <thead className='bg-[#5B0505] text-2xl text-white'>
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