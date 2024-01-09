"use client"
import { FaUserLock } from "react-icons/fa";

export default function profile() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="absolute top-[125px] left-[1px] bg-[#AD5606] [backdrop-filter:blur(4px)] w-[1800px] h-[1800px]" />
        <img
          className="absolute top-[10px] left-[670px] w-[400px] h-[100px] object-cover"
          alt=""
          src="../photos/E-Archiving System.png"
        />
        <div className="absolute top-[30px] left-[1950px] w-[60px] h-[60px] shadow-lg" />
        <h1><FaUserLock size="60" style={{ position: "absolute", top: "40px", left: "1660px" }}/></h1>

        <div className="absolute left-[250px] top-[140px] rounded-[50%] bg-[#DABB9C] shadow-[30px_0px_30px_rgba(0,_0,_0,_0.35)] w-[130px] h-[135px] [transform:_rotate(-0.3deg)] [transform-origin:0_0]" />
        <div
          className=" absolute left-[550px] top-[145px] text-[20px] 
             text-white text-left w-[900px]
            h-[30px]"
        >
          <div>Name:</div>
          <div>Position:</div>
          <div>Eligibility/Professional License:</div>
          <div>School:</div>
        </div>
        <div
          className=" absolute top-[175px] left-[1150px] text-[20px] 
             text-white text-left w-[900px]
            h-[30px]"
        >
          <div></div>
          <div>Designation:</div>
          <div>Specialization:</div>
          <div>Certifications:</div>
        </div>
        <div
          className=" absolute top-[285px] left-[1px] text-[20px] bg-[#5B0505]
            [backdrop-filter:blur(4px)] text-white text-center w-[1800px]
            h-[30px]"
        >
          ACADEMIC QUALIFICATIONS
        </div>
        <div
          className=" absolute left-[200px] top-[325px] text-[20px] 
             text-white text-left w-[900px]
            h-[30px]"
        >
          <div>Baccalaureate Degree:</div>
          <div>Masters Degree:</div>
          <div>Doctorate Degree:</div>
        </div>
        <div
          className=" absolute top-[325px] left-[970px] text-[20px] 
             text-white text-left w-[900px]
            h-[30px]"
        >
          <div>School:</div>
          <div>School:</div>
          <div>School:</div>
        </div>
        <div
          className=" absolute top-[420px] left-[1px] text-[20px] bg-[#5B0505]
            [backdrop-filter:blur(4px)] text-white text-center w-[870px]
            h-[30px]"
        >
          SEMINARS AND TRAININGS ATTENDED
        </div>
        <div
          className=" absolute top-[420px] left-[920px] text-[20px] bg-[#5B0505]
            [backdrop-filter:blur(4px)] text-white text-center w-[1000px]
            h-[30px]"
        >
          JOB EXPERIENCE
        </div>
        <div>
          <h1
            className="absolute top-[520px] left-[1px] text-[20px] bg-[#5B0505]
            [backdrop-filter:blur(4px)] text-white text-center w-[1800px]
            h-[30px]"
          >
            SUBJECTS HANDLED DESCRIPTIVE TITLE
          </h1>
        </div>
        <div>
          <h1
            className="absolute top-[620px] left-[1px] text-[20px] bg-[#5B0505]
            [backdrop-filter:blur(4px)] text-white text-center w-[1800px]
            h-[30px]"
          >
            PAST DESIGNATIONS
          </h1>
        </div>
        <div>
          <h1
            className="absolute top-[720px] left-[1px] text-[20px] bg-[#5B0505]
            [backdrop-filter:blur(4px)] text-white text-center w-[1800px]
            h-[30px]"
          >
            PRESENTED PAPERS
          </h1>
        </div>
        <div>
          <h1
            className="absolute top-[820px] left-[1px] text-[20px] bg-[#5B0505]
            [backdrop-filter:blur(4px)] text-white text-center w-[1800px]
            h-[30px]"
          >
            EXTENSIONS PROJECTS
          </h1>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="absolute top-[950px] left-[500px] bg-[#8F8F8F] text-[20px] text-white text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
          // onClick={handleSubmit}
        >
          EDIT
        </button>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="absolute top-[950px] left-[770px] bg-[#8F8F8F] text-[20px] text-white text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
          //onClick={handleSubmit}
        >
          DOWNLOAD
        </button>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="absolute top-[950px] left-[1040px] bg-[#8F8F8F] text-[20px] text-white text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
          //onClick={handleSubmit}
        >
          PRINT
        </button>
      </div>
    </main>
  ); 
   
}
