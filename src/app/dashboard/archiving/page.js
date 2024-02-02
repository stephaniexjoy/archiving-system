
import TypeModal from "@/app/components/Modal/TypeModal";
import ProgramModal from "@/app/components/Modal/ProgramModal";
import MaterialModal from "@/app/components/Modal/MaterialModal";
import InstructorModal from "@/app/components/Modal/InstructorModal";
import { FaSearch } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import UploadModal from "@/app/components/Modal/UploadModal";
import FileTable from "@/app/components/FileTable";
import { revalidatePath } from "next/cache";
import AddCategory_Dialog from "@/app/components/New_Components/AddCategory_Dialog";

export default async function archiving() {

  async function getEmptyData() {
    return Promise.resolve([]); // Returning an empty array
  }

  async function getData() {
    const res = await fetch('http://localhost:3000/api/get-file-path',)
    


    if (!res.ok) {
      
      return getEmptyData()
    }
    revalidatePath('/dashboard/archiving')
    return res.json()
  }

  const data = await getData()

  const dataWithFormattedDate = data.map(file => ({
    ...file,
    uploadDate: new Date(file.uploadDate).toLocaleString(),
  }));

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="bg-[#AD5606] w-full h-[12%] flex items-center justify-center">
        <img
          className="w-[27%] h-[100%] object-cover flex items-center justify-center"
          alt="E-Archiving System"
          src="/photos/E-Archiving System.png"
        />
      </div>

      <div className="flex flex-row mt-5 md:h-20">
        <h1 className="text-[#5B0505] text-[45px] font-semibold md:shadow-zinc-400 ml-[3%] mr-[2%]">
          FIND
        </h1>
        <div className="relative">
          <input
            type="search"
            name="find"
            placeholder=""
            className="text-md md:text-xl text-[#242323] bg-[#D9D9D9] w-[1480px] h-[60px] md:text-shadow-inner"
          />
        </div>
        <div className="relative bg-[#6A6A6A] p-2 h-[60px] w-auto ml-[1%]">
          <FaSearch size="50" />
        </div>
      </div>

      <div className="flex flex-row gap-x-56 md:ml-36 font-semibold text-[#5B0505]">
        <div className="inline-block text-[20px] md:text-[23px]">
          MATERIAL
        </div>
        <div className="inline-block text-[20px] md:text-[23px]">
          FILE TYPE
        </div>
        <div className="inline-block text-[20px] md:text-[23px]">
          COURSES
        </div>
        <div className="inline-block text-[20px] md:text-[23px]">
          INSTRUCTOR
        </div>
        <div className="inline-block text-[20px] md:text-[23px]">
          SORT BY
        </div>
      </div>

      <div className="flex flex-row gap-x-24 md:ml-20 md:mr-10 md:h-100">
        <div className="dropdown">
          <div className="top-[210px] left-[300px] mt-2 text-black bg-[#AD5606] backdrop-filter-blur-[4px] w-[250px] h-[50px] cursor-pointer ">
            <select
              className="text-2xl font-bold w-[250px] cursor-pointer md:left-[1250px] bg-[#AD5606] h-[40px] shadow-lg rounded-sm px-2 py-1 "
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
          <AddCategory_Dialog />
        </div>
        <div className="dropdown">
          <div className="top-[210px] left-[350px] mt-2 text-black bg-[#AD5606] backdrop-filter-blur-[4px] w-[250px] h-[50px] cursor-pointer">
            <select
              className="text-2xl font-bold w-[250px] cursor-pointer md:left-[1350px] bg-[#AD5606]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
              name="type"
              id="type"
            >
              <option value="select">--Select--</option>
              <option value="pdf">PDF</option>
              <option value="ppt">PPT</option>
              <option value="docx">DOCX</option>
            </select>
          </div>
          <AddCategory_Dialog />
        </div>

        <div className="dropdown">

          <div className="top-[210px] left-[970px] mt-2 text-black bg-[#AD5606] backdrop-filter-blur-[4px] w-[250px] h-[50px] cursor-pointer">
            <select
              className="text-2xl font-bold w-[250px] cursor-pointer md:left-[1250px] bg-[#AD5606]  h-[40px] shadow-lg rounded-sm px-2 py-1 "
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
          </div>
          <AddCategory_Dialog />
        </div>

        <div className="dropdown">
          <div className="top-[210px] left-[970px] mt-2 text-black bg-[#AD5606] backdrop-filter-blur-[4px] w-[250px] h-[50px] cursor-pointer">
            <select
              className="text-2xl font-bold w-[250px] cursor-pointer md:left-[1250px] bg-[#AD5606] h-[40px] shadow-lg rounded-sm px-2 py-1 "
              name="type"
              id="type"
            >
              <option value="select">--Select--</option>
              <option value="Prince Andres">Prince Andres</option>
              <option value="John Ryan Ual">John Ryan Ual</option>
              <option value="Marco Del Rosario">Marco Del Rosario</option>
            </select>
          </div>
          <AddCategory_Dialog />
        </div>


        <div className="top-[210px] left-[970px] mt-2 text-black bg-[#AD5606] backdrop-filter-blur-[4px] w-[250px] h-[50px] cursor-pointer">
          <input
            type="date"
            className="text-2xl font-bold w-[250px] cursor-pointer md:left-[1250px] bg-[#AD5606] h-[40px] shadow-lg rounded-sm px-2 py-1 "
            name="type"
            id="type "
          />
        </div>
      </div>
      <div className="">
        <FileTable data={dataWithFormattedDate} />
      </div>
    </div>
  );
}
