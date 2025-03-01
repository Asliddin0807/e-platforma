import { Box, Button, Link, Text } from "@chakra-ui/react";
import Icons from "./Icons/Icons";

export default function Sidebar() {
  return (
    <Box w={"100%"} mt={-10} bg={"gray.900"} minH={"100vh"}>
      <Box mt={10} p={5} position={"sticky"} top={0}>
        <Button w={"full"} mt={2}>
          Kurs qo'shish
        </Button>
        <Button w={"full"} mt={2}>
          Kurs qo'shish
        </Button>
        <Button w={"full"} mt={2}>
          Kurs qo'shish
        </Button>
        <Button w={"full"} mt={2}>
          Kurs qo'shish
        </Button>
      </Box>
    </Box>
  );
}
