import { CourseBread } from "@/components/shared/C_Detail";
import DetailButton from "@/components/shared/DetailButton";
import Icons from "@/components/shared/Icons/Icons";
import StarRating from "@/components/shared/Icons/Stars";
import CustomImage from "@/components/shared/Image";
import { course_data } from "@/components/Local_data/datas";

import { IProducts } from "@/Interfaces/Product";
import {
  GridItem,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FiEye } from "react-icons/fi";

export default async function Course({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const defaultCourse: IProducts = {
    id: 0,
    title: "Курс не найден",
    image: "default.png",
    rate: { rates: 0, viewers: 0 },
    category: "unknown",
    description: "Нет информации",
    video_course: [],
    for_whom: "",
    project: [],
    comments: [],
    slug: "",
  };

  const ids = (await params).slug;

  const course: IProducts =
    course_data.find((c) => c.slug === ids) ?? defaultCourse;
  const parts: string[] = course.description.split("🔹");
  const list: string[] = course.for_whom.split("✔");

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      mt={2}
      p={2}
    >
      <CourseBread
        title_one={"Kurslar"}
        title_two={course.title}
        link="courses"
      />
      {/* Header section */}
      <Box
        w={"84%"}
        bg={"gray.800"}
        _light={{ bg: "gray.300" }}
        p={4}
        borderRadius={"md"}
        display={"flex"}
        gap={2}
        flexDirection={{
          base: "column-reverse",
          md: "column-reverse",
          xl: "row",
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Text fontSize={"25px"} fontWeight={"bold"}>
            {course?.title}
          </Text>
          {parts.map((part, index) => (
            <Text key={index}>
              {index === 0 ? part.trim() : `🔹 ${part.trim()}`}
            </Text>
          ))}
        </Box>
        <Box
          w={{ base: "100%", md: "100%", xl: "84%" }}
          position={"relative"}
          userSelect={"none"}
        >
          <CustomImage product={course} />
          <Center
            w={"50px"}
            h={"50px"}
            position={"absolute"}
            top={"70px"}
            left={"45%"}
            cursor={"pointer"}
            borderRadius={"100%"}
            backdropFilter={"blur(5px)"}
          >
            <Icons iconName={"BiPlay"} size={40} />
          </Center>
        </Box>
      </Box>
      <HStack
        alignItems={"start"}
        flexDirection={{ base: "column", md: "column", xl: "row" }}
        mb={20}
        w={"84%"}
      >
        <Box w={{ base: "100%", md: "100%", xl: "65%" }} mt={5}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            p={2}
            gridGap={6}
            bg={"gray.800"}
            _light={{ bg: "gray.300" }}
            borderRadius={"md"}
            placeItems={"center"}
          >
            {course.project.map((item, idx) => (
              <GridItem
                key={idx}
                display={"flex"}
                pl={2}
                alignItems={"center"}
                textAlign={"start"}
                gap={2}
                w={"100%"}
              >
                <Icons iconName={"BiBullseye"} size={20} />
                <Text textAlign={"start"} fontSize={"18px"}>
                  {item}
                </Text>
              </GridItem>
            ))}
          </Grid>
          <Box
            mt={2}
            p={4}
            bg={"gray.800"}
            borderRadius={"md"}
            _light={{ bg: "gray.300" }}
          >
            <Text fontSize={"20px"} fontWeight={"bold"}>
              Kurs rejasi
            </Text>
            {course.video_course.map((item, idx) => (
              <Flex key={idx} alignItems={"center"} mt={2} gap={4}>
                <Icons iconName={"BiVideo"} />
                <Text># {item.text}</Text>
              </Flex>
            ))}
          </Box>
          <Box
            mt={2}
            bg={"gray.800"}
            p={4}
            borderRadius={"md"}
            _light={{ bg: "gray.300" }}
          >
            <Text fontSize={"20px"} fontWeight={"bold"}>
              Kim uchun?
            </Text>
            {list.map((item, index) => (
              <Text key={index}>
                {index === 0 ? item.trim() : `• ${item.trim()}`}
              </Text>
            ))}
          </Box>
        </Box>
        <Box w={{ base: 0, md: 0, xl: "35%" }} position={"relative"} mt={5}>
          <DetailButton course={course} />
        </Box>
      </HStack>
    </Box>
  );
}

// https://www.dhiwise.com/post/how-to-embed-videos-in-react-with-react-player-npm
