'use client';

import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { CalendarPopover } from "./calendar-popover";

export const CalendarComponent = () => {

  const [ date, setDate ] = React.useState<Date | undefined>(new Date())

  return(
    <div className="border-2 border-red-500 ml-3 my-2 flex items-center">

      <CalendarPopover>
        <Calendar
          className="flex justify-center mt-3"
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </CalendarPopover>

      <p className="ml-3">Today is the day you choosed</p>

    </div>
  )
};
