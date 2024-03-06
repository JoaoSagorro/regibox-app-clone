import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export const WorkoutCardComponent = () => {
  return(
    <div className="flex justify-center">
      <Card className="my-2">
        <CardHeader>
          <h1>Open workout 24.1</h1>
        </CardHeader>
        <CardContent>
          <h2>For Time:</h2>
          <p>21 Dumbbell Snatch, arm 1 (50/35 lbs.)</p>
            <p>21 Burpees over Dumbbell</p>
            <p>21 Dumbbell Snatch, arm 2</p>
            <p>21 Burpees over Dumbbell</p>
            <p>15 Dumbbell Snatch, arm 1</p>
            <p>15 Burpees over Dumbbell</p>
            <p>15 Dumbbell Snatch, arm 2</p>
            <p>15 Burpees over Dumbbell</p>
            <p>9 Dumbbell Snatch, arm 1</p>
            <p>9 Burpees over Dumbbell</p>
            <p>9 Dumbbell Snatch, arm 2</p>
            <p>9 Burpees over Dumbbell</p>
        </CardContent>
        <CardFooter>
          <p>Time Cap: 15 minutes</p>
        </CardFooter>
      </Card>
    </div>
  );
};
