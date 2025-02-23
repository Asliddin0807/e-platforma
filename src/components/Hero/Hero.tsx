"use client";
import { Flex, Box, Text, Grid } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import VerticalCarousel from "../Carousel/Carousel";
import { CodeBlocks } from "../Animations/Animation_Text";

export const HeroComponent = () => {
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
      <Box w={"83%"}>
        <Flex
          mt={10}
          border={"1px solid white"}
          w={"100%"}
          borderRadius={"md"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          flexDirection={{ base: "column", md: "column", xl: "row" }}
          bgGradient="to-r"
          gradientFrom="blue.600"
          gradientTo="green.300"
          p={4}
        >
          <Box
            textAlign={"center"}
            borderBottom={{
              base: "1px solid gray",
              md: "1px solid gray",
              xl: "none",
            }}
          >
            <Text fontSize={"40px"}>+3</Text>
            <Text fontSize={"30px"}>Yo'nalishlar</Text>
          </Box>
          <Box
            textAlign={"center"}
            borderBottom={{
              base: "1px solid gray",
              md: "1px solid gray",
              xl: "none",
            }}
          >
            <Text fontSize={"40px"}>+20</Text>
            <Text fontSize={"30px"}>Loyhalar</Text>
          </Box>
          <Box
            textAlign={"center"}
            borderBottom={{
              base: "1px solid gray",
              md: "1px solid gray",
              xl: "none",
            }}
          >
            <Text fontSize={"40px"}>+20</Text>
            <Text fontSize={"30px"}>Darsliklar</Text>
          </Box>
        </Flex>
      </Box>
      <Box mt={10}>
        <CodeBlocks
          codeColor="yellow.500"
          codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
        />
      </Box>
    </Box>
  );
};
