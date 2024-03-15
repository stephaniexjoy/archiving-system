"use client";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const sampleData = [
  {
    name: "test",
  },
];

export default function ViewFaculty_Secretary({ data }) {
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
