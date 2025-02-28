"use client";
import Icons from "@/components/Icons/Icons";
import CustomImage from "@/components/Image/Image";
import { InputGroup } from "@/components/ui/input-group";
import { PasswordInput } from "@/components/ui/password-input";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Input,
  Separator,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setLogin] = useState<boolean>();

  return (
    <Flex
      p={4}
      w={"full"}
      gap={4}
      flexDirection={{ base: "column", md: "column", xl: "row" }}
      bgGradient={"to-l"}
      gradientFrom={"blue.800"}
      gradientTo={"gray.900"}
      minH={"90vh"}
    >
      <Box w={{ base: "100%", md: "100%", xl: "50%" }}>
        <Box backdropFilter={"blur(10px)"}>
          <Flex alignItems={"center"} w={"full"} justifyContent={"center"}>
            <Image
              src={"/image.png"}
              w={"95px"}
              h={"95px"}
              objectFit={"cover"}
              mt={"10%"}
            />
            <Text
              mt={"10%"}
              textAlign={"center"}
              fontSize={{ base: "60px", md: "50px", xl: "90px" }}
              fontWeight={"bold"}
              color={"blue.400"}
            >
              IT Code
            </Text>
          </Flex>
          <Text textAlign={"center"} fontSize={"22px"} color={"grey"}>
            Platformada davom etish uchun tizimga kiring!
          </Text>
          <Stack w={"full"} alignItems={"center"} mt={4}>
            <AvatarGroup size="lg" stacking="last-on-top">
              {items.map((item, idx) => (
                <Avatar.Root key={idx}>
                  <Avatar.Fallback name={item.name} />
                  <Avatar.Image src={item.src} />
                </Avatar.Root>
              ))}
              <Avatar.Root>
                <Avatar.Fallback>+10</Avatar.Fallback>
              </Avatar.Root>
            </AvatarGroup>
          </Stack>
        </Box>
      </Box>
      <Box p={5} w={{ base: "100%", md: "100%", xl: "50%" }}>
        <Box
          m={4}
          p={3}
          bg={"blue.900"}
          _light={{ bg: "gray.300" }}
          boxShadow={"xl"}
          w={{ base: "100%", md: "100%", xl: "70%" }}
          borderRadius={"md"}
          mx={"auto"}
        >
          <Text textAlign={"center"} fontSize={"22px"}>
            IT Code
          </Text>
          <Text textAlign={"center"} fontSize={"15px"}>
            Ro'yxatdan o'ting yoki Login!
          </Text>
          <Box
            mt={5}
            display={"flex"}
            gap={2}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Button size={"xs"} w={"50%"}>
              <Icons iconName={"BiLogoGoogle"} />
            </Button>
            <Button size={"xs"} w={"50%"}>
              <Icons iconName={"BiLogoFacebook"} />
            </Button>
            <Separator orientation={"horizontal"} variant={"solid"} />
          </Box>
          <Box mt={10}>
            {!isLogin && (
              <InputGroup
                flex="1"
                w={"full"}
                startElement={<Icons iconName={"BiUser"} size={15} />}
              >
                <Input
                  autoComplete={"off"}
                  placeholder="Ism Familiya"
                  variant={"subtle"}
                  size={"md"}
                />
              </InputGroup>
            )}
            <InputGroup
              flex="1"
              w={"full"}
              mt={2}
              startElement={<Icons iconName={"BiEnvelope"} size={15} />}
            >
              <Input
                placeholder="Pochta manzil"
                type={"email"}
                variant={"subtle"}
              />
            </InputGroup>
            <Box mt={2}>
              <PasswordInput
                placeholder="Parol o'ylab toping!"
                size="md"
                variant={"subtle"}
              />
            </Box>
            <Flex justify={"space-between"} flexDirection={{ base: 'column', md: 'column', xl: "row" }} mt={10}>
              <Button mt={2}>{isLogin ? "Kirish" : "Ro'yxatdan o'tish"}</Button>
              <Button
                mt={2}
                variant={"ghost"}
                onClick={() => setLogin(!isLogin)}
              >
                {isLogin ? "Ro'yxatdan o'tish" : "Akkaunt mavjudmi? Login"}
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

const items = [
  {
    src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
    name: "Uchiha Sasuke",
  },
  {
    src: "https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c",
    name: "Baki Ani",
  },
  {
    src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863",
    name: "Uchiha Chan",
  },
];
