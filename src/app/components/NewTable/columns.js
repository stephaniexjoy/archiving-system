"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddCategory_Dialog from "@/app/components/New_Components/AddCategory_Dialog/AddCategory_Dialog";
import Material_ComboBox from "../New_Components/Archiving/Tabs_Content/ComboBox/Material_ComboBox";
import Course_ComboBox from "../New_Components/Archiving/Tabs_Content/ComboBox/Course_ComboBox";
import { getMaterials } from "@/app/lib/actions/actions";
import { ComboboxPermission } from "./data-table";
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
      const formatted = privacy === "forall" ? "All" : "Secretary Only";
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
                  <div className="flex flex-row gap-x-16 w-full px-10">
                    <Material_ComboBox />
                    <Course_ComboBox />
                    <ComboboxPermission />
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
  },
];
