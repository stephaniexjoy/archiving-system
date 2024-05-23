import { getTaskById } from "@/app/lib/actions/actions";
import { Card, CardContent } from "@/components/ui/card";

import File_Upload_Card from "@/app/components/New_Components/File_Upload/File_Upload_Card";
// import { Separator } from "@/components/ui/separator"

export default async function page({ searchParams }) {
  const searchParamsObject = {};

  // Iterate over the entries of searchParams and populate the searchParamsObject
  Object.entries(searchParams).forEach(([key, value]) => {
    searchParamsObject[key] = value;
  });

  console.log(searchParamsObject);

  const fetchTask = await getTaskById(searchParamsObject.taskId);
  console.log(fetchTask);
  console.log(fetchTask.CompletedTask);

  const dateNow = new Date();

  return (
    <div className="flex w-screen h-[85vh] justify-center items-center">
      <Card
        className="
        w-[95%] h-[90%] px-5
        sm:w-[95%] sm:h-[90%] sm:px-5 sm:overflow-y-auto
        md:w-[95%] md:h-[90%] md:px-5 md:overflow-y-auto
        lg:w-[95%] lg:h-[90%] lg:px-5 lg:overflow-y-auto
        xl:w-[95%] xl:h-[90%] xl:px-5
        2xl:w-[95%] 2xl:h-[90%] 2xl:px-5
        "
      >
        <CardContent>
          <div
            className="
            flex flex-col text-xl text-black mt-4
            sm:flex sm:flex-col sm:text-xl sm:text-black sm:mt-4
            md:flex md:flex-col md:text-xl md:text-black md:mt-4
            lg:flex lg:flex-col lg:text-xl lg:text-black lg:mt-4
            xl:flex xl:flex-row xl:text-xl xl:text-black xl:mt-4
            2xl:flex 2xl:flex-row 2xl:text-xl 2xl:text-black 2xl:mt-4
            "
          >
            <div
              className="
              w-full h-full flex flex-col items-center                          
              sm:w-full sm:flex sm:flex-col sm:items-center
              md:w-full md:flex md:flex-col md:items-center
              lg:w-full lg:flex lg:flex-col lg:items-center
              xl:w-full xl:flex xl:flex-col xl:items-start xl:gap-52
              2xl:w-full 2xl:flex 2xl:flex-col 2xl:items-start 2xl:gap-52 
              "
            >
              <div
                className="
                ml-0 font-semibold mb-16
                sm:ml-0 sm:font-semibold sm:mb-36
                md:ml-0 md:font-semibold md:mb-36
                lg:ml-0 lg:font-semibold lg:mb-16
                xl:ml-0 xl:font-semibold xl:mb-12
                2xl:mb-12 2xl:text-left 2xl:flex 2xl:flex-col
                "
              >
                <h1
                  className="
                  text-xl text-center
                  sm:text-2xl sm:text-center
                  md:text-3xl md:text-center
                  lg:text-4xl lg:text-center
                  xl:text-5xl xl:text-start
                  2xl:text-6xl 2xl:text-start
                  "
                >
                  {fetchTask.title}
                </h1>
                <div className="flex flex-col">
                  <div
                    className="
                  text-sm text-center
                  sm:text-sm sm:text-center
                  md:text-sm md:text-center
                  lg:text-sm lg:text-center
                  xl:text-sm xl:text-start
                  2xl:text-sm 2xl:text-start
                  "
                  >
                    Created Task by: {fetchTask.uploaderName}
                  </div>
                  <div
                    className="
                  text-sm text-center
                  sm:text-sm sm:text-center
                  md:text-sm md:text-center
                  lg:text-sm lg:text-center
                  xl:text-sm xl:text-start
                  2xl:text-sm 2xl:text-start
                  "
                  >
                    Date Posted: {fetchTask.deadlineCreated.toLocaleString()}
                  </div>
                </div>
              </div>
              <p
                className="
                text-md mb-16
                sm:text-md sm:mb-36
                md:text-md md:mb-36
                lg:text-md lg:mb-36
                xl:text-md xl:mb-16
                2xl:mb-16 2xl:text-2xl
                "
              >
                {fetchTask.description}
              </p>
              <div>
                <h1
                  className="
                  text-xs mb-5
                  2xl:text-sm 2xl:mt-0 2xl:mb-0
                  "
                >
                  Due:
                  {fetchTask && fetchTask.setDeadline
                    ? fetchTask.setDeadline.toLocaleString()
                    : "No due"}
                </h1>
              </div>
            </div>
            <div
              className="
              flex w-full h-full justify-center items-center
              sm:flex sm:w-full sm:h-full sm:justify-center sm:items-center
              md:flex md:w-full md:h-full md:justify-center md:items-center
              lg:flex lg:w-full lg:h-full lg:justify-center lg:items-center
              xl:flex xl:w-full xl:h-full xl:justify-end xl:items-end
              2xl:flex 2xl:w-full 2xl:h-full 2xl:justify-end 2xl:items-end
              "
            >
              <Card
                className="
              flex flex-col bg-slate-100 p-0 gap-2 shadow-2xl rounded-xl mt-4 w-full
              sm:flex sm:flex-col sm:bg-slate-100 sm:p-8 sm:gap-2 sm:shadow-2xl sm:rounded-xl sm:mt-4
              md:flex md:flex-col md:bg-slate-100 md:p-8 md:gap-2 md:shadow-2xl md:rounded-xl md:mt-4
              lg:flex lg:flex-col lg:bg-slate-100 lg:p-8 lg:gap-2 lg:shadow-2xl lg:rounded-xl lg:mt-4 lg:w-[80%]
              xl:flex xl:flex-col xl:mt-0 xl:ml-10 xl:p-4 xl:gap-4 xl:drop-shadow-2xl xl:rounded-xl xl:w-[90%]
              2xl:flex 2xl:flex-col 2xl:mt-6 2xl:mb-6 2xl:ml-0 2xl:p-4 2xl:gap-0 2xl:drop-shadow-2xl 2xl:rounded-xl 2xl:w-[70%] 2xl:h-auto
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
                  2xl:flex 2xl:flex-row 2xl:gap-x-48 2xl:p-4 text
                  "
                  >
                    <h1 className="font-semibold text-sm sm:text-md md:text-lg lg:text-md xl:text-md 2xl:text-[25px]">
                      Your work
                    </h1>

                    {fetchTask.CompletedTask.length < 1 ? (
                      <>
                        {dateNow > fetchTask.setDeadline ? (
                          <h1 className="font-semibold text-sm sm:text-sm md:text-lg 2xl:text-[25px] ml-10 text-red-600">
                            Missing
                          </h1>
                        ) : dateNow < fetchTask.setDeadline ? (
                          <h1 className="font-semibold text-sm sm:text-sm md:text-lg 2xl:text-[25px] ml-10 text-green-600">
                            Upcoming
                          </h1>
                        ) : (
                          <h1 className="font-semibold text-sm sm:text-sm md:text-lg 2xl:text-[25px] ml-10 text-blue-600">
                            Due Today
                          </h1>
                        )}
                      </>
                    ) : (
                      <h1 className="font-semibold text-sm sm:text-sm md:text-lg 2xl:text-[25px] ml-10 text-green-800">
                        Completed
                      </h1>
                    )}
                  </div>

                  <div className="flex flex-col w-full">
                    {fetchTask.CompletedTask.length > 0 && <>qwe</>}
                    {fetchTask && (
                      <>
                        <File_Upload_Card task={fetchTask} />
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    /*  <><Tasks_Skeleton/></> */
  );
}
