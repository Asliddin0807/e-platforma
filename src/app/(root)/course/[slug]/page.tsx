import { CourseBread } from "@/components/shared/Breads";
import DetailButton from "@/components/shared/DetailButton";
import Icons from "@/components/Icons/Icons";

import CustomImage from "@/components/shared/Image";

import { IProducts } from "@/Interfaces/Product";
import {
  GridItem,
  Box,
  Center,
  Flex,
  Grid,
  HStack,
  Text,
  Table,
} from "@chakra-ui/react";
import CourseService from "@/Services/courses";
import TableCourseItems from "@/components/shared/table-course";

export default async function Course({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const defaultCourse: IProducts = {
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

  const { data } = (await CourseService.getCourse(ids)) ?? defaultCourse;
  const parts: string[] | undefined = data?.description.split("🔹");
  const list: string[] | undefined = data?.for_whom.split("•");

  const detail = [
    {
      id: 1,
      name: "Darslar soni",
      value: data.video_course.length,
      icon: {
        name: "BiHash",
        color: "gray",
      },
    },
    {
      id: 2,
      name: "Narxi",
      value: "bepul",
      icon: {
        name: "BiCreditCardAlt",
        color: "yellow",
      },
    },
    {
      id: 3,
      name: "Faoydalanish chegarasi",
      value: "cheksiz",
      icon: {
        name: "BiCheckCircle",
        color: "green",
      },
    },

    {
      id: 5,
      name: "Baxosi",
      value: data.rate.rates,
      icon: {
        name: "BiSolidStar",
        color: "yellow",
      },
    },
    {
      id: 6,
      name: "Ko'rilgan",
      value: data.rate.viewers,
      icon: {
        name: "BiHide",
        color: "gray",
      },
    },
    {
      id: 4,
      name: "Sertifikat",
      value: "mavjud",
      icon: {
        name: "BiAward",
        color: "purple",
      },
    },
  ];

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      mt={2}
      p={4}
      mx={"auto"}
    >
      <CourseBread
        title_one={"Kurslar"}
        title_two={data?.title}
        link="courses"
      />
      {/* Header section */}
      <Box
        w={"full"}
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
        <Box w={"96%"}>
          <Text fontSize={"25px"} fontWeight={"bold"}>
            {data?.title}
          </Text>
          {parts?.map((part, index) => (
            <Text key={index}>
              {index === 0 ? part.trim() : `🔹 ${part.trim()}`}
            </Text>
          ))}
        </Box>
        <Box
          w={{ base: "100%", md: "100%", xl: "50%" }}
          position={"relative"}
          userSelect={"none"}
        >
          <CustomImage product={data} />
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
        flexDirection={{
          base: "column-reverse",
          md: "column-reverse",
          xl: "row",
        }}
        mb={20}
        w={"100%"}
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
            <Text textAlign={"start"} fontSize={"20px"} fontWeight={"bold"}>
              Nimalarni o'rganasiz:
            </Text>
            {data?.project.map((item, idx) => (
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
            {data?.video_course.map((item, idx) => (
              <Flex key={idx} alignItems={"center"} mt={2} gap={4}>
                <Icons iconName={"BiVideo"} />
                <Text>{item.title}</Text>
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
            {list?.map((item, index) => (
              <Text key={index}>
                {index === 0 ? item.trim() : `• ${item.trim()}`}
              </Text>
            ))}
          </Box>
        </Box>
        <Box
          w={{ base: "100%", md: "100%", xl: "35%" }}
          position={"relative"}
          mt={5}
        >
          <Box w={"100%"}>
            <TableCourseItems
              lessons={data.video_course.length}
              rate={data.rate.rates}
              viewers={data.rate.viewers}
            />
          </Box>
          <DetailButton course={data} />
        </Box>
      </HStack>
    </Box>
  );
}

// https://www.dhiwise.com/post/how-to-embed-videos-in-react-with-react-player-npm
