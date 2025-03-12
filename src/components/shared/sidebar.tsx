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

  const sideHandler = (path: string) => {
    router.push(path);
  };

  return (
    <Box w={"full"} h={"full"}>
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
            borderRadius={"md"}
            _hover={{
              bg: "cyan.400",
              color: "white",
              _light: { bg: "gray.400" },
            }}
            cursor={"pointer"}
            onClick={() => sideHandler(item.pathname)}
            bg={item.pathname == pathname ? "cyan.500" : ""}
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
