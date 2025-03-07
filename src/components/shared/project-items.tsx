"use client";
import { Box, Button, Grid, Text } from "@chakra-ui/react";
import CustomImage from "./Image";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import Icons from "../Icons/Icons";
import { ProjectService } from "@/Services/projects";
import { useEffect, useState } from "react";
import { IProject } from "@/Interfaces/project";

interface Props {
  isAdmin: boolean;
}

const ProjectComponent = ({ isAdmin }: Props) => {
  const [project, setProject] = useState<IProject[] | undefined>([]);

  const deleteHandler = async (id: string | undefined) => {
    const newData = project?.filter((c) => c.id !== id);
    setProject(newData);
    const { message } = await ProjectService.deleteProject(id);
    console.log(message);
  };

  useEffect(() => {
    const getDataHandler = async () => {
      const { data } = await ProjectService.getProjects();
      setProject(data);
    };
    getDataHandler();
  }, []);

  console.log(project);
  return (
    <Grid
      mt={2}
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
      }}
      gap={6}
    >
      {project?.map((item, idx) => (
        <Box
          key={idx}
          w={"100%"}
          cursor={"pointer"}
          border={"1px solid grey"}
          borderRadius={"md"}
          boxShadow={"xl"}
          p={2}
        >
          <CustomImage product={item} />
          <Box
            p={1}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"start"}
          >
            <Box>
              <Text fontSize={"20px"}>{item.title}</Text>
              <Text fontSize={"15px"} mt={2}>
                {item.framework}
              </Text>
            </Box>
            {isAdmin && (
              <MenuRoot>
                <MenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Icons iconName={"BiDotsVerticalRounded"} />
                  </Button>
                </MenuTrigger>
                <MenuContent>
                  <MenuItem
                    value="new-txt"
                    onClick={() => deleteHandler(item?.id)}
                  >
                    <Icons iconName={"BiTrash"} size={20} />
                    O'chirish
                  </MenuItem>
                </MenuContent>
              </MenuRoot>
            )}
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default ProjectComponent;
