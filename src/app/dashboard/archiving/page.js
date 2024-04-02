import ArchivingTab from "@/app/components/New_Components/Archiving/ArchivingTab";
import {
  getCourses,
  getFileTypes,
  getInstructors,
  getMaterials,
  getTasks,
  getCompletedTasks,
  getPrograms,
} from "@/app/lib/actions/actions";
import { revalidatePath } from "next/cache";
import Image from "next/image";

async function getSearchData(query) {
  if (query) {
    const res = await fetch(
      `http://localhost:3000/api/search-query?query=${encodeURIComponent(
        query
      )}`
    );
    revalidatePath("/dashboard/archiving");
    return res.json();
  } else {
    console.log("Empty Search Params");
  }
}

export default async function archiving({ searchParams }) {
  const fetchMaterials = await getMaterials();
  const fetchCourses = await getCourses();
  const fetchInstructors = await getInstructors();
  const fetchFileTypes = await getFileTypes();
  const fetchPrograms = await getPrograms();
  console.log("Hehehe", fetchMaterials);

  const tasks = await getTasks();
  const completedTasks = await getCompletedTasks();

  if (searchParams) {
    const { query } = searchParams;

    const searchedData = await getSearchData(query);
  }

  async function getEmptyData() {
    return Promise.resolve([]);
  }

  async function getData() {
    const res = await fetch("http://localhost:3000/api/get-file-path");

    if (!res.ok) {
      return getEmptyData();
    }
    revalidatePath("/dashboard/archiving");
    return res.json();
  }

  const data = await getData();
  console.log(data);

  const dataWithFormattedDate = data.map((file) => ({
    ...file,
    uploadDate: new Date(file.uploadDate).toLocaleString(),
  }));

  const mappedFileTypes = fetchFileTypes.map((filetype) => {
    return {
      value: filetype.fileType.toLowerCase(),
      label: filetype.fileType.toUpperCase(),
    };
  });

  /* 
    const searchedDataWithFormattedDate = searchedData.map(file => ({
      ...file,
      uploadDate: new Date(file.uploadDate).toLocaleString(),
    })); */

  // const fetchMaterials = await getMaterials()
  console.log(fetchFileTypes);

  return (
    <>
      <div className="flex flex-col w-screen h-screen overflow-y-auto bg-slate-50">
        <ArchivingTab
          datas={data}
          materials={fetchMaterials}
          courses={fetchCourses}
          instructors={fetchInstructors}
          filetype={mappedFileTypes}
          tasks={tasks}
          completedTasks={completedTasks}
          programs={fetchPrograms}
        />
      </div>
    </>
  );
}
