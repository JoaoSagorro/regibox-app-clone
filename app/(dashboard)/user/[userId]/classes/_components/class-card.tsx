import { Button } from "@/components/ui/button";
import { CoachAvatarComponent } from "./coach-avatar";
import { Card, CardHeader } from "@/components/ui/card";

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

    <Card>
      <CardHeader>
            <h1>Coach</h1>
            <p>Rich Froning</p>
            <CoachAvatarComponent />
      </CardHeader>
          <div>
            <h1>Crossfit Class</h1>
            <p>From: <span>10am</span></p>
            <p>To: <span>11:30am</span></p>
          </div>
          <div>
            <Button>Schedule</Button>
          </div>
      </div>
    </Card>
  );
};
