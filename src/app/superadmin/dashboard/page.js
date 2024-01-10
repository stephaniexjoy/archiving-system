import React from 'react'


function page() {
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
                36
              </p>
              <p className='mt-5 text-2xl'>
                ARCHIVED MATERIALS
              </p>
            </div>
            <div className='text-center'>
              <p className=' mt-11 text-8xl text-[#F1B177]'>
                19
              </p>
              <p className='mt-5 text-2xl'>
                NO. OF FACULTY MEMBERS
              </p>
            </div>
            <div className='text-center'>
              <p className=' mt-11 text-8xl text-[#F1B177]'>
                1
              </p>
              <p className='mt-5 text-2xl text-center'>
                NO. OF SECRETARY
              </p>
            </div>
          </div>

          <div className='flex flex-col w-auto h-screen items-center place-content-stretch justify-center md:h-20 font-[Times New Roman]'>
            <table className="mt-80 table table-auto ">
              <thead className='bg-[#5B0505]'>
                <tr>
                  <th>NAME</th>
                  <th>POSITION</th>
                  <th>LAST ACTIVITY</th>
                  <th>DATE AND TIME</th>
                </tr>
              </thead>
              <tbody className='bg-[#D9D9D9] text-black'>
                <tr>
                  <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                  <td>1961</td>
                </tr>
              </tbody>
            </table>
          </div>






        </div>
      </div>

    </div>

  )
}

export default page