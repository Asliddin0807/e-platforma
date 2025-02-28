"use client";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Vimeo from "@u-wave/react-vimeo";

export default function Video() {
  return (
    <Box position="relative" paddingTop="56.25%" w="100%" mx="auto">
      <Box position="absolute" top={0} left={0} width="100%" height="100%">
        <Vimeo
          video="https://vimeo.com/1060402870"
          autoplay
          responsive={true}
          loop={true}
          controls={true}
          width="100%"
          height="100%"
          // background={true}
          showTitle={false}
          showByline={false}
        />
      </Box>
    </Box>
  );
}
