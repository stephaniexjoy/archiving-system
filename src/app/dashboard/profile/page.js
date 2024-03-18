import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import EditProfileFaculty_Dialog from "@/app/components/New_Components/EditProfileFaculty_Dialog/EditProfileFaculty_Dialog";
import { db } from "@/app/lib/prisma_db";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";

export default async function profile() {
  const session = await getServerSession(AuthOptions);

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    include: {
      education: true,
    },
  });
  console.log(user);

  return (
    <div className="flex items-center flex-col w-screen h-screen ">
      <div className="bg-[#AD5606] w-screen  h-[12%] flex items-center justify-center">
        <Image
          className=" sm:w-[27%] sm:h-[100%] md:w-[60%] md:h-[100%] lg:w-[40%] lg:h-[90%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
          width={300}
          height={100}
        />
      </div>

      <div className="bg-[#F5EEE6] overflow-scroll overflow-x-hidden ml-4 w-full md:w-3/4 lg:w-3/3 xl:w-3/4 2xl:w-4/5 md:mx-24 h-full my-6 rounded-t-lg rounded-b-lg shadow-2xl">
        <div className="flex flex-row justify-center">
          <div className="mt-8 ml-6 basis-1/5 left-[10px] object-center">
            <Image
              className="rounded-[50%] w-[80px] h-[60px] sm:w-[130px] sm:h-[80px] md:w-[120px] md:h-[80px] lg:w-[100px] lg:h-[160px]object-cover mb-5"
              alt="Profile"
              src="/profile.jpg"
              width={300}
              height={100}
            />
          </div>
          <div className="ml-5 mt-7 sm:mt-7 md:mt-7 lg:mt-6 basis-3/5 font-semibold text-[9.5px] text-black text-lg sm:text-left lg:text-left md:text-left lg:w-[900px] h-[30px] sm:w-[700px] ">
            <div className=" sm:text-sm md:text-md lg:text-lg">
              Name: {user.name}
            </div>
            <div className=" sm:text-sm md:text-md lg:text-lg">
              Position: {user.position}
            </div>
            <div className="sm:text-sm md:text-md lg:text-lg">
              Eligibility/Professional License: {user.license}
            </div>
            <div className="sm:text-sm md:text-md lg:text-lg">
              School: {user.education.school}
            </div>
          </div>
          <div className="mt-10  mr-8 sm:ml-32 basis-2/5 font-semibold text-[9.5px] left-[1150px] text-black text-center text-lg sm:text-left lg:text-left md:text-left lg:w-[900px] h-[30px] sm:w-[700px] ">
            <div className=" mt-3 top-[350px] sm:text-sm md:text-md lg:text-lg">
              Designation: {user.education.designation}
            </div>
            <div className="sm:text-sm md:text-md lg:text-lg">
              Specialization: {user.education.specialization}
            </div>
            <div className="sm:text-sm md:text-md lg:text-lg">
              Certifications: {user.education.certifications}
            </div>
          </div>
        </div>
        <div className="mt-[40px] sm:mt-[20px] md:mt-[5px] md:top-[290px] sm:top-[300px] lg:top-[290px] font-semibold text-[11.9px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-lg text-white text-center sm:text-sm md:text-md lg:text-lg w-full h-[30px]  sm:w-full sm:h-[30px]  md:w-full md:h-[30px]">
          ACADEMIC QUALIFICATIONS
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-16 justify-center">
            <div className="ml-12 my-5 basis-1/2 top-[325px] font-semibold text-[11.9px] text-black text-left text-lg w-[900px] h-[30px]">
              <div className="sm:text-sm md:text-md lg:text-lg">
                Baccalaureate Degree: {user.education.bacDegree}
              </div>
              <div className="sm:text-sm md:text-md lg:text-lg">
                Master&apos;s Degree:{user.education.masDegree}
              </div>
              <div className="sm:text-sm md:text-md lg:text-lg">
                Doctorate Degree:{user.education.doccDegree}
              </div>
            </div>
            <div className=" my-5 -mr-20 basis-1/2 top-[325px] font-semibold text-[11.9px] text-black text-lg text-left w-[900px] h-[30px">
              <div className="sm:text-sm md:text-md lg:text-lg">
                School: {user.education.bacSchool}
              </div>
              <div className="sm:text-sm md:text-md lg:text-lg">
                School: {user.education.masSchool}
              </div>
              <div className="sm:text-sm md:text-md lg:text-lg">
                School: {user.education.docSchool}
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="top-[420px] font-semibold text-[11.9px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-lg text-black text-center sm:text-sm md:text-md lg:text-lg w-[600px] h-[30px]  sm:w-full sm:h-[30px]  md:w-full md:h-[30px]">
              SEMINARS AND TRAININGS ATTENDED
              <div>{user.education.seminars_trainings}</div>
            </div>
            <div className="top-[420px] font-semibold text-[20px] bg-transparent [backdrop-filter:blur(4px)] text-black text-center w-[20px] h-[30px]"></div>
            <div className="ml-16 top-[420px] font-semibold text-[11.9px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-lg text-black text-center sm:text-sm md:text-md lg:text-lg w-[400px] h-[30px]  sm:w-full sm:h-[30px]  md:w-full md:h-[30px]">
              JOB EXPERIENCE
              <div>{user.education.experience}</div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mt-28 top-[285px] font-semibold text-[11.9px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-lg text-black text-center sm:text-sm md:text-md lg:text-lg w-full h-[30px]  sm:w-full sm:h-[30px]  md:w-full md:h-[30px]">
            SUBJECTS HANDLED (DESCRIPTIVE TITLE)
          </h1>
        </div>
        <div>{user.education.subjects_handled}</div>
        <div>
          <h1 className="mt-28 top-[285px] font-semibold text-[11.9px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-lg text-black text-center sm:text-sm md:text-md lg:text-lg w-full h-[30px]  sm:w-full sm:h-[30px]  md:w-full md:h-[30px]">
            PAST DESIGNATIONS
          </h1>
        </div>
        <div>{user.education.past_designation}</div>
        <div>
          <h1 className="mt-28 top-[285px] font-semibold text-[11.9px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-lg text-black text-center sm:text-sm md:text-md lg:text-lg w-full h-[30px]  sm:w-full sm:h-[30px]  md:w-full md:h-[30px]">
            PRESENTED PAPERS
          </h1>

          <div>
            <table className="w-full border-none border-collapse">
              <thead>
                <tr>
                  <th className="border border-black bg-[#D7D4D4] [backdrop-filter:blur(4px)] font-semibold text-[11.9px] text-lg text-black text-center w-1/3 h-[30px]text-center sm:text-sm md:text-md lg:text-lg h-[30px]   sm:h-[30px]   md:h-[30px]">
                    COMPLETED
                  </th>
                  <th className="border border-black bg-[#D7D4D4] [backdrop-filter:blur(4px)] font-semibold text-[11.9px] text-lg text-black text-center w-1/3 h-[30px]text-center sm:text-sm md:text-md lg:text-lg h-[30px]   sm:h-[30px]   md:h-[30px]">
                    PUBLISHED
                  </th>
                  <th className="border border-black bg-[#D7D4D4] [backdrop-filter:blur(4px)] font-semibold text-[11.9px] text-lg text-black text-center w-1/3 h-[30px]text-center sm:text-sm md:text-md lg:text-lg h-[30px]   sm:h-[30px]    md:h-[30px]">
                    PRESENTED
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-black text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-black text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-black text-center h-[50px]"></td>
                </tr>
                <tr>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-black text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-black text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-black text-center h-[50px]"></td>
                </tr>
                <tr>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-black text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-black text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-black text-center h-[50px]"></td>
                </tr>
                <tr>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-black text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-black text-center h-[50px]"></td>
                  <td className="border border-black bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-black text-center h-[50px]"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h1 className="mt-5 mb-36 top-[285px] bottom-[285px] font-semibold text-[11.9px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-lg text-black text-center sm:text-sm md:text-md lg:text-lg w-full h-[30px]  sm:w-full sm:h-[30px]  md:w-full md:h-[30px]">
            EXTENSIONS PROJECTS
          </h1>
          <div>{user.education.extension_projs}</div>
        </div>
        <div>
          <div className="mt-0 top-[285px] bottom-[285px] font-semibold text-[20px] bg-[#FFFFFF] [backdrop-filter:blur(4px)] text-black text-center w-full h-[16px]">
            <div className="w-screen h-auto bg-cover flex">
              <div className="h-32"></div>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-[#5B0505] text-[12px] text-white text-center inline-block w-[80px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]  mt-10 ml-32  md:ml-20 sm:ml-20 lg:ml-96 sm:text-sm lg:w-[150px] sm:w-[100px] md:w-[140px]"
                >
                  <EditProfileFaculty_Dialog sessionUser={session.user} />
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#5B0505] text-[12px] text-white text-center inline-block w-[100px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] ml-20 mt-10 lg:w-[180px] sm:w-[140px] md:w-[160px]"
                >
                  DOWNLOAD
                </button>
              </div>
              <div className="flex justify-center">
                <Button className="bg-[#5B0505] text-[12px] text-white text-center inline-block w-[80px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] ml-20 mt-10 sm:text-center lg:text-center md:text-center lg:w-[150px] sm:w-[100px] md:w-[140px]">
                  <Link href={`/dashboard/profile/generatepdf`}>PRINT</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
