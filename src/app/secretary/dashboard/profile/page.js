import React from 'react'

function page() {
    return (
        <div>
            <div className="flex flex-col w-auto h-screen">
                <div className='flex flex-col w-auto h-screen items-center py-10'>
                    <img
                        className=" w-[870px] h-[200px] object-cover"
                        alt=""
                        src="/photos/E-Archiving System.png"
                    />

                    <div className="bg-[#AD5606] w-screen h-auto mt-10">
                        <div className='flex flex-col w-auto items-center py-10'>
                            <img
                                className=" w-40 h-40 object-cover"
                                alt=""
                                src="/photos/profile.jpg"
                            />
                            <div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page