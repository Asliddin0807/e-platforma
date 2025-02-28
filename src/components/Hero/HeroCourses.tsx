"use client";
import { Box, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { course_data } from "../Local_data/datas";
import { IProducts } from "@/Interfaces/Product";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import CourseCard from "../Cards/CourseCard";

export default function ButtonsCategory() {
  const [data, setData] = useState<IProducts[]>(course_data);
  const [text, setText] = useState<string>("Hammasi");

  const isMobile = useBreakpointValue({ base: true, md: false });

  const buttonHandler = (text: string) => {
    if (text !== "Hammasi") {
      const newData = course_data.filter((c) => c.category == text);
      setData(newData);
      setText(text);
    } else {
      setText(text);
      setData(course_data);
    }
  };
  return (
    <>
      <Flex
        gap={2}
        mt={4}
        flexDirection={{ base: "column", md: "row", xl: "row" }}
      >
        {isMobile ? (
          <Box>
            <MenuRoot>
              <MenuTrigger asChild>
                <Button size="sm" variant="outline">
                  {text}
                </Button>
              </MenuTrigger>
              <MenuContent>
                {[
                  "Hammasi",
                  "Frontend",
                  "Backend",
                  "Mobile",
                  "Web",
                  "Game",
                ].map((item, idx) => (
                  <MenuItem
                    value={item}
                    key={idx}
                    onClick={() => buttonHandler(item)}
                  >
                    {item}
                  </MenuItem>
                ))}
              </MenuContent>
            </MenuRoot>
          </Box>
        ) : (
          <Box display={"flex"} gap={2}>
            {["Hammasi", "Frontend", "Backend", "Mobile", "Web", "Game"].map(
              (item, idx) => (
                <Button
                  key={idx}
                  colorPalette={"current"}
                  variant={text == item ? "solid" : "outline"}
                  onClick={() => buttonHandler(item)}
                >
                  {item}
                </Button>
              )
            )}
          </Box>
        )}
      </Flex>
      <Flex
        gap={3}
        mt={4}
        flexWrap={"wrap"}
        flexShrink={1}
        flexDirection={{ base: "column", md: "row", xl: "row" }}
      >
        {data.map((item, idx) => (
          <CourseCard item={item} key={idx} />
        ))}
      </Flex>
    </>
  );
}
