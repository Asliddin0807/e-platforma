"use client";

import {
  Avatar,
  Box,
  Text,
  Button,
  defineStyle,
  Badge,
} from "@chakra-ui/react";

import { useState } from "react";

const ringCss = defineStyle({
  outlineWidth: "3px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
});

export default function SocialProfileWithImage() {
  const [follow, setFollow] = useState<boolean>(false);
  const followHandler = () => {
    setFollow(true);
  };
  return (
    <Box
      w={"full"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minH={"100vh"}
    >
      <Box
        boxShadow={"xl"}
        borderRadius={"lg"}
        bg={"blue.900"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        p={4}
        w={"350px"}
      >
        <Avatar.Root
          size={"2xl"}
          css={ringCss}
          style={{ width: "120px", height: "120px", fontSize: "70px" }}
          colorPalette="green"
        >
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://i.postimg.cc/yNrGK0W4/photo-2024-01-20-12-40-15.jpg" />
        </Avatar.Root>
        <Text fontSize={"25px"} mt={2} fontWeight={"bold"} textAlign={"center"}>
          Asliddin Nuriddinov
        </Text>
        <Text
          color={"grey"}
          fontSize={"20px"}
          fontWeight={"500"}
          textAlign={"center"}
        >
          @Asliddinjan_N
        </Text>
        <Box mt={6}>
          <Text
            fontSize={"17px"}
            textAlign={"center"}
            fontWeight={"medium"}
            color={"grey.300"}
          >
            JavaScript programmer, Web developer MERN-stack.
          </Text>

          <Box mt={4} display={"flex"} gap={2} justifyContent={"center"}>
            <Badge size={"lg"} variant={"solid"}>
              #JavaScript
            </Badge>
            <Badge size={"lg"} variant={"solid"}>
              #MERN-stack
            </Badge>
            <Badge size={"lg"} variant={"solid"}>
              #Web
            </Badge>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            w={"100%"}
            textAlign={"center"}
            mt={6}
          >
            <Text fontSize={"25px"}>8k</Text>
            <Text fontSize={"20px"}>followers</Text>
            <Button
              disabled={follow}
              onClick={followHandler}
              flex={1}
              mt={4}
              p={4}
              fontSize={"sm"}
              rounded={"full"}
              bg={follow ? "blue.600" : "blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Follow me
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
