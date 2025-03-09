import { db } from "@/lib/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export const TagService = {
  async getTegs() {
    const findDoc = doc(db, "tags", "ZJs5fcdBTC2FL3y6lnno");
    const docSnap = await getDoc(findDoc);
    return { data: docSnap.data(), message: "Success!" };
  },
};

export default TagService;
