"use client";
import Header from "@/components/shared/HeaderText";
import InputField from "@/components/shared/InputField";
import { Toaster, toaster } from "@/components/ui/toaster";
import { IBlogs } from "@/Interfaces/blog";
import { db } from "@/lib/firebase/firebase";
import { Box, Button } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

interface IGetBlog {
  message: string;
  status: string;
}

const createBlog = async (data: IBlogs): Promise<IGetBlog> => {
  await addDoc(collection(db, "blog"), data);
  return { message: "success", status: "200" };
};

export default function BlogPageCreate() {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const apiHandler = async () => {
    setLoading(true);
    const onData: IBlogs = {
      id: `${Date.now()}`,
      title: title,
      image: image,
      description: desc,
      rates: {
        rate: 5,
        viewers: 0,
      },
    };
    const sendData = await createBlog(onData);
    toaster.success({
      title: sendData.message,
    });
    setLoading(false);
    setTitle("");
    setDesc("");
    setImage("");
  };

  return (
    <Box w={"100%"} p={2}>
      <Header text={"Blog qo'shish saxifasi"} />
      <Toaster />
      <Box
        border={"1px solid gray"}
        borderRadius={"md"}
        p={2}
        w={{ base: "100%", xl: "50%" }}
      >
        <InputField
          big={false}
          value={title}
          change={(e) => setTitle(e.target.value)}
          placeholder={"Blog title"}
        />
        <InputField
          big={false}
          value={image}
          change={(e) => setImage(e.target.value)}
          placeholder={"Blog image link"}
        />
        <InputField
          big={true}
          areachange={(e) => setDesc(e.target.value)}
          value={desc}
          placeholder={"Blog description"}
        />
        <Button
          loading={loading}
          disabled={desc.length == 0}
          onClick={apiHandler}
        >
          Send data
        </Button>
      </Box>
    </Box>
  );
}
