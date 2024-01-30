import React from "react";
import UseEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const CarouselComponent = () => {

  const [ emblaRef ] = UseEmblaCarousel({ loop: true }, [Autoplay()]);

  return(
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0">
          <Image src='/photo1.jpeg' alt="photo 1" width={200} height={300} />
        </div>
        <div className="flex-[0_0_100%] min-w-0">
          <Image src='/photo2.jpeg' alt="photo 2" width={200} height={300} />
        </div>
        <div className="flex-[0_0_100%] min-w-0">
          <Image src='/photo3.jpeg' alt="photo 3" width={200} height={300} />
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
