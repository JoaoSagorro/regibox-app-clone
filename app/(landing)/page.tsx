import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <div className="border w-full h-full bg-black">
        <Image
          src="/crossfit.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Background image"
          className="opacity-50"
        />
      </div>
    </>
  );
}
