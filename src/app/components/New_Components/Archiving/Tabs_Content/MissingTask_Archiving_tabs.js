"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Card, CardContent } from "@/components/ui/card";
import { UseMultiFile } from "./../../File_Upload/UseMultiFile";

import { useState } from "react";
import React from "react";
import MissingTask_Table from "@/app/components/NewTable/TasksTable/MissingTaskTable/MissingTask_Table";
export default function MissingTask_Archiving_tabs({ tasks }) {
  const [options, setOptions] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const newFiles = [...uploadedFiles];

    const fileName = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newFiles.push(files[i]);

      // Extract the file extension from the file name
      const name = file.name;
      const extension = file.name.split(".").pop();

      fileName.push({ name, extension });
    }

    setUploadedFiles(newFiles);
    setFileInfo(fileName);
    console.log(fileInfo);
  };

  console.log(tasks);

  return (
    <>
      <div
        className="
        flex flex-col mt-16 px-4 space h-auto overflow-y-auto
        sm:flex sm:flex-col sm:mt-16 sm:px-10 sm:space sm:h-auto sm:overflow-y-auto
        md:flex md:flex-col md:mt-16 md:px-10 md:space md:h-auto md:overflow-y-auto
        lg:flex lg:flex-col lg:mt-16 lg:px-10 lg:space lg:h-auto lg:overflow-y-auto
        xl:flex xl:flex-col xl:mt-16 xl:px-10 xl:space xl:h-auto xl:overflow-y-auto
        2xl:flex 2xl:flex-col 2xl:mt-16 2xl:px-10 2xl:space 2xl:h-auto 2xl:overflow-y-auto
        "
      >
        <h1 className="text-center text-[#5B0505] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[45px] font-bold md:shadow-zinc-400 mb-5 ">
          Missing Tasks
        </h1>
        <div className="flex flex-col items-center w-full h-full overflow-y-auto">
          <div
            className="
            flex flex-col w-[100%] p-0 rounded-md 
            sm:w-[90%]
            md:w-[80%] 
            lg:w-[80%]
            xl:w-[70%]  
            2xl:w-[60%] 
            "
          >
            <MissingTask_Table tasks={tasks} />
          </div>
        </div>
      </div>
    </>
  );
}
