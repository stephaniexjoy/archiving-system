import React from 'react'
import { db } from '@/app/lib/prisma_db'
import { revalidatePath } from 'next/cache'


async function page() {

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

    <div className="flex flex-col w-auto h-screen">
      <div className='flex flex-col w-auto h-screen items-center py-10'>
        <img
          className=" w-[870px] h-[200px] object-cover"
          alt=""
          src="../photos/E-Archiving System.png"
        />

        <h1 className=" text-[25px]">
          WELCOME
        </h1>
        <h1 className=" text-[40px]">
          SUPER ADMIN
        </h1>

        <div className="bg-[#AD5606] w-screen h-[590px] mt-10">

          <div className='mt-3 flex grid-cols-3 space-x-40 place-content-stretch justify-center h-16 md:h-20 font-bold font-[Times New Roman]'>
            <div className='text-center'>
              <p className='mt-11 text-8xl text-[#F1B177] '>
                {fileCount}
              </p>
              <p className='mt-5 text-2xl'>
                ARCHIVED MATERIALS
              </p>
            </div>
            <div className='text-center'>
              <p className=' mt-11 text-8xl text-[#F1B177]'>
                {userCount}
              </p>
              <p className='mt-5 text-2xl'>
                NO. OF FACULTY MEMBERS
              </p>
            </div>
            <div className='text-center'>
              <p className=' mt-11 text-8xl text-[#F1B177]'>
                {secCount}
              </p>
              <p className='mt-5 text-2xl text-center'>
                NO. OF SECRETARY
              </p>
            </div>
          </div>

          <div className='flex flex-col w-auto h-screen items-center md:h-20 font-[Times New Roman]'>
            <table className="mt-40 table table-fixed md:table-fixed w-[1800px] text-center">
              <thead className='bg-[#5B0505] text-2xl'>
                <tr>
                  <th className='py-2'>NAME</th>
                  <th>POSITION</th>
                  <th>LAST ACTIVITY</th>
                  <th>DATE AND TIME</th>
                </tr>
              </thead>
              <tbody className='bg-[#D9D9D9] text-black text-xl'>

                {/*Map The activities*/}
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
      </div>
    </div>

  )
}

export default page