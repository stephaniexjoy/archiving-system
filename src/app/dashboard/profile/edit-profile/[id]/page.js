import React from 'react';
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"
import { db } from "@/app/lib/prisma_db";

export default async function page() {

    const session = await getServerSession(AuthOptions)

    const user = await db.user.findUnique({
        where: { id: parseInt(session.user.id) }
    })
    console.log(user)

    const updateUser = async (formData) => {
        "use server"

        const nameUpd = formData.get("updName")
        const positionUpd = formData.get("updPosition")
        const designationUpd = formData.get("updDesignation")
        const licenseUpd = formData.get("updLicense")
        const schoolUpd = formData.get("updSchool")
        const specUpd = formData.get("updSpec")
        const certUpd = formData.get("updCert")
        const bacDegUpd = formData.get("updBacDeg")
        const masDegUpd = formData.get("updMasDeg")
        const docDegUpd = formData.get("updDocDeg")
        const bacSchlUpd = formData.get("updBacDegSchl")
        const masSchlUpd = formData.get("updMasDegSchl")
        const docSchlUpd = formData.get("updDocDegSchl")
        const seminarsUpd = formData.get("seminarsUpd")
        const expUpd = formData.get("experUpd")
        const pastDesigUpd = formData.get("desigUpd")
        const subjectsUpd = formData.get("subjectUpd")
        const presPaperUpd = formData.get("papersUpd")
        const extProjUpd = formData.get("extUpd")

        const updUser = await db.user.update({
            where: { id: session.user.id },
            data: {
                name: nameUpd,
                position: positionUpd,
                designation: designationUpd,
                specialization: specUpd,
                license: licenseUpd,
                certifications: certUpd,
                school: schoolUpd,
                bacDegree: bacDegUpd,
                bacSchool: bacSchlUpd,
                masDegree: masDegUpd,
                masSchool: masSchlUpd,
                docDegree: docDegUpd,
                docSchool: docSchlUpd,
                seminars_trainings: seminarsUpd,
                experience: expUpd,
                past_designation: pastDesigUpd,
                subjects_handled: subjectsUpd,
                presented_papers: presPaperUpd,
                extension_projs: extProjUpd,
            }
        })
    }


    return (
        <div className="flex flex-auto w-auto h-screen">
            <div className="flex flex-col w-full mt-5 h-screen items-center">
                <img
                    className="mr-20 w-full md:w-[400px] h-[100px] object-cover"
                    alt=""
                    src="/photos/E-Archiving System.png" />

                <div className="border bg-[#AD5606] w-auto h-[85%] rounded-lg shadow-lg p-5 m-5">
                    <form action={updateUser} className=" w-auto h-[93%] bg-[#DABB9C] rounded-3xl shadow m-6 overflow-scroll overflow-x-hidden p-5">
                        <div className='m-5 -mt-5'>
                            <div className="flex flex-row gap-x-10 justify-center ">
                                <div className="ml-10 mt-10 basis-1/4 left-[10px]" >
                                    <img
                                        className="rounded-full w-40 h-40 object-cover mb-5"
                                        alt=""
                                        src="/profile.jpg"
                                    />
                                </div>
                                <div className="basis-1/4 text-[#000000]">
                                    <p className="mt-10 text-[14px] md:text-[23px]">Name:</p>
                                    <p className="mt-5 text-[14px] md:text-[23px]">Position:</p>
                                    <p className="mt-5 text-[14px] md:text-[23px]">Designation:</p>
                                    <p className="mt-5 text-[14px] md:text-[23px]">Eligibility/Professional License:</p>
                                </div>

                                <div className="basis-2/4">

                                    <input type="text" name='updName' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner" />
                                    <input type="text" name='updPosition' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner" />
                                    <input type="text" name='updDesignation' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner" />
                                    <input type="text" name='updLicense' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner" />

                                </div>
                            </div>

                            <div className="flex flex-row gap-x-8 text-[#000000]">
                                <div className="basis-1/4">
                                    <p className='mt-10 text-[14px] md:text-[23px]'>
                                        School:
                                    </p>
                                    <p className='mt-5 text-[14px] md:text-[23px]'>
                                        Specialization:
                                    </p>
                                    <p className='mt-5 text-[14px] md:text-[23px]'>
                                        Certifications:
                                    </p>
                                </div>
                                <div className="">
                                    <input type="text" name='updSchool' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#000000] bg-[#D9D9D9] inline-block w-[full] md:w-[1198px] h-[35px] md:text-shadow-inner" />
                                    <input type="text" name='updSpec' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#000000] bg-[#D9D9D9] inline-block w-[full] md:w-[1198px] h-[35px] md:text-shadow-inner" />
                                    <input type="text" name='updCert' placeholder="" className="mt-5 mb-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#000000] bg-[#D9D9D9] inline-block w-[full] md:w-[1198px] h-[35px] md:text-shadow-inner" />
                                </div>
                            </div>
                            <div>
                                <h2 className="md:text-[20px] text-bold font-bold uppercase text-center">ACADEMIC QUALIFICATIONS</h2>
                            </div>
                            <div>
                                <div className="flex flex-row gap-x-10 text-[#000000]">
                                    <div className="">
                                        <p className='mt-10  md:text-[19px]'>
                                            Baccalaureate Degree:
                                        </p>
                                        <p className='mt-2 md:text-[19px]'>
                                            Master's Degree:
                                        </p>
                                        <p className='mt-2  md:text-[19px]'>
                                            Doctorate Degree:
                                        </p>
                                    </div>
                                    <div className="">
                                        <input type="text" name='updBacDeg' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[500px] h-[35px] md:text-shadow-inner" />
                                        <input type="text" name='updMasDeg' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[500px] h-[35px] md:text-shadow-inner" />
                                        <input type="text" name='updDocDeg' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[500px] h-[35px] md:text-shadow-inner" />

                                    </div>

                                    <div className="text-[#000000]">
                                        <p className='mt-10 text-[14px] md:text-[23px]'>
                                            School:
                                        </p>
                                        <p className='mt-10 text-[14px] md:text-[23px]'>
                                            School:
                                        </p>
                                        <p className='mt-10 text-[14px] md:text-[23px]'>
                                            School:
                                        </p>

                                    </div>
                                    <div className="">
                                        <input type="text" name='updBacDegSchl' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[550px] h-[35px] md:text-shadow-inner" />
                                        <input type="text" name='updMasDegSchl' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[550px] h-[35px] md:text-shadow-inner" />
                                        <input type="text" name='updDocDegSchl' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[550px] h-[35px] md:text-shadow-inner" />


                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="border bg-[#DABB9C] w-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-full mt-10 p-8 rounded-lg shadow-lg">

                            <div className='m-3'>

                                <div className='m-10'>
                                    <div className='mt-10 flex grid-cols-2 space-x-40 justify-center text-[#000000] font-bold font-[Times New Roman]'>
                                        <div className=' text-center '>
                                            <div className='mt-10'>
                                                <h1>SEMINARS AND TRAININGS ATTENDED</h1>
                                            </div>
                                            <div>
                                                <textarea name='seminarsUpd' className="mt-5 overflow-auto top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[400px] h-[90px] md:text-shadow-inner">

                                                </textarea>
                                            </div>
                                            <div className='mt-10 font-bold'>
                                                <h1>JOB EXPERIENCE</h1>
                                            </div>
                                            <div>
                                                <textarea name='experUpd' className="mt-5 overflow-auto top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[400px] h-[90px] md:text-shadow-inner">

                                                </textarea>
                                            </div>
                                            <div className='mt-10 font-bold'>
                                                <h1>PAST DESIGNATION</h1>
                                            </div>
                                            <div>
                                                <textarea name='desigUpd' className="mt-5 overflow-auto top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[400px] h-[90px] md:text-shadow-inner">

                                                </textarea>
                                            </div>
                                        </div>

                                        <div className='text-center'>
                                            <div className='mt-10 font-bold'>
                                                <h1>SUBJECTS HANDLED (DESCRIPTIVE TITLE)</h1>
                                            </div>
                                            <div>
                                                <textarea name='subjectUpd' className="mt-5 overflow-auto top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[400px] h-[90px] md:text-shadow-inner">

                                                </textarea>
                                            </div>
                                            <div className='mt-10 font-bold'>
                                                <h1>PRESENTED PAPERS</h1>
                                            </div>
                                            <div>
                                                <textarea name='papersUpd' className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[400px] h-[90px] md:text-shadow-inner">

                                                </textarea>
                                            </div>
                                            <div className='mt-10 font-bold'>
                                                <h1>EXTENSION PROJECTS</h1>
                                            </div>
                                            <div>
                                                <textarea name='extUpd' className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[400px] h-[90px] md:text-shadow-inner">

                                                </textarea>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex justify-center my-10">
                                        <button
                                            type="submit"
                                            className="top-[950px] left-[770px] bg-[#8F8F8F] text-[20px] text-white text-center inline-block w-[247px] mb-10 h-[38px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
                                        //onClick={handleSubmit}
                                        >
                                            SAVE
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div >

    );
}