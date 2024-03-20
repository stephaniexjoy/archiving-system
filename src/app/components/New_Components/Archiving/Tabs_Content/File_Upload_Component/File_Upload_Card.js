import { confirmUpload } from "@/app/lib/actions/actions";
import { useEdgeStore } from "@/app/lib/edgestore";
import { useState } from "react";

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

import { Card, CardContent } from "@/components/ui/card";
import { UseMultiFile } from "../../../File_Upload/UseMultiFile";

const File_Upload_Card = ({ task }) => {
  const { toast } = useToast();
  const { edgestore } = useEdgeStore();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  const [fileInfo, setFileInfo] = useState([]);

  return (
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
                Date Posted: {task.deadlineCreated.toLocaleString()}
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
                <h1 className="text-sm sm:text-md md:text-md lg:text-md xl:text-md 2xl:text-md">
                  Your work
                </h1>
                <h1 className="text-sm -ml-5 text-green-600">Assigned</h1>
              </div>
              <Dialog>
                <DialogTrigger className="flex mx-auto w-[80%] h-10 border bg-[#AD5606] hover:bg-gray-100 text-white font-bold rounded cursor-pointer items-center justify-center mt-8 sm:w-full">
                  Upload Here
                </DialogTrigger>
                <DialogContent className="bg-slate-50 w-[90%] h-auto py-6 px-6 mx-auto overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Upload files</DialogTitle>
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
                            This action will upload your file temporarily. Mark
                            it as done to confirm the upload.
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

                                const results = await Promise.all(
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
                                console.error("Error uploading files:", error);
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
                  const res = await confirmUpload(urls, fileInfo, task.id);
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
  );
};

export default File_Upload_Card;
