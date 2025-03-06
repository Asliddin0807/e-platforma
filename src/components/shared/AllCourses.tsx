"use client";
import { Box, Button, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { IProducts } from "@/Interfaces/Product";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import CourseCard from "@/components/shared/CourseCard";
import CourseService from "@/Services/courses";
import Empty from "./Empty";

export default function ButtonsCategory() {
  const [allData, setAllData] = useState<IProducts[]>([]);
  const [filteredData, setFilteredData] = useState<IProducts[]>([]);
  const [text, setText] = useState<string>("Hammasi");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await CourseService.getCourses();
      setAllData(data);
      setFilteredData(data); // Изначально показываем все данные
    };

    fetchData();
  }, []);

  const isMobile = useBreakpointValue({ base: true, md: false });

  const buttonHandler = (category: string) => {
    setText(category);

    if (category === "Hammasi") {
      setFilteredData(allData); // Показываем все данные
    } else {
      setFilteredData(allData.filter((c) => c.category === category));
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
                {["Hammasi", "Frontend", "Backend", "Mobile", "Loyha"].map(
                  (item, idx) => (
                    <MenuItem
                      value={item}
                      key={idx}
                      onClick={() => buttonHandler(item)}
                    >
                      {item}
                    </MenuItem>
                  )
                )}
              </MenuContent>
            </MenuRoot>
          </Box>
        ) : (
          <Box display={"flex"} gap={2}>
            {["Hammasi", "Frontend", "Backend", "Mobile", "Loyha"].map(
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
        gap={5}
        mt={4}
        flexWrap={"wrap"}
        flexShrink={1}
        flexDirection={{ base: "column", md: "row", xl: "row" }}
      >
        {!filteredData.length ? (
          <Empty
            title={"Kurslar mavjud emas!"}
            desc={"Kurslar tez orada qo'shiladi platformada qoling."}
          />
        ) : (
          filteredData.map((item, idx) => <CourseCard item={item} key={idx} />)
        )}
      </Flex>
    </>
  );
}
