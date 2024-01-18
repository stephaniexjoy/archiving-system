import React from 'react'
import Image from 'next/image'
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"
import { db } from "@/app/lib/prisma_db";

const PDF = async () => {
    const session = await getServerSession(AuthOptions)

    const user = await db.user.findUnique({
        where: { id: session.user.id }
    })

    return (
        <>
            <div>
                <table className="w-full bg-white border-gray-800 border-collapse'">
                    <td>
                        <tr>
                            <td className="max-width-100 margin-auto">
                                <Image className='w-full h-auto items-center' src="/header.jpg" alt="Header Image" width={2700} height={40} />
                            </td>
                        </tr>

                        <tr>
                            <td className="flex align-center width-100 auto overflow-hidden">
                                <td className="shrink-0 mr-[10px]">
                                    <Image src="/profile.jpg" alt="Image" className="max-width-100 height-400 border border-solid border-black p-1 mt-10 ml-24 object-fit-fill" width={400} height={400} />
                                </td>
                                <td className="relative left-[30px] top-[70px] text-black text-[25px] font-[Calibri]">
                                    <tr className="font-bold text-[50px] mt-[60px]">NAME: {user.name}</tr>
                                    <tr>Position: {user.position}</tr>
                                    <tr>Designation: {user.designation}</tr>
                                    <tr>Specialization: {user.specialization}</tr>
                                    <tr>Eligibility/Professional License: {user.license}</tr>
                                    <tr>Certifications: {user.certifications}</tr>
                                </td>
                            </td>
                        </tr>

                        <tr>
                            <td className="relative top-[10px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
                                ACADEMIC QUALIFICATIONS
                            </td>
                        </tr>

                        <tr>
                            <td className="relative top-[20px] left-[140px] text-[25px] font-[Century Gothic] text-black">Baccalaureate Degree: {user.bacDegree}</td>
                            <td className="relative top-[20px] right-[600px] text-[25px] font-[Century Gothic] text-black">School: {user.bacSchool}</td>
                        </tr>
                        <tr>
                            <td className="relative top-[25px] left-[140px] text-[25px] font-[Century Gothic] text-black">Master’s Degree: {user.masDegree}</td>
                            <td className="relative top-[25px] right-[600px]  text-[25px] font-[Century Gothic] text-black">School: {user.masSchool}</td>
                        </tr>
                        <tr>
                            <td className="relative top-[30px] left-[140px] text-[25px] font-[Century Gothic] text-black">Doctorate Degree: {user.docDegree}</td>
                            <td className="relative top-[30px] right-[600px]  text-[25px] font-[Century Gothic] text-black">School: {user.docSchool}</td>
                        </tr>

                        <tr>
                            <td className="relative top-[40px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
                                SEMINARS AND TRAININGS ATTENDED
                            </td>
                        </tr>

                        <tr>
                            <td className="relative top-[45px] left-[140px] text-[25px] font-[Century Gothic] text-black whitespace-nowrap h-80">
                            {user.seminars_trainings}
                            </td>
                        </tr>

                        <tr>
                            <td className="relative top-[50px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
                                JOB EXPERIENCE
                            </td>
                        </tr>

                        <tr>
                            <td className="relative top-[55px] left-[140px] text-[25px] font-[Century Gothic] text-black whitespace-nowrap h-60">
                            {user.experience}
                            </td>
                        </tr>

                        <tr>
                            <td className="relative top-[50px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
                                SUBJECTS HANDLED (DESCRIPTIVE TITLE)
                            </td>
                        </tr>

                        <tr>
                            <td className="w-full flex mt-[5%] ml-[95px] mr-[55px]">
                                <div className="text-left mb-[10px] w-full">
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"> {user.subjects_handled}</div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                </div>

                                <div className="text-left mb-[10px] w-full">
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td
                                className="relative top-[50px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
                                PAST DESIGNATIONS
                            </td>
                        </tr>

                        <tr>
                            <td className="w-full flex mt-[5%] ml-[95px] mr-[55px]">
                                <div className="text-left w-full">
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[4em] mx-auto w-full">{user.past_designation}</div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[4em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[4em] mx-auto w-full"></div>
                                </div>
                                <div className="text-left w-full">
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[4em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[4em] mx-auto w-full"></div>
                                    <div className="text-[25px] font-[Century Gothic] text-black border-[1px] border-black h-[4em] mx-auto w-full"></div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td
                                className="relative top-[50px] left-[95px] bottom-[50px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] font-bold">
                                PRESENTED PAPERS
                            </td>
                        </tr>

                        <tr>
                            <td class="flex mt-[5%] ml-[95px] mr-[20px] w-full">
                                <div class="text-left mb-4 w-full">
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full">{user.presented_papers}</div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                </div>
                                <div class="text-left mb-4 w-full">
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                </div>
                                <div class="text-left mb-4 w-full">
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[2.5em] mx-auto w-full"></div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td
                                className="relative top-[50px] left-[95px] bottom-[50px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
                                EXTENSION PROJECTS
                            </td>
                        </tr>

                        <tr>
                            <td class="flex mt-[5%] ml-[95px] mr-[20px] w-full">
                                <div class="text-left mb-4 w-full">
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto w-full">{user.extension_projs}</div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto w-full"></div>
                                </div>
                                <div class="text-left mb-4 w-full">
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto w-full"></div>
                                </div>
                                <div class="text-left mb-4 w-full">
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto w-full"></div>
                                </div>
                                <div class="text-left mb-4 w-full">
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto w-full"></div>
                                    <div class="text-[25px] font-[Century Gothic] text-black border border-black h-[3em] mx-auto w-full"></div>
                                </div>
                            </td>
                        </tr>
                    </td>
                    <td>
                        <Image src="/faculty.png" alt="faculty" className="absolute float-right ml-[-205px] mt-[31%]  opacity-70" width={210} height={100} />
                    </td>
                </table>
            </div>
        </>
    )
}

export default PDF