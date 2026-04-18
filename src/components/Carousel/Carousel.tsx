import React, { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import './Vertical.css'
interface Props {
  id: number;
  name: string;
  text: string;
}

const VerticalCarousel: FC<{ dataCarousel: Props[] }> = ({ dataCarousel }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full"
    >
      <CarouselContent className="-mt-1 h-[300px] w-full border-2">
        {dataCarousel.map((item, index) => (
          <CarouselItem key={index} className="basis-1/2">
            <div className="p-1">
              <Card className="w-full p-4 card">
                <CardContent className="h-[150px] flex items-center mt-10 justify-center p-6">
                  <span className="text-3xl font-semibold">{item.text}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default VerticalCarousel;
