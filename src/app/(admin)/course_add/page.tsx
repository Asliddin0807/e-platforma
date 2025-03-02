import { CourseBread } from "@/components/shared/C_Detail";
import InputField from "@/components/shared/InputField";
import Menu from "@/components/shared/menu";
import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from "@/components/ui/file-upload";

import { Box, Flex, Text } from "@chakra-ui/react";

export default function AddCourse() {
  return (
    <Flex w={"full"} alignItems={"start"} gap={4}>
      <Box w={"50%"} p={2}>
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
          />
          <InputField
            label="Slug"
            helperText="slug yozish shart emas avtomatik"
            placeholder={"Slug"}
            big={false}
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
          />
          <InputField
            label="Darslik kim uchun"
            helperText="Iltimos • maxsus belgi bilan yozing!"
            placeholder={"• Biz uchun\n• Siz uchun"}
            big={true}
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
          <Menu />
          <Menu />
        </Box>
        <Box
          w={"full"}
          p={4}
          borderRadius={"md"}
          boxShadow={"md"}
          bg={"gray.800"}
          mt={2}
        >
          <InputField
            label="Kurs darsligi"
            helperText=""
            placeholder={"# 1-dars. Kirish"}
            big={false}
          />
          <InputField
            label="Link havola"
            helperText="Vimeo platformasidan havola"
            placeholder={"https://vimeo.com/8847677"}
            big={false}
          />
        </Box>
      </Box>
      <Box mt={"100px"}>
        <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={1}>
          <FileUploadDropzone
            label="Drag and drop here to upload"
            description=".png, .jpg up to 5MB"
          />
          <FileUploadList />
        </FileUploadRoot>
      </Box>
    </Flex>
  );
}
