import { Button } from "@/components/ui/button";
import { CalendarComponent } from "./_components/calendar-component";
import { ClassCardComponent } from "./_components/class-card";
import { WorkoutCardComponent } from "./_components/workout-card-component";

const ClassesPage = () => {

  const times = 16;

  return(
    <>
      <div className="w-full border-2 border-black flex items-center">
        <CalendarComponent />
      </div>

      <div className="border-2 border-black w-full mt-2 flex justify-between">
        <div className="border-2 border-black w-full">
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
          <ClassCardComponent/>
        </div>
        <div className="border-2 border-black w-full">
          <WorkoutCardComponent />
        </div>
      </div>
    </>
  );
};


export default ClassesPage;
