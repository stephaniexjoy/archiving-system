import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default function Monitoring_Table() {
  const sampleData = [
    {
      email: "test",
      name: "testName",
    },
  ];
  return (
    <div>
      Monitoring_Table
      <DataTable columns={columns} data={sampleData} />
    </div>
  );
}
