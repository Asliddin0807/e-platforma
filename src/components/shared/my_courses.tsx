"use client";
import { IAuth } from "@/Interfaces/auth";
import { CheckUser } from "@/Services/checkUser";
import { Box, Flex, HStack, Progress, Text } from "@chakra-ui/react";
import { useAuth } from "@clerk/nextjs";
import { FC, useEffect, useState } from "react";
import CustomImage from "./Image";
import StarRating from "../Icons/Stars";
import { calculatePercentage } from "@/helpers/calculate_persentage";
import { IProducts } from "@/Interfaces/Product";
import { useRouter } from "nextjs-toploader/app";

interface GetCalculateCourse {
  course: IProducts;
  percentage: number;
}

const MyCourses = () => {
  const { userId } = useAuth();
  const [profile, setProfile] = useState<IAuth | null>(null);

  const router = useRouter();

  const apiHandler = async () => {
    const { data } = await CheckUser.getUser(userId);
    setProfile(data);
    // const getPersentage = await calculatePersentage(profile);
  };

  const result: GetCalculateCourse[] = calculatePercentage(profile?.myCourses);

  useEffect(() => {
    apiHandler();
  }, []);

  return (
    <Box w={"100%"} mt={5}>
      <Text fontSize={"40px"}>Mening kurslarim</Text>
      {result?.map((item, idx) => (
        <Flex
          key={idx}
          border={"1px solid grey"}
          w={"100%"}
          borderRadius={"xl"}
          gap={5}
          p={2}
          alignItems={"center"}
          onClick={() => router.push(`/course/${item.course.slug}`)}
          cursor={"pointer"}
          flexDirection={{ base: "column", md: "column", xl: "row" }}
        >
          <Box w={{ base: "100%", md: "50%" }} h={"50%"}>
            <CustomImage product={item.course} />
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <Text fontSize={{ base: "20px", md: "30px", xl: "40px" }}>
              {item.course.title}
            </Text>
            <Text fontSize={"16px"} color={"gray"}>
              {item.course.category}
            </Text>
            <StarRating rating={item.course.rate.rates} size={20} />
            {/* <Text>{item.course.description.slice(0, 100)}...</Text> */}
            <Progress.Root
              defaultValue={0}
              value={item.percentage}
              max={100}
              variant="outline"
              maxW="sm"
              mt={5}
            >
              <HStack gap="5">
                <Progress.Track flex="1">
                  <Progress.Range />
                </Progress.Track>
                <Progress.ValueText>{item.percentage}%</Progress.ValueText>
              </HStack>
            </Progress.Root>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default MyCourses;
