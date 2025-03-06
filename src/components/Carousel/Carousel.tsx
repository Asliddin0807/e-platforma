import "./Vertical.css";
import React, { FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box, HStack, Text } from "@chakra-ui/react";
import Icons from "@/components/Icons/Icons";

interface Props {
  id: number;
  name: string;
  text: string;
}

const VerticalCarousel: FC<{ dataCarousel: Props[] }> = ({ dataCarousel }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: "y",
      align: "start",
      skipSnaps: false,
      loop: false,
    },
    [Autoplay()]
  );
  return (
    <section className="emblav">
      <div className="embla__viewportv" ref={emblaRef}>
        <div className="embla__containerv">
          {dataCarousel.map((item, index) => (
            <div className="embla__slidev" key={index}>
              <div className="embla__slide__numberv">
                <Box
                  w={"100%"}
                  borderRadius={3}
                  key={index}
                  minH={"100%"}
                  p={2}
                  fontSize={"23px"}
                  transition={"all 0.3s ease"}
                  cursor={"pointer"}
                  bg={"gray.800"}
                  _light={{ bg: "gray.400" }}
                  boxShadow={"md"}
                  className="container__info"
                >
                  <HStack display={"flex"} gap={"-2px"} alignItems={"center"}>
                    <Text textAlign={"start"}>{item.name}</Text>
                    <Box className="icon">
                      <Icons iconName={"BiChevronRight"} />
                    </Box>
                  </HStack>
                  <Text textAlign={"start"} fontSize={"13px"}>
                    {item.text}
                  </Text>
                </Box>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalCarousel;
