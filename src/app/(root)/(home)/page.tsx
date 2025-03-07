
import { HeroComponent } from "@/components/Hero/Hero";
import MyCourses from "@/components/shared/my_courses";
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
      <MyCourses />
    </Container>
  );
}
