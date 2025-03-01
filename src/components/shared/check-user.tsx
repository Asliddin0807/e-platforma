"use client";
import { Box, Text } from "@chakra-ui/react";
import { useAuth, useUser } from "@clerk/nextjs";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";

import CkeckUser from "@/Services/checkUser";
import { useEffect, useState, useRef } from "react";

export default function CheckUser() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [isChecking, setIsChecking] = useState(true);
  const hasChecked = useRef(false);

  useEffect(() => {
    if (isSignedIn && user && !hasChecked.current) {
      hasChecked.current = true;
      CkeckUser.user(user).then(() => setIsChecking(false));
    } else {
      setIsChecking(false);
    }
  }, [isSignedIn, user]);

  return (
    <Box>
      <DialogRoot open={isChecking} size={"sm"} role="alertdialog">
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Kuting...</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Text>Foydalanuvchi tasdiqlanmoqda...</Text>
            <Text>{user?.primaryEmailAddress?.emailAddress}</Text>
          </DialogBody>
          <DialogFooter></DialogFooter>
          {/* <DialogCloseTrigger /> */}
        </DialogContent>
      </DialogRoot>
    </Box>
  );
}
