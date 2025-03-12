import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/sidebar";
import { adminNavButtons } from "@/constants/sidebar_buttons";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box>
      <Navbar data={adminNavButtons} />
      <Box display={"flex"} gap={2}>
        <Box
          w={"20%"}
          minH={"100vh"}
          bg={"gray.900"}
          _light={{ bg: "gray.300" }}
          borderRight={"1px solid grey"}
          display={{ base: "none", md: "none", xl: "block" }}
          mt={-5}
        >
          <Sidebar data={adminNavButtons} />
        </Box>
        <Box w={{ base: "100%", md: "100%", xl: "80%" }}>{children}</Box>
      </Box>
    </Box>
  );
}
