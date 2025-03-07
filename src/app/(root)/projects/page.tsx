import ProjectComponent from "@/components/shared/project-items";
import { ProjectService } from "@/Services/projects";
import { Box, Text } from "@chakra-ui/react";

export default async function Projects() {
  return (
    <Box p={2} m={4}>
      <Text fontSize={"40px"} fontWeight={"bold"}>
        Loyhalar
      </Text>
      <ProjectComponent isAdmin={false} />
    </Box>
  );
}
