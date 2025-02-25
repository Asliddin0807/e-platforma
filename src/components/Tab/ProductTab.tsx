import { IProducts } from "@/Interfaces/Product";
import { Box, Grid, GridItem, Tabs, Text } from "@chakra-ui/react";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import Icons from "../Icons/Icons";

interface Props {
  list: string[];
  project: string[];
}

export default function ProductTab({ list, project }: Props) {
  return (
    <Box>
      <Tabs.Root
        defaultValue="members"
        fitted
        variant="enclosed"
        colorPalette={"purple"}
      >
        <Tabs.List>
          <Tabs.Trigger value="projects">
            <LuFolder />
            Nimalarni o'rganasiz?
          </Tabs.Trigger>
          <Tabs.Trigger value="members">
            <LuUser />
            Kim uchun?
          </Tabs.Trigger>
          <Tabs.Trigger value="tasks">
            <LuSquareCheck />
            Tavsiflar
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="members" display={"block"}>
          {list.map((item, index) => (
            <Text key={index}>
              {index === 0 ? item.trim() : `• ${item.trim()}`}
            </Text>
          ))}
        </Tabs.Content>
        <Tabs.Content value="projects">
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            p={2}
            gridGap={2}
          >
            {project.map((item, idx) => (
              <Box display={"flex"} key={idx} gap={2} alignItems={"center"}>
                <Icons iconName={"BiBullseye"} size={20} />
                <Text fontSize={"18px"}>{item}</Text>
              </Box>
            ))}
            <GridItem></GridItem>
          </Grid>
        </Tabs.Content>
        <Tabs.Content value="tasks">
          Manage your tasks for freelancers
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
}
