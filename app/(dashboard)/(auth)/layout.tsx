import CarouselComponent from "@/app/_components/carousel";

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return(
    <div className="bg-[#cadfe5] flex items-center justify-center w-screen h-screen border-2 border-black">

      <div className="flex h-5/6 w-7/12 items-center rounded-md bg-slate-50 shadow-2xl">

        <div className="flex items-center h-[95%] mx-4">

          <div className="w-6/12 h-full flex items-center justify-center rounded-md">
            <CarouselComponent/>
          </div>


          {children}

        </div>

      </div>

    </div>
  );
};


export default AuthLayout;
