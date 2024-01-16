import React from 'react';

export default function page() {
  return (
    <div className="flex flex-auto w-auto h-screen">
      <div className="flex flex-col w-full h-screen items-center">
               <img
                    className="mr-20 w-full md:w-[400px] h-[100px] object-cover"
                    alt=""
                    src="/photos/E-Archiving System.png" />

        <div className="border bg-[#AD5606] w-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-full mt-10 p-8 rounded-lg shadow-lg">
          <form className=" w-auto h-auto bg-[#DABB9C] rounded-3xl shadow m-3">
        <div className='m-5'>
          <div className="flex flex-row gap-x-10 justify-center ">
            <div className="ml-10 mt-10 basis-1/4 left-[10px]" >
            <img
                className="rounded-full w-40 h-40 object-cover mb-5"
                alt=""
                src="/profile.jpg"
               />
            </div>
            <div className="basis-1/4 text-[#000000]">
                <p className="mt-10 text-[14px] md:text-[23px]">Name:</p>
                <p className="mt-5 text-[14px] md:text-[23px]">Position:</p>
                <p className="mt-5 text-[14px] md:text-[23px]">Designation:</p>
                <p className="mt-5 text-[14px] md:text-[23px]">Eligibility/Professional License:</p>
            </div>
    
            <div className="basis-2/4">
                
                  <input type="text" name='' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner" />
                  <input type="text" name='' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner" />
                  <input type="text" name='' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner" />
                  <input type="text" name='' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner" />

            </div>
          </div>

          <div className="flex flex-row gap-x-8 text-[#000000]">
          <div className="basis-1/4">
                <p className='mt-10 text-[14px] md:text-[23px]'>
                  School:
                </p>
                <p className='mt-5 text-[14px] md:text-[23px]'>
                  Specialization:
                </p>
                <p className='mt-5 text-[14px] md:text-[23px]'>
                  Certifications:
                </p>
            </div>
            <div className="">
                  <input type="text" name='' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#000000] bg-[#D9D9D9] inline-block w-[full] md:w-[1198px] h-[35px] md:text-shadow-inner" />
                  <input type="text" name='' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#000000] bg-[#D9D9D9] inline-block w-[full] md:w-[1198px] h-[35px] md:text-shadow-inner" />
                  <input type="text" name='' placeholder="" className="mt-5 mb-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#000000] bg-[#D9D9D9] inline-block w-[full] md:w-[1198px] h-[35px] md:text-shadow-inner" />
            </div>
          </div>
          <div>
            <h2 className="md:text-[20px] text-bold font-bold uppercase text-center">ACADEMIC QUALIFICATIONS</h2>
          </div>
          <div>
          <div className="flex flex-row gap-x-10 text-[#000000]">
            <div className="">
            <p className='mt-10  md:text-[19px]'>
                  Baccalaureate Degree:
                </p>
                <p className='mt-2 md:text-[19px]'>
                  Master's Degree:
                </p>
                <p className='mt-2  md:text-[19px]'>
                  Doctorate Degree:
                </p>
            </div>
            <div className="">
                <input type="text" name='' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[500px] h-[35px] md:text-shadow-inner" />
                <input type="text" name='' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[500px] h-[35px] md:text-shadow-inner" />
                <input type="text" name='' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[500px] h-[35px] md:text-shadow-inner" />

            </div>
           
            <div className="text-[#000000]">
                <p className='mt-10 text-[14px] md:text-[23px]'>
                  School:
                </p>
                <p className='mt-10 text-[14px] md:text-[23px]'>
                  School:
                </p>
                <p className='mt-10 text-[14px] md:text-[23px]'>
                  School:
                </p>

            </div>
            <div className="">
                <input type="text" name='' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[550px] h-[35px] md:text-shadow-inner" />
                <input type="text" name='' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[550px] h-[35px] md:text-shadow-inner" />
                <input type="text" name='' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[550px] h-[35px] md:text-shadow-inner" />


            </div>
            </div>
            </div>
            </div>
            <div className="flex justify-center mb-5 mt-10">
              <button
                type="submit"
                className="top-[950px] left-[770px] bg-[#8F8F8F] text-[20px] text-white text-center inline-block w-[247px] mb-10 h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              //onClick={handleSubmit}
              >
                NEXT
              </button>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
}