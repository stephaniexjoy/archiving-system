import ArchivingTab from "@/app/components/New_Components/Archiving/ArchivingTab";
import { revalidatePath } from "next/cache";

import { getCourses, getInstructors, getMaterials, getFileTypes, getTasks } from "@/app/lib/actions/actions";

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

  const fetchMaterials = await getMaterials()
  const fetchCourses = await getCourses()
  const fetchInstructors = await getInstructors()
  const fetchFileTypes = await getFileTypes()
  console.log("Hehehe", fetchMaterials)

  const tasks = await getTasks()

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

        <ArchivingTab datas={dataWithFormattedDate} materials={fetchMaterials} courses={fetchCourses} instructors={fetchInstructors} filetype={fetchFileTypes} tasks={tasks} />


      </div >
    </>
  );
}
