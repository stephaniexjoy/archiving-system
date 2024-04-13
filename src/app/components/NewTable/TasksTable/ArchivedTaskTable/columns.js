"use client";

import AddCategory_Dialog from "@/app/components/New_Components/AddCategory_Dialog/AddCategory_Dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LuArrowUpDown } from "react-icons/lu";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns = [
  {
    accessorKey: "title",
    id: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tasks
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "deadlineCreated",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Completed
          <LuArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dateString = row.getValue("deadlineCreated");
      const date = new Date(dateString);
      const options = {
        weekday: "short", // Abbreviated weekday name (e.g., "Mon")
        month: "short", // Abbreviated month name (e.g., "Jan")
        day: "numeric", // Numeric day of the month (e.g., "07")
        year: "numeric", // Four-digit year (e.g., "2024")
        hour: "numeric", // Numeric representation of the hour (e.g., "13" for 1 PM)
        minute: "numeric", // Numeric representation of the minute (e.g., "30")
        second: "numeric", // Numeric representation of the second (e.g., "22")
      };
      const formattedDate = date.toLocaleDateString("en-US", options);
      return <div className="">{formattedDate}</div>;
    },
  },
  {
    accessorKey: "setDeadline",
    header: "Deadline",
    cell: ({ row }) => {
      const dateString = row.getValue("setDeadline");
      const date = new Date(dateString);
      const options = {
        weekday: "short", // Abbreviated weekday name (e.g., "Mon")
        month: "short", // Abbreviated month name (e.g., "Jan")
        day: "numeric", // Numeric day of the month (e.g., "07")
        year: "numeric", // Four-digit year (e.g., "2024")
        hour: "numeric", // Numeric representation of the hour (e.g., "13" for 1 PM)
        minute: "numeric", // Numeric representation of the minute (e.g., "30")
        second: "numeric", // Numeric representation of the second (e.g., "22")
      };
      const formattedDate = dateString
        ? date.toLocaleDateString("en-US", options)
        : "No Due Date";
      return <div>{formattedDate}</div>;
    },
  },
];
