"use client";
import { Flex, Box, Text, Grid } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import VerticalCarousel from "../Carousel/Carousel";
import { CodeBlocks } from "../Animations/Animation_Text";
import Icons from "../Icons/Icons";
import { iconData } from "../Local_data/datas";
const dataCarousel = [
  {
    id: 1,
    name: "Backend",
    text: "Backend – bu dastur yoki veb-saytning ichki qismi, ya'ni server tomoni.",
  },
  {
    id: 2,
    name: "Frontend",
    text: "Frontend – bu foydalanuvchi ko‘radigan va bevosita ishlaydigan veb-sayt yoki ilovaning tashqi qismi.",
  },
  {
    id: 3,
    name: "Mobile",
    text: "Mobil dasturlash – bu smartfonlar, planshetlar va boshqa mobil qurilmalar uchun ilovalar yaratish jarayoni.",
  },
];

export const HeroComponent = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mt={4}
    >
      <Grid
        p={2}
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        bg={"gray.200"}
        _dark={{ bg: "yellow.600" }}
        w={{ base: "90%", md: "83%" }}
        gap={2}
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
            IT Academy - dasturlash platformasi
          </Text>
          <Text
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            fontWeight={"400"}
            textAlign={"start"}
          >
            Amaliy dasturlash kurslari bilan to'la platformaga xush kelibsiz. Bu
            erda siz barcha pullik kurslarni bepul o'rganishingiz mumkin.
          </Text>
        </Box>

        <VerticalCarousel dataCarousel={dataCarousel} />
      </Grid>
      <Flex
          justifyContent={"space-evenly"}
          w={"84%"}
          alignItems={"center"}
          mt={10}
        >
          {iconData.map((item, i) => (
            <Icons
              key={i}
              iconName={item.icon}
              prioritet={true}
              color={item.color}
              size={60}
            />
          ))}
        </Flex>
      <Box mt={10}>
        <CodeBlocks
          style="row"
          text="IT Academy - bizning kurslarimiz kodlash bo'yicha ko'p yillik
                  tajribaga ega va o'z bilimlarini siz bilan baham ko'rishni istaydigan
                  soha mutaxassislari tomonidan ishlab chiqilgan va o'qitiladi."
          codeColor="yellow.500"
          codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
        />

        

        <CodeBlocks
          style="row-reverse"
          text="O'zingiz uchun ma'qul kelgan yo'nalishni tanlang va bilim oling, undan tashqari biz sizga keng tanlovni taqdim etamiz."
          codeColor="purple.500"
          codeblock={`import React from 'react';\nimport { Box, Text } from '@chakra ui/react';\n\nexport default function App(){\t\nreturn (\n<Box>\n<Text>Hello World</Text>\n</Box>\n)};`}
        />
      </Box>
    </Box>
  );
};
