"use client";
import Icons from "@/components/Icons/Icons";
import StarRating from "@/components/Icons/Stars";
import Empty from "@/components/shared/Empty";
import CustomImage from "@/components/shared/Image";
import { toaster } from "@/components/ui/toaster";
import { IProducts } from "@/Interfaces/Product";
import CourseService from "@/Services/courses";
import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function DeleteCoursePage() {
  const [course, setCourse] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const apiHandler = async () => {
    const { data } = await CourseService.getCourses();
    setCourse(data);
  };

  useEffect(() => {
    apiHandler();
  }, []);

  const deleteHandler = async (slug: string) => {
    setLoading(true);
    const { message, status } = await CourseService.deleteCourse(slug);
    if (status === "200") {
      toaster.success({
        title: message,
      });
      setLoading(false);
      const courseDelete = course.filter((item) => item.slug !== slug);
      setCourse(courseDelete);
    } else {
      toaster.success({
        title: message,
      });
      setLoading(false);
    }
  };

  return course.length == 0 ? (
    <Box
      h={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Text fontSize={"30px"} ml={2} fontWeight={"bold"} mt={5}>
        Kurs o'chirish
      </Text>
      <Empty
        title={"Qo'shilgan kurslar mavjud emas!"}
        desc={"Kurs qo'shish uchun havolani ustiga bosing!"}
        link={"/course_add"}
      />
    </Box>
  ) : (
    <Box w={"full"}>
      <Text fontSize={"30px"} ml={2} fontWeight={"bold"} mt={5}>
        Kurs o'chirish
      </Text>
      <Box
        display={"flex"}
        mx={{ base: "auto", md: "none", xl: "none" }}
        flexDirection={"column"}
        w={"100%"}
        p={2}
      >
        {course.map((item, idx) => (
          <Box
            key={idx}
            w={"100%"}
            display={"flex"}
            gap={4}
            flexDirection={{ base: "column", md: "row", xl: "row" }}
            alignItems={"center"}
            mr={"10px"}
            p={2}
            bg={"gray.100"}
            _dark={{ bg: "gray.800" }}
            boxShadow={"xl"}
            borderRadius={"md"}
            border={"1px solid white"}
          >
            <CustomImage product={item} />

            <Box w={"full"}>
              <Text fontSize={"20px"} fontWeight={"bold"}>
                {item.title}
              </Text>
              <Text fontSize={"16px"}>{item.category}</Text>
              <StarRating rating={item.rate.rates} size={16} />
              <Box w={{ base: "auto", md: "500px" }}>
                <Text>{item.description.slice(0, 280)}...</Text>
              </Box>
            </Box>
            <Box mr={{ base: "0px", md: "100px" }} w={"100%"}>
              <Button
                loading={loading}
                w={{ base: "100%", md: "auto" }}
                onClick={() => deleteHandler(item.slug)}
              >
                <Icons iconName={"BiTrash"} />
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
