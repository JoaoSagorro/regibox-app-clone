import { NavigationBar } from "./_components/navigation-bar";


const UserLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return(
    <>
      <div className="w-full sticky top-0 flex justify-evenly bg-white py-3 z-10">
        <NavigationBar title="Classes" link='/users/1/classes'>
          <ul>
            <li className="my-2">Schedule</li>
            <li className="my-2">Check-in</li>
            <li className="my-2">Services</li>
            <li className="my-2">Drop-in</li>
            <li className="my-2">History</li>
          </ul>
        </NavigationBar>
        <NavigationBar title="Workouts" link='/users/1/classes'>
          <ul>
            <li className="my-2">Box workouts</li>
            <li className="my-2">Individual</li>
            <li className="my-2">Movements</li>
            <li className="my-2">History</li>
          </ul>
        </NavigationBar>
        <NavigationBar title="Records" link='/users/1/classes'>
          <ul>
            <li className="my-2">Personal</li>
            <li className="my-2">Box</li>
          </ul>
        </NavigationBar>
        <NavigationBar title="Activities" link='/users/1/classes'/>
        <NavigationBar title="Store" link='/users/1/classes'/>
        <NavigationBar title="Challenges" link='/users/1/classes'/>
        <NavigationBar title="Box Ranking" link='/users/1/classes'/>
        <NavigationBar title="Comments" link='/users/1/classes'/>
        <NavigationBar title="My Box" link='/users/1/classes'/>
        <NavigationBar title="Convertors" link='/users/1/classes'/>
        <NavigationBar title="Timers" link='/users/1/classes'/>
        <NavigationBar title="Settings" link='/users/1/classes'/>
        <NavigationBar title="Terms of Use" link='/users/1/classes'/>
        <NavigationBar title="Logout" link='/login'/>
      </div>

      <div className="bg-[#cadfe5] flex w-full h-screen">
        {children}
      </div>
    </>
  );
};

export default UserLayout;
