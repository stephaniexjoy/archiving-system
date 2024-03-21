import { getTaskById } from "@/app/lib/actions/actions";
import React from "react";

import { UseMultiFile } from "@/app/components/New_Components/File_Upload/UseMultiFile";
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

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <File_Upload_Card task={fetchTask} />
    </div>
  );
}
