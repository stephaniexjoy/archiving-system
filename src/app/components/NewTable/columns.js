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
        privacy === "All" ? "All" : privacy === null ? "Not Set" : "Secretary";
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
    accessorKey: "fileType",
    header: "File Type",
  },
  {
    accessorKey: "uploadDate",
    header: "Date & Time Uploaded",
    cell: ({ row }) => {
      const date = new Date(row.original.uploadDate);
      console.log(new Date(date));
      return <div>{date.toLocaleString()}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const filePath = row.original.filePath;
      return (
        <Edit_button filePath={filePath} fileOwner={row.original.userId} />
      );
    },
  },
];
