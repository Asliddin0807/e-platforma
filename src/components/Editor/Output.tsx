import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  output: null;
}

export default function Output({ output }: Props) {
  return (
    <Box
      w={{ base: "100%", md: "50%" }}
      minH={"50vh"}
      bg={"#110c1b"}
      p={2}
      overflow={"auto"}
    >
      <Text textAlign={"start"} fontFamily={"monospace"} fontSize={"18px"}>
        {output ? output : "// Testing!"}
      </Text>
    </Box>
  );
}
