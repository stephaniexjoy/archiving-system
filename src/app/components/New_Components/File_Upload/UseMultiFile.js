"use client";
import { MultiFileDropzone } from "./MultiFileDropzone";
import { useEdgeStore } from "@/app/lib/edgestore";
import { useState } from "react";
export function UseMultiFile() {
  const [fileStates, setFileStates] = useState([]);
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
  return (
    <div>
      <MultiFileDropzone
        value={fileStates}
        onChange={(files) => {
          setFileStates(files);
          console.log(fileStates);
        }}
        onFilesAdded={async (addedFiles) => {
          if (!Array.isArray(addedFiles)) {
            // Handle the case where addedFiles is not an array
            console.log(addedFiles);
            return;
          }

          setFileStates([...fileStates, ...addedFiles]);
          await Promise.all(
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
              } catch (err) {
                updateFileProgress(addedFileState.key, "ERROR");
              }
            })
          );
        }}
      />
    </div>
  );
}
