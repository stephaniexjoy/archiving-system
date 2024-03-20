import React from 'react';
import { AuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"
import { db } from "@/app/lib/prisma_db";
import bcrypt from 'bcrypt';
import Image from 'next/image';

export default async function page() {

    const session = await getServerSession(AuthOptions)

    const user = await db.user.findUnique({
        where: { id: session.user.id }
    })
    console.log(user)



    const updateUser = async (formData) => {
        "use server"

        const email = formData.get("emailUpd")
        const currentPassword = formData.get("currentPass")
        const newPassword = formData.get("newPass")
        const confirmPassword = formData.get("newPassConfirm")
        const passCheck = await bcrypt.compare(currentPassword, user.password)
        console.log(email, currentPassword, newPassword, confirmPassword)

        if (user && passCheck) {
            if (newPassword === confirmPassword) {
                const hashedPassword = await bcrypt.hash(newPassword, 12);

                const updPrivacy = await db.user.update({
                    where: { id: user.id },
                    data: {
                        email: email,
                        password: hashedPassword

                    }
                })

            }
        }
    }


    return (
        <div className="flex flex-auto w-auto h-screen">
            <div className="flex flex-col w-full h-screen items-center">
                <Image
                    className="mr-20 w-full md:w-[400px] h-[100px] object-cover"
                    alt=""
                    src="/photos/E-Archiving System.png" 
                    width={2125}
                    height={499}
                />

                <div className="border m-4 bg-[#AD5606] w-auto h-[85%] rounded-lg shadow-lg">
                    <form action={updateUser} className=" w-auto h-[93%] bg-[#DABB9C] rounded-3xl shadow m-6 overflow-scroll overflow-x-hidden">
                        <div className='m-5'>
                            <div className="flex flex-row gap-x-10 justify-center ">
                                <div className="ml-10 mt-10 basis-1/4 left-[10px]" >
                                    <Image
                                        className="rounded-full w-40 h-40 object-cover mb-5"
                                        alt=""
                                        src="/profile.jpg"
                                        width={474}
                                        height={474}
                                    />
                                </div>
                                <div className="basis-1/4 text-[#000000]">
                                    <p className="mt-10 text-[14px] md:text-[23px]">Email:</p>
                                    <p className="mt-5 text-[14px] md:text-[23px]">Current Password:</p>
                                    <p className="mt-5 text-[14px] md:text-[23px]">New Password:</p>
                                    <p className="mt-5 text-[14px] md:text-[23px]">Confirm Password:</p>
                                </div>

                                <div className="basis-2/4">

                                    <input type="email" name='emailUpd' placeholder="" className="mt-10 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner" />
                                    <input type="password" name='currentPass' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner" />
                                    <input type="password" name='newPass' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner" />
                                    <input type="password" name='newPassConfirm' placeholder="" className="mt-5 top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[35px] md:text-shadow-inner" />

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
                    </form>
                </div>

            </div>

        </div >



    );
}