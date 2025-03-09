import Header from "@/components/shared/HeaderText";
import ProjectComponent from "@/components/shared/project-items";

import { Box, Text } from "@chakra-ui/react";

export default async function Projects() {
  return (
    <Box p={2} m={4}>
      <Header text={"Loyhalar"} />

      <ProjectComponent isAdmin={false} />
    </Box>
  );
}
