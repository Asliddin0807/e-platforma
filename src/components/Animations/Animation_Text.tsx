import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

interface Props {
  codeblock: string;
  codeColor: string;
  text: string;
  style?: "row" | "row-reverse";
}

export const CodeBlocks = ({ codeblock, codeColor, text, style }: Props) => {
  return (
    <Grid
      display={"flex"}
      gap={10}
      p={4}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDirection={{
        base: "column-reverse",
        md: "column-reverse",
        xl: style,
      }}
      mt={5}
    >
      <Box w={{ base: "100%", md: "100%", xl: "50%" }} p={4}>
        <Text
          fontSize={{ base: "15px", md: "20px", lg: "25px" }}
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          fontWeight={"400"}
          textAlign={{ base: "center", md: "start" }}
        >
          {text}
        </Text>
        <Button p={4} colorPalette={"cyan"} mt={4}>
          Start
        </Button>
      </Box>
      <Box
        h="fit-content"
        border="1px"
        borderColor="richblack.700"
        rounded="xl"
        display="flex"
        flexDirection="row"
        py={3}
        textStyle="sm"
        position="relative"
        w={{ base: "100%", md: "100%", xl: "40%" }}
        lg={{ w: "470px" }}
        pr={10}
        pl={10}
        bg={"gray.900"}
      >
        {/* Indexing */}
        <Flex
          direction="column"
          align="center"
          w="10%"
          color="yellow.400"
          fontFamily="Inter"
          fontWeight="bold"
          textAlign="start"
          mt={2}
        >
          {[...Array(11)].map((_, idx) => (
            <Text key={idx}>{idx + 1}</Text>
          ))}
        </Flex>

        {/* Codes */}
        <Flex
          direction="column"
          gap={2}
          fontFamily="mono"
          fontWeight="bold"
          pr={1}
          w="100%"
          textAlign={"start"}
          color={codeColor}
        >
          <Box className={""}></Box>

          <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              overflowX: "hidden",
              fontSize: "16px",
            }}
            omitDeletionAnimation={true}
          />
        </Flex>
      </Box>
    </Grid>
  );
};
