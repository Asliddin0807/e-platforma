import Navbar from "@/components/shared/Navbar";
import { Box } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box>
      <Navbar />
      <Box mt={10}>{children}</Box>
    </Box>
  );
}
