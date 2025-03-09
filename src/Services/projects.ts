import { IProject } from "@/Interfaces/project";
import { db } from "@/lib/firebase/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  query,
  Query,
  where,
} from "firebase/firestore";

interface IGetProject {
  message?: string;
  status: string;
  data?: IProject[];
}

export const ProjectService = {
  async createProject(data: IProject): Promise<IGetProject> {
    await addDoc(collection(db, "projects"), data);
    return { message: "Success!", status: "200" };
  },

  async getProjects(): Promise<IGetProject> {
    const allProjects = await getDocs(collection(db, "projects"));
    const data: IProject[] = allProjects.docs.map((doc) => ({
      id: doc.data().id,
      ...doc.data(),
    })) as IProject[];

    return { data: data, status: "200" };
  },

  async getProject(id: string): Promise<IGetProject> {
    const projectRef = collection(db, "projects");
    const q: Query<DocumentData, DocumentData> = query(
      projectRef,
      where("id", "==", id)
    );
    const querySnapshot = await getDocs(q);
    const onData: IProject[] = querySnapshot.docs.map((c) => ({
      ...c.data(),
    })) as IProject[];

    return { data: onData, status: "200" };
  },

  async deleteProject(id: string | undefined): Promise<IGetProject> {
    const projectRef = collection(db, "projects");
    const q: Query<DocumentData, DocumentData> = query(
      projectRef,
      where("id", "==", id)
    );

    const deleteHandler = await getDocs(q);
    if (deleteHandler.empty) {
      return { status: "404", message: "Project is not defined!" };
    }

    for (const document of deleteHandler.docs) {
      await deleteDoc(doc(db, "projects", document.id));
    }

    return { status: "200", message: "Success deleted!" };
  },
};
