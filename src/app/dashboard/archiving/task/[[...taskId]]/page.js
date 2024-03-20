import { getTaskById } from "@/app/lib/actions/actions";
import React from "react";

export default async function page({ searchParams }) {
  const searchParamsObject = {};

  // Iterate over the entries of searchParams and populate the searchParamsObject
  Object.entries(searchParams).forEach(([key, value]) => {
    searchParamsObject[key] = value;
  });

  console.log(searchParamsObject);

  const fetchTask = await getTaskById(searchParamsObject.taskId);
  console.log(fetchTask);

  return <div className="w-screen h-screen">{fetchTask.title}</div>;
}
