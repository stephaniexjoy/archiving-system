"use client";
import React from "react";
import { useState } from "react";
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
import ArchivedTask_Table from "@/app/components/NewTable/TasksTable/ArchivedTaskTable/ArchivedTask_Table";

export default function ArchivedTask_Archiving_tabs({ tasks }) {
  const [options, setOptions] = useState("");
  console.log(tasks);

  function onCloseModal() {
    setOpenModal(false);
  }

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
          Archived Tasks
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
            <ArchivedTask_Table tasks={tasks} />
            <label className="w-full text-[#5B0505] text-xl text-start font-semibold mr-4">
              Archived:
            </label>
            <div className="w-full space-y-2">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1 border border-orange-900"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                {tasks.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.title}
                  </option>
                ))}
              </select>

              {tasks.map(
                (task, index) =>
                  options === String(task.id) && (
                    <div key={`${task.id}_${index}`}>
                      <div className="flex flex-row">
                        <div className="w-full p-0">
                          <Card
                            className="
                            w-full h-auto
                            sm:w-full sm:h-auto
                            md:w-full md:h-auto
                            lg:w-full lg:h-auto
                            xl:w-full xl:h-auto
                            2xl:w-full 2xl:h-auto
                            "
                          >
                            <CardContent>
                              <div
                                className="
                                flex flex-col text-xl text-black mt-4
                                xl:flex xl:flex-col xl:text-xl xl:text-black xl:mt-4
                                2xl:flex 2xl:flex-row 2xl:text-xl 2xl:text-black 2xl:mt-4
                                "
                              >
                                <div
                                  className="
                                  w-full flex flex-col                                         
                                  sm:w-full sm:flex sm:flex-col
                                  md:w-full md:flex md:flex-col
                                  lg:w-full lg:flex lg:flex-col
                                  xl:w-full xl:flex xl:flex-col xl:items-center
                                  2xl:w-full 2xl:flex 2xl:flex-col
                                  "
                                >
                                  <h1
                                    className="
                                    text-lg ml-0 font-semibold mb-16
                                    xl:text-lg xl:ml-0 xl:font-semibold xl:mb-12
                                    2xl:text-2xl 2xl:font-semibold 2xl:mb-12
                                    "
                                  >
                                    {task.title}
                                  </h1>
                                  <p
                                    className="
                                    text-sm mb-16
                                    2xl:mb-16 2xl:text-lg
                                    "
                                  >
                                    {task.description}
                                  </p>
                                  <div>
                                    <h1
                                      className="
                                    text-xs mb-5
                                    2xl:text-sm 2xl:mb-0
                                    "
                                    >
                                      Date Posted:{" "}
                                      {task.deadlineCreated.toLocaleString()}
                                    </h1>
                                  </div>
                                </div>
                                <div
                                  className="
                                  w-full
                                  2xl:w-[60%] items-center
                                  "
                                >
                                  <div
                                    className="
                                    flex flex-col bg-slate-100 p-4 gap-2 shadow-2xl rounded-xl mt-4
                                    xl:flex xl:flex-col xl:mt-48 xl:-ml-40 xl:p-4 xl:gap-4 xl:drop-shadow-2xl xl:rounded-xl
                                    2xl:flex 2xl:flex-col 2xl:mt-48 2xl:-ml-40 2xl:p-4 2xl:gap-4 2xl:drop-shadow-2xl 2xl:rounded-xl
                                    "
                                  >
                                    <div
                                      className="
                                      flex flex-row gap-x-32
                                      sm:flex sm:flex-row sm:gap-x-0
                                      md:flex md:flex-row md:gap-x-0
                                      lg:flex lg:flex-row lg:gap-x-0
                                      xl:flex xl:flex-row xl:gap-x-0
                                      2xl:flex 2xl:flex-row 2xl:gap-x-0
                                      "
                                    >
                                      <h1 className="mr-2 text-sm sm:text-md md:text-md lg:text-md xl:text-md 2xl:text-md">
                                        Your work
                                      </h1>
                                      <h1 className="text-sm -ml-5 text-red-600">
                                        Missing
                                      </h1>
                                    </div>
                                    <Dialog>
                                      <DialogTrigger className="flex mx-auto w-[80%] h-10 border bg-[#AD5606] hover:bg-gray-100 text-white font-bold rounded cursor-pointer items-center justify-center mt-8 sm:w-full">
                                        Upload Here
                                      </DialogTrigger>
                                      <DialogContent className="bg-slate-50 w-[90%] h-auto py-6 px-6 mx-auto overflow-y-auto">
                                        <DialogHeader>
                                          <DialogTitle className="text-2xl">
                                            Upload files
                                          </DialogTitle>
                                          <DialogDescription>
                                            You can upload files here.
                                          </DialogDescription>
                                        </DialogHeader>
                                        <div className="flex flex-col w-full">
                                          <UseMultiFile />
                                        </div>
                                        <div className="flex flex-col bottom-0 items-center justify-center w-full h-auto">
                                          <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                              <button className="w-[40%] h-10 border bg-[#AD5606] hover:bg-gray-700 text-lg text-white font-semibold py-1 px-4 my-2 cursor-pointer items-center justify-center rounded-lg">
                                                Upload
                                              </button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent className="w-[90%] h-auto">
                                              <AlertDialogHeader>
                                                <AlertDialogTitle>
                                                  Do you want to Proceed?
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                  This action will upload your
                                                  file temporarily. Mark it as
                                                  done to confirm the upload.
                                                </AlertDialogDescription>
                                              </AlertDialogHeader>
                                              <AlertDialogFooter className="items-center">
                                                <AlertDialogCancel className="w-[40%]">
                                                  Cancel
                                                </AlertDialogCancel>
                                                <AlertDialogAction
                                                  className="bg-[#AD5606] w-[40%]"
                                                  onClick={async () => {
                                                    console.log(uploadedFiles);

                                                    try {
                                                      const uploadPromises =
                                                        uploadedFiles.map(
                                                          async (upFile) => {
                                                            try {
                                                              console.log(
                                                                "Upfile",
                                                                upFile
                                                              );
                                                              const res =
                                                                await edgestore.publicFiles1.upload(
                                                                  {
                                                                    file: upFile,
                                                                    options: {
                                                                      manualFileName:
                                                                        upFile.name,
                                                                      temporary: true,
                                                                    },
                                                                  }
                                                                );
                                                              console.log(res);
                                                              return res;
                                                            } catch (error) {
                                                              console.error(
                                                                error
                                                              );
                                                              throw error; // rethrowing error to handle at the end
                                                            }
                                                          }
                                                        );

                                                      const results =
                                                        await Promise.all(
                                                          uploadPromises
                                                        );
                                                      if (results) {
                                                        toast;
                                                      }

                                                      getUrls(results, setUrls);
                                                      console.log(
                                                        "All files uploaded successfully:",
                                                        results
                                                      );
                                                    } catch (error) {
                                                      console.error(
                                                        "Error uploading files:",
                                                        error
                                                      );
                                                    }
                                                    console.log(urls);
                                                  }}
                                                >
                                                  Continue
                                                </AlertDialogAction>
                                              </AlertDialogFooter>
                                            </AlertDialogContent>
                                          </AlertDialog>
                                        </div>
                                      </DialogContent>
                                    </Dialog>
                                    <button
                                      onClick={async () => {
                                        const res = await confirmUpload(
                                          urls,
                                          fileInfo
                                        );
                                        console.log(res);
                                        console.log(fileInfo);
                                      }}
                                      className="flex mx-auto w-[80%] h-10 border bg-[#AD5606] hover:bg-gray-100 text-white font-bold py-1 px-4 rounded my-2 cursor-pointer items-center justify-center sm:w-full"
                                    >
                                      Mark as done
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  )
              )}

              {options === "nodue1" && (
                <div class="flex flex-row mt-4">
                  <div class="w-full p-0">
                    <Card className="w-full h-auto">
                      <CardContent>
                        <div class="flex flex-row text-xl text-black p-4 mt-4">
                          <div className="flex flex-col justify-around w-full">
                            <div>
                              <h1 class="text-4xl font-semibold">
                                No Due Date 1 Title
                              </h1>
                            </div>
                            <div>
                              <p class="text-2xl">
                                No Due Date 1 Instructions.
                              </p>
                            </div>
                            <div>
                              <h1 class="text-lg ">Post Today</h1>
                            </div>
                          </div>
                          <div class="w-[80%] h-auto">
                            <div class="flex flex-col bg-white p-4 gap-4 drop-shadow-2xl  rounded-xl">
                              <div className="flex flex-row gap-x-56">
                                <h1 className="text-xl">Your work</h1>
                                <h1 className="text-md text-red-600">
                                  Missing
                                </h1>
                              </div>
                              <label
                                for="file-upload"
                                class="w-full h-14 border bg-white hover:bg-gray-100 text-[#AD5606] font-bold py-1 px-4 rounded my-2 cursor-pointer inline-flex items-center justify-center mt-16"
                              >
                                Add work
                                <input
                                  id="file-upload"
                                  type="file"
                                  class="hidden"
                                />
                              </label>{" "}
                              <button class="w-full h-14 border bg-[#AD5606] hover:bg-[#AD5606]-700 text-white font-bold py-1 px-4 rounded">
                                Mark as done
                              </button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
