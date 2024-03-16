"use client";

import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import ViewButton from "./Buttons/RouterButton";
import EditButton from "./Buttons/EditButton";
import ArchiveButton from "./Buttons/ArchiveButton";
import { Label } from "@/components/ui/label";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "employee_no",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Employee #
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
      const formatted = privacy === "All" ? "All" : "Secretary";
      return <div className="">{formatted}</div>;
    },
    //{file.fileRole === "forall" ? "All" : "Secretary Only"}
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },

  {
    id: "actions",
    header: ({ column }) => {
      return (
        <div className="flex items-center justify-center">
          <Label>Actions</Label>
        </div>
      );
    },
    cell: ({ row }) => {
      const userId = row.original.id;

      return (
        <div className="flex flex-row space-x-2">
          <ViewButton userId={userId} />
          <EditButton userId={userId} />
          <ArchiveButton userId={userId} />
        </div>
      );
    },
  },

  /* {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      console.log(row.original.filePath);
      const filePath = row.original.filePath;
      return (
        <div className="">
          <Dialog>
            <DialogTrigger className="bg-[#8F8F8F] hover:bg-[#6A6A6A] focus:outline-none h-10 w-48 font-bold">
              Edit
            </DialogTrigger>
            <DialogContent className="bg-white max-w-[1000px] max-h-[800px] h-auto py-6 px-6 mx-auto overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Edit</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-row ml-12 gap-x-40">
                    <AddCategory_Dialog category={"Material"} />
                    <AddCategory_Dialog category={"Course"} />
                  </div>
                  <div className="flex flex-row font-semibold text-[#5B0505] w-full gap-x-0 py-5 px-10 ml-0">
                    <div className="ml-20 inline-block text-[20px] md:text-[23px]">
                      MATERIAL
                    </div>
                    <div className="ml-56 inline-block text-[20px] md:text-[23px]">
                      PROGRAM
                    </div>
                    <div className="ml-48 inline-block text-[20px] md:text-[23px]">
                      PERMISSION
                    </div>
                  </div>
                  <div className="">
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col w-full"></div>
              <div className="flex flex-col bottom-0 items-center justify-center w-full h-auto"></div>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  }, */
];
