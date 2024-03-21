"use client";

import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";

import Edit_button from "./Files_Table/Edit_button";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns = [
  {
    accessorKey: "filename",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          File Name
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "uploaderName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Uploaded By
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "fileRole",
    header: "Permissions",
    cell: ({ row }) => {
      const privacy = row.getValue("fileRole");
      const formatted =
        privacy === "All" ? "All" : privacy === "" ? "not set" : "Secretary";
      return <div className="">{formatted}</div>;
    },
    //{file.fileRole === "forall" ? "All" : "Secretary Only"}
  },
  {
    accessorKey: "fileMaterial",
    header: "Material",
  },
  {
    accessorKey: "fileProgram",
    header: "Program",
  },
  {
    accessorKey: "uploadDate",
    header: "Date & Time Uploaded",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      console.log(row.original);
      console.log(row.original.userId);
      const filePath = row.original.filePath;
      return (
        <Edit_button filePath={filePath} fileOwner={row.original.userId} />
      );
    },
  },
];
