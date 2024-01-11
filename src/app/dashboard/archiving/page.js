"use client"
import TypeModal from "@/app/components/TypeModal";
import ProgramModal from "@/app/components/ProgramModal";
import MaterialModal from "@/app/components/MaterialModal";
import InstructorModal from "@/app/components/InstructorModal";
import { FaSearch } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import UploadModal from "@/app/components/UploadModal";


export default function archiving() {


    return (
        // <div className="flex flex-auto w-auto h-screen">
        //     <div className='flex flex-col mt-20 mr-[500px] items-center h-screen'>
        //         <img
        //             className="w-[870px] h-[200px] object-cover"
        //             alt=""
        //             src="../photos/E-Archiving System.png"
        //         />

        //         <div className="bg-[#AD5606] w-screen h-screen mt-10">
        //             <div className="flex flex-row gap-x-5 items-center ml-48 mb-5 mt-3 md:h-20">
        //                 <h1 className=" inline-block text-[35px] opacity-60 font-semibold shadow-zinc-400">
        //                     FIND
        //                 </h1>
        //                 <input type="search" name='find' placeholder="" className="top-[125px] left-[430px] text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[800px] h-[37px] text-shadow-inner" />
        //                 <div className="top-[125px] left-[1250px] bg-[#6A6A6A]  w-[40px] h-[40px] shadow-lg">
        //                     <h1 ><FaSearch size='30' style={{ top: '130px', left: '1255px' }} /></h1>
        //                 </div>
        //                 <div className="top-[125px] left-[1300px] bg-[#6A6A6A]  w-[40px] h-[40px] shadow-lg cursor-pointer" />
        //                 <UploadModal />
        //             </div>

        //             <div className="flex flex-row gap-x-60 ml-20 font-semibold mb-5 md:h-20">
        //                 <div className="inline-block text-[18px] text-orange-200 ">
        //                     MATERIAL
        //                 </div>
        //                 <div className="inline-block text-[18px] text-orange-200">
        //                     TYPE
        //                 </div>
        //                 <div className="inline-block text-[18px] text-orange-200">
        //                     PROGRAM
        //                 </div>
        //                 <div className="inline-block text-[18px] text-orange-200">
        //                     INSTRUCTOR
        //                 </div>
        //                 <div className="inline-block text-[18px] text-orange-200">
        //                     SORT BY
        //                 </div>
        //             </div>

        <div className="flex flex-auto w-3/4 h-screen">
            <div className='flex flex-col p-8 md:mr-10 lg:mr-20 items-center h-screen'>
                <img
                    className="mr-20 w-full md:w-[870px] h-[200px] object-cover"
                    alt=""
                    src="../photos/E-Archiving System.png"
                />

                <div className="bg-[#AD5606] w-auto h-screen mt-5 p-8">
                    <div className="flex flex-row gap-x-5 items-center ml-4 md:ml-48 mb-5 mt-3 md:h-20">
                        <h1 className="inline-block text-[20px] md:text-[35px] opacity-60 font-semibold md:shadow-zinc-400">
                            FIND
                        </h1>
                        <input type="search" name='find' placeholder="" className="top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[full] md:w-[800px] h-[37px] md:text-shadow-inner" />
                        <div className="top-[125px] left-[10px] md:left-[1250px] bg-[#6A6A6A] w-[40px] h-[40px] shadow-lg">
                            <h1 ><FaSearch size='30' style={{ top: '130px', left: '15px' }} /></h1>
                        </div>
                        <div className="top-[125px] left-[10px] md:left-[1300px] bg-[#6A6A6A] w-[40px] h-[40px] shadow-lg cursor-pointer" >
                            <UploadModal />
                        </div>

                    </div>

                    <div className="flex flex-row gap-x-8 ml-4 md:ml-20 font-semibold mb-5 md:h-20">
                        <div className="inline-block text-[14px] md:text-[18px] text-orange-200">
                            MATERIAL
                        </div>
                        <div className="inline-block text-[14px] md:text-[18px] text-orange-200">
                            TYPE
                        </div>
                        <div className="inline-block text-[14px] md:text-[18px] text-orange-200">
                            PROGRAM
                        </div>
                        <div className="inline-block text-[14px] md:text-[18px] text-orange-200">
                            INSTRUCTOR
                        </div>
                        <div className="inline-block text-[14px] md:text-[18px] text-orange-200">
                            SORT BY
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-8 ml-4 md:ml-10 md:h-20">
                        <div className="dropdown">
                            <div className="top-[210px] left-[300px] bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[220px] h-[50px] cursor-pointer shadow-lg">
                                <select className="bg-[#D9BA9C]  text-black font-semibold w-[200px] cursor-pointer border-gray-300 rounded-md px-2 py-1 focus:outline-none" name="type" id="type">
                                    <option value="select">--Select--</option>
                                    <option value="learning materials">Learning Materials</option>
                                    <option value="training and seminar">Training and Seminar</option>
                                    <option value="reserch conducted">Research Conducted</option>
                                    <option value="extension conducted">Extension Conducted</option>
                                    <option value="educational qualification">Educational Qualification</option>
                                    <option value="faculty profile">Faculty Profile</option>
                                </select>
                                <div className="button">
                                    <div className="top-[65px] left-[10px] text-center bg-[#675454] text-orange-200 outline-color rounded shadow-lg w-[130px]">
                                        <MaterialModal />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="top-[210px] left-[540px] bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[180px] h-[50px] cursor-pointer">
                            <select className="top-[15px] left-[1px] bg-[#D9BA9C] text-black font-semibold w-[155px] cursor-pointer border-gray-300 rounded-md px-2 py-1 focus:outline-none" name="type" id="type">
                                <option value="select">--Select--</option>
                                <option value="pdf">PDF</option>
                                <option value="ppt">PPT</option>
                                <option value="docx">DOCX</option>
                            </select>
                            <div className="button">
                                <div className="top-[65px] left-[10px] text-center bg-[#675454]  outline-color text-orange-200 rounded w-[130px] ">
                                    <TypeModal />
                                </div>
                            </div>
                        </div>

                        <div className="top-[210px] left-[740px] bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[210px] h-[50px] cursor-pointer">
                            <select className="top-[15px] left-[1px] bg-[#D9BA9C] text-black font-semibold w-[185px] cursor-pointer border-gray-300 rounded-md px-2 py-1  focus:outline-none " name="program" id="program">
                                <option value="select">--Select--</option>
                                <option value="Machine Learning">Machine Learning</option>
                                <option value="Programming Languages">Programming Languages</option>
                                <option value="Platform Technologie">Platform Technologies</option>
                            </select>
                            <div className="button">
                                <div className="top-[65px] left-[10px] text-center  bg-[#675454] outline-color text-orange-200 rounded shadow-lg w-[130px]">
                                    <ProgramModal />
                                </div>
                            </div>
                        </div>

                        <div className="top-[210px] left-[970px] bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer">
                            <select className="top-[15px] left-[13px] bg-[#D9BA9C] text-black font-semibold cursor-pointer border-gray-300 rounded-md px-2 py-1 focus:outline-none  " name="instructor" id="instructor">
                                <option value="select">--Select--</option>
                                <option value="Prince Andres">Prince Andres</option>
                                <option value="John Ryan Ual">John Ryan Ual</option>
                                <option value="Marco Del Rosario">Marco Del Rosario</option>
                            </select>
                            <div className="button">
                                <div className="top-[65px] left-[10px] text-center bg-[#675454] text-orange-200 outline-color rounded shadow-lg w-[130px]">
                                    <InstructorModal />
                                </div>
                            </div>
                        </div>
                        <div className=" top-[210px] left-[1190px] bg-[#D9BA9C] [backdrop-filter:blur(4px)] w-[205px] h-[50px] ">
                            <input type="date" className="top-[13px] left-[10px] bg-[#D9BA9C] text-black font-semibold w-[180px] " />
                        </div>
                    </div>

                </div>

            </div>

        </div>


    );
}
