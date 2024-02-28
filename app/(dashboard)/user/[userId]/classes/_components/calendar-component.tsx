'use client';

import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { CalendarPopover } from "./calendar-popover";

export const CalendarComponent = () => {

  const [ date, setDate ] = React.useState<Date | undefined>(new Date())

  return(
    <div>
      <CalendarPopover>
        <Calendar
          className="flex justify-center mt-3"
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </CalendarPopover>
    </div>
  )
};
