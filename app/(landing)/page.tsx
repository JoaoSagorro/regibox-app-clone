import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <div className="border w-full h-full bg-black/60 flex items-center justify-center">
        <Image
          src="/crossfit.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Background image"
          className="opacity-50 -z-50"
        />
        <p className="text-white">olá eu sou o joão</p>
      </div>
    </>
  );
}
