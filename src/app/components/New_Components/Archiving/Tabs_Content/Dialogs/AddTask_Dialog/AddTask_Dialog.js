import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Form from "./Form";

function AddTask_Dialog({ sessionUser }) {
 

  return (
    <Dialog>
      <DialogTrigger asChild>
        <b className="bg-transparent hover-transparent text-3xl font-bold">
          Add Task
        </b>
      </DialogTrigger>
      <DialogContent className="p-10 md:max-w-[1200px] h-auto">
        <Form />
      </DialogContent>
    </Dialog>
  );
}

export default AddTask_Dialog;
