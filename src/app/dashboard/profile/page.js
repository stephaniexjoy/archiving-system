
import Image from "next/image";
import { FaUserLock } from "react-icons/fa";

export default function profile() {
  return (
    <div className="flex flex-auto w-auto h-screen">
      
      <div className="flex flex-col mt-5 md:mr-10 lg:mr-20 items-center h-screen">
      <Image
          className=" top-[10px] left-[670px] mr-20  w-[400px] h-[100px] object-cover"
          alt=""
          width={400}
          height={400}
          src="/photos/E-Archiving System.png"
        />
        <h1 className="flex flex-row-reverse"><FaUserLock size="40" style={{ top: "40px", left: "1660px"}} /></h1>

        <div className=" top-[125px] left-[1px] bg-[#AD5606] [backdrop-filter:blur(4px)] w-screen h-screen mt-10">
        <div className="flex flex-row gap-x-10 justify-center ">
            <div className="mt-10 ml-20 basis-1/4 left-[10px] object-center" >
            <img
                className="rounded-[50%]  w-[130px] h-[135px] object-cover  mb-5"
                alt=""
                src="/profile.jpg"
               />
            </div>
            <div className="basis-1/4 text-[20px] text-white text-left w-[900px] h-[30px]">
            
              <div className="mt-8">Name:</div>
              <div >Position:</div>
              <div >Eligibility/Professional License:</div>
              <div >School:</div>
           
            </div>
    
            <div className="mt-10 ml-5 basis-1/3 text-[20px] left-[1150px]
             text-white text-left w-[900px] h-[30px]">
            <div className=""></div>
                <div className=" mt-5 top-[350px]">Designation:</div>
                <div >Specialization:</div>
                <div >Certifications:</div>
            </div>
          </div>
          <div
          className="top-[285px] left-[1px] text-[20px] bg-[#5B0505] [backdrop-filter:blur(4px)] text-white text-center w-[1800px]h-[30px]">
          ACADEMIC QUALIFICATIONS
        </div>
        <div className="mr-5">
        <div className="flex flex-row gap-x-10 justify-center">
          <div className="my-5 left-[200px] top-[325px] text-[20px] text-white text-left w-[900px] h-[30px]">
            <div className="">Baccalaureate Degree:</div>
            <div>Masters Degree:</div>
            <div>Doctorate Degree:</div>
          </div>

            <div className=" my-5 basis-1/4 top-[325px] left-[870px] text-[20px] text-white text-left w-[900px] h-[30px">
              
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
            [backdrop-filter:blur(4px)] text-white text-center w-[1000px]
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
