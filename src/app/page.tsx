import { HeroComponent } from "@/components/Hero/Hero";
import CourseCard from "@/components/Cards/CourseCard";
import { course_data } from "@/components/Local_data/datas";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      w={"full"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      mt={4}
    >
      <HeroComponent />

      <Flex
        gap={2}
        mt={4}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
        flexShrink={1}
        w={"85%"}
        flexDirection={{ base: "column", md: "row", xl: "row" }}
      >
        {course_data.slice(0, 3).map((item, idx) => (
          <CourseCard key={idx} item={item} />
        ))}
      </Flex>
    </Box>
  );
}
