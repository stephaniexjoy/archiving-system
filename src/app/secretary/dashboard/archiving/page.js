import ArchivingTab from "@/app/components/New_Components/Archiving/ArchivingTab";
import { revalidatePath } from "next/cache";

import {
  getCourses,
  getInstructors,
  getMaterials,
  getFileTypes,
  getTasks,
  getCompletedTasks,
} from "@/app/lib/actions/actions";
import Image from "next/image";

async function getSearchData(query) {
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
}
export default async function archiving({ searchParams }) {
  const fetchMaterials = await getMaterials();
  const fetchCourses = await getCourses();
  const fetchInstructors = await getInstructors();
  const fetchFileTypes = await getFileTypes();

  const tasks = await getTasks();
  const completedTasks = await getCompletedTasks();
  console.log(completedTasks);

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
    revalidatePath("secretary/dashboard/archiving");
    return res.json();
  }

  const data = await getData();

  const dataWithFormattedDate = data.map((file) => ({
    ...file,
    uploadDate: new Date(file.uploadDate).toLocaleString(),
  }));

  console.log(dataWithFormattedDate);

  return (
    <>
      <div className="flex flex-col w-screen h-screen bg-slate-50">
        <div
          className="
          bg-[#AD5606] w-[100%] h-[7%] flex items-center justify-center
          2xl:bg-[#AD5606] 2xl:w-full 2xl:h-[12%] 2xl:flex 2xl:items-center 2xl:justify-center
          "
        >
          <Image
            className="
            w-[60%] h-auto object-cover flex items-center justify-center
            sm:w-[60%] sm:h-[100%] sm:object-cover sm:flex sm:items-center sm:justify-center
            md:w-[60%] md:h-[100%] md:object-cover md:flex md:items-center md:justify-center
            lg:w-[40%] lg:h-[100%] lg:object-cover lg:flex lg:items-center lg:justify-center
            xl:w-[35%] xl:h-[100%] xl:object-cover xl:flex xl:items-center xl:justify-center
            2xl:w-[30%] 2xl:h-[100%] 2xl:object-cover 2xl:flex 2xl:items-center 2xl:justify-center
            "
            alt="E-Archiving System"
            src="/photos/E-Archiving System.png"
            width={2125}
            height={499}
          />
        </div>

        <ArchivingTab
          datas={dataWithFormattedDate}
          materials={fetchMaterials}
          courses={fetchCourses}
          instructors={fetchInstructors}
          filetype={fetchFileTypes}
          tasks={tasks}
          completedTasks={completedTasks}
        />
      </div>
    </>
  );
}
