"use client";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "../columns";

export default function ActivityTable_Secretary({ activity }) {
  return (
    <div>
      <DataTable columns={columns} data={activity} />
    </div>
  );
}
