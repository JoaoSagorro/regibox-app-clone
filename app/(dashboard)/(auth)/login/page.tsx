import { authenticate } from '@/lib/'

import CarouselComponent from "@/app/_components/carousel";


const LoginPage = () => {
  return(
    <>
      <div className=" w-4/12 h-screen flex items-center justify-center">
        <CarouselComponent/>
      </div>

      <div className=" w-8/12 h-screen flex items-center justify-center">
        This is the login page!
      </div>
    </>
  );
};

export default LoginPage;
