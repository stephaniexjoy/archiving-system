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
        2xl:flex 2xl:flex-col 2xl:mt-16 2xl:px-10 2xl:space 2xl:max-h-full 2xl:overflow-y-auto
        "
      >
        <h1 className="text-center text-[#5B0505] text-[28px]  sm:text-[32px] md:text-[36px] lg:text-[45px] font-bold md:shadow-zinc-400 mb-5 ">
          Assigned Tasks
        </h1>
        {position === "Secretary" && (
          <div className="flex items-center justify-center">
            <button
              className="
            bg-[#AD5606] text-white text-center items-center w-36 h-10 border border-black text-lg rounded-lg mb-10
            sm:bg-[#AD5606] sm:text-white sm:text-center sm:items-center sm:w-36 sm:h-10 sm:border sm:border-black sm:text-lg sm:rounded-lg sm:mb-10
            md:bg-[#AD5606] md:text-white md:text-center md:items-center md:w-36 md:h-10 md:border md:border-black md:text-lg md:rounded-lg md:mb-10
            lg:bg-[#AD5606] lg:text-white lg:text-center lg:items-center lg:w-36 lg:h-10 lg:border lg:border-black lg:text-lg lg:rounded-lg lg:mb-10
            xl:bg-[#AD5606] xl:text-white xl:text-center xl:items-center xl:w-36 xl:h-10 xl:border xl:border-black xl:text-lg xl:rounded-lg xl:mb-10
            2xl:bg-[#AD5606] 2xl:text-white 2xl:text-center 2xl:items-center 2xl:w-[15%] 2xl:h-12 2xl:border 2xl:border-black 2xl:text-xl 2xl:rounded-lg 2xl:mt-10
            "
            >
              <AddTask_Dialog />
            </button>
          </div>
        )}

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
            <AssignedTask_Table tasks={oldTasks} />
            <label className="w-full text-[#5B0505] text-xl text-start font-semibold mr-4">
              No Due Date:
            </label>
            <div className="w-full space-y-2">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer h-[40px] shadow-lg rounded-sm px-1 py-1 border border-orange-900"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                {tasks.noDeadline.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.title}
                  </option>
                ))}
              </select>

              {tasks.noDeadline.map(
                (task, index) =>
                  options === String(task.id) && (
                    <div key={`${task.id}_${index}`}>
                      <div
                        className="
                        flex flex-row items-center
                        xl:flex xl:flex-col xl:items-center
                        2xl:flex 2xl:flex-row 2xl:items-center
                        "
                      >
                        <div className="w-full p-0">
                          <File_Upload_Card task={task} />
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          <div
            className="
            flex flex-col w-[100%] p-0 rounded-md mt-8
            sm:w-[90%]
            md:w-[80%] 
            lg:w-[80%]
            xl:w-[70%]  
            2xl:w-[60%] 
            "
          >
            <label className="w-full text-[#5B0505] text-xl text-start font-semibold mr-4">
              This Week:
            </label>
            <div className="w-full">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1 border border-orange-900"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                {tasks.thisWeek.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.title}
                  </option>
                ))}
              </select>

              {tasks.thisWeek.map(
                (task, index) =>
                  options === String(task.id) && (
                    <div key={`${task.id}_${index}`}>
                      <div className="flex flex-row items-center">
                        <div className="w-full p-0">
                          <File_Upload_Card task={task} />
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>

          <div
            className="
            flex flex-col w-[100%] p-0 rounded-md mt-8
            sm:w-[90%]
            md:w-[80%] 
            lg:w-[80%]
            xl:w-[70%]  
            2xl:w-[60%] 
            "
          >
            <label className="w-full text-[#5B0505] text-xl text-start font-semibold mr-4">
              Next week:
            </label>
            <div className="w-full">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1 border border-orange-900"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                {tasks.nextWeek.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.title}
                  </option>
                ))}
              </select>

              {tasks.nextWeek.map(
                (task, index) =>
                  options === String(task.id) && (
                    <div key={`${task.id}_${index}`}>
                      <div className="flex flex-row items-center">
                        <div className="w-full p-0">
                          <File_Upload_Card task={task} />
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>

          <div
            className="
            flex flex-col w-[100%] p-0 rounded-md mt-8
            sm:w-[90%]
            md:w-[80%] 
            lg:w-[80%]
            xl:w-[70%]  
            2xl:w-[60%] 
            "
          >
            <label className="w-full text-[#5B0505] text-xl text-start font-semibold mr-4">
              Later:
            </label>
            <div className="w-full">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1 border border-orange-900"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                {tasks.laterThanNextWeek.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.title}
                  </option>
                ))}
              </select>

              {tasks.laterThanNextWeek.map(
                (task, index) =>
                  options === String(task.id) && (
                    <div key={`${task.id}_${index}`}>
                      <div className="flex flex-row items-center">
                        <div className="w-full p-0">
                          <File_Upload_Card task={task} />
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
