"use client";
import { Box, HStack, Link, Button } from "@chakra-ui/react";
import Image from "next/image";
import Icons from "../Icons/Icons";
import { ColorModeButton } from "@/components/ui/color-mode";
import { useRouter } from "nextjs-toploader/app";

export default function Navbar() {
  const router = useRouter();
  return (
    <Box w={"full"} p={5} h={"90px"}>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        boxShadow={"lg"}
        p={4}
        zIndex={1000}
        style={{ backdropFilter: "blur(10px) brightness(100%)" }}
        fontSize={"22px"}
        fontWeight={"bold"}
      >
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <Box display={"flex"} gap={2} alignItems={"center"}>
            <Image
              src={"/image.png"}
              width={50}
              height={150}
              alt={"Code icon"}
              style={{ width: "50px", height: "50px" }}
              objectFit="cover"
            />
            <Link onClick={() => router.push('/')}>IT Academy</Link>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <ColorModeButton />
            <Button onClick={() => router.push("/courses")}>
              Video kurslar
            </Button>
            <Button colorPalette={"green"}>
              Kirish
              <Icons iconName={"BiLogIn"} />
            </Button>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
