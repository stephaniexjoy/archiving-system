"use client";
import { useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import AddTask_Dialog from "./Dialogs/AddTask_Dialog/AddTask_Dialog";

import File_Upload_Card from "./File_Upload_Component/File_Upload_Card";
import AssignedTask_Table from "@/app/components/NewTable/TasksTable/AssignedTaskTable/AssignedTask_Table";

export default function AssignedTask_Archiving_tabs({
  position,
  tasks,
  materials,
  courses,
  oldTasks,
}) {
  const [options, setOptions] = useState("");

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

  const handleRemoveFile = (indexToRemove) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file, index) => index !== indexToRemove)
    );
  };

  const getUrls = (results, setUrls) => {
    const extractUrls = results.map((result) => result.url);
    setUrls(extractUrls);
  };

  console.log("Tasks Only", tasks);

  return (
    <>
      <div
        className="
        flex flex-col mt-12 px-4 space h-auto overflow-y-auto
        sm:flex sm:flex-col sm:mt-16 sm:px-10 sm:space sm:h-auto sm:overflow-y-auto
        md:flex md:flex-col md:mt-16 md:px-10 md:space md:h-auto md:overflow-y-auto
        lg:flex lg:flex-col lg:mt-16 lg:px-10 lg:space lg:h-auto lg:overflow-y-auto
        xl:flex xl:flex-col xl:mt-16 xl:px-10 xl:space xl:h-auto xl:overflow-y-auto
        2xl:flex 2xl:flex-col 2xl:mt-4 2xl:px-10 2xl:space 2xl:max-h-full 2xl:overflow-y-auto
        "
      >
        <h1 className="text-center text-[#5B0505] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[45px] font-bold md:shadow-zinc-400 mt-2 mb-2 ">
          Assigned Tasks
        </h1>
        {position === "Secretary" && (
          <div className="flex items-center justify-center">
            <button
              className="
            bg-[#AD5606] text-white text-center items-center w-36 h-10 border border-black text-lg rounded-lg mb-10 mt-2
            sm:bg-[#AD5606] sm:text-white sm:text-center sm:items-center sm:w-36 sm:h-10 sm:border sm:border-black sm:text-lg sm:rounded-lg sm:mb-10
            md:bg-[#AD5606] md:text-white md:text-center md:items-center md:w-36 md:h-10 md:border md:border-black md:text-lg md:rounded-lg md:mb-10
            lg:bg-[#AD5606] lg:text-white lg:text-center lg:items-center lg:w-36 lg:h-10 lg:border lg:border-black lg:text-lg lg:rounded-lg lg:mb-10
            xl:bg-[#AD5606] xl:text-white xl:text-center xl:items-center xl:w-36 xl:h-10 xl:border xl:border-black xl:text-lg xl:rounded-lg xl:mb-10
            2xl:bg-[#AD5606] 2xl:text-white 2xl:text-center 2xl:items-center 2xl:w-[15%] 2xl:h-12 2xl:border 2xl:border-black 2xl:text-xl 2xl:rounded-lg 
            "
            >
              <AddTask_Dialog />
            </button>
          </div>
        )}

        <div className="flex flex-col items-center w-full h-[700px] overflow-y-auto">
          <div
            className="
            flex flex-col w-[100%] p-0 rounded-md 
            sm:w-[90%]
            md:w-[80%] 
            lg:w-[80%]
            xl:w-[70%]  
            2xl:w-[65%] 
            "
          >
            <AssignedTask_Table tasks={oldTasks} />
          </div>
        </div>
      </div>
    </>
  );
}
