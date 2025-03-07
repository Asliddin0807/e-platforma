import { Box, Text } from "@chakra-ui/react";
import AllCourses from "@/components/shared/AllCourses";
import { CourseBread } from "@/components/shared/Breads";

export default function CoursesPage() {
  return (
    <Box p={2} m={4}>
      <Text fontSize={"40px"} fontWeight={"bold"}>
        Video kurslar
      </Text>
      <CourseBread title_one={"Bosh sahifa"} title_two={"Kurslar"} link="/" />
      <AllCourses />
    </Box>
  );
}
