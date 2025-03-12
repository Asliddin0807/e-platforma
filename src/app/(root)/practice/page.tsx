import { test } from "@/components/Local_data/datas";
import Header from "@/components/shared/HeaderText";
import CustomImage from "@/components/shared/Image";
import { Box, Grid, Text } from "@chakra-ui/react";

export default function QuizPage() {
  return (
    <Box p={4}>
      <Header text={"Testlar"} />
      <Text color={'red'}>Tugallanmagan sahifa</Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {test.map((item, idx) => (
          <Box
            w={"100%"}
            key={idx}
            borderRadius={"md"}
            p={2}
            border={"1px solid grey"}
          >
            <CustomImage product={item} />
            <Box mt={2}>
              <Text fontSize={"20px"}>{item.title}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

{
  /* <QuizComponent /> */
}


// 4zOmabfy1Z25aYeMvttDeKXVBQLaXF5OVw1JWbRQ 
// token for quiz api