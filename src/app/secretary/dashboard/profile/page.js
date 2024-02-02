import React from 'react'
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"
import { db } from "@/app/lib/prisma_db";
import Link from 'next/link';
import EditProfile_Dialog from '@/app/components/New_Components/EditProfile_Dialog';
import EditPrivacy_Dialog from '@/app/components/New_Components/EditPrivacy_Dialog';

async function page() {
    const session = await getServerSession(AuthOptions)

    const user = await db.user.findUnique({
        where: { id: parseInt(session.user.id) }
    })
    return (
        <div>
            <div className='flex flex-col w-screen h-screen'>
                <div className="bg-[#AD5606] w-[100%] h-[12%] flex items-center justify-center">
                    <img
                        className="w-[27%] h-[100%] object-cover flex items-center justify-center"
                        alt="E-Archiving System"
                        src="/photos/E-Archiving System.png"
                    />
                </div>

                <div className='flex flex-col w-auto items-center py-1'>
                    <img
                        className="mt-16 rounded-full w-40 h-40 object-cover mb-5"
                        alt=""
                        src="/profile.jpg"
                    />
                </div>
                <div className='flex flex-col w-auto items-center'>
                    <div className="flex flex-col columns-2">
                        <div className="flex flex-row gap-x-8 text-[#5B0505] md:ml-10 md:h-20 mt-16">
                            <div>
                                <h1 className="md:text-[25px]">Name:</h1>
                            </div>
                            <div>
                                <h1 className="md:text-[25px] ml-[141px] font-bold uppercase">{user.name}</h1>
                            </div>
                        </div>
                        <div className="-mt-10 flex flex-row text-[#5B0505] gap-x-8 md:ml-10 md:h-20">
                            <div>
                                <h1 className=" md:text-[25px]">Age:</h1>
                            </div>
                            <div>
                                <h1 className="md:text-[25px] ml-[163px] font-bold">21</h1>
                            </div>
                        </div>
                        <div className="-mt-10 flex flex-row gap-x-8 text-[#5B0505] md:ml-10 md:h-20">
                            <div>
                                <h1 className=" md:text-[25px]">Sex:</h1>
                            </div>
                            <div>
                                <h1 className="md:text-[25px] ml-[166px] font-bold uppercase">Male</h1>
                            </div>
                        </div>
                        <div className="-mt-10 flex flex-row gap-x-8 text-[#5B0505] md:ml-10 md:h-20">
                            <div>
                                <h1 className=" md:text-[25px]">Employee No:</h1>
                            </div>
                            <div>
                                <h1 className="md:text-[25px] ml-[55px] font-bold uppercase">0320-0726</h1>
                            </div>
                        </div>
                        <div className="-mt-10 flex flex-row gap-x-8 text-[#5B0505] md:ml-10 md:h-20">
                            <div>
                                <h1 className=" md:text-[25px]">Department:</h1>
                            </div>
                            <div>
                                <h1 className="md:text-[25px] ml-[69px] font-bold uppercase">College of Computer Studies</h1>
                            </div>
                        </div>
                        <div className="-mt-10 flex flex-row gap-x-8 text-[#5B0505] md:ml-10 md:h-20">
                            <div>
                                <h1 className=" md:text-[25px]">Designation:</h1>
                            </div>
                            <div>
                                <h1 className="md:text-[25px] ml-[70px] font-bold uppercase">Secretary</h1>
                            </div>
                        </div>
                        <div className="-mt-10 flex flex-row gap-x-8 text-[#5B0505] md:ml-10 md:h-20">
                            <div>
                                <h1 className=" md:text-[25px]">Institutional Email:</h1>
                            </div>
                            <div>
                                <h1 className="md:text-[25px] ml-[3px] font-bold">{user.email}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#AD5606] mb-5 rounded-lg">
                        <EditProfile_Dialog />
                    </div>
                    <div className="bg-[#AD5606] rounded-lg">
                        <EditPrivacy_Dialog />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default page