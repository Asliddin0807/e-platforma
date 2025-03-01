import { IAuth } from "@/Interfaces/auth";
import { db } from "@/lib/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { UserResource } from "@clerk/types";
const CheckUser = {
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
};

export default CheckUser;
