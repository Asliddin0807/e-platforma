import { IProducts } from "@/Interfaces/Product";
import { db } from "@/lib/firebase/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  Query,
  query,
  where,
} from "firebase/firestore";

interface IGetCoursesResponse {
  data: IProducts[];
  message: string;
  status: string;
}

interface IGetCourse {
  data: IProducts;
  status: string;
  // message?: string
}

interface IDelete {
  status: string;
  message: string;
}

export const CourseService = {
  async createCourse(data: IProducts) {
    await addDoc(collection(db, "courses"), data);
    return { message: "Success!", status: "200" };
  },

  async getCourses(): Promise<IGetCoursesResponse> {
    try {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const data: IProducts[] = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Обязательно добавьте идентификатор, если он нужен
        title: doc.data().title,
        image: doc.data().image,
        rate: doc.data().rate,
        category: doc.data().category,
        comments: doc.data().comments,
        description: doc.data().description,
        for_whom: doc.data().for_whom,
        project: doc.data().project,
        slug: doc.data().slug,
        video_course: doc.data().video_course,
      }));
      return { data: data, message: "Success!", status: "200" };
    } catch (error) {
      return { data: [], message: "Failed!", status: "404" };
    }
  },

  async deleteCourse(slug: string): Promise<IDelete> {
    const q: Query<DocumentData, DocumentData> = query(
      collection(db, "courses"),
      where("slug", "==", slug)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { status: "404", message: "Not found" };
    }

    // Удаляем все найденные документы с таким slug
    for (const document of querySnapshot.docs) {
      await deleteDoc(doc(db, "courses", document.id));
    }

    return { message: "Success delete", status: "200" };
  },

  async getCourse(id: string): Promise<IGetCourse> {
    const courseRef = collection(db, "courses");
    const q = query(courseRef, where("slug", "==", id));
    const courseSnap = await getDocs(q);

    if (!courseSnap.empty) {
      const doc = courseSnap.docs[0];
      const onData: IProducts = {
        title: doc.data().title,
        category: doc.data().category,
        comments: doc.data().comments,
        description: doc.data().description,
        for_whom: doc.data().for_whom,
        image: doc.data().image,
        project: doc.data().project,
        rate: doc.data().rate,
        slug: doc.data().slug,
        video_course: doc.data().video_course,
      };

      return { data: onData, status: "200" };
    } else {
      const onData: IProducts = {
        title: "",
        category: "",
        comments: [],
        description: "",
        for_whom: "",
        image: "",
        project: [],
        rate: { rates: 0, viewers: 0 },
        slug: "",
        video_course: [],
      };
      return { status: "400", data: onData };
    }
  },
};

export default CourseService;
