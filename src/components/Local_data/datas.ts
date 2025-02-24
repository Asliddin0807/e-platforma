import { IProducts } from "@/Interfaces/Product";
import { IData } from "@/Interfaces/Icons";

export const course_data: IProducts[] = [
  {
    id: 1224132,
    title: "JavaScript asoslar",
    image:
      "https://files.ably.io/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png",
    rate: {
      rates: 4,
      viewers: 102,
    },
    category: "Web",
    description:
      "JavaScript — bu dinamik, yuqori darajali dasturlash tili bo‘lib, veb-sahifalarni interaktiv qilish uchun ishlatiladi. U brauzer ichida ishlaydi, ammo Node.js orqali serverda ham bajarilishi mumkin.\n JavaScriptni o‘rganish brauzer konsolidan yoki onlayn sandboxlar (CodePen, JSFiddle) yordamida boshlash mumkin.\n🔹 Veb-saytlarga dinamika qo‘shish (animatsiyalar, formalar, tugmalar)\n🔹 Backend dasturlar (Node.js)\n🔹 Mobil ilovalar (React Native, Ionic)\n🔹 Desktop ilovalar (Electron.js)\n🔹 O‘yinlar (Phaser.js, Three.js)",
    video_course: [
      {
        text: "1 dars. Dasturlash",
        video_source: "",
      },
    ],
  },
  {
    id: 1424111,
    title: "ReactJs asoslari",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1603797780927/S6loCK6fY.png",
    rate: {
      rates: 4,
      viewers: 102,
    },
    category: "Frontend",
    description:
      "React — bu Facebook (Meta) tomonidan ishlab chiqilgan ochiq kodli JavaScript kutubxonasi bo‘lib, foydalanuvchi interfeyslarini yaratish uchun ishlatiladi.\n🔹 Veb-saytlar va SPA (Single Page Applications)\n🔹 Admin panellar\n🔹 Mobil ilovalar (React Native)\n🔹 Ish stoli ilovalari (Electron.js bilan)",
    video_course: [
      {
        text: "1 dars. Dasturlash",
        video_source: "",
      },
    ],
  },
  {
    id: 211423232341,
    title: "NextJs asoslari",
    image:
      "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg",
    rate: {
      rates: 4,
      viewers: 102,
    },
    category: "Frontend",
    description:
      "Next.js — bu React uchun ishlab chiqilgan framework bo‘lib, u server-side rendering (SSR) va static site generation (SSG) kabi xususiyatlarni qo‘llab-quvvatlaydi. Vercel tomonidan ishlab chiqilgan va React ilovalarini tezroq va SEO-ga mos ravishda yaratishga yordam beradi.\n🔹 SEO talab qilinadigan saytlar (bloglar, yangiliklar portallari)\n🔹 Katta hajmdagi SPA va e-commerce ilovalari\n🔹 Ishlab chiqish jarayoni tez va samarali bo‘lishi kerak bo‘lgan loyihalar",
    video_course: [
      {
        text: "1 dars. Dasturlash",
        video_source: "",
      },
    ],
  },
  {
    id: 21233234241,
    title: "React-native asoslari",
    image:
      "https://lh5.googleusercontent.com/4kVmNO5044d95NhwlOVXVlpMisEnEewyFcdVpLcglf92geyjbr5TwZKdLHPsQJfa6jPk4JVFB-7CBbBKlqMHq398nuHbkhVgG6DS9GXVP6cbMGnwuptX26Jtflw_C1_D_neEh1lO",
    rate: {
      rates: 4,
      viewers: 102,
    },
    category: "Mobile",
    description:
      "React Native — bu Facebook (Meta) tomonidan ishlab chiqilgan ochiq kodli framework bo‘lib, u JavaScript va React yordamida Android va iOS uchun mobil ilovalar yaratish imkonini beradi.\n🔹 Mobil ilovalar (Android va iOS)\n🔹 Kross-platforma dasturlar\n🔹 E-commerce, ijtimoiy tarmoqlar va biznes ilovalari",
    video_course: [
      {
        text: "1 dars. Dasturlash",
        video_source: "",
      },
    ],
  },
  {
    id: 23323232142421,
    title: "Dart asoslari",
    image:
      "https://swansoftwaresolutions.com/wp-content/uploads/2020/02/08.20.20-What-is-Dart-and-how-is-it-used-1.jpg",
    rate: {
      rates: 4,
      viewers: 102,
    },
    category: "Mobile",
    description:
      "Dart — bu Google tomonidan ishlab chiqilgan obyektga yo‘naltirilgan dasturlash tili bo‘lib, u Flutter orqali mobil, veb va ish stoli ilovalar yaratish uchun ishlatiladi.\n🔹 Flutter bilan mobil va veb ilovalar yaratishda\n🔹 Server ilovalari (dart:io)\n🔹 Ish stoli ilovalari (Windows, macOS, Linux)",
    video_course: [
      {
        text: "1 dars. Dasturlash",
        video_source: "",
      },
    ],
  },
  {
    id: 2323232142411,
    title: "NodeJS asoslari",
    image:
      "https://www.webpunks.at/wp-content/uploads/2016/08/nodejs-modules-webentwicklung-webdevelopment-webpunks.jpg",
    rate: {
      rates: 4,
      viewers: 102,
    },
    category: "Backend",
    description:
      "Node.js — bu JavaScript runtime muhiti bo‘lib, server tomonida ham JavaScript kodini bajarish imkonini beradi. U Google V8 dvigateliga asoslangan va asinxron, event-driven (hodisalarga asoslangan) arxitektura bilan ishlaydi.🔹 Web-serverlar va backend ilovalar\n🔹 RESTful API va GraphQL xizmatlari\n🔹 Chat va real-time ilovalar (WebSocket, Socket.io)\n🔹 Mikroxizmatlar va serverless arxitektura\n🔹 CLI (command-line interface) dasturlar",
    video_course: [
      {
        text: "1 dars. Dasturlash",
        video_source: "",
      },
    ],
  },
];

export const iconData: IData[] = [
  {
    icon: "BiLogoJavascript",
    color: "yellow",
  },
  {
    icon: "BiLogoReact",
    color: "lightblue",
  },
  {
    icon: "BiLogoAndroid",
    color: "green",
  },
  {
    icon: "BiLogoBootstrap",
    color: "purple",
  },
  {
    icon: "BiLogoNodejs",
    color: "lightgreen",
  },
  {
    icon: "BiLogoDjango",
    color: "red",
  },
  {
    icon: "BiLogoMongodb",
    color: "green",
  },
  {
    icon: "BiLogoGithub",
    color: "black",
  },
];
