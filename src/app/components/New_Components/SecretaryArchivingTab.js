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

function SecretaryArchivingTab({ children }) {
  return (
    <Tabs defaultValue="files" className="w-full">
      <TabsList>
        <TabsTrigger value="files">All Files</TabsTrigger>
        <TabsTrigger value="assignedtask">Assigned Task</TabsTrigger>
        <TabsTrigger value="missingtask">Missing Task</TabsTrigger>
        <TabsTrigger value="archivedtask">Archived Task</TabsTrigger>
      </TabsList>
      <TabsContent value="files">{children}</TabsContent>
      <TabsContent value="assignedtask">{children}</TabsContent>
      <TabsContent value="missingtask">{children}</TabsContent>
      <TabsContent value="archivedtask">{children}</TabsContent>
    </Tabs>
  )
}

export default SecretaryArchivingTab