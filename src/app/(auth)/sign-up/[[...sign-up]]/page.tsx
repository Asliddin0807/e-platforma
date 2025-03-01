"use client";

import { SignUp } from "@clerk/nextjs";
import { useColorMode } from "@/components/ui/color-mode";
import { dark, neobrutalism } from "@clerk/themes";
import { Box } from "@chakra-ui/react";

export default function SingUp() {
  const { colorMode } = useColorMode();

  return (
    <Box w={'full'} display={'flex'} mt={5} mx={'auto'} justifyContent={'center'}>
      <SignUp
        appearance={{
          baseTheme: colorMode === "dark" ? dark : neobrutalism,
        }}
      />
    </Box>  
  );
}
