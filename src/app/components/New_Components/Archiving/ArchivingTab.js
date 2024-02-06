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
import { useSession } from "next-auth/react"

function ArchivingTab({ children, datas, materials, courses, instructors, filetypes }) {
  const { data: session, status } = useSession()
  console.log(session)

  if (status === "loading") return <>Loading...</>

  if (status === "authenticated") {

    return (
      <Tabs defaultValue="files" className="w-full">
        <TabsList>
          <TabsTrigger value="files">All Files</TabsTrigger>
          <TabsTrigger value="assignedtask">Assigned Task</TabsTrigger>
          <TabsTrigger value="missingtask">Missing Task</TabsTrigger>
          {session?.user?.position === "Secretary" && (
            <TabsTrigger value="archivedtask">Archived Task</TabsTrigger>
          )}

        </TabsList>
        <TabsContent value="files"> <Files_Archiving_tabs dataWithFormattedDate={datas} materials={materials} courses={courses} instructors={instructors} /> </TabsContent>
        <TabsContent value="assignedtask"> <AssignedTask_Archiving_tabs position={session.user.position} /> </TabsContent>
        <TabsContent value="missingtask"> <MissingTask_Archiving_tabs /> </TabsContent>
        {session?.user?.position === "Secretary" && (
          <TabsContent value="archivedtask"><ArchivedTask_Archiving_tabs /></TabsContent>
        )}

      </Tabs>
    )
  }
}

export default ArchivingTab