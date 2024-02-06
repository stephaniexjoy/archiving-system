
import FileTable from "@/app/components/FileTable";
import UploadModal from "@/app/components/Modal/UploadModal";
import AddCategory_Dialog from "@/app/components/New_Components/AddCategory_Dialog/AddCategory_Dialog";
import SearchBar from "@/app/components/SearchBar";
import Course_ComboBox from "./ComboBox/Course_ComboBox";
import Date_Range from "./ComboBox/Date_Range";
import FileType_ComboBox from "./ComboBox/FileType_ComboBox";
import Instructor_ComboBox from "./ComboBox/Instructor_ComboBox";
import Material_ComboBox from "./ComboBox/Material_ComboBox";



const programFrameworks = [
  {
    value: "machine learning",
    label: "Machine Learning",
  },
  {
    value: "Programming Languages",
    label: "Programming Languages",
  },
  {
    value: "Platform Technologies",
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
    value: "PPT",
    label: "PPT",
  },
  {
    value: "DOCX",
    label: "DOCX",
  },
];

export default function Files_Archiving_tabs({
  children,
  dataWithFormattedDate,
  materials,
  courses,
  instructors,
  filetypes


}) {


  console.log("Aba gumana ka", materials, instructors)



  return (
    <>
      <div className="flex flex-row mt-5 md:h-20 px-10">
        <h1 className="text-[#5B0505] text-[45px] font-semibold md:shadow-zinc-400 mr-[1%]">
          FIND
        </h1>
        <SearchBar />
        <UploadModal />
      </div>

      <div className="flex flex-row ml-28 gap-x-36">
        <AddCategory_Dialog category={"Material"} />
        <AddCategory_Dialog category={"Course"} />
      </div>

      <div className="flex flex-row font-semibold text-[#5B0505] px-10">
        <div className="ml-36 inline-block text-[20px] md:text-[23px]">
          MATERIAL
        </div>
        <div className="ml-56 inline-block text-[20px] md:text-[23px]">PROGRAM</div>
        <div className="ml-52 inline-block text-[20px] md:text-[23px]">
          INSTRUCTOR
        </div>
        <div className="ml-52 inline-block text-[20px] md:text-[23px]">FILE TYPE</div>
        <div className="ml-60 inline-block text-[20px] md:text-[23px]">SORT BY</div>
      </div>

      <div className="flex flex-row gap-x-24 ml-16 px-10">
        <Material_ComboBox materialFrameworks={materials} />
        <Course_ComboBox programFrameworks={programFrameworks} />
        <Instructor_ComboBox instructorFrameworks={instructors} />
        <FileType_ComboBox filetypeFrameworks={filetypeFrameworks} />
        <Date_Range />
      </div>
      <div className="w-full px-10">
        <FileTable data={dataWithFormattedDate} />
      </div>
    </>
  );
}
