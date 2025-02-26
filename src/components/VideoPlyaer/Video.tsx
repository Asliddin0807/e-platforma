"use client";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Video() {
  const [hasWindow, setHasWindow] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
      setLoading(false)
    }
  }, []);

  
  return (
    <Box position="relative" paddingTop="56.25%" w="100%" mx="auto">
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
      >
        {hasWindow && (
          <ReactPlayer
            url="https://vimeo.com/1060402870"
            playing={true}
            loop={true}
            controls={true}
            width="100%"
            height="100%"
          />
        )}
      </Box>
    </Box>
  );
}
