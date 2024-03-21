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
      <Card
        className="
        w-full h-auto
        sm:w-full sm:h-auto
        md:w-full md:h-auto
        lg:w-full lg:h-auto
        xl:w-full xl:h-auto
        2xl:w-[95%] 2xl:h-[90%] 2xl:px-5
        "
      >
        <CardContent>
          <div
            className="
            flex flex-col text-xl text-black mt-4
            sm:flex sm:flex-col sm:text-xl sm:text-black sm:mt-4
            md:flex md:flex-col md:text-xl md:text-black md:mt-4
            lg:flex lg:flex-col lg:text-xl lg:text-black lg:mt-4 lg:items-center lg:text-center
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
              xl:w-full xl:flex xl:flex-col xl:items-start
              2xl:w-full 2xl:flex 2xl:flex-col 2xl:items-start
              "
            >
              <div
                className="
                ml-0 font-semibold mb-16
                xl:ml-0 xl:font-semibold xl:mb-12
                2xl:mb-12 2xl:text-left 2xl:flex 2xl:flex-col
                "
              >
                <h1 className="text-6xl text-start">{task.title}</h1>
                <div className="flex flex-row">
                  <div className="text-sm text-start">{task.uploaderName}</div>
                  <div className="text-sm text-start">
                    Date Posted: {task.deadlineCreated.toLocaleString()}
                  </div>
                </div>
              </div>
              <p
                className="
                text-md mb-16
                2xl:mb-16 2xl:text-2xl
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
                  Due: {task.setDeadline.toLocaleString()}
                </h1>
                {/* <Separator /> */}
              </div>
            </div>
            <div
              className="
              flex w-full justify-center items-center
              sm:w-full
              md:w-full
              lg:w-full
              xl:w-full
              2xl:flex 2xl:w-[80%] 2xl:justify-end
              "
            >
              <Card
                className="
                flex flex-col bg-slate-100 p-4 gap-2 shadow-2xl rounded-xl mt-4
                sm:flex sm:flex-col sm:bg-slate-100 sm:p-8 sm:gap-2 sm:shadow-2xl sm:rounded-xl sm:mt-4
                md:flex md:flex-col md:bg-slate-100 md:p-8 md:gap-2 md:shadow-2xl md:rounded-xl md:mt-4
                lg:flex lg:flex-col lg:bg-slate-100 lg:p-8 lg:gap-2 lg:shadow-2xl lg:rounded-xl lg:mt-4 lg:w-[80%]
                xl:flex xl:flex-col xl:mt-0 xl:ml-10 xl:p-4 xl:gap-4 xl:drop-shadow-2xl xl:rounded-xl xl:w-[90%]
                2xl:flex 2xl:flex-col 2xl:mt-6 2xl:ml-0 2xl:p-4 2xl:gap-0 2xl:drop-shadow-2xl 2xl:rounded-xl 2xl:w-[70%] 2xl:h-auto
                "
              >
                <CardContent className="">
                  <div
                    className="
                    flex flex-row gap-x-32
                    sm:flex sm:flex-row sm:gap-x-64
                    md:flex md:flex-row md:gap-x-64 md:mb-5
                    lg:flex lg:flex-row lg:gap-x-[69%] lg:mb-5
                    xl:flex xl:flex-row xl:gap-x-[43%]
                    2xl:flex 2xl:flex-row 2xl:gap-x-48 2xl:p-4
                    "
                  >
                    <h1 className="font-semibold text-sm sm:text-md md:text-lg lg:text-md xl:text-md 2xl:text-[25px]">
                      Your work
                    </h1>
                    <h1 className="font-semibold text-sm sm:text-sm md:text-lg 2xl:text-[25px] ml-10 text-red-600">
                      Missing
                    </h1>
                  </div>

                  <div className="flex flex-col w-full">
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

                          const res = await confirmUpload(
                            urls,
                            fileInfo,
                            task.id
                          );
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

                          const res = await confirmUpload(
                            urls,
                            fileInfo,
                            task.id
                          );
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
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default File_Upload_Card;
