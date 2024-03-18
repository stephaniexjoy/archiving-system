"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
} from "@/components/ui/alert-dialog"
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import React from "react";
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

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <div className="flex flex-col mt-10 px-10">
        <h1 className="text-center text-[#5B0505] text-[45px] font-semibold md:shadow-zinc-400 mb-5">
          Missing Tasks
        </h1>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col bg-white w-[60%] p-4 rounded-md ">
            <label className="w-full text-[#5B0505] text-lg font-semibold mr-4">
              Missing:
            </label>
            <div className="w-full">
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
                          <Card className="w-full h-auto">
                            <CardContent>
                              <div className="flex flex-row text-xl text-black p-4 mt-4">
                                <div className="w-full flex flex-col">
                                  <h1 className="text-4xl font-semibold mb-48">
                                    {task.title}
                                  </h1>
                                  <p className="mb-48 text-2xl">
                                    {task.description}
                                  </p>
                                  <div>
                                    <h1 className="text-lg mb-0">
                                      Date Posted:{" "}
                                      {task.deadlineCreated.toLocaleString()}
                                    </h1>
                                  </div>
                                </div>
                                <div className="w-[80%]">
                                  <div className="flex flex-col bg-white p-4 gap-4 drop-shadow-2xl rounded-xl">
                                    <div className="flex flex-row gap-x-60">
                                      <h1 className="text-xl">Your work</h1>
                                      <h1 className="text-lg text-red-600">
                                        Missing
                                      </h1>
                                    </div>
                                    <Dialog>
                                      <DialogTrigger className="w-full h-14 border bg-white hover:bg-gray-100 text-[#AD5606] font-bold py-1 px-4 rounded my-2 cursor-pointer inline-flex items-center justify-center mt-16">
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
                                          {uploadedFiles.map((file, index) => (
                                            <React.Fragment key={index}>
                                              <div className="flex flex-row">
                                                <div className="flex border w-full h-auto  drop-shadow-2xl mb-2 rounded-lg overflow-x-hidden items-center">
                                                  <div className="flex flex-row h-auto text-xl font-semibold justify-between items-center p-2 w-full">
                                                    <div>
                                                      <p>{file.name}</p>
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
                                          </AlertDialog>{" "}
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
                                      className="w-full h-14 border bg-[#AD5606] hover:bg-[#AD5606]-700 text-white font-bold py-1 px-4 rounded"
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
