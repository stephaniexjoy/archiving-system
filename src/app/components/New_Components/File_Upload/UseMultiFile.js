"use client";
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
import { MultiFileDropzone } from "./MultiFileDropzone";
import { useEdgeStore } from "@/app/lib/edgestore";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function UseMultiFile({ setUrls, setFileInfo, setHasFile }) {
  /* const handleFileUpload = (event) => {
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
  }; */

  const [fileStates, setFileStates] = useState([]);
  const [addedFiles, setAddedFiles] = useState([]);

  const { toast } = useToast();

  const { edgestore } = useEdgeStore();

  function updateFileProgress(key, progress) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  const handleFilesAdded = async (files) => {
    if (!Array.isArray(files)) {
      // Handle the case where addedFiles is not an array
      console.log(files);
      return;
    }
    // Update addedFiles state with new files
    setAddedFiles([...addedFiles, ...files]);
  };

  const handleUploadButtonClick = async () => {
    const uploadPromises = await Promise.all(
      addedFiles.map(async (addedFileState) => {
        try {
          console.log(addedFileState);
          const res = await edgestore.publicFiles1.upload({
            file: addedFileState.file,
            options: {
              manualFileName: addedFileState.file.path,
              temporary: true,
            },
            onProgressChange: async (progress) => {
              updateFileProgress(addedFileState.key, progress);
              if (progress === 100) {
                // wait 1 second to set it to complete
                // so that the user can see the progress bar at 100%
                await new Promise((resolve) => setTimeout(resolve, 1000));
                updateFileProgress(addedFileState.key, "COMPLETE");
              }
            },
          });

          console.log(res);
          return res;
        } catch (err) {
          updateFileProgress(addedFileState.key, "ERROR");
        }
      })
    );

    const getFileInfo = () => {
      const fileInfos = [];
      addedFiles.map((addedFileState) => {
        const name = addedFileState.file.name;
        const extension = addedFileState.file.name.split(".").pop();

        fileInfos.push({ name, extension });
      });
      return fileInfos;
    };

    setFileInfo(getFileInfo);

    const results = await Promise.all(uploadPromises);
    if (results) {
      toast;
    }

    getUrls(results, setUrls);
    console.log("All files uploaded successfully:", results);
  };

  const getUrls = (results, setUrls) => {
    const extractUrls = results.map((result) => result.url);
    setUrls(extractUrls);
  };

  useEffect(() => {
    // Update hasFile state based on fileStates and addedFiles
    if (fileStates.length === 0 || addedFiles.length === 0) {
      setHasFile(false);
      setAddedFiles([]);
    } else {
      setHasFile(true);
    }
  }, [fileStates]);
  return (
    <div>
      <MultiFileDropzone
        value={fileStates}
        onChange={(files) => {
          setFileStates(files);
          console.log(fileStates);
        }}
        onFilesAdded={handleFilesAdded}
        className="max-h-20 "
      />

      <div className="flex flex-col bottom-0 items-center justify-center w-full h-auto">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              disabled={fileStates.length === 0 || addedFiles.length === 0}
              className="w-[40%] h-10 border bg-[#AD5606] hover:bg-gray-700 text-xl text-white font-semibold py-1 px-4 my-2 cursor-pointer items-center justify-center rounded-lg"
            >
              Upload
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Do you want to Proceed?</AlertDialogTitle>
              <AlertDialogDescription>
                This action will upload your file temporarily. Mark it as done
                to confirm the upload.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="items-center">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleUploadButtonClick}>
                Upload
              </AlertDialogAction>
              {/*   <AlertDialogAction
                onClick={async () => {
                  console.log(uploadedFiles);

                  try {
                    const uploadPromises = uploadedFiles.map(async (upFile) => {
                      try {
                        console.log("Upfile", upFile);
                        const res = await edgestore.publicFiles1.upload({
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
                    });

                    const results = await Promise.all(uploadPromises);
                    if (results) {
                      toast;
                    }

                    getUrls(results, setUrls);
                    console.log("All files uploaded successfully:", results);
                  } catch (error) {
                    console.error("Error uploading files:", error);
                  }
                  console.log(urls);
                }}
              >
                Continue
              </AlertDialogAction> */}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
