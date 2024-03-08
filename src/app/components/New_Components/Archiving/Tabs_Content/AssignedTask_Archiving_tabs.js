"use client";
import React, { useState } from "react"; // Import React and useState

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

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

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
  const { toast } = useToast()
  console.log(tasks);
  const { edgestore } = useEdgeStore();
  const [options, setOptions] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [urls, setUrls] = useState([]); // Define uploadedFiles state here
  // Define uploadedFiles state here

  const [openMaterials, setOpenMaterials] = React.useState(false);
  const [valueMaterials, setValueMaterials] = React.useState("");
  const [openCourse, setOpenCourse] = React.useState(false);
  const [valueCourse, setValueCourse] = React.useState("");
  const [openTogglePrivacy, setOpenTogglePrivacy] = React.useState(false);
  const [valueTogglePrivacy, setValueTogglePrivacy] = React.useState("");

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const newFiles = [...uploadedFiles];

    for (let i = 0; i < files.length; i++) {
      newFiles.push(files[i]);
    }

    setUploadedFiles(newFiles);
  };

  const handleRemoveFile = (indexToRemove) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file, index) => index !== indexToRemove)
    );
  };

  const getUrls = (results, setUrls) => {
    const extractUrls = results.map(result => result.url)
    setUrls(extractUrls)
  }

  return (
    <>
      <div className="flex flex-col mt-5 px-10">
        <h1 className="text-center text-[#5B0505] text-[45px] font-semibold md:shadow-zinc-400 mb-5">
          Assigned Tasks
        </h1>
        {position === "Secretary" && (
          <div className="flex items-center justify-center">
            <button className="bg-[#AD5606] text-white text-center items-center w-[15%] h-12 border border-black text-xl rounded-lg">
              <AddTask_Dialog />
            </button>
          </div>
        )}

        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col bg-white w-[60%] p-4 rounded-md drop-shadow-xl">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
              No Due Date:
            </label>
            <div className="w-full">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                {tasks.noDue_Tasks.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.title}
                  </option>
                ))}
              </select>

              {tasks.noDue_Tasks.map(
                (task) =>
                  options === String(task.id) && (
                    <div key={task.id}>
                      <div className="flex flex-row">
                        <div className="w-full p-0">
                          <div className="flex flex-row border border-black text-xl text-black p-4 mt-4">
                            <div className="w-full flex flex-col">
                              <h1 className="text-2xl font-semibold mb-12">
                                {task.title}
                              </h1>
                              <p className="mb-16 text-lg">
                                {task.description}
                              </p>
                              <div>
                                <h1 className="text-sm mb-0">
                                  Date Posted:{" "}
                                  {task.deadlineCreated.toLocaleString()}
                                </h1>
                              </div>
                            </div>
                            <div className="w-[60%]">
                              <div className="flex flex-col bg-white p-4 gap-4 drop-shadow-2xl rounded-xl">
                                <div className="flex flex-row gap-x-48">
                                  <h1 className="text-md">Your work</h1>
                                  <h1 className="text-sm text-green-600">
                                    Assigned
                                  </h1>
                                </div>
                                <Dialog>
                                  <DialogTrigger className="w-full h-10 border bg-white hover:bg-gray-100 text-[#AD5606] font-bold py-1 px-4 rounded my-2 cursor-pointer inline-flex items-center justify-center">
                                    Upload Here
                                  </DialogTrigger>
                                  <DialogContent className="bg-white md:max-w-[1200px] h-[800px] py-6 px-6 mx-auto overflow-y-auto">
                                    <DialogHeader>
                                      <DialogTitle className="text-2xl">
                                        Upload files
                                      </DialogTitle>
                                      <DialogDescription>
                                        You can upload files here.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex flex-col w-full">
                                      {uploadedFiles.map((file, index) => (
                                        <>
                                          <div className="flex flex-row">
                                            <div
                                              className="flex border w-full h-auto border-black drop-shadow-2xl mb-2 rounded-lg overflow-x-hidden items-center"
                                              key={index}
                                            >
                                              <div className="flex flex-row h-auto text-xl font-semibold justify-between items-center p-2 ">
                                                <div>
                                                  <p>{file.name}</p>
                                                </div>
                                                <div>
                                                  <label
                                                    className="cursor-pointer text-red-600"
                                                    onClick={() =>
                                                      handleRemoveFile(index)
                                                    }
                                                  >
                                                    X
                                                  </label>
                                                </div>
                                              </div>
                                              <div />
                                            </div>
                                            <div className="flex flex-row justify-items-center w-full">
                                              <Popover
                                                open={openMaterials}
                                                onOpenChange={setOpenMaterials}
                                              >
                                                <PopoverTrigger asChild>
                                                  <Button
                                                    role="combobox"
                                                    aria-expanded={
                                                      openMaterials
                                                    }
                                                    className="w-full h-10 border bg-[#AD5606] hover:bg-[#AD5606]-700 text-white font-bold py-1 px-4 rounded"
                                                  >
                                                    {valueMaterials
                                                      ? materials.find(
                                                          (framework) =>
                                                            framework.value ===
                                                            valueMaterials
                                                        )?.label
                                                      : "Materials..."}
                                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                  </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[200px] p-0">
                                                  <div>
                                                    {materials.map(
                                                      (framework) => (
                                                        <div
                                                          key={framework.value}
                                                          onClick={() => {
                                                            setValueMaterials(
                                                              framework.value ===
                                                                valueMaterials
                                                                ? ""
                                                                : framework.value
                                                            );
                                                            setOpenMaterials(
                                                              false
                                                            );
                                                          }}
                                                          className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100"
                                                        >
                                                          <span>
                                                            {framework.label}
                                                          </span>
                                                          {valueMaterials ===
                                                            framework.value && (
                                                            <CheckIcon className="ml-auto h-4 w-4 opacity-100" />
                                                          )}
                                                        </div>
                                                      )
                                                    )}
                                                  </div>
                                                </PopoverContent>
                                              </Popover>{" "}
                                              <Popover
                                                open={openCourse}
                                                onOpenChange={setOpenCourse}
                                              >
                                                <PopoverTrigger asChild>
                                                  <Button
                                                    role="combobox"
                                                    aria-expanded={openCourse}
                                                    className="w-full h-10 border bg-[#AD5606] hover:bg-[#AD5606]-700 text-white font-bold py-1 px-4 rounded"
                                                  >
                                                    {valueCourse
                                                      ? courses.find(
                                                          (framework) =>
                                                            framework.value ===
                                                            valueCourse
                                                        )?.label
                                                      : "Courses..."}
                                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                  </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[200px] p-0">
                                                  <div>
                                                    {courses.map(
                                                      (framework) => (
                                                        <div
                                                          key={framework.value}
                                                          onClick={() => {
                                                            setValueCourse(
                                                              framework.value ===
                                                                valueCourse
                                                                ? ""
                                                                : framework.value
                                                            );
                                                            setOpenCourse(
                                                              false
                                                            );
                                                          }}
                                                          className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100"
                                                        >
                                                          <span>
                                                            {framework.label}
                                                          </span>
                                                          {valueCourse ===
                                                            framework.value && (
                                                            <CheckIcon className="ml-auto h-4 w-4 opacity-100" />
                                                          )}
                                                        </div>
                                                      )
                                                    )}
                                                  </div>
                                                </PopoverContent>
                                              </Popover>{" "}
                                              <Popover
                                                open={openTogglePrivacy}
                                                onOpenChange={
                                                  setOpenTogglePrivacy
                                                }
                                              >
                                                <PopoverTrigger asChild>
                                                  <Button
                                                    role="combobox"
                                                    aria-expanded={
                                                      openTogglePrivacy
                                                    }
                                                    className="w-full h-10 border bg-[#AD5606] hover:bg-[#AD5606]-700 text-white font-bold py-1 px-4 rounded"
                                                  >
                                                    {valueTogglePrivacy
                                                      ? togglePrivacy.find(
                                                          (framework) =>
                                                            framework.value ===
                                                            valueTogglePrivacy
                                                        )?.label
                                                      : "Privacy..."}
                                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                  </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[200px] p-0">
                                                  <div>
                                                    {togglePrivacy.map(
                                                      (framework) => (
                                                        <div
                                                          key={framework.value}
                                                          onClick={() => {
                                                            setValueTogglePrivacy(
                                                              framework.value ===
                                                                togglePrivacy
                                                                ? ""
                                                                : framework.value
                                                            );
                                                            setOpenTogglePrivacy(
                                                              false
                                                            );
                                                          }}
                                                          className="flex items-center justify-between p-2 cursor-pointer hover:bg-gray-100"
                                                        >
                                                          <span>
                                                            {framework.label}
                                                          </span>
                                                          {valueTogglePrivacy ===
                                                            framework.value && (
                                                              <CheckIcon className="ml-auto h-4 w-4 opacity-100" />
                                                            )}
                                                        </div>
                                                      )
                                                    )}
                                                  </div>
                                                </PopoverContent>
                                              </Popover>{" "}
                                            </div>
                                          </div>
                                        </>
                                      ))}
                                    </div>
                                    <div className="flex flex-col items-center justify-center w-full">
                                      <label
                                        htmlFor="file-upload"
                                        className="w-[30%] h-10 border bg-[#AD5606] hover:bg-gray-700 text-xl text-white font-semibold py-1 px-4 my-2 cursor-pointer inline-flex items-center justify-center rounded-lg"
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
                                          <button className="w-[30%] h-10 border bg-[#AD5606] hover:bg-gray-700 text-xl text-white font-semibold py-1 px-4 my-2 cursor-pointer inline-flex items-center justify-center rounded-lg">
                                            Temporary Upload
                                          </button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                          <AlertDialogHeader>
                                            <AlertDialogTitle>
                                              Do you want to Proceed?
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                              This action will upload your file temporarily. Mark it as done to confirm the upload.
                                            </AlertDialogDescription>
                                          </AlertDialogHeader>
                                          <AlertDialogFooter className="items-center">
                                            <AlertDialogCancel>
                                              Cancel
                                            </AlertDialogCancel>
                                            <AlertDialogAction onClick={async () => {
                                              console.log(uploadedFiles)

                                              try {
                                                const uploadPromises = uploadedFiles.map(async (upFile) => {
                                                  try {
                                                    console.log("Upfile", upFile);
                                                    const res = await edgestore.publicFiles1.upload({
                                                      file: upFile,
                                                      options: {
                                                        manualFileName: upFile.name,
                                                        temporary: false
                                                      }
                                                    });
                                                    console.log(res);
                                                    return res;
                                                  } catch (error) {
                                                    console.error(error);
                                                    throw error; // rethrowing error to handle at the end
                                                  }
                                                });

                                                const results = await Promise.all(uploadPromises);
                                                if (results) {
                                                  toast
                                                }

                                                getUrls(results, setUrls)
                                                console.log("All files uploaded successfully:", results);
                                              } catch (error) {
                                                console.error("Error uploading files:", error);
                                              }
                                              console.log(urls)

                                            }}>
                                              Continue
                                            </AlertDialogAction>
                                          </AlertDialogFooter>
                                        </AlertDialogContent>
                                      </AlertDialog>{" "}
                                    </div>
                                  </DialogContent>
                                </Dialog>
                                <button onClick={async () => {
                                  const res = await confirmUpload(urls)
                                  console.log(res)

                                }} className="w-full h-10 border bg-[#AD5606] hover:bg-[#AD5606]-700 text-white font-bold py-1 px-4 rounded">
                                  Mark as done
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>

          <div className="flex flex-col bg-white w-[60%] p-4 rounded-md drop-shadow-xl">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
              This week:
            </label>
            <div className="w-full">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                <option value="thisweek1">This week 1</option>
                <option value="thisweek2">This week 2</option>
                <option value="thisweek3">This week 3</option>
              </select>
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
                    This wwek 3 Title
                  </h1>
                  <p className="mb-4 text-lg">This week 3 Instructions.</p>
                  <div>
                    <h1 className="text-sm mb-2">Post Today</h1>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col bg-white w-[60%] p-4 rounded-md drop-shadow-xl">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
              Next week:
            </label>
            <div className="w-full">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                <option value="nextweek1">Next week 1</option>
                <option value="nextweek2">Next week 2</option>
                <option value="nextweek3">Next week 3</option>
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

          <div className="flex flex-col bg-white w-[60%] p-4 rounded-md drop-shadow-xl">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
              Later:
            </label>
            <div className="w-full">
              <select
                onChange={(e) => setOptions(e.target.value)}
                className="relative flex text-xl font-bold w-full cursor-pointer bg-white h-[40px] shadow-lg rounded-sm px-2 py-1"
                name="taskType"
                id="taskType"
              >
                <option value="select"></option>
                <option value="later1">Later 1</option>
                <option value="later2">Later 2</option>
                <option value="later3">Later 3</option>
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
