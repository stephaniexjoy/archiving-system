"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ArchivedTask_Archiving_tabs from "./Tabs_Content/ArchivedTask_Archiving_tabs";
import AssignedTask_Archiving_tabs from "./Tabs_Content/AssignedTask_Archiving_tabs";
import Files_Archiving_tabs from "./Tabs_Content/Files_Archiving_tabs";
import MissingTask_Archiving_tabs from "./Tabs_Content/MissingTask_Archiving_tabs";
import CompletedTask_Archiving_tabs from "./Tabs_Content/CompletedTask_Archiving_Tab";
import { useSession } from "next-auth/react";
import Monitoring_Table from "../../NewTable/Monitoring_Table/Monitoring_Table";

function filterTasksByDate(tasks, completedTasks) {
  // Separate tasks into completed and incomplete categories
  const completedTaskIds = completedTasks.map((task) => task.taskId);
  const incompleteTasks = tasks.filter(
    (task) => !completedTaskIds.includes(task.id)
  );

  console.log(completedTaskIds);
  console.log(incompleteTasks);

  // Your existing code for filtering tasks by date
  const currentDate = new Date();
  const currentWeekStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() - currentDate.getDay()
  );
  const currentWeekEnd = new Date(currentWeekStart);
  currentWeekEnd.setDate(currentWeekStart.getDate() + 6);

  const nextWeekStart = new Date(currentWeekEnd);
  nextWeekStart.setDate(currentWeekEnd.getDate() + 1);
  const nextWeekEnd = new Date(nextWeekStart);
  nextWeekEnd.setDate(nextWeekStart.getDate() + 6);

  const filteredTasks = {
    completed: [],
    incomplete: {
      thisWeek: [],
      nextWeek: [],
      laterThanNextWeek: [],
      pastDue: [],
      noDeadline: [],
    },
    incomplete1: [],
    archived: [],
  };
  const archivedTasks = tasks.filter((task) => !task.isActive);

  console.log(archivedTasks);
  // Populate filteredTasks object
  incompleteTasks.forEach((task) => {
    if (!task.setDeadline) {
      filteredTasks.incomplete.noDeadline.push(task);
      filteredTasks.incomplete1.push(task);
      return; // Skip further processing for tasks with no deadline
    }
    const setDeadline = new Date(task.setDeadline);
    if (setDeadline < currentDate) {
      filteredTasks.incomplete.pastDue.push(task);
    } else if (setDeadline >= nextWeekStart && setDeadline <= nextWeekEnd) {
      filteredTasks.incomplete.nextWeek.push(task);
      filteredTasks.incomplete1.push(task);
    } else if (setDeadline > nextWeekEnd) {
      filteredTasks.incomplete.laterThanNextWeek.push(task);
      filteredTasks.incomplete1.push(task);
    } else if (
      setDeadline >= currentWeekStart &&
      setDeadline <= currentWeekEnd
    ) {
      filteredTasks.incomplete.thisWeek.push(task);
      filteredTasks.incomplete1.push(task);
    }
  });

  // Add completed tasks to the filteredTasks object
  filteredTasks.completed = completedTasks;

  archivedTasks.forEach((task) => {
    filteredTasks.archived.push(task);
  });

  return filteredTasks;
}

function filterTasks(tasks) {
  const currentDate = new Date();
  const currentWeekStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() - currentDate.getDay()
  );
  const currentWeekEnd = new Date(currentWeekStart);
  currentWeekEnd.setDate(currentWeekStart.getDate() + 6);

  const nextWeekStart = new Date(currentWeekEnd);
  nextWeekStart.setDate(currentWeekEnd.getDate() + 1);
  const nextWeekEnd = new Date(nextWeekStart);
  nextWeekEnd.setDate(nextWeekStart.getDate() + 6);

  const filteredTasks = {
    thisWeek: [],
    nextWeek: [],
    laterThanNextWeek: [],
    pastDue: [],
    noDeadline: [],
    archived: [],
  };

  tasks.forEach((task) => {
    if (task.isActive === false) {
      filteredTasks.archived.push(task);
      return;
    }
    if (!task.setDeadline) {
      filteredTasks.noDeadline.push(task);
      return; // Skip further processing for tasks with no deadline
    }
    const setDeadline = new Date(task.setDeadline);
    if (setDeadline >= currentWeekStart && setDeadline <= currentWeekEnd) {
      filteredTasks.thisWeek.push(task);
    } else if (setDeadline >= nextWeekStart && setDeadline <= nextWeekEnd) {
      filteredTasks.nextWeek.push(task);
    } else if (setDeadline > nextWeekEnd) {
      filteredTasks.laterThanNextWeek.push(task);
    } else if (setDeadline < currentDate) {
      filteredTasks.pastDue.push(task);
    }
  });

  return filteredTasks;
}

function ArchivingTab({
  children,
  datas,
  materials,
  courses,
  instructors,
  filetype,
  programs,
  tasks,
  completedTasks,
  archivedTasks
}) {
  const { data: session, status } = useSession();
  console.log(tasks);
  console.log(completedTasks);
  console.log("Atrc",archivedTasks);

  const filteredTasks = filterTasksByDate(tasks, completedTasks);
  console.log("Filtered ", filteredTasks);

  if (status === "loading") return <>Loading...</>;

  if (status === "authenticated") {
    return (
      <Tabs
        defaultValue="files"
        className="
        font-bold font-arial text-center
        sm:w-auto sm:text-sm 
        md:w-auto md:text-sm 
        lg:w-auto lg:text-lg
        xl:w-auto xl:text-xl
        2xl:w-auto 2xl:text-2xl
        "
      >
        <TabsList
          className="
          grid grid-cols-2 grid-rows-2 w-auto h-auto items-center justify-center text-center
          sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:w-auto sm:h-auto sm:items-center sm:justify-center sm:text-center
          md:grid md:w-auto md:h-auto md:items-center md:justify-center md:text-center
          lg:inline-flex lg:grid-cols-3 lg:grid-rows-2 lg:items-center lg:justify-center lg:text-center lg:w-auto
          xl:inline-flex xl:grid-cols-6 xl:grid-rows-1 xl:items-center xl:justify-center xl:text-center xl:w-auto
          2xl:inline-flex 2xl:grid-cols-6 2xl:grid-rows-1 2xl:items-center 2xl:justify-center 2xl:text-center 2xl:w-auto
          "
        >
          <TabsTrigger
            value="files"
            className="
            font-bold font-arial text-md 
            sm:w-auto sm:text-md 
            md:w-auto md:text-lg
            lg:w-auto lg:text-lg
            xl:w-auto xl:text-xl
            2xl:w-auto 2xl:text-xl
            "
          >
            All Files
          </TabsTrigger>
          <TabsTrigger
            value="assignedtask"
            className="
            font-bold font-arial text-md 
            sm:w-auto sm:text-md 
            md:w-auto md:text-lg
            lg:w-auto lg:text-lg
            xl:w-auto xl:text-xl
            2xl:w-auto 2xl:text-xl
            "
          >
            Assigned Task
          </TabsTrigger>
          <TabsTrigger
            value="missingtask"
            className="
            font-bold font-arial text-md 
            sm:w-auto sm:text-md 
            md:w-auto md:text-lg
            lg:w-auto lg:text-lg
            xl:w-auto xl:text-xl
            2xl:w-auto 2xl:text-xl
            "
          >
            Missing Task
          </TabsTrigger>
          <TabsTrigger
            value="completedtask"
            className="
            font-bold font-arial text-md 
            sm:w-auto sm:text-md 
            md:w-auto md:text-lg
            lg:w-auto lg:text-lg
            xl:w-auto xl:text-xl
            2xl:w-auto 2xl:text-xl
            "
          >
            Completed Task
          </TabsTrigger>

          {session?.user?.position === "Secretary" && (
            <>
              <TabsTrigger
                value="archivedtask"
                className="
                font-bold font-arial text-md 
                sm:w-auto sm:text-md 
                md:w-auto md:text-lg
                lg:w-auto lg:text-lg
                xl:w-auto xl:text-xl
                2xl:mt-0 2xl:w-auto 2xl:text-xl
                "
              >
                Archived Task
              </TabsTrigger>

              <TabsTrigger
                value="monitor"
                className="
                font-bold font-arial text-md 
                sm:w-auto sm:text-md 
                md:w-auto md:text-lg
                lg:w-auto lg:text-lg
                xl:w-auto xl:text-xl
                2xl:mt-0 2xl:w-auto 2xl:text-xl
                "
              >
                Monitoring
              </TabsTrigger>
            </>
          )}
        </TabsList>
        <TabsContent value="files">
          <Files_Archiving_tabs
            dataWithFormattedDate={datas}
            materials={materials}
            courses={courses}
            instructors={instructors}
            programs={programs}
            filetype={filetype}
          />
        </TabsContent>
        <TabsContent value="assignedtask">
          <AssignedTask_Archiving_tabs
            position={session.user.position}
            tasks={filteredTasks.incomplete}
            oldTasks={filteredTasks.incomplete1}
            materials={materials}
            courses={courses}
          />
        </TabsContent>
        <TabsContent value="missingtask">
          <MissingTask_Archiving_tabs
            tasks={filteredTasks.incomplete.pastDue}
          />
        </TabsContent>
        <TabsContent value="completedtask">
          <CompletedTask_Archiving_tabs tasks={filteredTasks.completed} />
        </TabsContent>

        {session?.user?.position === "Secretary" && (
          <>
            <TabsContent value="archivedtask">
              <ArchivedTask_Archiving_tabs tasks={archivedTasks} />
            </TabsContent>
            <TabsContent value="monitor">
              <>
                <div
                  className="
                  flex flex-col mt-16 px-4
                  sm:flex sm:flex-col sm:mt-16 sm:px-4
                  md:flex md:flex-col md:mt-16 md:px-4
                  lg:flex lg:flex-col lg:mt-16 lg:px-4
                  xl:flex xl:flex-col xl:mt-16 xl:px-4
                  2xl:flex 2xl:flex-col 2xl:mt-16 2xl:px-4
                  "
                >
                  <h1
                    className="
                    text-center text-[#5B0505] text-[28px] font-bold mb-5
                    sm:text-[32px] 
                    md:text-[36px]  md:shadow-zinc-400
                    lg:text-[45px] 
                    "
                  >
                    Monitoring
                  </h1>
                  <Monitoring_Table />
                </div>
              </>
            </TabsContent>
          </>
        )}
      </Tabs>
    );
  }
}

export default ArchivingTab;
