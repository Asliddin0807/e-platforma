import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/sidebar";
import { Box } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box>
      <Navbar />
      <Box display={"flex"} h={"full"} w={"100%"}>
        <Box w={"20%"} display={{ base: "none", md: "none", xl: "block" }} >
          <Sidebar />
        </Box>
        <Box mt={0} ml={20} mb={4} w={{base: "100%", md: "100%", xl: '80%'}} mx={'auto'}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
