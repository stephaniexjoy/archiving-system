"use client"

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";

export default function archiving() {
    const[popup,setPop]=useState(false);
    const handleClickOpen=()=>{
        setPop(!popup);
    } 
    const closePopup=()=>{
        setPop(false)
    }
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="absolute top-[115px] left-[1px] bg-[#AD5606] [backdrop-filter:blur(4px)] w-[1500px] h-[850px]" />
        <div className="absolute top-[310px] left-[300px] bg-[#D9BA9C] [backdrop-filter:blur(4px)] w-[1100px] h-[600px]" />
        <img
          className="absolute top-[10px] left-[670px] w-[400px] h-[100px] object-cover"
          alt=""
          src="../photos/E-Archiving System.png"
        />
             <h1 className="absolute top-[120px] left-[330px] inline-block text-[35px] opacity-60 font-semibold shadow-zinc-400">
                FIND 
             </h1>
            <input type="search" name='find' placeholder="" className="absolute top-[125px] left-[430px] text-xl text-[#242323] bg-[#D9D9D9] inline-block w-[800px] h-[37px] text-shadow-inner" />
            
            <div className="absolute top-[125px] left-[1250px] bg-[#6A6A6A]  w-[40px] h-[40px] shadow-lg" />
                <h1 ><FaSearch size='30' style={{ position: 'absolute', top: '130px', left: '1255px' }} /></h1>
                  
            <div className="absolute top-[125px] left-[1300px] bg-[#6A6A6A]  w-[40px] h-[40px] shadow-lg cursor-pointer" />
                <FaUpload onClick={handleClickOpen} size='30' style={{ position: 'absolute', top: '130px', left: '1305px', cursor: 'pointer' }} /> 

            <div className="absolute top-[170px] left-[370px] inline-block text-[18px] text-orange-200 ">
                MATERIAL 
            </div>
            <div className="absolute top-[170px] left-[600px] inline-block text-[18px] text-orange-200">
                TYPE
            </div>
            <div className="absolute top-[170px] left-[790px] inline-block text-[18px] text-orange-200">
                PROGRAM
            </div>
            <div className="absolute top-[170px] left-[1010px] inline-block text-[18px] text-orange-200">
                INSTRUCTOR
            </div>
            <div className="absolute top-[170px] left-[1250px] inline-block text-[18px] text-orange-200">
                SORT BY
            </div>
            <div className="dropdown">
                <div className="absolute top-[210px] left-[300px] bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[220px] h-[50px] cursor-pointer shadow-lg">
                <select className="absolute top-[15px] left-[1px] bg-[#D9BA9C]  text-black font-semibold w-[200px] cursor-pointer border-gray-300 rounded-md px-2 py-1 focus:outline-none" name="type" id="type">
                <option value="select">--Select--</option>  
                <option value="learning materials">Learning Materials</option>
                <option value="training and seminar">Training and Seminar</option>
                <option value="reserch conducted">Research Conducted</option>
                <option value="extension conducted">Extension Conducted</option>
                <option value="educational qualification">Educational Qualification</option>
                <option value="faculty profile">Faculty Profile</option>
            </select>
             <div className="button">
                <div className="absolute top-[65px] left-[10px] text-center bg-[#675454] text-orange-200 outline-color rounded w-[130px] ">
                <button onClick={handleClickOpen}>ADD CATEGORY</button>
                </div>
            </div>
        </div>
            <div className="absolute top-[210px] left-[540px] bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[180px] h-[50px] cursor-pointer">
                <select className="absolute top-[15px] left-[1px] bg-[#D9BA9C] text-black font-semibold w-[155px] cursor-pointer border-gray-300 rounded-md px-2 py-1 focus:outline-none" name="type" id="type">
                <option value="select">--Select--</option>  
                <option value="pdf">PDF</option>
                <option value="ppt">PPT</option>
                <option value="docx">DOCX</option>
            </select>
        <div className="button">
        <div className="absolute top-[65px] left-[10px] text-center bg-[#675454]  outline-color text-orange-200 rounded w-[130px] ">
                <button onClick={handleClickOpen}>ADD CATEGORY</button>
            </div>
         </div>
        </div>
            <div className="absolute top-[210px] left-[740px] bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[210px] h-[50px] cursor-pointer">
                <select className="absolute top-[15px] left-[1px] bg-[#D9BA9C] text-black font-semibold w-[185px] cursor-pointer border-gray-300 rounded-md px-2 py-1  focus:outline-none " name="program" id="program">
                <option value="select">--Select--</option>  
                <option value="Machine Learning">Machine Learning</option>
                <option value="Programming Languages">Programming Languages</option>
                <option value="Platform Technologie">Platform Technologies</option>
            </select>
           <div className="button">
                <div className="absolute top-[65px] left-[10px] text-center  bg-[#675454] outline-color text-orange-200 rounded shadow-lg w-[130px]">
                <button onClick={handleClickOpen}>ADD CATEGORY</button>
                </div>
            </div>
        </div>
            <div className="absolute top-[210px] left-[970px] bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer">
                <select className="absolute top-[15px] left-[13px] bg-[#D9BA9C] text-black font-semibold cursor-pointer border-gray-300 rounded-md px-2 py-1 focus:outline-none  " name="instructor" id="instructor">
                <option value="select">--Select--</option>  
                <option value="Prince Andres">Prince Andres</option>
                <option value="John Ryan Ual">John Ryan Ual</option>
                <option value="Marco Del Rosario">Marco Del Rosario</option>
            </select>
            <div className="button">
                <div className="absolute top-[65px] left-[10px] text-center bg-[#675454] text-orange-200 outline-color rounded shadow-lg w-[130px]">
                <button onClick={handleClickOpen}>ADD CATEGORY</button>
                {popup?
                        <div>
                            <div className="popup">
                            <div className="absolute top-[-40px] left-[-355px] bg-[#D9D9D9] [backdrop-filter:blur(4px)] w-[400px] h-[170px] rounded-3xl" />
                            <input type="add" name='find' placeholder="" className="absolute top-[1px] left-[-330px] text-xl text-center text-[#242323] bg-[#B5B5B5] inline-block w-[350px] h-[37px] text-shadow-inner" /> 
                            <div className="absolute top-[65px] left-[-230px]  hover:bg-zinc-400  bg-[#474543] outline-color shadow-2xl rounded w-[150px] ">
                            <button onClick={closePopup}>ADD CATEGORY</button>
                        </div>
                    </div>
                </div>:""}
            </div>
        </div>
    </div>
        </div>
            <div className="absolute top-[210px] left-[1190px] bg-[#D9BA9C] [backdrop-filter:blur(4px)] w-[205px] h-[50px] ">
            <input type = "date" className="absolute top-[13px] left-[10px] bg-[#D9BA9C] text-black font-semibold w-[180px] "/>
        </div>    
   </div>
</main>
  ); 
}
