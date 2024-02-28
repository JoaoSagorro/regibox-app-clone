import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

export const CalendarPopover = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return(
    <Popover>
      <PopoverTrigger>
        <CalendarIcon className="w-7 h-7"/>
      </PopoverTrigger>

      <PopoverContent>
        {children}
      </PopoverContent>

    </Popover>
  )
};
