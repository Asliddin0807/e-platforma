"use client";
import { Box, Button, Link, Separator, Text } from "@chakra-ui/react";
import Icons from "./Icons/Icons";
import { navButtons } from "@/constants/navbar_buttons";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box
      w={"full"}
      mt={-2}
      h={"full"}
      minH={'100vh'}
      bg={"gray.900"}
      _light={{ bg: "gray.300" }}
    >
      <Box mt={20} p={5} position={"fixed"} w={"20%"} top={8}>
        {navButtons.map((item, idx) => (
          <Box
            key={idx}
            display={"flex"}
            gap={2}
            p={2}
            mt={1}
            w={"100%"}
            userSelect={"none"}
            _hover={{ bg: "gray.800", _light: { bg: "gray.400" } }}
            cursor={"pointer"}
            onClick={() => router.push(item.pathname)}
            bg={item.pathname == pathname ? 'gray.400' : ''}
          >
            <Icons iconName={item.icon} />
            <Text fontWeight={"bold"}>{item.name}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
