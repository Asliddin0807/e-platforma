import StarRating from "@/components/Icons/Stars";
import CustomImage from "@/components/shared/Image";
import { calculateTimeEstimated } from "@/helpers/calculate_time";
import { IBlogs } from "@/Interfaces/blog";
import { db } from "@/lib/firebase/firebase";
import { Box, HStack, Text } from "@chakra-ui/react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

interface IGetBlog {
  data: IBlogs;
}

const getBlog = async (id: string): Promise<IGetBlog> => {
  const courseRef = collection(db, "blog");
  const q = query(courseRef, where("id", "==", id));
  const courseSnap = await getDocs(q);

  const doc = courseSnap.docs[0];
  const onData: IBlogs = {
    id: doc.data().id,
    title: doc.data().title,
    description: doc.data().description,
    image: doc.data().image,
    rates: doc.data().rates,
  };
  return { data: onData };
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const ids = (await params).id;
  const { data } = await getBlog(ids);
  let split = data.description.split("\n\n");

  return (
    <Box p={2}>
      <HStack flexDirection={{ base: "column", md: "column", xl: "row" }}>
        <Box w={"100%"} p={2}>
          <Box position={"relative"} w={"100%"} mx={"auto"}>
            <CustomImage product={data} fill={true} height={"auto"} />
          </Box>
          <Text fontSize={"30px"}>{data.title}</Text>
          <HStack alignItems={""}>
            <StarRating rating={data.rates.rate} size={20} />
            <Text>{calculateTimeEstimated(data.description)}min read</Text>
          </HStack>

          <Box mt={10} lineHeight="1.5" textIndent="1rem">
            {split.map((item, index) => (
              <Text key={index} mb={4}>
                {" "}
                {/* mb={4} - добавляем отступ между абзацами */}
                {item}
                {/* Добавляем точку обратно в конец каждого предложения */}
              </Text>
            ))}
            {/* <div dangerouslySetInnerHTML={{ __html: data.description }} /> */}
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}
