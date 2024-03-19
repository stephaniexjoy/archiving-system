"use client";
import React, { useState } from "react";

import { confirmUpload } from "@/app/lib/actions/actions";
import { useEdgeStore } from "@/app/lib/edgestore";
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
import { useToast } from "@/components/ui/use-toast";
import AddTask_Dialog from "./Dialogs/AddTask_Dialog/AddTask_Dialog";

import { Card, CardContent } from "@/components/ui/card";
import { UseMultiFile } from "../../File_Upload/UseMultiFile";

const togglePrivacy = [
  {
    value: "for all",
    label: "For All",
  },
  {
    value: "for secretary",
    label: "For Secretary",
  },
];

export default function AssignedTask_Archiving_tabs({
  position,
  tasks,
  materials,
  courses,
}) {
  console.log(materials);
  const { toast } = useToast();
  console.log("tasks", tasks);
  const { edgestore } = useEdgeStore();
  const [options, setOptions] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  const [fileInfo, setFileInfo] = useState([]);

  const [openMaterials, setOpenMaterials] = React.useState(false);
  const [valueMaterials, setValueMaterials] = React.useState("");
  const [openCourse, setOpenCourse] = React.useState(false);
  const [valueCourse, setValueCourse] = React.useState("");
  const [openTogglePrivacy, setOpenTogglePrivacy] = React.useState(false);
  const [valueTogglePrivacy, setValueTogglePrivacy] = React.useState("");

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

  return (
    <>
      <div className="flex flex-col mt-16 px-10 space">
        <h1 className="text-center text-[#5B0505] text-[28px]  sm:text-[32px] md:text-[36px] lg:text-[45px] font-bold md:shadow-zinc-400 mb-5 ">
          Assigned Tasks
        </h1>
        {position === "Secretary" && (
          <div className="flex items-center justify-center">
            <button
              className="
            bg-[#AD5606] text-white text-center items-center w-36 h-10 border border-black text-lg rounded-lg mb-5
            2xl:bg-[#AD5606] 2xl:text-white 2xl:text-center 2xl:items-center 2xl:w-[15%] 2xl:h-12 2xl:border 2xl:border-black 2xl:text-xl 2xl:rounded-lg
            "
            >
              <AddTask_Dialog />
            </button>
          </div>
        )}

        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col bg-white w-[80%] lg:w-[60%] md:w-[60%] sm:[60%] p-4 rounded-md ">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
              No Due Date:
            </label>
            <div className="w-full space-y-2">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1 border border-orange-900"
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
                      <div className="flex flex-row items-center">
                        <div className="w-full p-0">
                          <Card className="lg:w-full w-[330px] h-auto">
                            <CardContent>
                              <div className="flex flex-row text-xl  text-black  mt-4">
                                <div className="w-full flex flex-col">
                                  <h1
                                    className="
                                  text-lg ml-20 font-semibold mb-12
                                  2xl:text-2xl 2xl:font-semibold 2xl:mb-12
                                  "
                                  >
                                    {task.title}
                                  </h1>
                                  <p
                                    className="
                                  mb-16 text-sm ml-20
                                  2xl:mb-16 2xl:text-lg
                                  "
                                  >
                                    {task.description}
                                  </p>
                                  <div>
                                    <h1
                                      className="
                                    text-xs mb-0 ml-20
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
                                w-[60%]
                                2xl:w-[60%] items-center
                                "
                                >
                                  <div className="flex flex-col mt-48 -ml-40 bg-white p-4 gap-4 drop-shadow-2xl rounded-xl">
                                    <div className="flex flex-row gap-x-48">
                                      <h1 className="text-md">Your work</h1>
                                      <h1 className="text-sm -ml-5 text-green-600">
                                        Assigned
                                      </h1>
                                    </div>
                                    <Dialog>
                                      <DialogTrigger className="w-full h-10 border bg-white hover:bg-gray-100 text-[#AD5606] font-bold py-1 px-4 rounded my-2 cursor-pointer inline-flex items-center justify-center">
                                        Upload Here
                                      </DialogTrigger>
                                      <DialogContent className="bg-white max-w-[700px] max-h-[600px] h-auto py-6 px-6 mx-auto overflow-y-auto">
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
                                          {uploadedFiles.map((file, index) => (
                                            <React.Fragment key={index}>
                                              <div className="flex flex-row">
                                                <div className="flex border w-full h-auto  drop-shadow-2xl mb-2 rounded-lg overflow-x-hidden items-center">
                                                  <div className="flex flex-row h-auto text-xl font-semibold justify-between items-center p-2 w-full">
                                                    <div>
                                                      <p>{file.name}</p>s
                                                    </div>
                                                    <div>
                                                      <label
                                                        className="cursor-pointer w-full text-red-600"
                                                        onClick={() =>
                                                          handleRemoveFile(
                                                            index
                                                          )
                                                        }
                                                      >
                                                        X
                                                      </label>
                                                    </div>
                                                  </div>
                                                  <div />
                                                </div>
                                              </div>
                                            </React.Fragment>
                                          ))}
                                        </div>
                                        <div className="flex flex-col bottom-0 items-center justify-center w-full h-auto">
                                          <label
                                            htmlFor="file-upload"
                                            className="w-[40%] h-10 border bg-[#AD5606] hover:bg-gray-700 text-xl text-white font-semibold py-1 px-4 my-2 cursor-pointer inline-flex items-center justify-center rounded-lg"
                                          >
                                            Browse
                                            <input
                                              id="file-upload"
                                              type="file"
                                              className="hidden"
                                              onChange={handleFileUpload}
                                              multiple
                                            />
                                          </label>{" "}
                                          <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                              <button className="w-[40%] h-10 border bg-[#AD5606] hover:bg-gray-700 text-xl text-white font-semibold py-1 px-4 my-2 cursor-pointer items-center justify-center rounded-lg">
                                                Upload
                                              </button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
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
                                                <AlertDialogCancel>
                                                  Cancel
                                                </AlertDialogCancel>
                                                <AlertDialogAction
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
                                          fileInfo,
                                          task.id
                                        );
                                        console.log(res);
                                        console.log(fileInfo);
                                      }}
                                      className="w-full h-10 border bg-[#AD5606] hover:bg-[#AD5606]-700 text-white font-bold py-1 px-4 rounded"
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
            </div>
          </div>

          <div className="flex flex-col bg-white w-[80%] lg:w-[60%] md:w-[60%] sm:[60%] p-4 rounded-md">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
              This week:
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

              {tasks.noDeadline.map(
                (task, index) =>
                  options === String(task.id) && (
                    <div key={`${task.id}_${index}`}>
                      <div className="flex flex-row items-center">
                        <div className="w-full p-0">
                          <Card className="lg:w-full w-[330px] h-auto">
                            <CardContent>
                              <div className="flex flex-row text-xl  text-black  mt-4">
                                <div className="w-full flex flex-col">
                                  <h1
                                    className="
                                  text-lg ml-20 font-semibold mb-12
                                  2xl:text-2xl 2xl:font-semibold 2xl:mb-12
                                  "
                                  >
                                    {task.title}
                                  </h1>
                                  <p
                                    className="
                                  mb-16 text-sm ml-20
                                  2xl:mb-16 2xl:text-lg
                                  "
                                  >
                                    {task.description}
                                  </p>
                                  <div>
                                    <h1
                                      className="
                                    text-xs mb-0 ml-20
                                    2xl:text-sm 2xl:mb-0
                                    "
                                    >
                                      Date Posted:
                                      {task.deadlineCreated.toLocaleString()}
                                    </h1>
                                  </div>
                                </div>
                                <div
                                  className="
                                w-[60%]
                                2xl:w-[60%] items-center
                                "
                                >
                                  <div className="flex flex-col mt-48 -ml-40 bg-white p-4 gap-4 drop-shadow-2xl rounded-xl">
                                    <div className="flex flex-row gap-x-48">
                                      <h1 className="text-md">Your work</h1>
                                      <h1 className="text-sm -ml-5 text-green-600">
                                        Assigned
                                      </h1>
                                    </div>
                                    <Dialog>
                                      <DialogTrigger className="w-full h-10 border bg-white hover:bg-gray-100 text-[#AD5606] font-bold py-1 px-4 rounded my-2 cursor-pointer inline-flex items-center justify-center">
                                        Upload Here
                                      </DialogTrigger>
                                      <DialogContent className="bg-white max-w-[700px] max-h-[600px] h-auto py-6 px-6 mx-auto overflow-y-auto">
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
                                          {uploadedFiles.map((file, index) => (
                                            <React.Fragment key={index}>
                                              <div className="flex flex-row">
                                                <div className="flex border w-full h-auto  drop-shadow-2xl mb-2 rounded-lg overflow-x-hidden items-center">
                                                  <div className="flex flex-row h-auto text-xl font-semibold justify-between items-center p-2 w-full">
                                                    <div>
                                                      <p>{file.name}</p>s
                                                    </div>
                                                    <div>
                                                      <label
                                                        className="cursor-pointer w-full text-red-600"
                                                        onClick={() =>
                                                          handleRemoveFile(
                                                            index
                                                          )
                                                        }
                                                      >
                                                        X
                                                      </label>
                                                    </div>
                                                  </div>
                                                  <div />
                                                </div>
                                              </div>
                                            </React.Fragment>
                                          ))}
                                        </div>
                                        <div className="flex flex-col bottom-0 items-center justify-center w-full h-auto">
                                          <label
                                            htmlFor="file-upload"
                                            className="w-[40%] h-10 border bg-[#AD5606] hover:bg-gray-700 text-xl text-white font-semibold py-1 px-4 my-2 cursor-pointer inline-flex items-center justify-center rounded-lg"
                                          >
                                            Browse
                                            <input
                                              id="file-upload"
                                              type="file"
                                              className="hidden"
                                              onChange={handleFileUpload}
                                              multiple
                                            />
                                          </label>{" "}
                                          <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                              <button className="w-[40%] h-10 border bg-[#AD5606] hover:bg-gray-700 text-xl text-white font-semibold py-1 px-4 my-2 cursor-pointer items-center justify-center rounded-lg">
                                                Upload
                                              </button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
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
                                                <AlertDialogCancel>
                                                  Cancel
                                                </AlertDialogCancel>
                                                <AlertDialogAction
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
                                          fileInfo,
                                          task.id
                                        );
                                        console.log(res);
                                        console.log(fileInfo);
                                      }}
                                      className="w-full h-10 border bg-[#AD5606] hover:bg-[#AD5606]-700 text-white font-bold py-1 px-4 rounded"
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
              {options === "thisweek1" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    This week 1 Title
                  </h1>
                  <p className="mb-4 text-lg">This week 1 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "thisweek2" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    This week 2 Title
                  </h1>
                  <p className="mb-4 text-lg">This week 2 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "thisweek3" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    This week 3 Title
                  </h1>
                  <p className="mb-4 text-lg">This week 3 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col bg-white w-[80%] lg:w-[60%] md:w-[60%] sm:[60%] p-4 rounded-md">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
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

              {options === "nextweek1" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    Next week 1 Title
                  </h1>
                  <p className="mb-4 text-lg">Next week 1 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "nextweek2" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    Next week 2 Title
                  </h1>
                  <p className="mb-4 text-lg">Next week 2 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "nextweek3" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">
                    Next week 3 Title
                  </h1>
                  <p className="mb-4 text-lg">Next week 3 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col bg-white w-[80%] lg:w-[60%] md:w-[60%] sm:[60%] p-4 rounded-md">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
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
              {options === "later1" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">Later 1 Title</h1>
                  <p className="mb-4 text-lg">Later 1 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "later2" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">Later 2 Title</h1>
                  <p className="mb-4 text-lg">Later 2 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
              {options === "later3" && (
                <div className="border border-black text-xl text-black p-4 mt-4">
                  <h1 className="text-2xl font-semibold mb-2">Later 3 Title</h1>
                  <p className="mb-4 text-lg">Later 3 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
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
