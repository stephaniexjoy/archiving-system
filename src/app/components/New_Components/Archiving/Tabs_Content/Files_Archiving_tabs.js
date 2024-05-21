import { columns } from "@/app/components/NewTable/columns";
import { DataTable } from "@/app/components/NewTable/data-table";

const permissions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "null",
    label: "Not Set",
  },
  {
    value: "secretary",
    label: "Secretary",
  },
];

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
  filetype,
  programs,
  
}) {
  console.log("Aba gumana ka", materials, instructors);

  console.log("huhu", dataWithFormattedDate);
  console.log(filetype);
  return (
    <>
      <div
        className="
        w-full px-2 overflow-auto
        sm:w-full sm:px-4 sm:overflow-auto
        md:w-full md:px-5 md:overflow-auto
        lg:w-full lg:px-10
        xl:w-full xl:px-5
        2xl:w-full 2xl:px-10
        "
      >
        <DataTable
          columns={columns}
          data={dataWithFormattedDate}
          materials={materials}
          instructors={instructors}
          programs={programs}
          filetype={filetype}
          permissions={permissions}
        />
      </div>
    </>
  );
}
