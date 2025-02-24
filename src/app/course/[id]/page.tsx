import { CourseBread } from "@/components/Breadcrumb/C_Detail";
import Icons from "@/components/Icons/Icons";
import CustomImage from "@/components/Image/Image";
import { course_data } from "@/components/Local_data/datas";
import { IProducts } from "@/Interfaces/Product";
import { Box, HStack, Text } from "@chakra-ui/react";

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
  };

  const ids = (await params).id;
  const course: IProducts =
    course_data.find((c) => c.id === Number(ids)) ?? defaultCourse;

  const parts: string[] = course.description.split("🔹");

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
          <Box
            w={"50px"}
            h={"50px"}
            position={"absolute"}
            top={"70px"}
            left={"45%"}
            cursor={"pointer"}
            borderRadius={"100%"}
            backdropFilter={"blur(5px)"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Icons iconName={"BiPlay"} size={40} />
          </Box>
        </Box>
      </Box>
      <HStack w={"84%"} p={1}>
        <Box w={"70%"} border={"1px solid black"}></Box>
        <Box w={"30%"} border={"1px solid black"}></Box>
      </HStack>
    </Box>
  );
}

// https://www.dhiwise.com/post/how-to-embed-videos-in-react-with-react-player-npm
