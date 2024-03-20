"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      mode="single"
      showOutsideDays
      selected={date}
      onSelect={setDate}
      className="
      items-center rounded-md w-full h-10
      "
      styles={{
        head_cell: {
          width: "100%",
        },
        table: {
          maxWidth: "100%",
        },
        day: {
          margin: "7px",

        },
      }}
    />
  );
};

export default CalendarComponent;