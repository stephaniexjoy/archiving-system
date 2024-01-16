import PrivacyModal from '@/app/components/Modal/PrivacyModal'
import ProfileModal from '@/app/components/Modal/ProfileModal'
import React from 'react'


function page() {
    return (
        <div>
            <div className="ml-20 flex flex-col w-auto h-screen">
                <div className='flex flex-col w-auto h-screen items-center py-10'>
                    <img
                        className=" w-[870px] h-[200px] object-cover"
                        alt=""
                        src="/photos/E-Archiving System.png"
                    />

                    <div className="bg-[#AD5606] w-screen h-auto mt-10 py-10 border md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto p-16 rounded-lg shadow-lg">
                        <div className='flex flex-col w-auto items-center py-1'>
                            <img
                                className="rounded-full w-40 h-40 object-cover mb-5"
                                alt=""
                                src="/profile.jpg"
                            />
                        </div>
                        <div className='flex flex-col w-auto items-center'>
                            <div className="flex flex-col columns-2">
                                <div className="flex flex-row gap-x-8 md:ml-10 md:h-20">
                                    <div>
                                        <h1 className="md:text-[20px] text-white">Name:</h1>
                                    </div>
                                    <div>
                                        <h1 className="md:text-[20px] text-white font-bold uppercase">Aeron John G. Remorin</h1>
                                    </div>
                                </div>
                                <div className="-mt-10 flex flex-row gap-x-8 md:ml-10 md:h-20">
                                    <div>
                                        <h1 className=" md:text-[20px] text-white">Age:</h1>
                                    </div>
                                    <div>
                                        <h1 className="md:text-[20px] text-white font-bold">21</h1>
                                    </div>
                                </div>
                                <div className="-mt-10 flex flex-row gap-x-8 md:ml-10 md:h-20">
                                    <div>
                                        <h1 className=" md:text-[20px] text-white">Sex:</h1>
                                    </div>
                                    <div>
                                        <h1 className="md:text-[20px] text-white font-bold uppercase">Male</h1>
                                    </div>
                                </div>
                                <div className="-mt-10 flex flex-row gap-x-8 md:ml-10 md:h-20">
                                    <div>
                                        <h1 className=" md:text-[20px] text-white">Employee No:</h1>
                                    </div>
                                    <div>
                                        <h1 className="md:text-[20px] text-white font-bold uppercase">0320-0726</h1>
                                    </div>
                                </div>
                                <div className="-mt-10 flex flex-row gap-x-8 md:ml-10 md:h-20">
                                    <div>
                                        <h1 className=" md:text-[20px] text-white">Department:</h1>
                                    </div>
                                    <div>
                                        <h1 className="md:text-[20px] text-white font-bold uppercase">College of Computer Studies</h1>
                                    </div>
                                </div>
                                <div className="-mt-10 flex flex-row gap-x-8 md:ml-10 md:h-20">
                                    <div>
                                        <h1 className=" md:text-[20px] text-white">Designation:</h1>
                                    </div>
                                    <div>
                                        <h1 className="md:text-[20px] text-white font-bold uppercase">Secretary</h1>
                                    </div>
                                </div>
                                <div className="-mt-10 flex flex-row gap-x-8 md:ml-10 md:h-20">
                                    <div>
                                        <h1 className=" md:text-[20px] text-white">Institutional Email:</h1>
                                    </div>
                                    <div>
                                        <h1 className="md:text-[20px] text-white font-bold">0320-0726@lspu.edu.ph</h1>
                                    </div>
                                </div>
                            </div>
                            
                                <ProfileModal/>
                           
                            <button class="mt-5 bg-[#D9D9D9] text-[#6A6A6A] text-xl font-bold h-10 w-52 hover:bg-[#6A6A6A] hover:text-white">
                                EDIT PRIVACY
                                <PrivacyModal />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page