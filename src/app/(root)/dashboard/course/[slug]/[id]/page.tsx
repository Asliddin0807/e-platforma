"use client";
import { CourseBread } from "@/components/shared/Breads";
import dynamic from "next/dynamic";
import Icons from "@/components/Icons/Icons";

import Video from "@/components/shared/Video";
import { IProducts } from "@/Interfaces/Product";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Text,
  Progress,
  HStack,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useRouter } from "nextjs-toploader/app";
import { useEffect, useState } from "react";
import { CheckUser } from "@/Services/checkUser";
import { useAuth } from "@clerk/nextjs";

const Editors = dynamic(() => import("@/components/Editor/Editor"), {
  ssr: false,
});

const Page = () => {
  const params = useParams<{ id: string; slug: string }>();
  const { id, slug } = params;
  const [course, setCourse] = useState<IProducts | undefined>(undefined);
  const { userId } = useAuth();

  const getCourse = async () => {
    const { data } = await CheckUser.getMyCourseItem(userId, slug);
    setCourse(data);
  };

  useEffect(() => {
    getCourse();
  }, [userId]);

  const id_video = course?.video_course.find((c) => c.id === id) || null;
  const router = useRouter();

  const handleCheckedChange = async (id: string, isChecked: boolean) => {
    setCourse((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        video_course: prev?.video_course.map((item) =>
          item.id === id ? { ...item, isComplete: isChecked } : item
        ),
      };
    });
    await CheckUser.checkItem(userId, slug, id, isChecked);
  };

  const getCompletionPercentage = (course?: IProducts): number => {
    if (!course || !course.video_course?.length) return 0; // Проверяем, есть ли курс и видео

    const completedVideos = course.video_course.filter(
      (video) => video.isComplete
    ).length;
    return Math.round((completedVideos / course.video_course.length) * 100);
  };

  // Использование:
  const completionPercentage = getCompletionPercentage(course);

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
          w={{ base: "100%", xl: "40%" }}
          h="444px"
          overflowY="scroll"
          bg="gray.900"
          _light={{ bg: "gray.300" }}
          mb={2}
          p={2}
        >
          <Progress.Root
            defaultValue={0}
            value={completionPercentage}
            max={100}
            variant="outline"
            maxW="sm"
          >
            <HStack gap="5">
              <Progress.Track flex="1">
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>{completionPercentage}%</Progress.ValueText>
            </HStack>
          </Progress.Root>

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
              <Checkbox.Root
                checked={item.isComplete}
                onCheckedChange={(checked) =>
                  handleCheckedChange(item.id, Boolean(checked.checked))
                }
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
              </Checkbox.Root>
              <Icons iconName="BiVideo" />
              <Button
                variant="plain"
                fontSize="14px"
                onClick={() =>
                  router.push(`/dashboard/course/${slug}/${item.id}`)
                }
              >
                {item.title}
              </Button>
            </Flex>
          ))}
        </Box>
      </Box>
      <Box w="full" mt={20} mb={20}>
        <Text fontSize={"22px"}>{"Amaliyotda o'zingizni sinab ko'ring!"}</Text>
        <Editors />
      </Box>
    </Box>
  );
};

export default Page;
