import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { course_data } from "@/components/Local_data/datas";
import CustomImage from "@/components/Image/Image";
import StarRating from "@/components/Icons/Stars";
import ButtonsCategory from "@/components/Hero/HeroCourses";
import { CourseBread } from "@/components/Breadcrumb/C_Detail";

export default function CoursesPage() {
  return (
    <Box p={14}>
      <Text fontSize={"40px"} fontWeight={"bold"}>
        Video curslar
      </Text>
      <CourseBread title_one={"Bosh sahifa"} title_two={"Kurslar"} link="/" />
      <ButtonsCategory />
    </Box>
  );
}
