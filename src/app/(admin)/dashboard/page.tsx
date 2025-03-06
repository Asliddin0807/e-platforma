import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import DashboardChart from "@/components/shared/Bar";
import { admin_data } from "@/constants/admin_data";
import Icons from "@/components/Icons/Icons";
import { course_data } from "@/components/Local_data/datas";
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
        <HStack justifyContent={"space-between"} mx={"15px"}>
          <Text fontSize={"35px"} fontWeight={"bold"}>
            Kurslar
          </Text>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Link
              href={"/course_add"}
              style={{
                fontSize: "15px",
                backgroundColor: "green",
                padding: "4px",
                borderRadius: "5px",
              }}
            >
              Kurs qo'shish
            </Link>
            <Link
              href={"/course_delete"}
              style={{
                fontSize: "15px",
                backgroundColor: "red",
                padding: "4px",
                borderRadius: "5px",
              }}
            >
              Kursni o'chirish
            </Link>
          </Box>
        </HStack>
        <Flex
          gap={2}
          mt={2}
          justifyContent={"space-evenly"}
          flexWrap={"wrap"}
          flexShrink={1}
          w={"full"}
          flexDirection={{ base: "column", md: "row", xl: "row" }}
        >
          {data.map((item, idx) => (
            <CourseCard key={idx} item={item} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
