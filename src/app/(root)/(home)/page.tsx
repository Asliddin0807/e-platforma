import { HeroComponent } from "@/components/shared/Hero";
import MyCourses from "@/components/shared/my_courses";

import { Container } from "@chakra-ui/react";

export default async function Home() {
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
