'use client'
import Header from "@/components/shared/HeaderText";
import { db } from "@/lib/firebase/firebase";
import { Box, Text, Field, Input, Textarea, Button } from "@chakra-ui/react";
import { useAuth } from "@clerk/nextjs";
import { addDoc, collection } from "firebase/firestore";

import { useState } from "react";

interface IData {
  author: string | null | undefined;
  text: string;
  date: string;
}

const createFaq = async (data: IData) => {
  await addDoc(collection(db, "faq"), data);
  return { message: "Success!", status: "200" };
};

export default function FAQpage() {
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { userId } = useAuth();
  const apiHandler = async () => {
    setLoading(true);
    const date = new Date();

    const data = {
      author: userId,
      text: text,
      date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
    };

    const { message } = await createFaq(data);
    setText("");
    setLoading(false);
  };
  return (
    <Box p={4}>
      <Header text={"FAQ"} />
      <Text fontSize={"23px"}>Taklif va murojaat qilishingiz mumkun!</Text>
      <Box textAlign={"end"} mt={2}>
        <Field.Root>
          <Field.Label>FAQ</Field.Label>
          <Textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Iltimos fikringizni yozing..."
            minH={"200px"}
          />
          <Button onClick={apiHandler} loading={loading}>
            {"Jo'natish"}
          </Button>
        </Field.Root>
      </Box>
    </Box>
  );
}
