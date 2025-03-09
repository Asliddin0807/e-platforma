"use client";
import { Box, Text } from "@chakra-ui/react";
import Icons from "../Icons/Icons";
import { useRouter } from "nextjs-toploader/app";
import { usePathname } from "next/navigation";
import { ISide } from "@/Interfaces/sidebar";

interface iGetSide {
  data: ISide[];
}

export default function Sidebar({ data }: iGetSide) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box
      w={"full"}
      mt={-2}
      h={"full"}
      minH={"100vh"}
      bg={"gray.900"}
      _light={{ bg: "gray.300" }}
    >
      <Box mt={20} p={5} position={"fixed"} w={"20%"} top={8}>
        {data.map((item, idx) => (
          <Box
            key={idx}
            display={"flex"}
            gap={2}
            p={3}
            mt={2}
            w={"100%"}
            userSelect={"none"}
            borderRadius={'md'}
            _hover={{ bg: "gray.800", _light: { bg: "gray.400" } }}
            cursor={"pointer"}
            onClick={() => router.push(item.pathname)}
            bg={item.pathname == pathname ? "gray.800" : "gray.700"}
          

            color={"white"}
            _light={{
              bg: item.pathname == pathname ? "gray.600" : "gray.400",
              color: "black",
            }}
          >
            <Icons iconName={item.icon} />
            <Text fontWeight={"bold"}>{item.name}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
