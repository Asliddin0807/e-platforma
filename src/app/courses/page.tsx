import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { course_data } from "@/components/Local_data/datas";
import CustomImage from '@/components/Image/Image'
export default function CoursesPage() {
  return (
    <Box p={10}>
      <Text fontSize={"40px"}>Video curslar</Text>
      {/* Header buttons category */}
      <Flex gap={2} mt={4}>
        {["Mobile", "Backend", "Frontend", "Game", "Photoshop"].map(
          (item, idx) => (
            <Button key={idx} colorPalette={"current"}>
              {item}
            </Button>
          )
        )}
      </Flex>
      <Flex gap={2} mt={4}>
        {course_data.map((item, idx) => (
          <Box key={idx} position={'relative'} border={'1px solid black'}>
            <CustomImage product={item} fill={false}/>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
