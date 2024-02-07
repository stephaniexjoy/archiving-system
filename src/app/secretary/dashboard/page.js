import React from 'react'
import { db } from '@/app/lib/prisma_db'
import { redirect } from "next/navigation";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"
import UploadMaterial_Dialog from '@/app/components/New_Components/UploadMaterial_Dialog/UploadMaterial_Dialog';
import CreateAccount_Dialog from '@/app/components/New_Components/CreateAccount_Dialog/CreateAccount_Dialog';
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
          className="w-[30%] h-[100%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div className="flex mt-[2%] px-10">
        <h1 className="text-black text-[20px]">
          WELCOME, <br /> <span className='text-[#5B0505] text-[50px] font-semibold -mt-4'>SECRETARY</span>
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

      <div className="flex mt-[1%] px-10 gap-x-12">
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
        <div className="flex flex-col">
          <div className='text-center bg-[#5B0505] text-[white] w-[480px] h-[90px] p-4 mx-4 rounded-lg'>
            <CreateAccount_Dialog sessionUser={session.user} />
          </div>
          <div className='mt-6 text-center bg-[#B4ABAB] text-[#5B0505] w-[480px] h-[90px] p-4 mx-4 rounded-lg'>
            <Link href={'/secretary/dashboard/archiving'}>
              <button className='mt-2 text-3xl font-bold'>
                VIEW MATERIALS
              </button>
            </Link>
          </div>
          <div className='mt-6 text-center bg-[#5B0505] text-white w-[480px] h-[90px] p-4 mx-4 rounded-lg'>
            <Link href={'/secretary/dashboard/viewfaculty'}>
              <button className='mt-2 text-3xl font-bold'>
                VIEW FACULTY
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className='text-center bg-[#B4ABAB] text-[#5B0505] w-72 h-44'>
            <p className=' mt-16 text-1xl font-bold'>
              CALENDAR
            </p>
          </div>
          <div className='w-auto h-auto'>
            <img
              className='ml-16 w-36 h-auto object-cover'
              src="../photos/ccsLogo.png"
              alt="CCS Logo"
            />
          </div>
        </div>
      </div>

      <div className='mt-8 w-full h-screen items-center font-[Times New Roman] rounded-lg px-10 overflow-y-auto'>
        <table className=" min-w-full table-fixed w-full text-center">
          <thead className='bg-[#5B0505] text-white text-2xl'>
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