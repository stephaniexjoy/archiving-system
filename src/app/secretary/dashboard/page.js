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
          SECRETARY
        </h1>

        <div className="bg-[#AD5606] w-screen h-[590px] mt-10">

          <div className='mt-3 flex grid-cols-2 space-x-36 place-content-stretch justify-center h-16 md:h-20 font-bold font-[Times New Roman]'>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default page