"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";

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
    header: "Uploaded By",
  },
  {
    accessorKey: "fileRole",
    header: "Permissions",
    cell: ({ row }) => {
      const privacy = row.getValue("fileRole");
      const formatted = privacy === "forall" ? "All" : "Secretary Only";
      return <div className="">{formatted}</div>;
    },
    //{file.fileRole === "forall" ? "All" : "Secretary Only"}
  },
  {
    accessorKey: "uploadDate",
    header: "Date & Time Uploaded",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="">
          <Button className="bg-[#8F8F8F] hover:bg-[#6A6A6A] focus:outline-none h-10 w-48 font-bold">
            Edit Privacy
          </Button>
        </div>
      );
    },
  },
];
