import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
// import Navbar from "@/components/shared/Navbar";
import NextTopLoader from "nextjs-toploader";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  // title: "IT Code",
  description: "Online kurslar markazi!",
  title: {
    default: "IT Code",
    template: "%s | Dev Blook - A blog for developers",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localization = {
    signUp: {
      start: {
        title: "IT Code",
        subtitle: "Platformada davom etish uchun ro'yxatdan o'ting!",
        actionText: "Akkaunt mavjudmi?",
        actionLink: "Kirish",
        button: "Davom etish",
      },
    },
    socialButtonsBlockButton: "{{provider|titleize}} orqali kirish",
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <ClerkProvider localization={localization}>
        <body>
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
            {children}
          </Provider>
        </body>
      </ClerkProvider>
    </html>
  );
}
