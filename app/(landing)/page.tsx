
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


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
          <Button asChild variant="ghost" className="bg-blue-700 text-md text-neutral-50 py-6 px-8 rounded-md hover:bg-blue-500">
            <Link href="/login">
              Start your journey
            </Link>
          </Button>
        </div>

      </div>
    </>
  );
}
