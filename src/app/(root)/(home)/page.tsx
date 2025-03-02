import { HeroComponent } from "@/components/shared/Hero/Hero";
import CourseCard from "@/components/shared/CourseCard";
import { course_data } from "@/components/Local_data/datas";
import { Flex, Container, Text, Box, Grid } from "@chakra-ui/react";
import CheckUser from "@/components/shared/check-user";

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
      <CheckUser />
      <Flex
        gap={2}
        mt={10}
        justifyContent={"space-evenly"}
        flexWrap={"wrap"}
        flexShrink={1}
        w={"full"}
        flexDirection={{ base: "column", md: "row", xl: "row" }}
      >
        {course_data.slice(0, 3).map((item, idx) => (
          <CourseCard key={idx} item={item} />
        ))}
      </Flex>
    </Container>
  );
}
