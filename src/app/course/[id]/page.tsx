import { CourseBread } from "@/components/Breadcrumb/C_Detail";
import DetailButton from "@/components/DetailButton/DetailButton";
import Icons from "@/components/Icons/Icons";
import StarRating from "@/components/Icons/Stars";
import CustomImage from "@/components/Image/Image";
import { course_data } from "@/components/Local_data/datas";
import ProductTab from "@/components/Tab/ProductTab";
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
  params: Promise<{ id: number }>;
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
  };

  const ids = (await params).id;
  const course: IProducts =
    course_data.find((c) => c.id === Number(ids)) ?? defaultCourse;

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
      <HStack w={"84%"} alignItems={"start"} mb={20}>
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
          >
            {course.project.map((item, idx) => (
              <GridItem
                key={idx}
                display={"flex"}
                alignItems={"center"}
                gap={2}
              >
                <Icons iconName={"BiBullseye"} size={20} />
                <Text fontSize={"18px"}>{item}</Text>
              </GridItem>
            ))}
          </Grid>
          <Box mt={2} p={4} bg={"gray.800"} borderRadius={"md"}>
            <Text fontSize={"20px"} fontWeight={"bold"}>
              Kurs rejasi
            </Text>
            {course.video_course.map((item, idx) => (
              <Flex key={idx} alignItems={'center'} mt={2} gap={4}>
                <Icons iconName={'BiVideo'}/>
                <Text># {item.text}</Text>
              </Flex>
            ))}
          </Box>
          <Box
            mt={2}
            bg={"gray.800"}
            p={2}
            borderRadius={"md"}
            _light={{ bg: "gray.300" }}
          >
            {list.map((item, index) => (
              <Text key={index}>
                {index === 0 ? item.trim() : `• ${item.trim()}`}
              </Text>
            ))}
          </Box>
        </Box>
        <Box w={{ base: 0, md: 0, xl: "35%" }} mt={5}>
          <DetailButton course={course} />
        </Box>
      </HStack>
    </Box>
  );
}

// https://www.dhiwise.com/post/how-to-embed-videos-in-react-with-react-player-npm
