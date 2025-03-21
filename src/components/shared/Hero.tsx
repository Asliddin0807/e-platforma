"use client";
import { Flex, Box, Text, Grid, useBreakpointValue } from "@chakra-ui/react";

import VerticalCarousel from "../Carousel/Carousel";
import { CodeBlocks } from "./Animation_Text";
import Icons from "../Icons/Icons";
import { iconData } from "../Local_data/datas";

import Marquee from "react-fast-marquee";
import { dataCarousel } from "@/constants/carousel_data";

export const HeroComponent = () => {
  const gapSize = useBreakpointValue({ base: 4, md: 8, lg: 12 }); // Отступы
  const width = useBreakpointValue({ base: "100%", md: "800px", lg: "1000px" });

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mt={4}
      mx={"auto"}
      w={"100%"}
    >
      <Grid
        p={1}
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        bg={"gray.200"}
        _dark={{ bg: "yellow.600" }}
        w={{ base: "100%", md: "full" }}
        gap={20}
        borderRadius={"md"}
        boxShadow={"md"}
        alignItems={"center"}
      >
        <Box w={"100%"} ml={{ base: 0, md: 10 }}>
          <Text
            fontSize={{ base: "30px", md: "30px" }}
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            fontWeight={"600"}
            textAlign={"start"}
            color={"gray.900"}
          >
            IT Code - dasturlash platformasi
          </Text>
          <Text
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            fontWeight={"400"}
            textAlign={"start"}
          >
            {
              "Amaliy dasturlash kurslari bilan to'la platformaga xush kelibsiz. Bu erda siz barcha pullik kurslarni bepul o'rganishingiz mumkin."
            }
          </Text>
        </Box>
        <Box w={"100%"}>
          <VerticalCarousel dataCarousel={dataCarousel} />
        </Box>
      </Grid>
      <Box w={{ base: "100%", md: "100%" }} mt={10}>
        <Marquee
          gradient={false}
          speed={30}
          loop={0}
          autoFill={true}
          style={{
            maxWidth: width, // Занимает всю ширину
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "11px",
          }}
        >
          <Flex gap={gapSize}>
            {iconData.map((item, idx) => (
              <Icons
                key={idx}
                iconName={item.icon}
                prioritet={true}
                color={item.color}
                size={60}
              />
            ))}
          </Flex>
        </Marquee>
      </Box>
    </Box>

    // </Box>
  );
};
