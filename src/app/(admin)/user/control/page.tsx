import Header from "@/components/shared/HeaderText";
import UserTable from "@/components/shared/user-table";
import { IAuth } from "@/Interfaces/auth";
import { db } from "@/lib/firebase/firebase";
import { Box } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";

interface IGetUsers {
  data: IAuth[];
}

const getAllUsers = async (): Promise<IGetUsers> => {
  const cl = collection(db, "users");
  const querySnapshot = await getDocs(cl);

  const users = querySnapshot.docs.map((doc) => doc.data() as IAuth);

  return { data: users };
};

export default async function Users() {
  const { data } = await getAllUsers();

  return (
    <Box p={2}>
      <Header text={"Foydalanuvchilar"} />
      <UserTable data={data} />
    </Box>
  );
}

const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
];
