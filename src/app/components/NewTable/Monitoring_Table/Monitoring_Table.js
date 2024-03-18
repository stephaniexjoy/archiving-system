import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import {
  getAllUsers,
  getCompletedTasksById,
  getTasks,
} from "@/app/lib/actions/actions";
import Tasks_ComboBox from "../../New_Components/Archiving/Tabs_Content/ComboBox/Tasks_ComboBox";

export default function Monitoring_Table() {
  const [users, setUsers] = useState([]);
  const [selectedTask, setSelectedTask] = useState();
  const [tasks, setTasks] = useState([]);
  const [tasksForComboBox, setTasksForComboBox] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchData = await getAllUsers();
      setUsers(fetchData);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchData = await getTasks();
      setTasks(fetchData);

      const tasksValues = fetchData.map((task) => ({
        id: task.id,
        value: task.title.toLowerCase(),
        label: task.title,
      }));

      console.log(tasksValues);

      setTasksForComboBox(tasksValues);
    };
    fetchTasks();
  }, [selectedTask]);

  useEffect(() => {
    const dataMapping = async () => {
      if (selectedTask !== "") {
        const complete = await getCompletedTasksById(selectedTask);

        // Map over users and add complete data if user.id is found
        const finalData = users.map((user) => {
          const matchedComplete = complete.find(
            (item) => item.userId === user.id
          );
          if (matchedComplete) {
            return {
              ...user,
              isDone: true, // Add complete data to the user object
            };
          } else {
            return { ...user, isDone: false }; // Return user as is if complete data is not found
          }
        });

        console.log(finalData);
        setData(finalData);
      }
    };
    dataMapping();
  }, [selectedTask]);

  console.log("Users", users);    
  console.log(selectedTask);
  console.log(tasksForComboBox);
  console.log(tasks);
  return (
    <div>
      <Tasks_ComboBox
        setSelectedTask={setSelectedTask}
        tasks={tasksForComboBox}
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
