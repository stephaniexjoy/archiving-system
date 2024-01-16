
import Image from "next/image";
import { FaUserLock } from "react-icons/fa";

export default function profile() {
  return (
    <div className="flex flex-auto w-auto h-screen">
      
      <div className="flex flex-col w-full h-screen items-center">
      <Image
          className=" top-[10px] left-[670px] mr-20  w-[400px] h-[100px] object-cover"
          alt=""
          width={400}
          height={400}
          src="/photos/E-Archiving System.png"
        />

        <div>
          <FaUserLock size="40" style={{ color: "white", top: "40px", left: "1660px"}} />
        </div>

        <div className=" border bg-[#AD5606] w-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-full mt-10 p-8 rounded-lg shadow-lg">
      
        <div className="flex flex-row gap-x-10 justify-center ">
            <div className="mt-8 ml-20 basis-1/5 left-[10px] object-center" >
            <img
                className="rounded-[50%]  w-[130px] h-[135px] object-cover  mb-5"
                alt=""
                src="/profile.jpg"
               />
            </div>
            <div className="basis-2/5 text-[20px] text-white text-left w-[900px] h-[30px]">
            
              <div className="mt-8">Name:</div>
              <div >Position:</div>
              <div >Eligibility/Professional License:</div>
              <div >School:</div>
           
            </div>
    
            <div className="mt-10 ml-5 basis-2/5 text-[20px] left-[1150px]
             text-white text-left w-[900px] h-[30px]">
                <div className=" mt-5 top-[350px]">Designation:</div>
                <div >Specialization:</div>
                <div >Certifications:</div>
            </div>
          </div>
          <div
          className="top-[285px] left-[1px] text-[20px] bg-[#5B0505] [backdrop-filter:blur(4px)] text-white text-center w-[1800px] h-[30px]">
          ACADEMIC QUALIFICATIONS
        </div>
        <div className="">
        <div className="flex flex-row gap-x-10 justify-center">
          <div className="ml-12 my-5 basis-1/2 top-[325px] text-[20px] text-white text-left w-[900px] h-[30px]">
            <div className="">Baccalaureate Degree:</div>
            <div>Master's Degree:</div>
            <div>Doctorate Degree:</div>
          </div>

            <div className=" my-5 basis-1/2 top-[325px] left-[870px] text-[20px] text-white text-left w-[900px] h-[30px">
              
              <div>School:</div>
              <div>School:</div>
              <div>School:</div>
            
            </div>
          </div>
          <div className="flex flex-row gap-x-10 justify-center">
          <div
          className=" basis-1/2 top-[420px] left-[1px] text-[20px] bg-[#5B0505]
            [backdrop-filter:blur(4px)] text-white text-center w-[970px]
            h-[30px]"
        >
          SEMINARS AND TRAININGS ATTENDED
        </div>
        <div
          className=" basis-1/2 top-[420px] left-[1500px] text-[20px] bg-[#5B0505]
            [backdrop-filter:blur(4px)] text-white text-center w-auto
            h-[30px]"
        >
          JOB EXPERIENCE
        </div>

        </div>
       
      </div>
      <div>
          <h1 className="mt-20 top-[285px] left-[1px] text-[20px] bg-[#5B0505] [backdrop-filter:blur(4px)] text-white text-center w-[1800px]h-[30px]">
            PAST DESIGNATIONS
          </h1>
        </div>
        <div>
          <h1
            className="mt-20 top-[285px] left-[1px] text-[20px] bg-[#5B0505] [backdrop-filter:blur(4px)] text-white text-center w-[1800px]h-[30px]">
            PRESENTED PAPERS
          </h1>
        </div>
        <div>
          <h1
            className="mt-20 top-[285px] left-[1px] text-[20px] bg-[#5B0505] [backdrop-filter:blur(4px)] text-white text-center w-[1800px]h-[30px]">
            EXTENSIONS PROJECTS
          </h1>
        </div>
      <div className=" my-20 flex flex-row gap-x-10 justify-center">
      <div className="flex justify-center">
        <button
          type="submit"
          className="top-[950px] left-[500px] bg-[#8F8F8F] text-[20px] text-white text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
        // onClick={handleSubmit}
        >
          EDIT
        </button>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="top-[950px] left-[770px] bg-[#8F8F8F] text-[20px] text-white text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
        //onClick={handleSubmit}
        >
          DOWNLOAD
        </button>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="top-[950px] left-[1040px] bg-[#8F8F8F] text-[20px] text-white text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
        //onClick={handleSubmit}
        >
          PRINT
        </button>
      </div>
      </div>

        </div>
        </div>

          </div>
  );

}
