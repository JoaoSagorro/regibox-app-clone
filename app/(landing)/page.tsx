import { Button } from "@mui/material";
import Image from "next/image";


export default function LandingPage() {

  return (
    <>
      <Image
          src="/crossfit.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Background image"
          className="-z-50"
        />
      <div className="w-full h-full bg-black/70 flex flex-col items-start justify-center relative">
        <div className="absolute top-8 left-20">
          <p className="font-bold text-neutral-50 lg:text-5xl md:text-3xl sm:text-3xl">
            REGIBOX
          </p>
        </div>

        <div className="ml-20 mb-6">
          <p className="drop-shadow-md text-3xl font-bold text-neutral-50 md:text-4xl lg:text-6xl">Revolutionize Your Fitness Journey</p>
        </div>

        <div className="w-[500px] ml-20 mb-6 md:w-[700px] lg:w-[900px]">
          <p className="drop-shadow-md text-md text-neutral-50 md:text-xl lg-text-2xl">
            Seize control with our app, sculpting strength and resilience through seamlessly scheduled CrossFit sessions.
            Transform your routine, empower your fitness – a digital revolution for a fitter, more vibrant you.</p>
        </div>

        <div className="ml-20 mb-3">
          <Button href="/login" variant="contained" className="text-neutral-50 bg-green-500/75 py-3 px-4 rounded-md hover:bg-green-500/65">
            Start your journey
          </Button>
        </div>

      </div>
    </>
  );
}
