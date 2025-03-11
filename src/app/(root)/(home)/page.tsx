import CourseCard from "@/components/shared/CourseCard";
import Header from "@/components/shared/HeaderText";
import { HeroComponent } from "@/components/shared/Hero";
import CustomImage from "@/components/shared/Image";
import MyCourses from "@/components/shared/my_courses";
import { IBlogs } from "@/Interfaces/blog";
import { db } from "@/lib/firebase/firebase";
import CourseService from "@/Services/courses";

import { Box, Button, Container, Grid, Text } from "@chakra-ui/react";
import { currentUser } from "@clerk/nextjs/server";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

const getBlogs = async () => {
  const blogs = await getDocs(collection(db, "blog"));
  const data: IBlogs[] = blogs.docs.map((doc) => ({
    id: doc.data().id,
    ...doc.data(),
  })) as IBlogs[];

  return { blog_data: data };
};

export default async function Home() {
  const user = await currentUser();
  const { data } = await CourseService.getCourses();
  const { blog_data } = await getBlogs();

  return (
    <Container display={"flex"} flexDirection={"column"} mt={4}>
      <HeroComponent />
      <>
        <Header text={"Kurslar"} />
        {data.map((item, idx) => (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={6}
            w={"100%"}
          >
            <CourseCard item={item} key={idx} />
          </Grid>
        ))}
      </>
      <Box mt={4}>
        <Header text={"Bloglar"} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={6}
          w={"100%"}
        >
          {blog_data.map((item, key) => (
            <Box
              w={"100%"}
              key={key}
              p={2}
              border={"1px solid grey"}
              borderRadius={"md"}
              boxShadow={"xl"}
              cursor={"pointer"}
            >
              <CustomImage product={item} fill={false} />

              <Box w={{ base: "100%", md: "50%", xl: "100%" }}>
                <Text fontSize={"20px"}>{item.title}</Text>
                <Text color={"grey"}>{item.description.slice(0, 70)}...</Text>
                <Link href={`/blog/${item.id}`}>
                  <Button mt={5}>{"Ko'proq"}</Button>
                </Link>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>

      {user?.id && <MyCourses />}
    </Container>
  );
}
