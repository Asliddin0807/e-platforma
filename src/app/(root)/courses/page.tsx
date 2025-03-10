import { Box } from "@chakra-ui/react";
import AllCourses from "@/components/shared/AllCourses";
import { CourseBread } from "@/components/shared/Breads";
import Header from "@/components/shared/HeaderText";

export default function CoursesPage() {
  return (
    <Box p={2} m={4}>
      <Header text={"Video kurslar"} />

      <CourseBread title_one={"Bosh sahifa"} title_two={"Kurslar"} link="/" />

      <AllCourses />
    </Box>
  );
}
