"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { LuArrowUpDown } from "react-icons/lu";
import React, { useState } from "react";
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
          <Button className="bg-[#8F8F8F] hover:bg-[#6A6A6A] focus:outline-none h-10 w-48 font-bold">
            <Dialog>
              <DialogTrigger className="bg-[#8F8F8F] hover:bg-[#6A6A6A] focus:outline-none h-10 w-48 font-bold">
                Edit
              </DialogTrigger>
              <DialogContent className="bg-white max-w-[700px] max-h-[600px] h-auto py-6 px-6 mx-auto overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Edit</DialogTitle>
                  <DialogDescription>
                    {/* You can upload files here. */}
                    <AddCategory_Dialog category={"Material"} />
                    <AddCategory_Dialog category={"Course"} />
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col w-full">

                </div>
                <div className="flex flex-col bottom-0 items-center justify-center w-full h-auto">
                  {/* <label
                    htmlFor="file-upload"
                    className="w-[40%] h-10 border bg-[#AD5606] hover:bg-gray-700 text-xl text-white font-semibold py-1 px-4 my-2 cursor-pointer inline-flex items-center justify-center rounded-lg"
                  >
                    Browse
                  </label>{" "} */}
                  {/* <AlertDialog>
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
                          This action will upload your file temporarily. Mark it
                          as done to confirm the upload.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="items-center">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={async () => {
                            console.log(uploadedFiles);

                            try {
                              const uploadPromises = uploadedFiles.map(
                                async (upFile) => {
                                  try {
                                    console.log("Upfile", upFile);
                                    const res =
                                      await edgestore.publicFiles1.upload({
                                        file: upFile,
                                        options: {
                                          manualFileName: upFile.name,
                                          temporary: true,
                                        },
                                      });
                                    console.log(res);
                                    return res;
                                  } catch (error) {
                                    console.error(error);
                                    throw error; // rethrowing error to handle at the end
                                  }
                                }
                              );

                              const results = await Promise.all(uploadPromises);
                              if (results) {
                                toast;
                              }

                              getUrls(results, setUrls);
                              console.log(
                                "All files uploaded successfully:",
                                results
                              );
                            } catch (error) {
                              console.error("Error uploading files:", error);
                            }
                            console.log(urls);
                          }}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>{" "} */}
                </div>
              </DialogContent>
            </Dialog>
          </Button>
        </div>
      );
    },
  },
];
