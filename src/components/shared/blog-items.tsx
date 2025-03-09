"use client";
import { IBlogs } from "@/Interfaces/blog";
import { Box, Button, Grid, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import CustomImage from "./Image";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import Icons from "../Icons/Icons";
import { db } from "@/lib/firebase/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Toaster, toaster } from "../ui/toaster";

interface Props {
  data: IBlogs[];
}

const deleteBlog = async (id: string) => {
  const collection_db = collection(db, "blog");
  const q = query(collection_db, where("id", "==", id));
  const findDocs = await getDocs(q);

  if (findDocs.empty) {
    return { message: "Blog is not defined!" };
  }

  for (const document of findDocs.docs) {
    await deleteDoc(doc(db, "blog", document.id));
  }

  return { message: "Success! deleted" };
};

export const DeleteCard: FC<Props> = ({ data }) => {
  const deleteHandler = async (id: string) => {
    const { message } = await deleteBlog(id);
    toaster.success({
      title: message,
    });

    window.location.reload();
  };

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
      }}
      gap={2}
    >
      <Toaster />
      {data.map((item, idx) => (
        <Box
          key={idx}
          w={"100%"}
          p={2}
          border={"1px solid gray"}
          borderRadius={"md"}
          boxShadow={"xl"}
        >
          <CustomImage product={item} />
          <HStack justifyContent={"space-between"} mt={5}>
            <Text fontSize={"20px"} alignItems={"center"}>
              {item.title}
            </Text>
            <MenuRoot>
              <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Icons iconName={"BiDotsVerticalRounded"} />
                </Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem
                  value="new-txt"
                  onClick={() => deleteHandler(item?.id)}
                >
                  <Icons iconName={"BiTrash"} size={20} />
                  O'chirish
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </HStack>
        </Box>
      ))}
    </Grid>
  );
};
