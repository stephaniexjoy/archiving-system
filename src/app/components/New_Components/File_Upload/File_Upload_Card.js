"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UseMultiFile } from "./UseMultiFile";
import { confirmUpload } from "@/app/lib/actions/actions";
import { Button } from "@/components/ui/button";

const File_Upload_Card = ({ task }) => {
  const [urls, setUrls] = useState([]);
  const [fileInfo, setFileInfo] = useState([]);
  const [hasFile, setHasFile] = useState(false);

  return (
    <>
      <Card className="h-auto p-4">
        <CardContent className="">
          <div className="flex flex-col w-full h-full">
            <UseMultiFile
              setUrls={setUrls}
              setFileInfo={setFileInfo}
              setHasFile={setHasFile}
            />
            {hasFile ? (
              <Button
                onClick={async () => {
                  console.log(urls);
                  console.log(fileInfo);

                  const res = await confirmUpload(urls, fileInfo, task.id);
                  console.log(res);
                  console.log(fileInfo);
                }}
                className="flex mx-auto w-[80%] sm:w-[70%] 2xl:w-[60%] h-16 border bg-[#AD5606] hover:bg-gray-800 text-white text-xl font-bold py-1 px-4 rounded-xl my-2 cursor-pointer items-center justify-center"
              >
                Submit
              </Button>
            ) : (
              <Button
                onClick={async () => {
                  console.log(urls);
                  console.log(fileInfo);

                  const res = await confirmUpload(urls, fileInfo, task.id);
                  console.log(res);
                  console.log(fileInfo);
                }}
                className="flex mx-auto w-[80%] sm:w-[70%] 2xl:w-[60%] h-16 border bg-[#AD5606] hover:bg-gray-800 text-white text-xl font-bold py-1 px-4 rounded-xl my-2 cursor-pointer items-center justify-center"
              >
                Mark as done
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default File_Upload_Card;
