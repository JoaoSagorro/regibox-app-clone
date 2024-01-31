import CarouselComponent from "@/app/_components/carousel";

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return(
    <div className="bg-[#cadfe5] flex items-center justify-center w-screen h-screen">

      <div className="flex h-5/6 w-5/6 items-center rounded-md bg-black/85 shadow-2xl">

        <div className="flex items-center h-[95%] mx-4">

          <div className="w-4/12 h-full flex items-center justify-center rounded-md">
            <CarouselComponent/>
          </div>


          {children}

        </div>

      </div>

    </div>
  );
};


export default AuthLayout;
