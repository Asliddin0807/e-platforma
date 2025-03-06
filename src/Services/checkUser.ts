import { IAuth } from "@/Interfaces/auth";
import { db } from "@/lib/firebase/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { UserResource } from "@clerk/types";
import { IProducts } from "@/Interfaces/Product";

interface IGetUser {
  data: IAuth;
  status: string;
}

interface IGetMyCourse {
  message: string;
  status: string;
  data?: IProducts[];
}

interface Video {
  id: string;
  title: string;
  link: string;
  isComplete: string;
}

export const CheckUser = {
  async user(user: UserResource | null): Promise<IAuth | null> {
    if (!user) return null;

    const userRef = doc(db, "users", user.id);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      const newUser: IAuth = {
        id: user.id,
        username: user.fullName || "App",
        email: user.primaryEmailAddress?.emailAddress || "",
        password: "",
        myCourses: [],
        status: "user",
      };

      await setDoc(userRef, newUser);
      return newUser;
    }

    return userSnap.data() as IAuth;
  },

  async getUser(userId: string | null | undefined): Promise<IGetUser> {
    const nullData: IAuth = {
      id: "",
      username: "",
      email: "",
      password: "",
      myCourses: [],
      status: "user",
    };
    if (userId) {
      const getDocUser = doc(db, "users", userId);
      const userSnap = await getDoc(getDocUser);
      if (!userSnap.exists()) {
        return { data: nullData, status: "404" };
      }
      return { data: userSnap.data() as IAuth, status: "200" };
    }
    return { data: nullData, status: "400" };
  },

  async addMyCourse(
    slug: string,
    userId: string | null | undefined
  ): Promise<IGetMyCourse> {
    if (!userId) {
      return {
        status: "400",
        message:
          "Iltimos kursga kirish uchun login yoki registratsiadan o'ting!",
      };
    }

    try {
      // Поиск курса по slug
      const courseRef = collection(db, "courses");
      const q = query(courseRef, where("slug", "==", slug));
      const courseSnap = await getDocs(q);

      if (courseSnap.empty) {
        return { status: "400", message: "Course not found!" };
      }

      // Получаем данные курса
      const docData = courseSnap.docs[0].data();
      const course: IProducts = {
        title: docData.title || "",
        category: docData.category || "",
        comments: docData.comments || [],
        description: docData.description || "",
        for_whom: docData.for_whom || "",
        image: docData.image || "",
        project: docData.project || [],
        rate: docData.rate || { rates: 0, viewers: 0 },
        slug: docData.slug || "",
        video_course: docData.video_course || [],
      };

      // Получаем пользователя
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        return { status: "400", message: "User not found!" };
      }

      // Добавляем курс в `myCourses`
      await updateDoc(userRef, {
        myCourses: arrayUnion(course),
      });

      return { message: "Kursga muvaffaqiyatli yozildingiz!", status: "200" };
    } catch (error) {
      return { status: "500", message: "Internal Server Error" };
    }
  },

  async getMyCourseItem(
    userId: string | null | undefined,
    slug: string
  ): Promise<{ message: string; status: string; data?: IProducts }> {
    if (!userId) {
      return { message: "Failed", status: "404" };
    }

    try {
      // Получаем пользователя
      const userDoc = doc(db, "users", userId);
      const userSnap = await getDoc(userDoc);

      if (!userSnap.exists()) {
        return { message: "User not found", status: "404" };
      }

      // Получаем список курсов пользователя
      const userData = userSnap.data();
      const myCourses: IProducts[] = userData.myCourses || [];

      // Ищем нужный курс по `slug`
      const course = myCourses.find((course) => course.slug === slug);

      return { message: "Success", status: "200", data: course };
    } catch (error) {
      console.error("Error fetching course:", error);
      return { message: "Internal Server Error", status: "500" };
    }
  },

  async checkItem(
    userId: string | null | undefined,
    slug: string,
    itemId: string,
    isChecked: boolean
  ) {
    if (!userId) {
      return { message: "Failed", status: "404" };
    }

    const userDoc = doc(db, "users", userId);
    const userSnap = await getDoc(userDoc);

    if (!userSnap.exists()) {
      return { message: "User not found", status: "404" };
    }

    const userData = userSnap.data();
    const myCourses: IProducts[] = userData.myCourses || [];

    const updatedCourses = myCourses.map((course) => {
      if (course.slug !== slug) return course;

      return {
        ...course,
        video_course: course.video_course.map((video) =>
          video.id === itemId ? { ...video, isComplete: isChecked } : video
        ),
      };
    });

    await updateDoc(userDoc, { myCourses: updatedCourses });
  },
};
