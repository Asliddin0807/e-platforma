import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
// import Navbar from "@/components/shared/Navbar";
import NextTopLoader from "nextjs-toploader";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  description: "Online kurslar markazi!",
  title: {
    default: "IT Code",
    template: "%s | Xammasi IT xaqida",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: ["IT Code", "Programming languages", "JavaScript", "coding"],
  openGraph: {
    title: "IT Code",
    description: "IT Code e-platforma learn programming languages.",
    type: "website",
    url: process.env.URL,
    locale: "uz_UZ",
    images:
      "https://media.licdn.com/dms/image/D5612AQElK9H-73lrmA/article-cover_image-shrink_720_1280/0/1700054275565?e=2147483647&v=beta&t=NTE64ZTiVSxKWa49LF5RgpFyqqfdXNH2rivLZSIpdRU",
    countryName: "Uzbekistan",
    siteName: "IT Code",
    emails: "komandirnuriddinov2@gmail.com",
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <ClerkProvider
        localization={localization}
        appearance={{
          layout: {
            unsafe_disableDevelopmentModeWarnings: true,
          },
        }}
      >
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
              zIndex={9999}
            />
            {children}
          </Provider>
        </body>
      </ClerkProvider>
    </html>
  );
}
