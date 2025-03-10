import Header from "@/components/shared/HeaderText";
import CustomImage from "@/components/shared/Image";
import { IBlogs } from "@/Interfaces/blog";
import { db } from "@/lib/firebase/firebase";
import { Box, Button, Grid, Text } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { Suspense } from "react";

const getBlogs = async () => {
  const blogs = await getDocs(collection(db, "blog"));
  const data: IBlogs[] = blogs.docs.map((doc) => ({
    id: doc.data().id,
    ...doc.data(),
  })) as IBlogs[];

  return { data: data };
};

export default async function BlogPage() {
  const { data } = await getBlogs();

  return (
    <Box p={4}>
      <Header text={"Bloglar"} />
      {/* <CourseBread title_one=""/> */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {data.map((item, idx) => (
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
              <Link href={`/blog/${item.id}`}>
                <Button mt={5}>Ko'proq</Button>
              </Link>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
