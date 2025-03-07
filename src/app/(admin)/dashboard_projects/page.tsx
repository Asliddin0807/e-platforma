"use client";
import ProjectComponent from "@/components/shared/project-items";
import { toaster } from "@/components/ui/toaster";
import { IProject } from "@/Interfaces/project";
import { ProjectService } from "@/Services/projects";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

import { useState } from "react";

export default function ProjectDetail() {
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<IProject>({
    title: "",
    image: "",
    git_link: "",
    framework: "",
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Обновляем состояние, меняя только нужное поле
    setValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createProject = async () => {
    setLoading(true);
    if (value.git_link.length === 0) return setLoading(false);

    const data: IProject = {
      id: `${Date.now()}`,
      title: value.title,
      git_link: value.git_link,
      image: value.image,
      rating: {
        rate: 4,
        views: 0,
      },
      framework: value.framework,
    };
    const { message } = await ProjectService.createProject(data);

    toaster.success({
      title: message,
    });
    setLoading(false);
  };

  return (
    <Box p={2}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"40px"} fontWeight={"bold"}>
          Loyhalar boshqaruvi
        </Text>
        <Button onClick={() => setShow((prev) => (prev = !prev))}>
          Loyha qo'shish
        </Button>
      </Flex>
      {show && (
        <Box
          w={{ base: "100%", md: "100%", xl: "50%" }}
          p={2}
          bg={"gray.800"}
          _light={{ bg: "gray.300" }}
          borderRadius={"md"}
        >
          <Input
            mt={2}
            placeholder={"Title"}
            name={"title"}
            value={value.title}
            variant={"subtle"}
            onChange={inputHandler}
          />

          <Input
            mt={2}
            placeholder={"image link"}
            name={"image"}
            value={value.image}
            variant={"subtle"}
            onChange={inputHandler}
          />
          <Input
            mt={2}
            placeholder={"github link"}
            name={"git_link"}
            value={value.git_link}
            variant={"subtle"}
            onChange={inputHandler}
          />

          <Input
            mt={2}
            placeholder={"Framework"}
            name={"framework"}
            value={value.framework}
            variant={"subtle"}
            onChange={inputHandler}
          />

          <Button mt={2} w={"full"} loading={loading} onClick={createProject}>
            Yuklash
          </Button>
        </Box>
      )}
      <ProjectComponent isAdmin={true} />
    </Box>
  );
}
