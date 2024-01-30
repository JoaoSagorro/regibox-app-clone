'use client';

import CarouselComponent from "@/app/_components/carousel";

const LoginPage = () => {
  return(
    <>
      <div className="border-2 border-black w-6/12 h-screen flex items-center justify-center">
        <CarouselComponent className="" />
      </div>

      <div className="border-2 border-black w-6/12 h-screen flex items-center justify-center">
        This is the login page!
      </div>
    </>
  );
};

export default LoginPage;
