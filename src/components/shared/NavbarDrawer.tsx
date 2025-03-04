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
import Icons from "./Icons/Icons";
import Link from "next/link";
import { navButtons } from "@/constants/navbar_buttons";

export default function NavbarDrawer() {
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
                <Button mt={2} w={"100%"} size={"xs"} variant={'subtle'}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </Box>
  );
}
