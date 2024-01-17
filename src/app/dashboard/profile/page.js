
import Image from "next/image";
import { FaUserLock } from "react-icons/fa";
import EditPrivacy from "@/app/components/Modal/EditPrivacy";
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"
import { db } from "@/app/lib/prisma_db";
import Link from "next/link";

export default async function profile() {
  const session = await getServerSession(AuthOptions)

  const user = await db.user.findUnique({
    where: { id: session.user.id }
  })
  console.log(user)
  return (
    <div className="flex flex-auto w-auto h=[75%]">

      <div className="flex flex-col w-full h-screen items-center">
        <Image
          className=" top-[10px] left-[670px] mr-20  w-[400px] h-[100px] object-cover"
          alt=""
          width={400}
          height={400}
          src="/photos/E-Archiving System.png"
        />

        <div>
          <EditPrivacy />
        </div>

        <div className=" border bg-[#AD5606] w-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-full my-6 p-8 rounded-lg shadow-lg overflow-scroll overflow-x-hidden">

          <div className="flex flex-row gap-x-10 justify-center ">
            <div className="mt-8 ml-20 basis-1/5 left-[10px] object-center" >
              <img
                className="rounded-[50%]  w-[130px] h-[135px] object-cover  mb-5"
                alt=""
                src="/profile.jpg"
              />
            </div>
            <div className="basis-2/5 text-[20px] text-white text-left w-[900px] h-[30px]">

              <div className="mt-8">Name: {user.name}</div>
              <div >Position: {user.position}</div>
              <div >Eligibility/Professional License: {user.license}</div>
              <div >School: {user.school}</div>

            </div>

            <div className="mt-10 ml-5 basis-2/5 text-[20px] left-[1150px]
             text-white text-left w-[900px] h-[30px]">
              <div className=" mt-5 top-[350px]">Designation: {user.designation}</div>
              <div >Specialization: {user.specialization}</div>
              <div >Certifications: {user.certifications}</div>
            </div>
          </div>
          <div
            className="top-[285px] left-[1px] text-[20px] bg-[#5B0505] [backdrop-filter:blur(4px)] text-white text-center w-[1800px]h-[30px]">
            ACADEMIC QUALIFICATIONS
          </div>
          <div className="">
            <div className="flex flex-row gap-x-10 justify-center">
              <div className="ml-12 my-5 basis-1/2 top-[325px] text-[20px] text-white text-left w-[900px] h-[30px]">
                <div className="">Baccalaureate Degree: {user.bacDegree}</div>
                <div>Master's Degree:{user.masDegree}</div>
                <div>Doctorate Degree:{user.doccDegree}</div>
              </div>

              <div className=" my-5 basis-1/2 top-[325px] left-[870px] text-[20px] text-white text-left w-[900px] h-[30px">

                <div>School: {user.bacSchool}</div>
                <div>School: {user.masSchool}</div>
                <div>School: {user.docSchool}</div>

              </div>
            </div>
            <div className="flex flex-row gap-x-10 justify-center">
              <div
                className=" basis-1/2 top-[420px] left-[1px] text-[20px] bg-[#5B0505]
            [backdrop-filter:blur(4px)] text-white text-center w-[970px]
            h-[30px]"
              >
                SEMINARS AND TRAININGS ATTENDED
                <div>
                  {user.seminars_trainings}
                </div>
              </div>

              <div
                className=" basis-1/2 top-[420px] left-[1500px] text-[20px] bg-[#5B0505]
            [backdrop-filter:blur(4px)] text-white text-center w-auto
            h-[30px]"
              >
                JOB EXPERIENCE
                <div>
                  {user.experience}
                </div>
              </div>

            </div>

          </div>
          <div>
            <h1 className="mt-20 top-[285px] left-[1px] text-[20px] bg-[#5B0505] [backdrop-filter:blur(4px)] text-white text-center w-[1800px]h-[30px]">
              PAST DESIGNATIONS

            </h1>
          </div>
          <div>
            {user.past_designation}
          </div>
          <div>
            <h1
              className="mt-20 top-[285px] left-[1px] text-[20px] bg-[#5B0505] [backdrop-filter:blur(4px)] text-white text-center w-[1800px]h-[30px]">
              PRESENTED PAPERS

            </h1>
            <div>
              {user.presented_papers}
            </div>
          </div>
          <div>
            <h1
              className="mt-20 top-[285px] left-[1px] text-[20px] bg-[#5B0505] [backdrop-filter:blur(4px)] text-white text-center w-[1800px]h-[30px]">
              EXTENSIONS PROJECTS

            </h1>
            <div>
              {user.extension_projs}
            </div>
          </div>
          <div className=" my-20 flex flex-row gap-x-10 justify-center">
            <div className="flex justify-center">
              <Link
                href={`/dashboard/profile/edit-profile/${user.id}`}
                className="top-[950px] left-[500px] bg-[#8F8F8F] text-[20px] text-white text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              // onClick={handleSubmit}
              >
                EDIT
              </Link>
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
