'use client';

import React from "react";
import UseEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const CarouselComponent = () => {

  const [ emblaRef ] = UseEmblaCarousel({ loop: true }, [Autoplay()]);

  return(
    <div className="rounded-md overflow-hidden w-full h-full flex items-center justify-center" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0">
          <Image src='/photo1.jpeg' alt="photo 1" width={900} height={300} quality={100} />
        </div>
        <div className="flex-[0_0_100%] min-w-0">
          <Image src='/photo2.jpeg' alt="photo 2" width={900} height={300} quality={100} />
        </div>
        <div className="flex-[0_0_100%] min-w-0">
          <Image src='/photo3.jpeg' alt="photo 3" width={900} height={300} quality={100} />
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
