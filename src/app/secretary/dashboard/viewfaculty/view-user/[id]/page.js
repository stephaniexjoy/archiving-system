import React from 'react'
import Image from 'next/image'
import { db } from '@/app/lib/prisma_db'

const page = async ({ params }) => {
    const user = await db.user.findUnique({
        where: { id: parseInt(params.id) }
    })
    console.log(user)

    return (
        <div className="flex flex-col items-center w-full h-auto">
            <div className="bg-[#AD5606] w-full h-[12%] flex items-center justify-center">
                <img
                    className="w-[30%] h-auto object-cover py-1"
                    alt="E-Archiving System"
                    src="/photos/E-Archiving System.png"
                />
            </div>

            <div className="overflow-scroll overflow-x-hidden w-full h-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl  my-6">
                <div className="flex flex-row justify-center">
                    <div className="mt-8 ml-20 basis-1/5 left-[10px] object-center" >
                        <img
                            className="rounded-[50%]  w-[130px] h-[135px] object-cover mb-5"
                            alt="Profile"
                            src="/profile.jpg"
                        />
                    </div>
                    <div className="ml-0 basis-2/5 font-semibold text-[25px] text-black text-left w-full h-[30px]">
                        <div className="mt-6">Name: {user.name}</div>
                        <div >Position: {user.position}</div>
                        <div >Eligibility/Professional License: {user.license}</div>
                        <div >School: {user.school}</div>
                    </div>
                    <div className="mt-10 ml-36 basis-2/5 font-semibold text-[25px] text-black text-left w-full h-[30px]">
                        <div className="mt-5 top-[350px]">Designation: {user.designation}</div>
                        <div >Specialization: {user.specialization}</div>
                        <div >Certifications: {user.certifications}</div>
                    </div>
                </div>
                <div
                    className="top-[290px] font-semibold text-[20px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
                    ACADEMIC QUALIFICATIONS
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-x-16 justify-center">
                        <div className="ml-24 my-5 basis-1/2 top-[325px] font-semibold text-[25px] text-black text-left w-full h-[30px]">
                            <div className="">Baccalaureate Degree: {user.bacDegree}</div>
                            <div>Master's Degree:{user.masDegree}</div>
                            <div>Doctorate Degree:{user.doccDegree}</div>
                        </div>
                        <div className=" my-5 basis-1/2 top-[325px] font-semibold text-[25px] text-black text-left w-full h-[30px">
                            <div>School: {user.bacSchool}</div>
                            <div>School: {user.masSchool}</div>
                            <div>School: {user.docSchool}</div>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="top-[420px] font-semibold text-[20px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
                            SEMINARS AND TRAININGS ATTENDED
                            <div>
                                {user.seminars_trainings}
                            </div>
                        </div>
                        <div className="top-[420px] font-semibold text-[20px] bg-transparent [backdrop-filter:blur(4px)] text-white text-center w-[20px] h-[30px]">

                        </div>
                        <div className="ml-16 top-[420px] font-semibold text-[20px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
                            JOB EXPERIENCE
                            <div>
                                {user.experience}
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <h1 className="mt-28 top-[285px] font-semibold text-[20px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
                        SUBJECTS HANDLED (DESCRIPTIVE TITLE)
                    </h1>
                </div>
                <div>
                    {user.subject_handled}
                </div>
                <div>
                    <h1 className="mt-28 top-[285px] font-semibold text-[20px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
                        PAST DESIGNATIONS
                    </h1>
                </div>
                <div>
                    {user.past_designation}
                </div>
                <div>
                    <h1 className="mt-28 top-[285px] font-semibold text-[20px] bg-[#8F8F8F] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
                        PRESENTED PAPERS
                    </h1>

                    <div>
                        <table className="w-full border-none border-collapse">
                            <thead>
                                <tr>
                                    <th className="border border-black bg-[#D7D4D4] [backdrop-filter:blur(4px)] font-semibold text-[20px] text-white text-center w-1/3 h-[30px]">COMPLETED</th>
                                    <th className="border border-black bg-[#D7D4D4] [backdrop-filter:blur(4px)] font-semibold text-[20px] text-white text-center w-1/3 h-[30px]">PUBLISHED</th>
                                    <th className="border border-black bg-[#D7D4D4] [backdrop-filter:blur(4px)] font-semibold text-[20px] text-white text-center w-1/3 h-[30px]">PRESENTED</th>
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
                    <div className='h-36'>
                        {user.extension_projs}
                    </div>
                </div>
                <div>
                    <div className="mt-0 top-[285px] bottom-[285px] font-semibold text-[20px] bg-[#FFFFFF] [backdrop-filter:blur(4px)] text-white text-center w-full h-[30px]">
                        <div className="w-full h-auto bg-cover flex">
                            <div className="h-32">
                            </div>

                            <div className="flex justify-center">
                                <button type="submit" className="bg-[#5B0505] text-[25px] text-white text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] ml-72 mt-10">
                                    BACK
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="bg-[#5B0505] text-[25px] text-white text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] ml-20 mt-10">
                                    DOWNLOAD
                                </button>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="bg-[#5B0505] text-[25px] text-white text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] ml-20 mt-10">
                                    PRINT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default page