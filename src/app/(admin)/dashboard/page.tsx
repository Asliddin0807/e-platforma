import { Box, Flex, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Box minH={"10vh"} w={"100%"} p={2} mt={2}>
      <Text fontSize={"30px"} fontWeight={"bold"}>
        Kurs qo'shish
      </Text>
      <Flex flexDirection={{ base: 'column', md: 'column', xl: 'row' }}>
          
      </Flex>
    </Box>
  );
}
