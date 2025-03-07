import { blogs } from "@/components/Local_data/datas";
import CustomImage from "@/components/shared/Image";
import { Box, Grid, Text } from "@chakra-ui/react";

export default function BlogPage() {
  return (
    <Box p={2} m={4}>
      <Text fontSize={"40px"} fontWeight={"bold"}>
        Bloglar
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {blogs.map((item, idx) => (
          <Box
            w={"100%"}
            key={idx}
            p={2}
            border={"1px solid grey"}
            borderRadius={"md"}
            boxShadow={"xl"}
            cursor={"pointer"}
          >
            <CustomImage product={item} fill={false} />

            <Box w={{ base: "100%", md: "50%", xl: "100%" }}>
              <Text fontSize={"20px"}>{item.title}</Text>
              <Text color={"grey"}>{item.description.slice(0, 80)}...</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
