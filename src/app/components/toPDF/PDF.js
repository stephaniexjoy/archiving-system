import React from 'react'

const PDF = () => {
    return (
        <>
            <div>
                <div className="max-width-100 margin-auto">
                    <img className='w-full h-auto' src="header.jpg" alt="Header Image" />
                </div>

                <div className="flex align-center width-85 auto overflow-hidden">

                    <div className="shrink-0 margin-right-20">
                        {/* <img src="profile.jpg" alt="Image"
                            style="max-width: 100%; height: 400px; border: 1px solid #000; margin-top: 10%; margin-left:40%;object-fit: fill;" /> */}
                    </div>

                    <div
                        className="absolute left-[580px] text-black text-[25px] font-[Calibri]">
                        {/* <h1 className="font-weight: bold; font-size:50px; margin-top: 60px;">NAME</h1> */}
                        <h1 className="font-bold text-[50px] mt-[60px]">NAME</h1>
                        <p>Position:</p>
                        <p>Designation:</p>
                        <p>Specialization:</p>
                        <p>Eligibility/Professional License:</p>
                        <p>Certifications:</p>
                        <img src="faculty.png" alt="faculty" className="float:right; width:auto; height:auto; margin-left: 1450px; opacity: 70%;" />
                    </div>

                    <div
                        className="absolute top -[850px] left-[150px] text-[30px] bg-[#B83633] 
                        backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center w-[1800px] h-[50px]"
                        // className="font-weight: 500;">
                        >
                        ACADEMIC QUALIFICATIONS
                    </div>

                    <table>
                        <tr>
                            <td
                                className="absolute top-[910px] left-[150px] text-[25px] font-[Century Gothic] text-black">Baccalaureate
                                Degree:</td>
                            <td
                                className="absolute top-[910px] left-[1000px] text-[25px] font-[Century Gothic] text-black">School:</td>
                        </tr>
                        <tr>
                            <td
                                className="absolute top-[950px] left-[150px] text-[25px] font-[Century Gothic] text-black">Master’s
                                Degree:</td>
                            <td
                                className="absolute top-[950px] left-[1000px] text-[25px] font-[Century Gothic] text-black">School:</td>
                        </tr>
                        <tr>
                            <td
                                className="absolute top-[990px] left-[150px] text-[25px] font-[Century Gothic] text-black">Doctorate
                                Degree:</td>
                            <td
                                className="absolute top-[990px] left-[1000px] text-[25px] font-[Century Gothic] text-black">School:</td>
                        </tr>
                    </table>

                    <div
                        className="absolute top-[1050px] left-[150px] bottom-[50px] text-[30px] bg-[#B83633] 
                        backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center w-[1800px] h-[50px]"
                        // style="font-weight: 500;">
                        >
                        SEMINARS AND TRAININGS ATTENDED
                    </div>

                    <div
                        className="absolute top-[1300px] left-[150px] bottom-[50px] text-[30px] bg-[#B83633] 
                        backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center w-[1800px] h-[50px]"
                        // style="font-weight: 500;">
                        >
                        JOB EXPERIENCE
                    </div>

                    <div
                        className="absolute top-[1600px] left-[150px] bottom-[50px] text-[30px] bg-[#B83633] 
                        backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center w-[1800px] h-[50px]"
                        // style="font-weight: 500;">
                        >
                        SUBJECTS HANDLED (DESCRIPTIVE TITLE)
                    </div>
                    
                    <div className="display-flex mt- [28%] ml- [150px]; mr- [55px];">
                        <div className="mb- [1em]; width- [100%]">
                            <div className="border- [1px black solid] height- [3em] m- auto; width- [100%];"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        </div>
                    
                        <div className="margin-bottom: 1em; width: 100%;">
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                            <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        </div>
                    </div>

                    <div
                        className="absolute top-[2180px] left-[150px] bottom-[50px] text-[30px] bg-[#B83633] 
                        backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center w-[1800px] h-[50px]"
                        // style="font-weight: 500;">
                        >
                        PAST DESIGNATIONS
                    </div>

                    <div className="display: flex; margin-top: 4%; margin-left: 150px; margin-right: 55px;">
                        <div className="margin-bottom: 1em; width: 30%;">
                            <div className="border: 1px black solid; height: 8em; margin: auto; width: 100%;"></div>
                        </div>
                        <div className="margin-bottom: 1em; width: 100%;">
                            <div className="border: 1px black solid; height: 8em; margin: auto; width: 100%;"></div>
                        </div>
                    </div>

                    <div
                        className="absolute top-[2410px] left-[150px] bottom-[50px] text-[30px] bg-[#B83633] 
                        backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center w-[1800px] h-[50px]"
                        // style="font-weight: 500;">
                        >
                        PRESENTED PAPERS
                    </div>

                    <div className="display: flex; margin-top: 100px; margin-left: 150px; margin-right: 55px;">
                    <div className="margin-bottom: 1em; width: 100%;">
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                    </div>
                    <div className="margin-bottom: 1em; width: 100%;">
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                    </div>
                    <div className="margin-bottom: 1em; width: 100%;">
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                        <div className="border: 1px black solid; height: 3em; margin: auto; width: 100%;"></div>
                    </div>
                </div>

                <div
                    className="absolute top-[2750px] left-[150px] bottom-[50px] text-[30px] bg-[#B83633] 
                    backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center w-[1800px] h-[50px]"
                    // style="font-weight: 500;">
                    >
                    EXTENSION PROJECTS 
                </div>

                <div className="display-flex mt- [80px] ml- [150px] mr- [55px]">
                    <div className="margin-bottom: 1em; width: 100%;">
                        <div className="border: 1px black solid; height: 7em; margin: auto; width: 100%;"></div>
                    </div>
                    <div className="margin-bottom: 1em; width: 100%;">
                        <div className="border: 1px black solid; height: 7em; margin: auto; width: 100%;"></div> 
                    </div>
                    <div className="margin-bottom: 1em; width: 100%;">
                        <div className="border: 1px black solid; height: 7em; margin: auto; width: 100%;"></div>
                    </div>
                    <div className="mb-1em; width-100%;">
                        <div className="border: 1px black solid; height: 7em; margin: auto; width: 100%;"></div>
                    </div>
                </div>

                <div
                    className="absolute top-[2950px] left-[150px] bottom-[50px] text-[30px] bg-[#B83633] 
                    backdrop-filter:blur(4px)] font-[Century Gothic] text-white text-center w-[1800px] h-[50px]"
                    // style="font-weight: 500;">
                    >
                    EXTENSION PROJECTS2 
                </div>

                </div>
            </div>
        </>
    )
}

export default PDF