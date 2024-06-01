import React from "react";
import { DataTable } from "../data-table";
import { columns } from "./columns";

export default function AssignedTask_Table({ tasks }) {
  console.log(tasks);
  return (
    <div>
      <DataTable columns={columns} data={tasks} />
    </div>
  );
}
