import React from "react";
import { DataTable } from "../data-table";
import { columns } from "../columns";

export default function ActivityTable_Superadmin({activity}) {
  return (
    <div>
      <DataTable columns={columns} data={activity}/>
    </div>
  );
}
