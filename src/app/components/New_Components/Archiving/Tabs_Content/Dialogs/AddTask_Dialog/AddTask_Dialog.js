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
        <b 
          className="
          bg-transparent hover-transparent text-xl font-bold
          sm:bg-transparent sm:hover-transparent sm:text-xl sm:font-bold
          md:bg-transparent md:hover-transparent md:text-xl md:font-bold
          lg:bg-transparent lg:hover-transparent lg:text-xl lg:font-bold
          xl:bg-transparent xl:hover-transparent xl:text-xl xl:font-bold
          2xl:bg-transparent 2xl:hover-transparent 2xl:text-3xl 2xl:font-bold
          ">
          Add Task
        </b>
      </DialogTrigger>
      <DialogContent 
        className="
        p-10 max-w-[90%] h-auto bg-slate-50
        sm:p-10 sm:max-w-[80%] sm:h-auto
        md:p-10 md:max-w-[80%] md:h-auto
        lg:p-10 lg:max-w-[70%] lg:h-auto
        xl:p-10 xl:max-w-[70%] xl:h-auto
        2xl:p-10 2xl:max-w-[40%] 2xl:h-auto
        ">
        <Form />
      </DialogContent>
    </Dialog>
  );
}

export default AddTask_Dialog;
