"use client";

import { Button, Stack, Table } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import Icons from "@/components/Icons/Icons";
import { IAuth } from "@/Interfaces/auth";
import React, { useState } from "react";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { Toaster, toaster } from "../ui/toaster";

interface Props {
  data: IAuth[];
}

interface IGetUserControl {
  message: string;
}

const roleChange = async (
  id: string,
  status: string
): Promise<IGetUserControl> => {
  const userDoc = doc(db, "users", id);

  if (!userDoc) {
  }
  await updateDoc(userDoc, {
    status: status,
  });

  return { message: "Success!" };
};

export default function UserTable({ data }: Props) {
  const [users, setUsers] = useState<IAuth[]>(data);
  const changeHandler = async (id: string, status: string) => {
    const newUser = users.map((c) => {
      if (c.id === id) {
        c.status = status;
      }

      return c;
    });
    setUsers(newUser);
    const { message } = await roleChange(id, status);
    toaster.success({
      title: message,
    });
  };

  return (
    <Stack gap="10">
      <Toaster />
      <Table.Root size={{ base: "sm", md: "md", xl: "lg" }}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Ismi Sharifi</Table.ColumnHeader>
            <Table.ColumnHeader>Pochta manzili</Table.ColumnHeader>
            <Table.ColumnHeader>roli</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Boshqaruv</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.username}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.status}</Table.Cell>
              <Table.Cell textAlign="end">
                <MenuRoot>
                  <MenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Icons iconName={"BiDotsVerticalRounded"} />
                    </Button>
                  </MenuTrigger>
                  <MenuContent>
                    <MenuItem
                      value={item.status === "admin" ? "user" : "admin"}
                      onClick={() =>
                        changeHandler(
                          item.id,
                          item.status === "admin" ? "user" : "admin"
                        )
                      }
                    >
                      {item.status === "admin"
                        ? "Foydalanuvhi rolini berish"
                        : "Admin rolini berish"}
                    </MenuItem>
                    <MenuItem value="delete">O'chirish</MenuItem>
                  </MenuContent>
                </MenuRoot>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Stack>
  );
}
