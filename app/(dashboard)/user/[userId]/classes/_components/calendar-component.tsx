'use client';

import { Calendar } from "@/components/ui/calendar";
import React from "react";

export const CalendarComponent = () => {

  const [ date, setDate ] = React.useState<Date | undefined>(new Date())

  return(
    <Calendar
      className="h-full flex items-start mt-3"
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  )
};
