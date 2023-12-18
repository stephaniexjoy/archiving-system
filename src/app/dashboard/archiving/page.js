"use client"
import { FaSearch } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";

export default function archiving() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="absolute top-[115px] left-[1px] bg-[#AD5606] [backdrop-filter:blur(4px)] w-[1800px] h-[1800px]" />
        <div className="absolute top-[280px] left-[300px] bg-[#D9BA9C] [backdrop-filter:blur(4px)] w-[1100px] h-[600px]" />
        <img
          className="absolute top-[10px] left-[670px] w-[400px] h-[100px] object-cover"
          alt=""
          src="../photos/E-Archiving System.png"
        />
             <h1 className="absolute top-[120px] left-[330px] inline-block text-[35px] opacity-60 font-semibold shadow-zinc-400">
                FIND 
             </h1>
            <input type="search" name='find' placeholder="" className="absolute top-[125px] left-[430px] text-3xl text-[#A89F9F] bg-[#D9D9D9] inline-block w-[800px] h-[37px] text-shadow-inner" />
            
            <div className="absolute top-[125px] left-[1250px] bg-[#6A6A6A]  w-[40px] h-[40px] shadow-lg" />
                <h1 ><FaSearch size='30' style={{ position: 'absolute', top: '130px', left: '1255px' }} /></h1>
            <div className="absolute top-[125px] left-[1300px] bg-[#6A6A6A]  w-[40px] h-[40px] shadow-lg cursor-pointer" />
                <h1> <FaUpload size='30' style={{ position: 'absolute', top: '130px', left: '1305px' }} /></h1>
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
            <div className="absolute top-[210px] left-[300px] bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[220px] h-[50px] cursor-pointer ">
                <select className="absolute top-[15px] left-[1px] bg-[#D9BA9C] text-black font-semibold w-[200px] cursor-pointer border-gray-300 rounded-md px-2 py-1" name="type" id="type">
                <option value="learning materials">Learning Materials</option>
                <option value="training and seminar">Training and Seminar</option>
                <option value="reserch conducted">Research Conducted</option>
                <option value="extension conducted">Extension Conducted</option>
            </select>
        </div>
            <div className="absolute top-[210px] left-[545px] bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[180px] h-[50px] cursor-pointer">
                <select className="absolute top-[15px] left-[1px] bg-[#D9BA9C] text-black font-semibold w-[155px] cursor-pointer border-gray-300 rounded-md px-2 py-1" name="type" id="type">
                <option value="pdf">PDF</option>
                <option value="ppt">PPT</option>
                <option value="docx">DOCX</option>
            </select>
        </div>
            <div className="absolute top-[210px] left-[740px] bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer">
                <select className="absolute top-[15px] left-[1px] bg-[#D9BA9C] text-black font-semibold w-[175px] cursor-pointer border-gray-300 rounded-md px-2 py-1" name="program" id="program">
                <option value="Machine Learning">Machine Learning</option>
                <option value="Programming Languages">Programming Languages</option>
                <option value="Platform Technologie">Platform Technologies</option>
            </select>
        </div>
            <div className="absolute top-[210px] left-[970px] bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer">
                <select className="absolute top-[15px] left-[13px] bg-[#D9BA9C] text-black font-semibold cursor-pointer border-gray-300 rounded-md px-2 py-1" name="instructor" id="instructor">
                <option value="Prince Andres">Prince Andres</option>
                <option value="John Ryan Ual">John Ryan Ual</option>
                <option value="Marco Del Rosario">Marco Del Rosario</option>
            </select>
        </div>

            <div className="absolute top-[210px] left-[1190px] bg-[#D9BA9C] [backdrop-filter:blur(4px)] w-[210px] h-[50px] cursor-pointer" />
        </div>         
    </div>
</main>
  ); 
   
}
