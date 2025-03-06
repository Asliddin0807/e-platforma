"use client";
import { CourseBread } from "@/components/shared/Breads";
import CourseItems from "@/components/shared/course_item";
import InputField from "@/components/shared/InputField";
import Menu from "@/components/shared/menu";
import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from "@/components/ui/file-upload";
import { toaster } from "@/components/ui/toaster";
import { IProducts } from "@/Interfaces/Product";
import { ITag } from "@/Interfaces/tag";
import { db } from "@/lib/firebase/firebase";
import CourseService from "@/Services/courses";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Input,
  Tag,
  Text,
} from "@chakra-ui/react";
import {
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";

export default function AddCourse() {
  const [title, setTitle] = useState<string>("");
  const [select, setSelect] = useState<string>("Yo'nalish");
  const [description, setDesc] = useState<string>("");
  const [whom, setWhom] = useState<string>("");
  const [tags, setTagdata] = useState<string[]>([]);
  const [slug, setSlug] = useState<string>("");
  const [imageLink, setLink] = useState<string>("");
  const [tgs, setTgs] = useState<ITag | null>(null);
  const [courses, setCourses] = useState([
    { id: `${Date.now()}`, title: "", link: "", isComplete: false },
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  const selectHandler = (item: string) => {
    setTagdata((prevTagData) => {
      const updatedData: string[] = prevTagData.includes(item)
        ? prevTagData.filter((c) => c !== item)
        : [...prevTagData, item];

      return updatedData;
    });
  };

  async function getTegs(): Promise<ITag | null> {
    try {
      const findDoc = doc(db, "tags", "ZJs5fcdBTC2FL3y6lnno");
      const docSnap: DocumentSnapshot<DocumentData> = await getDoc(findDoc);

      if (!docSnap.exists()) {
        return null;
      }

      const data = docSnap.data() as ITag; // Данные в виде объекта
      setTgs(data); // Передаём объект, а не массив

      return data;
    } catch (error) {
      return null;
    }
  }

  const sendForm = async () => {
    setLoading(true);
    const onData: IProducts = {
      title: title,
      category: select,
      description: description,
      for_whom: whom,
      slug: slug,
      project: tags,
      rate: {
        rates: 4,
        viewers: 100,
      },
      image: imageLink,
      video_course: courses,
      comments: [],
    };
    const { message, status } = await CourseService.createCourse(onData);
    if (status === "200") {
      toaster.success({
        title: message,
      });
      setLoading(false);
    } else {
      toaster.success({
        title: message,
      });
      setLoading(false);
    }
    setTitle("");
    setSlug("");
    setDesc("");
    setSelect("");
    setWhom("");
    setLink("");
    setCourses([
      { id: `${Date.now()}`, title: "", link: "", isComplete: false },
    ]);
    setTagdata([]);
  };

  useEffect(() => {
    getTegs();
  }, []);

  return (
    <Flex
      w={"full"}
      alignItems={"start"}
      gap={4}
      flexDirection={{
        base: "column-reverse",
        md: "column-reverse",
        xl: "row",
      }}
    >
      <Box w={{ base: "100%", md: "100%", xl: "50%" }} p={2}>
        <Text fontSize={"30px"} fontWeight={"bold"} mt={5}>
          Kurs qo'shish
        </Text>
        <CourseBread
          title_one={"Dashboard"}
          title_two={"Kurs qo'shish"}
          link={"dashboard"}
        />
        <Box
          w={"full"}
          p={4}
          borderRadius={"md"}
          boxShadow={"md"}
          bg={"gray.800"}
        >
          <InputField
            label="Kurs nomi"
            helperText="Kurs nomi muhum!"
            placeholder={"JavaScript asoslari"}
            big={false}
            change={(e) => setTitle(e.target.value)}
            value={title}
          />

          <InputField
            label="Rasm havolasi"
            helperText="Rasimning linki"
            placeholder={"https://google.images.jpg"}
            big={false}
            change={(e) => setLink(e.target.value)}
            value={imageLink}
          />
          <InputField
            label="Slug"
            helperText="slug yozish shart emas avtomatik"
            placeholder={"Slug"}
            big={false}
            value={slug}
            change={(e) => setSlug(e.target.value)}
          />
        </Box>
        <Box
          w={"full"}
          p={4}
          borderRadius={"md"}
          mt={2}
          boxShadow={"md"}
          bg={"gray.800"}
        >
          <InputField
            label="Kurs xaqida"
            helperText="Kurs xaqida. Agar qo'shimcha ma'lumot bolsa 🔹 - belgi bilan yozing!"
            placeholder={"Bu Kurs xaqida"}
            big={true}
            value={description}
            areachange={(e) => setDesc(e.target.value)}
          />
          <InputField
            label="Darslik kim uchun"
            helperText="Iltimos • maxsus belgi bilan yozing!"
            placeholder={"• Biz uchun\n• Siz uchun"}
            big={true}
            value={whom}
            areachange={(e) => setWhom(e.target.value)}
          />
        </Box>
        <Box
          w={"full"}
          p={4}
          borderRadius={"md"}
          mt={2}
          boxShadow={"md"}
          bg={"gray.800"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Menu select={select} setSelect={setSelect} />
          {tgs?.tag_data.map((item, idx) => (
            <Tag.Root
              key={idx}
              mt={2}
              size="md"
              variant={tags?.includes(item) ? "solid" : "outline"}
              cursor="pointer"
              onClick={() => selectHandler(item)}
            >
              <Tag.Label>{item}</Tag.Label>
            </Tag.Root>
          ))}
        </Box>

        <CourseItems courses={courses} setCourses={setCourses} />

        <ButtonGroup
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={2}
        >
          <Button onClick={sendForm} loading={loading}>
            Kursni yuklash
          </Button>
          <Button colorPalette={"red"}>Orqaga</Button>
        </ButtonGroup>
      </Box>
      <Box mt={"100px"} mx={"auto"}>
        <FileUploadRoot maxW="full" alignItems="stretch" maxFiles={1}>
          <FileUploadDropzone
            label="Drag and drop here to upload"
            description=".png, .jpg up to 5MB"
          />
          <FileUploadList />
        </FileUploadRoot>
        <Text fontSize={"17px"} color={"red"}>
          Rasm yuklashda vaqtinchalik nosozlik!
        </Text>
      </Box>
    </Flex>
  );
}
