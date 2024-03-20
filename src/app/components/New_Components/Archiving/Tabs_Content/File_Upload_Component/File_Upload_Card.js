import { confirmUpload } from "@/app/lib/actions/actions";
import { useEdgeStore } from "@/app/lib/edgestore";
import { useState } from "react";

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
import { Button } from "@/components/ui/button";

const File_Upload_Card = ({ task }) => {
  const { toast } = useToast();
  const { edgestore } = useEdgeStore();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  const [fileInfo, setFileInfo] = useState([]);

  const [handleUpload, setHandleUpload] = useState([]);

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
          sm:flex sm:flex-col sm:text-xl sm:text-black sm:mt-4
          md:flex md:flex-col md:text-xl md:text-black md:mt-4
          lg:flex lg:flex-col lg:text-xl lg:text-black lg:mt-4 lg:items-center
          xl:flex xl:flex-row xl:text-xl xl:text-black xl:mt-4
          2xl:flex 2xl:flex-row 2xl:text-xl 2xl:text-black 2xl:mt-4
          "
        >
          <div
            className="
            w-full flex flex-col                                         
            sm:w-full sm:flex sm:flex-col
            md:w-full md:flex md:flex-col
            lg:w-full lg:flex lg:flex-col lg:items-center
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
            flex w-full justify-center items-center
            sm:w-full
            md:w-full
            lg:w-full
            xl:w-full
            2xl:w-full 
            "
          >
            <div
              className="
              flex flex-col bg-slate-100 p-4 gap-2 shadow-2xl rounded-xl mt-4
              sm:flex sm:flex-col sm:bg-slate-100 sm:p-8 sm:gap-2 sm:shadow-2xl sm:rounded-xl sm:mt-4
              md:flex md:flex-col md:bg-slate-100 md:p-8 md:gap-2 md:shadow-2xl md:rounded-xl md:mt-4
              lg:flex lg:flex-col lg:bg-slate-100 lg:p-8 lg:gap-2 lg:shadow-2xl lg:rounded-xl lg:mt-4
              xl:flex xl:flex-col xl:mt-0 xl:-ml-40 xl:p-8 xl:gap-4 xl:drop-shadow-2xl xl:rounded-xl
              2xl:flex 2xl:flex-col 2xl:mt-0 2xl:ml-0 2xl:p-4 2xl:gap-0 2xl:drop-shadow-2xl 2xl:rounded-xl
              "
            >
              <div
                className="
                flex flex-row gap-x-32
                sm:flex sm:flex-row sm:gap-x-64
                md:flex md:flex-row md:gap-x-64 md:mb-5
                lg:flex lg:flex-row lg:gap-x-72 lg:mb-5
                xl:flex xl:flex-row xl:gap-x-0
                2xl:flex 2xl:flex-row 2xl:gap-x-0 w-auto
                "
              >
                <h1 className="text-sm sm:text-md md:text-lg lg:text-md xl:text-md 2xl:text-md">
                  Your work
                </h1>
                <h1 className="text-sm sm:text-sm md:text-lg -ml-5 text-green-600">Assigned</h1>
              </div>
              <Dialog>
                <DialogTrigger className="flex mx-auto w-[80%] sm:w-[70%] h-10 border bg-[#AD5606] hover:bg-gray-100 text-white font-bold rounded cursor-pointer items-center justify-center mt-8">
                  Upload Here
                </DialogTrigger>
                <DialogContent className="bg-slate-50 w-[90%] sm:w-[80%] h-auto py-6 px-6 mx-auto overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Upload files</DialogTitle>
                    <DialogDescription>
                      You can upload files here.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col w-full">
                    <UseMultiFile />
                  </div>
                </DialogContent>
              </Dialog>
              <button
                onClick={async () => {
                  const res = await confirmUpload(urls, fileInfo, task.id);
                  console.log(res);
                  console.log(fileInfo);
                }}
                className="flex mx-auto w-[80%] sm:w-[70%] h-10 border bg-[#AD5606] hover:bg-gray-100 text-white font-bold py-1 px-4 rounded my-2 cursor-pointer items-center justify-center"
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
