import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import React from 'react'
import Files_Archiving_tabs from "./Tabs_Content/Files_Archiving_tabs"
import AssignedTask_Archiving_tabs from "./Tabs_Content/AssignedTask_Archiving_tabs"
import MissingTask_Archiving_tabs from "./Tabs_Content/MissingTask_Archiving_tabs"
import ArchivedTask_Archiving_tabs from "./Tabs_Content/ArchivedTask_Archiving_tabs"

function SecretaryArchivingTab({ children, datas }) {
  return (
    <Tabs defaultValue="files" className="w-full">
      <TabsList>
        <TabsTrigger value="files">All Files</TabsTrigger>
        <TabsTrigger value="assignedtask">Assigned Task</TabsTrigger>
        <TabsTrigger value="missingtask">Missing Task</TabsTrigger>
        <TabsTrigger value="archivedtask">Archived Task</TabsTrigger>
      </TabsList>
      <TabsContent value="files"> <Files_Archiving_tabs dataWithFormattedDate={datas} /> </TabsContent>
      <TabsContent value="assignedtask"> <AssignedTask_Archiving_tabs /> </TabsContent>
      <TabsContent value="missingtask"> <MissingTask_Archiving_tabs /> </TabsContent>
      <TabsContent value="archivedtask"><ArchivedTask_Archiving_tabs /></TabsContent>
    </Tabs>
  )
}

export default SecretaryArchivingTab