import React from "react";
import { DataTable } from "../data-table";
import { columns } from "../columns";

export default function CompletedTask_Table({ tasks }) {
  return (
    <div>
      <DataTable columns={columns} data={tasks} />
    </div>
  );
}
