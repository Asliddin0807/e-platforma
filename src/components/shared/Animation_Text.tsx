import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

interface Props {
  codeblock: string;
  codeColor: string;

  style?: "row" | "row-reverse";
}

export const CodeBlocks = ({ codeblock, codeColor, style }: Props) => {
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
      <Box
        h="fit-content"
        // border={''}
        border="1px solid black"
        borderColor="richblack.700"
        rounded="xl"
        display="flex"
        flexDirection="row"
        py={3}
        textStyle="sm"
        position="relative"
        w={{ base: "370px", md: "400px", xl: "400px" }}
        // lg={{ w: "470px" }}
        pr={10}
        pl={10}
        bg={"gray.900"}
      >
        {/* Indexing */}
        <Flex
          direction="column"
          align="center"
          w={"10%"}
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
