"use client";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Box, Button, Text } from "@chakra-ui/react";
import Icons from "../Icons/Icons";
import Link from "next/link";
import { navButtons } from "@/constants/sidebar_buttons";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { CheckUser } from "@/Services/checkUser";

export default function NavbarDrawer() {
  const [dashboard, setDashboard] = useState<boolean>(false);
  const { userId } = useAuth();

  const checkUser = async () => {

    const { data } = await CheckUser.getUser(userId);
    if (data.status === "admin") {
      setDashboard(true);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <Box>
      <DrawerRoot placement={"start"}>
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm">
            <Icons iconName={"BiMenu"} />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Sahifalar</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            {navButtons.map((item, idx) => (
              <Link href={item.pathname} key={idx}>
                <Button mt={2} w={"100%"} size={"xs"} variant={"subtle"}>
                  {item.name}
                </Button>
              </Link>
            ))}
            {dashboard && (
              <Link href={"/dashboard"}>
                <Button w={'100%'} mt={2} size={'xs'}>Admin</Button>
              </Link>
            )}
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </Box>
  );
}
