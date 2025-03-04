'use client'
import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "nextjs-toploader/app";
import CustomImage from "./Image";
import StarRating from "./Icons/Stars";
import { IProducts } from "@/Interfaces/Product";

interface Props {
  item: IProducts;
}

export default function CourseCard({ item }: Props) {
  const router = useRouter();
  return (
    <Box
      position={"relative"}
      w={{ base: "100%", md: "600px", xl: "330px" }}
      border={"1px solid grey"}
      p={2}
      borderRadius={"md"}
      onClick={() => router.push(`/course/${item.slug}`)}
      cursor={"pointer"}
    >
      <CustomImage product={item} />
      <Text fontSize={"22px"} mt={2}>
        {item.title}
      </Text>
      <StarRating rating={item?.rate?.rates} size={20} />
    </Box>
  );
}
