import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <div className="flex flex-col w-full items-center">
                <Image
                src="/photos/E-Archiving System.png"
                alt="E-Archiving System"
                width={570}
                height={150}
                objectFit="cover"
                />
            <div className="bg-[#DABB9C] w-full h-auto bg-cover flex">
                <div className="flex ml-[100px] mt-7 mb-7">
                    <Image src="/profile.jpg" alt="Image" className="max-w-[170px] h-[170px] object-fit-fill rounded-full" width={170} height={170}/>
                    
                    <div className="ml-16 text-[#5B0505] text-[25px] font-bold text-left">
                        <div className="grid grid-cols-2 gap-x-96">
                            <div>
                                <div>Name:</div>
                            </div>
                            <div>
                                <div></div>
                            </div>
                            <div>
                                <div>Position:</div>
                            </div>
                            <div>
                                <div>Designation:</div>
                            </div>
                            <div>
                                <div>Eligibility/Professional License:</div>
                            </div>
                            <div>
                                <div>Specialization:</div>
                            </div>
                            <div>
                                <div>School:</div>
                            </div>
                            <div>
                                <div>Certifications:</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" text-[30px] bg-[#5B0505] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-full font-bold">
                ACADEMIC QUALIFICATIONS
            </div>

            <div className="bg-[#DABB9C] w-screen h-auto bg-cover flex">
                <div className="ml-32 text-[#5B0505] text-[25px] font-bold text-left">
                        <div className="grid grid-cols-2 gap-x-96">
                            <div>
                                <div>Baccalaureate Degree:</div>
                            </div>
                            <div>
                                <div>School:</div>
                            </div>
                            <div>
                                <div>Master Degree:</div>
                            </div>
                            <div>
                                <div>School:</div>
                            </div>
                            <div>
                                <div>Doctorate Degree:</div>
                            </div>
                            <div>
                                <div>School:</div>
                            </div>
                        </div>
                </div>
            </div>

            <div className="flex flex-column items-center w-full">
                <div className="text-[30px] bg-[#5B0505] backdrop-filter-blur-[4px] font-[Century Gothic] text-white text-center h-[50px] w-[49%] font-bold">
                        SEMINARS AND TRAININGS ATTENDED
                </div>
                <div className="bg-[#DABB9C] text-center h-[50px] w-[2%]">
                        
                </div>
                <div className="text-[30px] bg-[#5B0505] backdrop-filter-blur-[4px] font-[Century Gothic] text-white text-center h-[50px] w-[49%] font-bold">
                        JOB EXPERIENCE
                </div>
            </div>

            <div className="bg-[#DABB9C] w-screen h-auto bg-cover flex">
                <div className="h-32">
                </div>
            </div>

            <div className=" text-[30px] bg-[#5B0505] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-full font-bold">
                SUBJECTS HANDLED (DESCRIPTIVE TITLE)
            </div>

            <div className="bg-[#DABB9C] w-screen h-auto bg-cover flex">
                <div className="h-32">
                </div>
            </div>

            <div className=" text-[30px] bg-[#5B0505] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-full font-bold">
                PAST DESIGNATIONS
            </div>

            <div className="bg-[#DABB9C] w-screen h-auto bg-cover flex">
                <div className="h-32">
                </div>
            </div>

            <div className=" text-[30px] bg-[#5B0505] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-full font-bold">
                PRESENTED PAPERS
            </div>

            <div className="bg-[#DABB9C] w-screen h-auto bg-cover flex">
                <div className="h-32">
                </div>
            </div>

            
            <div className=" text-[30px] bg-[#5B0505] backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center h-[50px] w-full font-bold">
                EXTENSION PROJECTS
            </div>

            <div className="bg-[#DABB9C] w-screen h-auto bg-cover flex">
                <div className="h-32">
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="bg-[#8F8F8F] text-[30px] text-white text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] ml-20 mt-16">
                        BACK
                    </button>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-[#8F8F8F] text-[30px] text-white text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] ml-[1000px] mt-16">
                        DOWNLOAD
                    </button>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-[#8F8F8F] text-[30px] text-white text-center inline-block w-[247px] h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] ml-8 mt-16">
                        PRINT
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default page