"use client"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import ArchivedTask_Archiving_tabs from "./Tabs_Content/ArchivedTask_Archiving_tabs"
import AssignedTask_Archiving_tabs from "./Tabs_Content/AssignedTask_Archiving_tabs"
import Files_Archiving_tabs from "./Tabs_Content/Files_Archiving_tabs"
import MissingTask_Archiving_tabs from "./Tabs_Content/MissingTask_Archiving_tabs"
import CompletedTask_Archiving_tabs from "./Tabs_Content/CompletedTask_Archiving_Tab"
import { useSession } from "next-auth/react"

function ArchivingTab({ children, datas, materials, courses, instructors, filetypes, tasks }) {
  const { data: session, status } = useSession()
  console.log(tasks)
  const filteredTasks = {

    noDue_Tasks: tasks.filter(task => task.setDeadline === null),
    withDueTasks: tasks.filter(task => task.setDeadline !== null)
  }



  if (status === "loading") return <>Loading...</>

  if (status === "authenticated") {

    return (
      <Tabs defaultValue="files" className="w-full">
        <TabsList>
          <TabsTrigger value="files">All Files</TabsTrigger>
          <TabsTrigger value="assignedtask">Assigned Task</TabsTrigger>
          <TabsTrigger value="missingtask">Missing Task</TabsTrigger>
          <TabsTrigger value="archivedtask">Archived Task</TabsTrigger>
          {session?.user?.position === "Secretary" && (
            <TabsTrigger value="completedtask">Completed Task</TabsTrigger>
          )}

        </TabsList>
        <TabsContent value="files"> <Files_Archiving_tabs dataWithFormattedDate={datas} materials={materials} courses={courses} instructors={instructors} /> </TabsContent>
        <TabsContent value="assignedtask"> <AssignedTask_Archiving_tabs position={session.user.position} tasks={filteredTasks} materials={materials}/> </TabsContent>
        <TabsContent value="missingtask"> <MissingTask_Archiving_tabs /> </TabsContent>
        <TabsContent value="archivedtask"><ArchivedTask_Archiving_tabs /></TabsContent>
        {session?.user?.position === "Secretary" && (
          <TabsContent value="completedtask"><CompletedTask_Archiving_tabs /></TabsContent>
        )}

      </Tabs>
    )
  }
}

export default ArchivingTab