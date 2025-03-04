"use client";
import { IProducts } from "@/Interfaces/Product";
import { HStack, Breadcrumb } from "@chakra-ui/react";
import { useRouter } from "nextjs-toploader/app";

interface Props {
  title_one: string;
  title_two: string;
  link: string;
}

export const CourseBread = ({ title_one, title_two, link }: Props) => {
  const router = useRouter();
  return (
    <HStack w={"full"} fontSize={"22px"} justifyContent={"start"} mb={2}>
      <Breadcrumb.Root size={"md"}>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link
              cursor={"pointer"}
              onClick={() => router.push(`/${link}`)}
            >
              {title_one}
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link>{title_two}</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </HStack>
  );
};
