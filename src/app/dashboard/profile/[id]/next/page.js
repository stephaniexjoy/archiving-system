import React from 'react';

export default function page() {
  return (
    <div className="flex flex-auto w-auto h-screen">
      <div className="flex flex-col mt-5 md:mr-10 lg:mr-20 items-center h-screen">
               <img
                    className="mr-20 w-full md:w-[400px] h-[100px] object-cover"
                    alt=""
                    src="/photos/E-Archiving System.png" />

        <div className="bg-[#AD5606] w-screen h-screen mt-10">
         
        <div className='m-20'>
            <form className=" w-auto h-auto bg-[#DABB9C] justify-center rounded-3xl shadow m-25">
                
        <div className='mt-10 flex grid-cols-2 space-x-40 justify-center font-bold font-[Times New Roman]'>
          <div className=' text-center '>
          <div className='mt-10'>
          <h1>SEMINARS AND TRAININGS ATTENDED</h1>
          </div>
          <div>
          <textarea className="mt-5 overflow-auto top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[400px] h-[90px] md:text-shadow-inner">

          </textarea>
          </div>
          <div className=''>
          <h1>JOB EXPERIENCE</h1>
          </div>
          <div>
          <textarea className="mt-5 overflow-auto top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[400px] h-[90px] md:text-shadow-inner">

          </textarea>
          </div>
          <div className=''>
            <h1>PAST DESIGNATION</h1>
          </div>
          <div>
          <textarea className="mt-5 overflow-auto top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[400px] h-[90px] md:text-shadow-inner">

          </textarea>
          </div>
          </div>

          <div className='text-center'>
          <div className='mt-10'>
          <h1>SUBJECTS HANDLED (DESCRIPTIVE TITLE)</h1>
          </div>
          <div>
          <textarea className="mt-5 overflow-auto top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[400px] h-[90px] md:text-shadow-inner">

          </textarea>
          </div>
          <div className=''>
          <h1>PRESENTED PAPERS</h1>
          </div>
          <div>
          <textarea className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[400px] h-[90px] md:text-shadow-inner">

          </textarea>
          </div>
          <div className=''>
            <h1>EXTENSION PROJECTS</h1>
          </div>
          <div>
          <textarea className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[400px] h-[90px] md:text-shadow-inner">

          </textarea>
          </div>
          </div>
          
            </div>
            <div className="flex justify-center my-10">
              <button
                type="submit"
                className="top-[950px] left-[770px] bg-[#8F8F8F] text-[20px] text-white text-center inline-block w-[247px] mb-10 h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              //onClick={handleSubmit}
              >
                SAVE
              </button>
            </div>
            
            </form>
            </div>
            
        </div>
      </div>
    </div>
  );
}