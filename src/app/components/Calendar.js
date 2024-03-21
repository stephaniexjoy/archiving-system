"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      mode="single"
      showOutsideDays
      onSelect={setDate}
      className="
        w-full items-center rounded-md h-10 -mt-32
        2xl:w-full 2xl:items-center 2xl:rounded-md 2xl:h-10 2xl:-mt-2
      "
    />
  );
};

export default CalendarComponent;
