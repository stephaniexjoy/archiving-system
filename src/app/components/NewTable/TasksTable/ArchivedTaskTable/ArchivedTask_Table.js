import React from "react";
import { columns } from "./columns";
import { DataTable } from "../data-table";

export default function ArchivedTask_Table({ tasks }) {
  return (
    <div>
      <DataTable columns={columns} data={tasks} />
    </div>
  );
}
