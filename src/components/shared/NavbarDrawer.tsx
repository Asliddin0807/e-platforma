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
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import Icons from "../Icons/Icons";
import Link from "next/link";
import { navButtons } from "@/constants/sidebar_buttons";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { CheckUser } from "@/Services/checkUser";
import { ISide } from "@/Interfaces/sidebar";

interface Props {
  data: ISide[];
}

export default function NavbarDrawer({ data }: Props) {
  const [dashboard, setDashboard] = useState<boolean>(false);
  const { userId } = useAuth();
  const { onClose } = useDisclosure();

  const checkUser = async () => {
    const { data } = await CheckUser.getUser(userId);
    if (data.status === "admin") {
      setDashboard(true);
    }
  };

  useEffect(() => {
    checkUser();
  }, [userId]);

  return (
    <Box>
      <DrawerRoot placement={"start"}>
        <DrawerBackdrop />
        <DrawerTrigger>
          <Button variant="outline" size="sm">
            <Icons iconName={"BiMenu"} />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Sahifalar</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            {data.map((item, idx) => (
              <Link href={item.pathname} key={idx}>
                <Button
                  mt={2}
                  onClick={onClose}
                  w={"100%"}
                  size={"xs"}
                  variant={"subtle"}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            {dashboard && (
              <Link href={"/dashboard"}>
                <Button w={"100%"} onClick={onClose} mt={2} size={"xs"}>
                  Admin
                </Button>
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
