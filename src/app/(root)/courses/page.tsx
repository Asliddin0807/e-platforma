import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { course_data } from "@/components/Local_data/datas";
import CustomImage from "@/components/shared/Image";
import StarRating from "@/components/shared/Icons/Stars";
import ButtonsCategory from "@/components/shared/Hero/HeroCourses";
import { CourseBread } from "@/components/shared/C_Detail";

export default function CoursesPage() {
  return (
    <Box p={2} ml={4}>
      <Text fontSize={"40px"} fontWeight={"bold"}>
        Video kurslar
      </Text>
      <CourseBread title_one={"Bosh sahifa"} title_two={"Kurslar"} link="/" />
      <ButtonsCategory />
    </Box>
  );
}
