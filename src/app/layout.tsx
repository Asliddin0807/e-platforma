import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/Navbar/Navbar";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  // title: "IT Code",
  description: "Online kurslar markazi!",
  title: {
    default: "IT Code",
    template: "%s | Dev Blook - A blog for developers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="page">
        <Provider>
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            height={4}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            showAtBottom={false}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
          />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
