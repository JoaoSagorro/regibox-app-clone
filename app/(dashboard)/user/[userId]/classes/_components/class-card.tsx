import { Button } from "@/components/ui/button";
import { CoachAvatarComponent } from "./coach-avatar";

interface ClassCardComponentProps {
  title?: string,
  className?: string,
  startTime?: string,
  endTime?: string,
}

export const ClassCardComponent = ({
  title,
  className,
  startTime,
  endTime,
}: ClassCardComponentProps) => {
  return(
    <div className="border-2 border-red-800 w-11/12 backdrop-blur-md bg-blue-100 rounded-md flex justify-around items-center mb-3 mx-3">
          <div className="flex flex-col items-center my-2">
            <h1>Coach</h1>
            <p>Rich Froning</p>
            <CoachAvatarComponent />
          </div>
          <div>
            <h1>Crossfit Class</h1>
            <p>From: <span>10am</span></p>
            <p>To: <span>11:30am</span></p>
          </div>
          <div>
            <Button>Schedule</Button>
          </div>
        </div>
  );
};
