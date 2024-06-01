import ArchivingTab from "@/app/components/New_Components/Archiving/ArchivingTab";
import { revalidatePath } from "next/cache";

import {
  getCourses,
  getInstructors,
  getMaterials,
  getFileTypes,
  getTasks,
  getCompletedTasks,
  getPrograms,
} from "@/app/lib/actions/actions";
import Image from "next/image";

/* async function getSearchData(query) {
  if (query) {
    const res = await fetch(
      `http://localhost:3000/api/search-query?query=${encodeURIComponent(
        query
      )}`
    );
    revalidatePath("/secretary/dashboard/archiving");
    return res.json();
  } else {
    console.log("Empty Search Params");
  }
} */
export default async function archiving({ searchParams }) {
  const fetchMaterials = await getMaterials();
  const fetchCourses = await getCourses();
  const fetchInstructors = await getInstructors();
  const fetchPrograms = await getPrograms();
  const fetchFileTypes = await getFileTypes();

  const tasks = await getTasks();
  const completedTasks = await getCompletedTasks();
  console.log(completedTasks);

  const mappedFileTypes = fetchFileTypes.map((filetype) => {
    return {
      value: filetype.fileType.toLowerCase(),
      label: filetype.fileType.toUpperCase(),
    };
  });
  console.log(mappedFileTypes);

  async function getEmptyData() {
    return Promise.resolve([]);
  }

  async function getData() {
    const res = await fetch("http://localhost:3000/api/get-file-path");

    if (!res.ok) {
      return getEmptyData();
    }
    revalidatePath("/secretary/dashboard/archiving");
    return res.json();
  }

  const data = await getData();

  const dataWithFormattedDate = data.map((file) => ({
    ...file,
    uploadDate: new Date(file.uploadDate).toLocaleString(),
  }));

  return (
    <>
      <div className="flex flex-col w-screen h-screen m-4 bg-slate-50">
        <ArchivingTab
          datas={data}
          materials={fetchMaterials}
          courses={fetchCourses}
          instructors={fetchInstructors}
          filetype={mappedFileTypes}
          tasks={tasks}
          programs={fetchPrograms}
          completedTasks={completedTasks}
        />
      </div>
    </>
  );
}
