import React from "react";
import { db } from "@/app/lib/prisma_db";
import Image from "next/image";

const page = async ({ params }) => {
  const user = await db.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  console.log(user);

  return (
    <div className="flex items-center flex-col w-screen h-screen ">
      <div className="bg-[#AD5606] w-full max-w-prose md:h-[12%] md:max-w-screen-md lg:max-w-screen-lg flex items-center justify-center">
        <Image
          className="sm:w-[27%] sm:h-[100%] md:w-[60%] md:h-[100%] lg:w-[40%] lg:h-[100%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
          width={300}
          height={100}
        />
      </div>

      <div className="bg-[#F5EEE6] overflow-scroll overflow-x-hidden md:mx-40 max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl h-full rounded-t-lg rounded-b-lg shadow-2xl">
        <div className="flex flex-row justify-center">
          <div className="mt-8 ml-6 basis-1/5 left-[10px] object-center">
            <Image
              className="rounded-[50%]  sm:w-[130px] sm:h-[80px] md:w-[110px] md:h-[100px] lg:w-[110px] lg:h-[160px]object-cover mb-5"
              alt="Profile"
              src="/profile.jpg"
              width={300}
              height={100}
            />
          </div>
          <div className="ml-5 basis-2/5 font-semibold text-black sm:text-sm md:text-md lg:text-lg">
            <div className="mt-6 ">Name: {user.name}</div>
            <div>Position: {user.position}</div>
            <div>Eligibility/Professional License: {user.license}</div>
            <div>School: {user.school}</div>
          </div>
          <div className="ml-28 basis-2/5 font-semibold text-black sm:text-sm md:text-md lg:text-lg">
            <div className=" mt-6 top-[350px]">
              Designation: {user.designation}
            </div>
            <div>Specialization: {user.specialization}</div>
            <div>Certifications: {user.certifications}</div>
          </div>
        </div>
        <div className="mt-5 top-[290px] font-semibold sm:text-sm md:text-md lg:text-lg bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
          ACADEMIC QUALIFICATIONS
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-16 justify-center">
            <div className="ml-10 my-5 basis-1/2 top-[325px] font-semibold text-[25px] text-black text-left sm:text-sm md:text-md lg:text-lg">
              <div className="">Baccalaureate Degree: {user.bacDegree}</div>
              <div>Master&apos;s Degree:{user.masDegree}</div>
              <div>Doctorate Degree:{user.doccDegree}</div>
            </div>
            <div className="my-5 basis-1/2 top-[325px] font-semibold text-[25px] text-black text-left sm:text-sm md:text-md lg:text-lg">
              <div>School: {user.bacSchool}</div>
              <div>School: {user.masSchool}</div>
              <div>School: {user.docSchool}</div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="top-[420px] font-semibold sm:text-sm md:text-md lg:text-lg bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-min max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
              SEMINARS AND TRAININGS ATTENDED
              <div>{user.seminars_trainings}</div>
            </div>
            <div className="top-[420px] font-semibold text-[20px] bg-transparent [backdrop-filter:blur(4px)] text-white text-center w-[20px] h-[30px]"></div>
            <div className="ml-16 top-[420px] font-semibold sm:text-sm md:text-md lg:text-lg bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-min max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
              JOB EXPERIENCE
              <div>{user.experience}</div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mt-28 top-[285px] font-semibold sm:text-sm md:text-md lg:text-lg bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            SUBJECTS HANDLED (DESCRIPTIVE TITLE)
          </h1>
        </div>
        <div>{user.subject_handled}</div>
        <div>
          <h1 className="mt-28 top-[285px] font-semibold sm:text-sm md:text-md lg:text-lg bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            PAST DESIGNATIONS
          </h1>
        </div>
        <div>{user.past_designation}</div>
        <div>
          <h1 className="mt-28 top-[285px] font-semibold sm:text-sm md:text-md lg:text-lg bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            PRESENTED PAPERS
          </h1>

          <div>
            <table className="w-full border-none border-collapse">
              <thead>
                <tr>
                  <th className="border border-black bg-[#D7D4D4] font-semibold sm:text-sm md:text-md lg:text-lg text-white text-center">
                    COMPLETED
                  </th>
                  <th className="border border-black bg-[#D7D4D4] font-semibold sm:text-sm md:text-md lg:text-lg text-white text-center">
                    PUBLISHED
                  </th>
                  <th className="border border-black bg-[#D7D4D4] font-semibold sm:text-sm md:text-md lg:text-lg text-white text-center">
                    PRESENTED
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black text-white text-center h-[30px] sm:text-sm md:text-md lg:text-lg"></td>
                  <td className="border border-black text-white text-center h-[30px] sm:text-sm md:text-md lg:text-lg"></td>
                  <td className="border border-black text-white text-center h-[30px] sm:text-sm md:text-md lg:text-lg"></td>
                </tr>
                <tr>
                  <td className="border border-black text-white text-center h-[30px] sm:text-sm md:text-md lg:text-lg"></td>
                  <td className="border border-black text-white text-center h-[30px] sm:text-sm md:text-md lg:text-lg"></td>
                  <td className="border border-black text-white text-center h-[30px] sm:text-sm md:text-md lg:text-lg"></td>
                </tr>
                <tr>
                  <td className="border border-black text-white text-center h-[30px] sm:text-sm md:text-md lg:text-lg"></td>
                  <td className="border border-black text-white text-center h-[30px] sm:text-sm md:text-md lg:text-lg"></td>
                  <td className="border border-black text-white text-center h-[30px] sm:text-sm md:text-md lg:text-lg"></td>
                </tr>
                <tr>
                  <td className="border border-black text-white text-center h-[30px] sm:text-sm md:text-md lg:text-lg"></td>
                  <td className="border border-black text-white text-center h-[30px] sm:text-sm md:text-md lg:text-lg"></td>
                  <td className="border border-black text-white text-center h-[30px] sm:text-sm md:text-md lg:text-lg"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h1 className="mt-5 mb-36 top-[285px] bottom-[285px] font-semibold sm:text-sm md:text-md lg:text-lg bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center max-w-screen-sm  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            EXTENSIONS PROJECTS
          </h1>
          <div>{user.extension_projs}</div>
        </div>

        <div className="mb-5 w-screen h-auto flex place-content-center space-x-20">
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#5B0505] text-[12px] text-white text-center inline-block w-[100px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] lg:w-[180px] sm:w-[140px] md:w-[160px]"
            >
              BACK
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#5B0505] text-[12px] text-white text-center inline-block w-[100px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] lg:w-[180px] sm:w-[140px] md:w-[160px]"
            >
              DOWNLOAD
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#5B0505] text-[12px] text-white text-center inline-block w-[100px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] lg:w-[180px] sm:w-[140px] md:w-[160px]"
            >
              PRINT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
