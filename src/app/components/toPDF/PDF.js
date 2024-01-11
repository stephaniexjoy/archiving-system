import React from 'react'
import Image from 'next/image'

const PDF = () => {
    return (
        <>
            <div>
                <table className="w-full bg-white border-gray-800 border-collapse'">
                    <td>
                    <tr>
                        <td className="max-width-100 margin-auto">
                            <Image className='w-full h-auto items-center' src="/header.jpg" alt="Header Image" width={2700} height={40}/>
                        </td>  
                    </tr>

                    <tr>
                        <td className="flex align-center width-100 auto overflow-hidden">
                            <tr className="shrink-0 mr-[10px]">
                                <Image src="/profile.jpg" alt="Image" className="max-width-100 height-400 border border-solid border-black p-1 mt-10 ml-24 object-fit-fill" width={400} height={400}/>
                            </tr>
                            <tr className="relative left-[30px] top-[70px] text-black text-[25px] font-[Calibri]">
                                <tr className="font-bold text-[50px] mt-[60px]">NAME</tr>
                                <tr>Position:</tr>
                                <tr>Designation:</tr>
                                <tr>Specialization:</tr>
                                <tr>Eligibility/Professional License:</tr>
                                <tr>Certifications:</tr>
                                {/* <td>
                                    <Image src="/faculty.png" alt="faculty" className="float-right w-auto h-auto ml-[767px] opacity-70" width={350} height={400}/>
                                </td> */}
                            </tr>
                        </td>
                    </tr>

                    <tr>
                        <td className="relative top-[10px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
                            ACADEMIC QUALIFICATIONS
                        </td>
                    </tr>

                    <tr>
                        <td className="relative top-[20px] left-[140px] text-[25px] font-[Century Gothic] text-black">Baccalaureate Degree:</td>
                        <td className="relative top-[20px] right-[600px] text-[25px] font-[Century Gothic] text-black">School:</td>
                    </tr>
                    <tr>
                        <td className="relative top-[25px] left-[140px] text-[25px] font-[Century Gothic] text-black">Master’s Degree:</td>
                        <td className="relative top-[25px] right-[600px]  text-[25px] font-[Century Gothic] text-black">School:</td>
                    </tr>
                    <tr>
                        <td className="relative top-[30px] left-[140px] text-[25px] font-[Century Gothic] text-black">Doctorate Degree:</td>
                        <td className="relative top-[30px] right-[600px]  text-[25px] font-[Century Gothic] text-black">School:</td>
                    </tr>

                    <tr>
                        <td className="relative top-[40px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
                            SEMINARS AND TRAININGS ATTENDED
                        </td>
                    </tr>

                    <tr>
                        <td className="whitespace-nowrap h-80">
                        </td>
                    </tr>

                    <tr>
                        <td className="relative top-[50px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
                            JOB EXPERIENCE
                        </td>
                    </tr>

                    <tr>
                        <td className="whitespace-nowrap h-60">
                        </td>
                    </tr>

                    <tr>
                        <td className="relative top-[50px] left-[95px] text-[30px] bg-[#B83633] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-[86%] font-bold">
                            SUBJECTS HANDLED (DESCRIPTIVE TITLE)
                        </td>
                    </tr>

                    <tr>
                        <td className="w-full flex mt-[5%] ml-[95px] mr-[55px]">
                            <div className="mb-[10px] w-full">
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                            </div>
                        
                            <div className="mb-[10px] w-full">
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
                                <div className="border-[1px] border-black h-[3em] mx-auto w-full"></div>
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
                        <td className="w-full flex mt-[5%] ml-[95px] mr-[20px]">
                            <div className="w-[40%] mb-[1em] ">
                                <div className="border-[1px] border-black h-[15em] mx-auto w-full"></div>
                            </div>
                            <div className="mb-[1em] w-full">
                                <div className="border-[1px] border-black h-[15em] mx-auto w-full"></div>
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
                            <div class="mb-4 w-full">
                                <div class="border border-black h-12 mx-auto w-full"></div>
                                <div class="border border-black h-12 mx-auto w-full"></div>
                                <div class="border border-black h-12 mx-auto w-full"></div>
                                <div class="border border-black h-12 mx-auto w-full"></div>
                                <div class="border border-black h-12 mx-auto w-full"></div>
                            </div>
                            <div class="mb-4 w-full">
                                <div class="border border-black h-12 mx-auto w-full"></div>
                                <div class="border border-black h-12 mx-auto w-full"></div>
                                <div class="border border-black h-12 mx-auto w-full"></div>
                                <div class="border border-black h-12 mx-auto w-full"></div>
                                <div class="border border-black h-12 mx-auto w-full"></div>
                            </div>
                            <div class="mb-4 w-full">
                                <div class="border border-black h-12 mx-auto w-full"></div>
                                <div class="border border-black h-12 mx-auto w-full"></div>
                                <div class="border border-black h-12 mx-auto w-full"></div>
                                <div class="border border-black h-12 mx-auto w-full"></div>
                                <div class="border border-black h-12 mx-auto w-full"></div>
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
                            <div class="mb-4 w-full">
                                <div class="border border-black h-28 mx-auto w-full"></div>
                            </div>
                            <div class="mb-4 w-full">
                                <div class="border border-black h-28 mx-auto w-full"></div>
                            </div>
                            <div class="mb-4 w-full">
                                <div class="border border-black h-28 mx-auto w-full"></div>
                            </div>
                            <div class="mb-4 w-full">
                                <div class="border border-black h-28 mx-auto w-full"></div>
                            </div>
                        </td>
                    </tr>
                    </td>
                    <td>
                        <Image src="/faculty.png" alt="faculty" className="absolute float-right ml-[-205px] mt-[31%]  opacity-70" width={210} height={100}/>
                    </td>                            
                </table>
            </div>
        </>
    )
}

export default PDF