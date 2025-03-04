"use client";

import { CourseBread } from "@/components/shared/Breads";
import dynamic from "next/dynamic";
import Icons from "@/components/shared/Icons/Icons";
import { course_data } from "@/components/Local_data/datas";
import Video from "@/components/shared/Video";
import { IProducts } from "@/Interfaces/Product";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import CourseService from "@/Services/courses";
import { useEffect, useState } from "react";

const Editors = dynamic(() => import("@/components/shared/Editor/Editor"), {
  ssr: false,
});

const Page = () => {
  const params = useParams<{ id: string; slug: string }>();
  const { id, slug } = params;
  const [course, setCourse] = useState<IProducts | null>(null);

  const getCourse = async () => {
    const { data } = await CourseService.getCourse(slug);
    setCourse(data);
  };

  useEffect(() => {
    getCourse();
  }, []);

  const id_video = course?.video_course.find((c) => c.id === id) || null;
  const router = useRouter();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={4}
      mt={2}
      mx={"auto"}
    >
      <CourseBread
        title_one="Kurslar"
        title_two={`${course?.title}`}
        link="courses"
      />

      <Box
        w="full"
        display="flex"
        flexDirection={{ base: "column", xl: "row" }}
        gap={2}
      >
        <Box w={{ base: "100%", xl: "70%" }}>
          <Video />
          <Text fontSize="22px" mt={2}>
            {id_video?.title}
          </Text>
        </Box>

        <Box
          w={{ base: "100%", xl: "30%" }}
          h="444px"
          overflowY="scroll"
          bg="gray.900"
          _light={{ bg: "gray.300" }}
          mb={2}
        >
          {course?.video_course.map((item, idx) => (
            <Flex
              key={idx}
              alignItems="center"
              mt={1}
              borderRadius="md"
              gap={1}
              p={1}
              mx={4}
            >
              <Icons iconName="BiVideo" />
              <Button
                variant="plain"
                fontSize="14px"
                onClick={() =>
                  router.push(`/dashboard/course/${slug}/${item.id}`)
                }
              >
                #{item.title}
              </Button>
            </Flex>
          ))}
        </Box>
      </Box>
      <Box w="full" mt={20} mb={20}>
        <Text fontSize={"22px"}>Amaliyotda o'zingizni sinab ko'ring!</Text>
        <Editors />
      </Box>
    </Box>
  );
};

export default Page;
