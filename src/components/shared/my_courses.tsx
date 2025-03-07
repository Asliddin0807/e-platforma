"use client";
import { IAuth } from "@/Interfaces/auth";
import { CheckUser } from "@/Services/checkUser";
import { Box, Text } from "@chakra-ui/react";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const MyCourses = () => {
  const { userId } = useAuth();
  const [profile, setProfile] = useState<IAuth | null>(null);
  useEffect(() => {
    const apiHandler = async () => {
      const { data } = await CheckUser.getUser(userId);
      setProfile(data);
    };

    apiHandler();
  }, []);
  return <Box w={"100%"} border={"1px solid white"} borderRadius={'md'} mt={5}>

  </Box>;
};

export default MyCourses;
