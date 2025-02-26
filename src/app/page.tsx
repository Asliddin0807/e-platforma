import { HeroComponent } from "@/components/Hero/Hero";
import CourseCard from "@/components/Cards/CourseCard";
import { course_data } from "@/components/Local_data/datas";
import { Box, Flex, HStack, Text, Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container
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
        w={"84%"}
        flexDirection={{ base: "column", md: "row", xl: "row" }}
      >
        {course_data.slice(0, 3).map((item, idx) => (
          <CourseCard key={idx} item={item} />
        ))}
      </Flex>
    </Container>
  );
}
