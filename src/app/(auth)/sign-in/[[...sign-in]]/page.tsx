"use client";

import { SignIn } from "@clerk/nextjs";
import { useColorMode } from "@/components/ui/color-mode";
import { dark, neobrutalism } from "@clerk/themes";
import { Box } from "@chakra-ui/react";
export default function SingUp() {
  const { colorMode } = useColorMode();

  return (
    <Box w={"full"} display={"flex"} justifyContent={"center"} mt={5}>
      <SignIn
        appearance={{
          baseTheme: colorMode === "dark" ? dark : neobrutalism,
        }}
      />
    </Box>
  );
}
