import { Box, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import DashboardChart from "@/components/shared/Bar";
import { admin_data } from "@/constants/admin_data";
import Icons from "@/components/Icons/Icons";
import CourseCard from "@/components/shared/CourseCard";
import Link from "next/link";
import CourseService from "@/Services/courses";

export default async function Dashboard() {
  const { data } = await CourseService.getCourses();

  return (
    <Box minH={"10vh"} w={"100%"} p={2} mt={2}>
      <Text fontSize={"30px"} fontWeight={"bold"} mt={"10px"} mb={"10px"}>
        Admin dashboard
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "column", xl: "row" }}
        gap={2}
        mb={10}
      >
        {admin_data.map((item, idx) => (
          <Box
            w={{ base: "100%", md: "100%", xl: "300px" }}
            h={"100px"}
            key={idx}
            p={2}
            borderRadius={"md"}
            bgGradient={"to-tr"}
            gradientFrom={"blue.900"}
            gradientTo={"blue.500"}
          >
            <HStack alignItems={"center"} justifyContent={"space-between"}>
              <Text fontSize={"20px"}>{item.text} </Text>
              <Icons iconName={item.icon} />
            </HStack>
            <Text fontSize={"19px"} fontWeight={"bold"} mt={6}>
              {item.count}
            </Text>
          </Box>
        ))}
      </Flex>
      <DashboardChart />
      <Box mt={10}>
        <HStack justifyContent={"space-between"}>
          <Text fontSize={"35px"} fontWeight={"bold"}>
            Kurslar
          </Text>
        </HStack>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {data.map((item, idx) => (
            <CourseCard key={idx} item={item} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
