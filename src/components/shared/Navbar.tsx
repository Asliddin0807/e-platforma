"use client";
import {
  Box,
  HStack,
  Link,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Icons from "./Icons/Icons";
import { ColorModeButton, useColorMode } from "@/components/ui/color-mode";
import { useRouter } from "nextjs-toploader/app";
import NavbarDrawer from "./NavbarDrawer";
import { SignedIn, useAuth, UserButton } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { useEffect, useState } from "react";
import { navButtons } from "@/constants/navbar_buttons";

export default function Navbar() {
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { userId } = useAuth();
  const { colorMode } = useColorMode();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (): void => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box w={"full"} p={1} h={"90px"} position={"sticky"} top={0} zIndex={10}>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        // boxShadow={"lg"}
        p={4}
        zIndex={1000}
        style={{ backdropFilter: "blur(10px) brightness(100%)" }}
        fontSize={"22px"}
        fontWeight={"bold"}
        bg={"gray.900"}
        _light={{ bg: 'gray.300' }}
        borderBottom={"1px solid gray"}
      >
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <Box display={"flex"} gap={2} alignItems={"center"}>
            {isMobile && <NavbarDrawer />}
            <Image
              src={"/image.png"}
              width={50}
              height={150}
              alt={"Code icon"}
              style={{ width: "50px", height: "50px" }}
              objectFit="cover"
            />
            <Link onClick={() => router.push("/")}>IT Code</Link>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <ColorModeButton />

            {userId ? (
              <SignedIn>
                <UserButton
                  appearance={{
                    baseTheme: colorMode === "dark" ? dark : neobrutalism,
                  }}
                />
              </SignedIn>
            ) : (
              <Button
                colorPalette={"green"}
                onClick={() => router.push("/sign-up")}
              >
                Kirish
                <Icons iconName={"BiLogIn"} />
              </Button>
            )}
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
