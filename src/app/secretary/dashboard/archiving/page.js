import FileTable from "@/app/components/FileTable";
import AddCategory_Dialog from "@/app/components/New_Components/AddCategory_Dialog";
import SecretaryArchivingTab from "@/app/components/New_Components/SecretaryArchivingTab";
import { revalidatePath } from "next/cache";
import { FaSearch } from "react-icons/fa";
import UploadModal from "@/app/components/Modal/UploadModal";
import SearchBar from "@/app/components/SearchBar";

import {
  TabsContent
} from "@/components/ui/tabs";

async function getSearchData(query) {

  if (query) {
    const res = await fetch(`http://localhost:3000/api/search-query?query=${encodeURIComponent(query)}`)
    revalidatePath('/secretary/dashboard/archiving')
    return res.json()
  } else {
    console.log("Empty Search Params")
  }
}
export default async function archiving({ searchParams }) {

  if (searchParams) {
    const { query } = searchParams

    const searchedData = await getSearchData(query)
  }

  async function getEmptyData() {
    return Promise.resolve([]);
  }

  async function getData() {
    const res = await fetch('http://localhost:3000/api/get-file-path',)

    if (!res.ok) {
      return getEmptyData()
    }
    revalidatePath('secretary/dashboard/archiving')
    return res.json()
  }

  const data = await getData()

  const dataWithFormattedDate = data.map(file => ({
    ...file,
    uploadDate: new Date(file.uploadDate).toLocaleString(),
  }));

  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className="bg-[#AD5606] w-full h-[12%] flex items-center justify-center">
          <img
            className="w-[27%] h-[100%] object-cover flex items-center justify-center"
            alt="E-Archiving System"
            src="/photos/E-Archiving System.png"
          />
        </div>

        <SecretaryArchivingTab>
          <TabsContent value="files">
            <div className="flex flex-row mt-5 md:h-20 px-10">
              <h1 className="text-[#5B0505] text-[45px] font-semibold md:shadow-zinc-400 mr-[1%]">
                FIND
              </h1>
              <SearchBar />
              <UploadModal />
            </div>

            <div className="flex flex-row gap-x-64 ont-semibold text-[#5B0505] ml-36 px-10">
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

            <div className="flex flex-row gap-x-24 ml-16 px-10">
              <div className="dropdown">
                <div className="top-[210px] left-[300px] text-black bg-[#AD5606] backdrop-filter-blur-[4px] w-[250px] h-[50px] cursor-pointer ">
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
                <div className="ml-8 top-[210px] left-[350px] text-black bg-[#AD5606] backdrop-filter-blur-[4px] w-[250px] h-[50px] cursor-pointer">
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
                <div className="ml-6 top-[210px] left-[970px] text-black bg-[#AD5606] backdrop-filter-blur-[4px] w-[250px] h-[50px] cursor-pointer">
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
                <div className="ml-6 top-[210px] left-[970px] text-black bg-[#AD5606] backdrop-filter-blur-[4px] w-[250px] h-[50px] cursor-pointer">
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


              <div className="ml-8 top-[210px] left-[970px] text-black bg-[#AD5606] backdrop-filter-blur-[4px] w-[250px] h-[50px] cursor-pointer">
                <input
                  type="date"
                  className="text-2xl font-bold w-[250px] cursor-pointer md:left-[1250px] bg-[#AD5606] h-[40px] shadow-lg rounded-sm px-2 py-1 "
                  name="type"
                  id="type "
                />
              </div>
            </div>
            <div className="w-full px-10">
              <FileTable data={dataWithFormattedDate} />
            </div>
          </TabsContent>


          <TabsContent value='assignedtask'>
            <div className="flex flex-col mt-5 px-10">
              <h1 className="text-center text-[#5B0505] text-[45px] font-semibold md:shadow-zinc-400 mb-5">
                Assigned Task Details
              </h1>
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-row bg-white w-[80%] p-4 rounded-md">
                  <label className="w-[10%] text-[#5B0505] text-lg font-semibold mr-4">
                    No Due Date:
                  </label>
                  <div className="relative flex w-full">
                    <select
                      className="text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                      name="taskType"
                      id="taskType"
                    >
                      <option value="select">--Select--</option>
                      <option value="project">Project</option>
                      <option value="select">--Select--</option>
                      <option value="project">Project</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-row bg-white w-[80%] p-4 rounded-md">
                  <label className="w-[10%] text-[#5B0505] text-lg font-semibold mr-4">
                    This week:
                  </label>
                  <div className="relative flex w-full">
                    <select
                      className="text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                      name="taskType"
                      id="taskType"
                    >
                      <option value="select">--Select--</option>
                      <option value="project">Project</option>
                      <option value="select">--Select--</option>
                      <option value="project">Project</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-row bg-white w-[80%] p-4 rounded-md">
                  <label className="w-[10%] text-[#5B0505] text-lg font-semibold mr-4">
                    Next week:
                  </label>
                  <div className="relative flex w-full">
                    <select
                      className="text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                      name="taskType"
                      id="taskType"
                    >
                      <option value="select">--Select--</option>
                      <option value="project">Project</option>
                      <option value="select">--Select--</option>
                      <option value="project">Project</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-row bg-white w-[80%] p-4 rounded-md">
                  <label className="w-[10%] text-[#5B0505] text-lg font-semibold mr-4">
                    Later:
                  </label>
                  <div className="relative flex w-full">
                    <select
                      className="text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                      name="taskType"
                      id="taskType"
                    >
                      <option value="select">--Select--</option>
                      <option value="project">Project</option>
                      <option value="select">--Select--</option>
                      <option value="project">Project</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>


          <TabsContent value='missingtask'>
            <h1>Missing task</h1>
          </TabsContent>


          <TabsContent value='archivedtask'>
            <h1>Archived task</h1>
          </TabsContent>


        </SecretaryArchivingTab>
      </div >
    </>
  );
}
