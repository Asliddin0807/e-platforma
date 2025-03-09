import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./CarouselH.css";
import Icons from "@/components/Icons/Icons";

interface Option {
  loop?: boolean;
}

interface IconsCarousel {
  icon: string;
  color: string;
}

interface Props {
  slides: IconsCarousel[];
  options?: Option;
}

const CarouselH = ({ slides, options }: Props) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="emblas">
      <div className="embla__viewports" ref={emblaRef}>
        <div className="embla__containers">
          {slides.map((item, index) => (
            <div className="embla__slides" key={index}>
              <div className="embla__slide__numbers">
                <Icons
                  iconName={item.icon}
                  prioritet={true}
                  color={item.color}
                  size={80}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselH;
