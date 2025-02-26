"use client";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

interface Props {
  output: null;
}

export default function Output({ output }: Props) {
  const isMobile = useBreakpointValue({ base: true, md: false });

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
