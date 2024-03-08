import FileTable from "@/app/components/FileTable";
import UploadModal from "@/app/components/Modal/UploadModal";
import AddCategory_Dialog from "@/app/components/New_Components/AddCategory_Dialog/AddCategory_Dialog";
import SearchBar from "@/app/components/SearchBar";
import Course_ComboBox from "./ComboBox/Course_ComboBox";
import Date_Range from "./ComboBox/Date_Range";
import FileType_ComboBox from "./ComboBox/FileType_ComboBox";
import Instructor_ComboBox from "./ComboBox/Instructor_ComboBox";
import Material_ComboBox from "./ComboBox/Material_ComboBox";
import { DataTable } from "@/app/components/NewTable/data-table";
import { columns } from "@/app/components/NewTable/columns";

const programFrameworks = [
  {
    value: "machine learning",
    label: "Machine Learning",
  },
  {
    value: "programming languages",
    label: "Programming Languages",
  },
  {
    value: "platform technologies",
    label: "Platform Technologies",
  },
];

/* const instructorFrameworks = [
  {
    value: "prince andres",
    label: "Prince Andres",
  },
  {
    value: "John Ryan Ual",
    label: "John Ryan Ual",
  },
  {
    value: "Marco Del Rosario",
    label: "Marco Del Rosario",
  },
]; */

const filetypeFrameworks = [
  {
    value: "pdf",
    label: "PDF",
  },
  {
    value: "ppt",
    label: "PPT",
  },
  {
    value: "docx",
    label: "DOCX",
  },
];

export default function Files_Archiving_tabs({
  children,
  dataWithFormattedDate,
  materials,
  courses,
  instructors,
  filetypes,
}) {
  console.log("Aba gumana ka", materials, instructors);

  return (
    <>
      <div className="flex flex-row mt-5 md:h-20 px-10">
        <h1 className="text-[#5B0505] text-[45px] font-semibold md:shadow-zinc-400 mr-[1%]">
          FIND
        </h1>
        <SearchBar />
        <UploadModal />
      </div>

      <div className="flex flex-row ml-12 gap-x-48">
        <AddCategory_Dialog category={"Material"} />
        <AddCategory_Dialog category={"Course"} />
      </div>

      <div className="flex flex-row font-semibold text-[#5B0505] w-full gap-x-56 px-10 ml-0">
        <div className="ml-20 inline-block text-[20px] md:text-[23px]">
          MATERIAL
        </div>
        <div className="ml-12 inline-block text-[20px] md:text-[23px]">
          PROGRAM
        </div>
        <div className="ml-10 inline-block text-[20px] md:text-[23px]">
          INSTRUCTOR
        </div>
        <div className="ml-8 inline-block text-[20px] md:text-[23px]">
          FILE TYPE
        </div>
        <div className="ml-16 inline-block text-[20px] md:text-[23px]">
          SORT BY
        </div>
      </div>

      <div className="flex flex-row gap-x-28 w-full px-10">
        <Material_ComboBox materialFrameworks={materials} />
        <Course_ComboBox programFrameworks={programFrameworks} />
        <Instructor_ComboBox instructorFrameworks={instructors} />
        <FileType_ComboBox filetypeFrameworks={filetypeFrameworks} />
        <Date_Range />
      </div>
      <div className="w-full px-10">
        <FileTable data={dataWithFormattedDate} />
        <DataTable
          columns={columns}
          data={dataWithFormattedDate}
          materials={materials}
          instructors={instructors}
        />
      </div>
    </>
  );
}
