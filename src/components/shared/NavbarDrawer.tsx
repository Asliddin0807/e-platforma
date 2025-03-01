import {
  DrawerActionTrigger,
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
            <Button w={"full"} variant={"surface"} mt={2}>
              Kurslar
            </Button>
            <Button w={"full"} variant={"surface"} mt={2}>
              Kurslar
            </Button>
            <Button w={"full"} variant={"surface"} mt={2}>
              Kurslar
            </Button>
            <Button w={"full"} variant={"surface"} mt={2}>
              Chiqish
            </Button>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </Box>
  );
}
