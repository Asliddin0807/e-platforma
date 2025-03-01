import { IProducts } from "@/Interfaces/Product";
import { db } from "@/lib/firebase/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

export const CourseService = {
  async createCourse(data: IProducts) {
    try {
      const docRef = await addDoc(collection(db, "courses"), data);
      return { message: "Success!", status: "200" };
    } catch (err) {
      return { status: "400", message: "Error!" };
    }
  },

  async getCourses() {
    try {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return { data: data, message: "Success!", status: "200" };
    } catch (error) {
      console.error("Ошибка при получении курсов: ", error);
      return [];
    }
  },

  async deleteCourse(id: string) {
    try {
      await deleteDoc(doc(db, "courses", id));
      return { message: "Success delete", status: "200" };
    } catch (error) {
      return { message: "Error delete", status: "400" };
    }
  },

  async updateCourse(id: string) {},
  async getCourse(id: string) {
    try {
      const courseRef = doc(db, "courses", id);
      const courseSnap = await getDoc(courseRef);

      if (courseSnap.exists()) {
        return { data: courseSnap.id, ...courseSnap.data(), status: "200" };
      } else {
        return null;
      }
    } catch (error) {
      return { status: "400", data: [] };
    }
  },
};

export default CourseService;
