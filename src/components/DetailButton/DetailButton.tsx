"use client";

import { Box, Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";
import StarRating from "../Icons/Stars";
import { IProducts } from "@/Interfaces/Product";

interface Props {
  course: IProducts;
}

export default function DetailButton({ course }: Props) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      w={"full"}
      bgGradient="to-r"
      gradientFrom="yellow.400"
      gradientTo="green.400"
      borderRadius={"md"}
      boxShadow={"md"}
      p={2}
      position={isMobile ? "fixed" : "sticky"}
      bottom={isMobile ? 0 : ""}
      left={isMobile ? 0 : ""}
      right={isMobile ? 0 : ""}
      zIndex={1}
      display={"flex"}
      flexDirection={{ base: "row", md: "row", xl: "column" }}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={'start'}>
        <Flex
          alignItems={isMobile ? "center" : "start"}
          justifyContent={"space-between"}
          flexDirection={{ base: "row", md: "row", xl: "column" }}
          gap={2}
        >
          <Text
            fontSize={{ base: "18px", md: "20px", xl: "25px" }}
            fontWeight={"bold"}
          >
            Kursga kirish
          </Text>
          <StarRating rating={course.rate.rates} size={isMobile ? 18 : 25} />
        </Flex>
        <Flex alignItems={"center"} mt={2} gap={2}>
          <FiEye fontSize={"20px"} />
          <Text fontSize={"18px"}>{course.rate.viewers} ko'rilgan</Text>
        </Flex>
      </Box>
      <Button w={{ base: "", md: "", xl: "" }} mt={2}>
        Kursga kirish
      </Button>
    </Box>
  );
}
