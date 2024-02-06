import FileTable from "@/app/components/FileTable";
import AddCategory_Dialog from "@/app/components/New_Components/AddCategory_Dialog/AddCategory_Dialog";
import SecretaryArchivingTab from "@/app/components/New_Components/Secretary/Archiving/SecretaryArchivingTab";
import { revalidatePath } from "next/cache";
import { FaSearch } from "react-icons/fa";
import UploadModal from "@/app/components/Modal/UploadModal";
import SearchBar from "@/app/components/SearchBar";
import noDueAssignTask from "@/app/components/New_Components/noDueAssignTask";

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

        <SecretaryArchivingTab datas={dataWithFormattedDate} />


      </div >
    </>
  );
}
