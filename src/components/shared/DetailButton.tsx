"use client";

import { Box, Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";
import StarRating from "./Icons/Stars";
import { IProducts } from "@/Interfaces/Product";
import { useRouter } from "nextjs-toploader/app";

interface Props {
  course: IProducts;
}

export default function DetailButton({ course }: Props) {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const router = useRouter();

  return (
    <Box
      w={"full"}
      bg={"blue.700"}
      bgGradient={'to-tl'}
      gradientFrom={'green.600'}
      gradientTo={'black'}
      _light={{ bg: "gray.300" }}
      borderRadius={"md"}
      boxShadow={"md"}
      p={2}
      position={{ base: "fixed", md: "fixed", xl: "sticky" }}
      top={{ base: "", md: "", xl: 10 }}
      bottom={{ base: 0, md: 0, xl: "" }}
      left={{ base: 0, md: 0, xl: "" }}
      right={{ base: 0, md: 0, xl: "" }}
      zIndex={1}
      display={"flex"}
      flexDirection={{ base: "row", md: "row", xl: "column" }}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"start"}>
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
      <Button
        w={{ base: "", md: "", xl: "" }}
        mt={2}
        onClick={() =>
          router.push(
            `/dashboard/course/${course.slug}/${course.video_course[0].id}`
          )
        }
      >
        Kursga kirish
      </Button>
    </Box>
  );
}
