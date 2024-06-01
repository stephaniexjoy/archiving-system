import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";


export const AddFile_Dialog = () => {
  
  const [uploadedFiles, setUploadedFiles] = useState([]); // Define uploadedFiles state here

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

  return;
  <>
    <Dialog>
      <DialogTrigger className="w-full h-10 border bg-white hover:bg-gray-100 text-[#AD5606] font-bold py-1 px-4 rounded my-2 cursor-pointer inline-flex items-center justify-center">
        Add work
      </DialogTrigger>
      <DialogContent>
        {" "}
        <DialogHeader>
          <DialogTitle className="text-2xl">Upload files</DialogTitle>
          <DialogDescription>You can upload files here.</DialogDescription>
        </DialogHeader>
        <div>
          {uploadedFiles.map((file, index) => (
            <div
              className="border border-black drop-shadow-2xl mb-2 rounded-lg overflow-x-hidden"
              key={index}
            >
              <div className="flex text-xl font-semibold justify-between items-center p-2 overflow-x-hidden">
                <p>{file.name}</p>
                <button
                  className="text-red-600"
                  onClick={() => handleRemoveFile(index)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="file-upload"
            className="w-[50%] h-10 border bg-[#AD5606] hover:bg-gray-700 text-xl text-white font-semibold py-1 px-4 rounded my-2 cursor-pointer inline-flex items-center justify-center"
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
        </div>
      </DialogContent>
    </Dialog>
  </>;
}
