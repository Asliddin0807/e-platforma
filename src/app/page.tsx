import { HeroComponent } from "@/components/Hero/Hero";
import CourseCard from "@/components/Cards/CourseCard";
import { course_data } from "@/components/Local_data/datas";
import { Flex, Container, Text, Box, Grid } from "@chakra-ui/react";

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
      <Box w={"full"}>
        <Text textAlign={"start"}>Kurslar</Text>
      </Box>
      <Flex
        gap={2}
        mt={4}
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
