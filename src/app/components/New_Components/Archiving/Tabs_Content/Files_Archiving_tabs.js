import { columns } from "@/app/components/NewTable/columns";
import { DataTable } from "@/app/components/NewTable/data-table";

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
      <div 
        className="
        w-full px-0 overflow-auto
        sm:w-full sm:px-0 sm:overflow-auto
        md:w-full md:px-0 md:overflow-auto
        lg:w-fulllg: lg:px-0 lg:overflow-auto
        xl:w-full xl:px-0 xl:overflow-auto
        2xl:w-full 2xl:px-10
        ">
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
