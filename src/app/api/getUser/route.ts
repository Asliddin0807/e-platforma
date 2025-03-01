import { useAuth } from "@clerk/nextjs";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

export async function GET() {
  const { userId } = useAuth(); // Получаем ID текущего пользователя

  if (!userId) {
    return Response.json({ error: "Пользователь не авторизован" }, { status: 401 });
  }

  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    return Response.json({ error: "Пользователь не найден" }, { status: 404 });
  }

  return Response.json({ user: userSnap.data() });
}
