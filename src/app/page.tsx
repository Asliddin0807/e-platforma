import { Button, Box, Text } from "@chakra-ui/react";
import { HeroComponent } from "@/components/Hero/Hero";

export default function Home() {
  console.log("Asliddin");
  let app = "Nuriddinov";

  return (
    <Box w={"full"}>
      <HeroComponent />
    </Box>
  );
}
