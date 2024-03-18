import React from "react";
import Image from "next/image";
import { db } from "@/app/lib/prisma_db";

const page = async ({ params }) => {
  const user = await db.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  console.log(user);

  return (
    <div className="flex flex-col w-screen h-screen items-center overflow-y-auto">
      <div
        className="
        bg-[#AD5606] w-[100%] h-[7%] flex items-center justify-center
        2xl:bg-[#AD5606] 2xl:w-[100%] 2xl:h-[12%] 2xl:flex 2xl:items-center 2xl:justify-center
        "
      >
        <img
          className="
          w-[60%] h-auto object-cover flex items-center justify-center
          sm:w-[45%] sm:h-auto sm:object-cover sm:flex sm:items-center sm:justify-center
          md:w-[40%] md:h-auto md:object-cover md:flex md:items-center md:justify-center
          lg:w-[30%] lg:h-auto lg:object-cover lg:flex lg:items-center lg:justify-center
          xl:w-[25%] xl:h-auto xl:object-cover xl:flex xl:items-center xl:justify-center
          2xl:w-[30%] 2xl:h-auto 2xl:object-cover 2xl:flex 2xl:items-center 2xl:justify-center
          "
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div
        className="
      w-full overflow-auto overflow-x-auto h-auto p-4 max-w-md
      sm:max-w-xl sm:overflow-x-auto sm:w-full sm:h-auto
      md:w-[90%] md:overflow-x-auto
      lg:max-w-[90%]
      xl:max-w-[90%] 
      2xl:max-w-[90%] 2xl:my-6
      "
      >
        <div
          className="
          flex flex-col justify-center text-start
          sm:flex sm:flex-col sm:justify-center sm:text-start sm:items-center
          md:flex md:flex-col md:justify-center md:text-start
          lg:flex lg:flex-row lg:justify-center lg:text-start
          xl:flex xl:flex-row xl:justify-center xl:text-start
          2xl:flex 2xl:flex-row 2xl:justify-center 2xl:text-start
          "
        >
          <div className="mt-8 mr-20">
            <img
              className="rounded-full w-44 h-auto object-cover mb-5"
              alt="Profile"
              src="/profile.jpg"
            />
          </div>

          <div className="font-semibold">
            <div className="mt-6">Name: {user.name}</div>
            <div>Position: {user.position}</div>
            <div>Eligibility/Professional License: {user.license}</div>
            <div>School: {user.school}</div>
          </div>

          <div className="ml-20 font-semibold">
            <div className="mt-10">Designation: {user.designation}</div>
            <div>Specialization: {user.specialization}</div>
            <div>Certifications: {user.certifications}</div>
          </div>
        </div>

        <div className="top-[290px] font-semibold text-[20px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
          ACADEMIC QUALIFICATIONS
        </div>
        <div className="flex flex-col">
          <div className="
          grid grid-cols-1 gap-6 justify-center
          sm:grid sm:grid-cols-2 sm:gap-6 sm:justify-center
          md:grid md:grid-cols-2 md:gap-6 md:justify-center
          lg:grid lg:grid-cols-2 lg:gap-6 lg:justify-center
          xl:grid xl:grid-cols-2 xl:gap-6 xl:justify-center
          2xl:grid 2xl:grid-cols-2 2xl:gap-6 2xl:justify-center
          ">
            {[
              {
                degree: "Baccalaureate Degree",
                school: user.bacSchool,
                degreeInfo: user.bacDegree,
              },
              {
                degree: "Master's Degree",
                school: user.masSchool,
                degreeInfo: user.masDegree,
              },
              {
                degree: "Doctorate Degree",
                school: user.docSchool,
                degreeInfo: user.doccDegree,
              },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col">
                  <div className="font-semibold text-[25px] text-black mb-2">
                    {item.degree}:
                  </div>
                  <div className="font-semibold text-black">
                    {item.degreeInfo}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold text-[25px] text-black mb-2">
                    School:
                  </div>
                  <div className="font-semibold text-black">{item.school}</div>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div 
            className="
            flex w-full
            sm:flex sm:w-full
            md:flex md:flex-col md:w-full
            lg:flex lg:w-full
            xl:flex xl:w-full
            2xl:flex 2xl:w-full
            ">
            <div className="top-[420px] font-semibold text-[20px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
              SEMINARS AND TRAININGS ATTENDED
              <div>{user.seminars_trainings}</div>
            </div>
            <div className="top-[420px] font-semibold text-[20px] bg-transparent [backdrop-filter:blur(4px)] text-white text-center w-[20px] h-[30px]"></div>
            <div className="ml-16 top-[420px] font-semibold text-[20px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
              JOB EXPERIENCE
              <div>{user.experience}</div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mt-28 top-[285px] font-semibold text-[20px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
            SUBJECTS HANDLED (DESCRIPTIVE TITLE)
          </h1>
        </div>
        <div>{user.subject_handled}</div>
        <div>
          <h1 className="mt-28 top-[285px] font-semibold text-[20px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
            PAST DESIGNATIONS
          </h1>
        </div>
        <div>{user.past_designation}</div>
        <div>
          <h1 className="mt-28 top-[285px] font-semibold text-[20px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
            PRESENTED PAPERS
          </h1>

          <div>
            <table className="w-full border-none border-collapse">
              <thead>
                <tr>
                  <th className="border border-black bg-[#D7D4D4] [backdrop-filter:blur(4px)] font-semibold text-[20px] text-white text-center w-1/3 h-[30px]">
                    COMPLETED
                  </th>
                  <th className="border border-black bg-[#D7D4D4] [backdrop-filter:blur(4px)] font-semibold text-[20px] text-white text-center w-1/3 h-[30px]">
                    PUBLISHED
                  </th>
                  <th className="border border-black bg-[#D7D4D4] [backdrop-filter:blur(4px)] font-semibold text-[20px] text-white text-center w-1/3 h-[30px]">
                    PRESENTED
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center h-[50px]"></td>
                </tr>
                <tr>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center h-[50px]"></td>
                </tr>
                <tr>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center h-[50px]"></td>
                </tr>
                <tr>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center h-[50px]"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h1 className="mt-5 top-[285px] bottom-[285px] font-semibold text-[20px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
            EXTENSIONS PROJECTS
          </h1>
          <div className="h-36">{user.extension_projs}</div>
        </div>
        <div>
          <div
            className="
          flex w-full h-auto items-center justify-evenly
          sm:flex sm:w-full sm:h-auto sm:items-center sm:justify-evenly
          md:flex md:w-full md:h-auto md:items-center md:justify-evenly
          lg:flex lg:w-full lg:h-auto lg:items-center lg:justify-evenly
          xl:flex xl:w-full xl:h-auto xl:items-center xl:justify-evenly
          2xl:flex 2xl:w-full 2xl:h-auto 2xl:items-center 2xl:justify-evenly
          "
          >
            <div className="flex items-center">
              <button
                type="submit"
                className="
                bg-[#5B0505] text-[15px] text-white text-center w-[100px] h-[30px]
                sm:bg-[#5B0505] sm:text-[17px] sm:text-white sm:text-center sm:w-[130px] sm:h-[32px]
                md:bg-[#5B0505] md:text-[19px] md:text-white md:text-center md:w-[130px] md:h-[34px]
                lg:bg-[#5B0505] lg:text-[21px] lg:text-white lg:text-centerlg: lg:w-[180px] lg:h-[36px]
                xl:bg-[#5B0505] xl:text-[23px] xl:text-white xl:text-center xl:w-[220px] xl:h-[38px]
                2xl:bg-[#5B0505] 2xl:text-[25px] 2xl:text-white 2xl:text-center 2xl:w-[250px] 2xl:h-[40px]
                "
              >
                BACK
              </button>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="
                bg-[#5B0505] text-[15px] text-white text-center w-[100px] h-[30px]
                sm:bg-[#5B0505] sm:text-[17px] sm:text-white sm:text-center sm:w-[130px] sm:h-[32px]
                md:bg-[#5B0505] md:text-[19px] md:text-white md:text-center md:w-[130px] md:h-[34px]
                lg:bg-[#5B0505] lg:text-[21px] lg:text-white lg:text-center lg:w-[180px] lg:h-[36px]
                xl:bg-[#5B0505] xl:text-[23px] xl:text-white xl:text-center xl:w-[220px] xl:h-[38px]
                2xl:bg-[#5B0505] 2xl:text-[25px] 2xl:text-white 2xl:text-center 2xl:w-[250px] 2xl:h-[40px]
                "
              >
                DOWNLOAD
              </button>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="
                bg-[#5B0505] text-[15px] text-white text-center w-[100px] h-[30px]
                sm:bg-[#5B0505] sm:text-[17px] sm:text-white sm:text-center sm:w-[130px] sm:h-[32px]
                md:bg-[#5B0505] md:text-[19px] md:text-white md:text-center md:w-[130px] md:h-[34px]
                lg:bg-[#5B0505] lg:text-[21px] lg:text-white lg:text-center lg:w-[180px] lg:h-[36px]
                xl:bg-[#5B0505] xl:text-[23px] xl:text-white xl:text-center xl:w-[220px] xl:h-[38px]
                2xl:bg-[#5B0505] 2xl:text-[25px] 2xl:text-white 2xl:text-center 2xl:w-[250px] 2xl:h-[40px]
                "
              >
                PRINT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
