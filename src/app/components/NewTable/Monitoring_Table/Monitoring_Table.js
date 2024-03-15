import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { getAllUsers } from "@/app/lib/actions/actions";
import Tasks_ComboBox from "../../New_Components/Archiving/Tabs_Content/ComboBox/Tasks_ComboBox";

export default function Monitoring_Table() {
  const [users, setUsers] = useState([]);
  const [selectedTask, setSelectedTask] = useState();
  const sampleData = [
    {
      email: "test",
      name: "testName",
    },
    {
      email: "test1",
      name: "asdqweame",
    },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchData = await getAllUsers();
      setUsers(fetchData);
    };
    fetchUsers();
  }, []);

  console.log("Users", users);
  console.log(selectedTask);
  return (
    <div>
      Monitoring_Table
      <br />
      <Tasks_ComboBox setSelectedTask={setSelectedTask} />
      <DataTable columns={columns} data={users} />
    </div>
  );
}
