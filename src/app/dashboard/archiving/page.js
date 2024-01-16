
import TypeModal from "@/app/components/Modal/TypeModal";
import ProgramModal from "@/app/components/Modal/ProgramModal";
import MaterialModal from "@/app/components/Modal/MaterialModal";
import InstructorModal from "@/app/components/Modal/InstructorModal";
import { FaSearch } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import UploadModal from "@/app/components/Modal/UploadModal";
import FileTable from "@/app/components/FileTable";
import { revalidatePath } from "next/cache";


export default async function archiving() {

  async function getEmptyData() {
    return Promise.resolve([]); // Returning an empty array
  }

  async function getData() {
    const res = await fetch('http://localhost:3000/api/get-file-path',)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return getEmptyData()
    }
    revalidatePath('/dashboard/archiving')
    return res.json()
  }

  const data = await getData()

  return (
    <div className="flex flex-col w-auto h-screen">
      <div className="flex flex-col w-auto h-screen items-center py-10">
        <img
          className="mr-20 w-full md:w-[850px] h-[150px] object-cover"
          alt=""
          src="../photos/E-Archiving System.png"
        />

        <div className="border bg-[#AD5606] w-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-full mt-10 p-8 rounded-lg shadow-lg">
          <div className="flex flex-row gap-x-5 md:ml-48 mb-5 mt-5 md:h-20">
            <h1 className=" md:text-[45px] opacity-60 -ml-32 font-semibold md:shadow-zinc-400">
              FIND
            </h1>
            <input
              type="search"
              name="find"
              placeholder=""
              className="top-[125px] left-[10px] md:left-[430px] text-md md:text-xl text-[#242323] bg-[#D9D9D9] inline-block w-20 md:w-[800px] h-[50px] md:text-shadow-inner"
            />
            <div className="">
              <h1>
                <FaSearch size="40" style={{ top: "100px", left: "10px" }} />
              </h1>
            </div>
           
            <UploadModal />
          </div>

          <div className="flex flex-row gap-x-36 md:ml-20 font-semibold">
            <div className="inline-block text-[14px] md:text-[23px] text-orange-200">
              MATERIAL
            </div>

            <div className="inline-block text-[14px] md:text-[23px] text-orange-200">
              TYPE
            </div>
            <div className="inline-block text-[14px] md:text-[23px] text-orange-200">
              PROGRAM
            </div>
            <div className="inline-block text-[14px] md:text-[23px] text-orange-200">
              INSTRUCTOR
            </div>
            <div className="inline-block text-[14px] -ml-5 md:text-[23px] text-orange-200">
              SORT BY
            </div>
          </div>
          {/*      <div className="bg-[#DABB9C] h-[640px] m-6 "> */}
          <div className="border bg-[#DABB9C] w-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto h-[500px] py-2 rounded-lg shadow-lg">

            <div className="flex flex-row gap-x-10 md:ml-10 md:h-20">
              <div className="dropdown">
                <div className="top-[210px] left-[300px] mt-5 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer ">
                  <select
                    className=" text-orange-200 text-2xl font-bold w-[200px] cursor-pointer md:left-[1250px] bg-[#bd8551]  
                    h-[40px] shadow-lg rounded-sm px-2 py-1 "
                    name="type"
                    id="type"
                  >
                    <option value="select">--Select--</option>
                    <option value="learning materials">
                      Learning Materials
                    </option>
                    <option value="training and seminar">
                      Training and Seminar
                    </option>
                    <option value="reserch conducted">
                      Research Conducted
                    </option>
                    <option value="extension conducted">
                      Extension Conducted
                    </option>
                    <option value="educational qualification">
                      Educational Qualification
                    </option>
                    <option value="faculty profile">Faculty Profile</option>
                  </select>
                </div>
                    <MaterialModal />
              </div>
              <div className="dropdown">
              <div className="top-[210px] left-[350px] mt-5 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer">
                <select
                  className=" text-orange-200 text-2xl font-bold w-[200px] cursor-pointer md:left-[1350px] bg-[#bd8551]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
                  name="type"
                  id="type"
                >
                  <option value="select">--Select--</option>
                  <option value="pdf">PDF</option>
                  <option value="ppt">PPT</option>
                  <option value="docx">DOCX</option>
                </select>
                    <TypeModal />
                    </div> 
              </div>

              <div className="top-[210px] left-[740px] mt-5 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer">
                <select
                  className=" text-orange-200 text-2xl font-bold w-[200px] cursor-pointer md:left-[1250px] bg-[#bd8551]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
                  name="type"
                  id="type"
                >
                  <option value="select">--Select--</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Programming Languages">
                    Programming Languages
                  </option>
                  <option value="Platform Technologie">
                    Platform Technologies
                  </option>
                </select>
                
                    <ProgramModal />
                  
              </div>

              <div className="top-[210px] left-[970px] mt-5 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer">
                <select
                  className=" text-orange-200 text-2xl font-bold w-[200px] cursor-pointer md:left-[1250px] bg-[#bd8551]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
                  name="type"
                  id="type"
                >
                  <option value="select">--Select--</option>
                  <option value="Prince Andres">Prince Andres</option>
                  <option value="John Ryan Ual">John Ryan Ual</option>
                  <option value="Marco Del Rosario">Marco Del Rosario</option>
                </select>
                
                    <InstructorModal />
                 
              </div>
              <div className="top-[210px] left-[970px] mt-5 bg-[#D9BA9C] backdrop-filter-blur-[4px] w-[200px] h-[50px] cursor-pointer">
                <input
                  type="date"
                  className="text-orange-200 text-2xl font-bold w-[200px] cursor-pointer md:left-[1250px] bg-[#bd8551]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
                  name="type"
                  id="type "
                />
              </div>
            </div>
            <div className="">
              <FileTable data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
