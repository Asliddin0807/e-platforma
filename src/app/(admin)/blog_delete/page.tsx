import Icons from "@/components/Icons/Icons";
import { DeleteCard } from "@/components/shared/blog-items";
import Header from "@/components/shared/HeaderText";
import CustomImage from "@/components/shared/Image";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { IBlogs } from "@/Interfaces/blog";
import { db } from "@/lib/firebase/firebase";
import { Box, Button, Grid, HStack, Text } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";

const getAllBlogs = async () => {
  const blogs = collection(db, "blog");
  const getAll = await getDocs(blogs);
  const data: IBlogs[] = getAll.docs.map((doc) => ({
    id: doc.data().id,
    ...doc.data(),
  })) as IBlogs[];

  return { data: data };
};

export default async function DeletePage() {
  const { data } = await getAllBlogs();

  return (
    <Box p={4}>
      <Header text={"Blog o'chirish sahifasi"} />
      <DeleteCard data={data} />
    </Box>
  );
}
