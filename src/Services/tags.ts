import { db } from "@/lib/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export const TagService = {
  async getTegs() {
    let findDoc = doc(db, "tags", "ZJs5fcdBTC2FL3y6lnno");
    let docSnap = await getDoc(findDoc);
    return { data: docSnap.data(), message: "Success!" };
  },
};

export default TagService;
