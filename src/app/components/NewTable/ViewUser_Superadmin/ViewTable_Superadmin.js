import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const ViewTable_Superadmin = ({ users }) => {
  return (
    <div>
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default ViewTable_Superadmin;
