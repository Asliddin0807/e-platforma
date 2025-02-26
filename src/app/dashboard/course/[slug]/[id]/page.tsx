"use client";

import { CourseBread } from "@/components/Breadcrumb/C_Detail";
import dynamic from "next/dynamic";
import Icons from "@/components/Icons/Icons";
import { course_data } from "@/components/Local_data/datas";
import Video from "@/components/VideoPlyaer/Video";
import { IProducts } from "@/Interfaces/Product";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";

const Editors = dynamic(() => import("@/components/Editor/Editor"), {
  ssr: false,
});

const Page = () => {
  const params = useParams<{ id: string; slug: string }>();
  const { id, slug } = params;
  const course: IProducts | undefined = course_data.find(
    (c) => c.slug === slug
  );

  if (!course) return <div>Курс не найден</div>;

  const id_video = course.video_course.find((c) => c.id === id) || null;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
      <CourseBread
        title_one="Kurslar"
        title_two={course.title}
        link="courses"
      />

      <Box
        w="84%"
        display="flex"
        flexDirection={{ base: "column", xl: "row" }}
        gap={2}
      >
        <Box w={{ base: "100%", xl: "70%" }}>
          <Video />
          <Text fontSize="22px" mt={2}>
            {id_video?.text}
          </Text>
        </Box>

        <Box
          w={{ base: "100%", xl: "30%" }}
          h="450px"
          overflowY="scroll"
          bg="gray.900"
          mb={2}
        >
          {course.video_course.map((item, idx) => (
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
              <Button variant="plain" fontSize="17px">
                #{item.text}
              </Button>
            </Flex>
          ))}
        </Box>
      </Box>
      <Box w="84%" mt={20} mb={20}>
        <Text fontSize={'22px'}>Amaliyotda o'zingizni sinab ko'ring!</Text>
        <Editors />
      </Box>
    </Box>
  );
};

export default Page;
