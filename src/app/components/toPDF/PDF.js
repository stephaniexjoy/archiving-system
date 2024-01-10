import React from 'react'

const PDF = () => {
    return (
        <>
            <div>
                <div className="max-width-100 margin-auto">
                    <img className='w-full h-auto' src="header.jpg" alt="Header Image" />
                </div>

                <div className="flex align-center width-85 auto overflow-hidden">

                    <div className="shrink">
                        {/* <img src="profile.jpg" alt="Image"
                            style="max-width: 100%; height: 400px; border: 1px solid #000; margin-top: 10%; margin-left:40%;object-fit: fill;" /> */}
                    </div>

                    <div
                        className="absolute left-[580px] text-black text-[25px] font-[Calibri]">
                      {/*   <h1 style="font-weight: bold; font-size:50px; margin-top: 60px;">NAME</h1> */}
                        <h1 className="font-bold text-[50px] mt-[60px]">NAME</h1>

                        <p>Position:</p>
                        <p>Designation:</p>
                        <p>Specialization:</p>
                        <p>Eligibility/Professional License:</p>
                        <p>Certifications:</p>
                        {/* <img src="faculty.png" alt="faculty" style="float:right; width:auto; height:auto; margin-left: 1450px; opacity: 70%;" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PDF