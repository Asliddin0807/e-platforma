"use client";
import { Box } from "@chakra-ui/react";
import Vimeo from "@u-wave/react-vimeo";

interface Props {
  video: string | undefined;
}

export default function Video({ video = "" }: Props) {
  return (
    <Box position="relative" paddingTop="56.25%" w="100%" mx="auto">
      <Box position="absolute" top={0} left={0} width="100%" height="100%">
        <Vimeo
          video={video}
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
