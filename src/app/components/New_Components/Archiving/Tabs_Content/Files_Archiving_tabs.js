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
      {/*  <div className="flex flex-row ml-12 gap-x-48">
        <AddCategory_Dialog category={"Material"} />
        <AddCategory_Dialog category={"Course"} />
      </div> */}

      <div className="w-full px-10">
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
