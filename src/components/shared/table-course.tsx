"use client";
import { Box, Table } from "@chakra-ui/react";
import Icons from "../Icons/Icons";

interface Props {
  lessons: number;
  rate: number;
  viewers: number;
}
export default function TableCourseItems({ lessons, rate, viewers }: Props) {
  const detail = [
    {
      id: 1,
      name: "Darslar soni",
      value: lessons,
      icon: {
        name: "BiHash",
        color: "gray",
      },
    },
    {
      id: 2,
      name: "Narxi",
      value: "bepul",
      icon: {
        name: "BiCreditCardAlt",
        color: "yellow",
      },
    },
    {
      id: 3,
      name: "Faoydalanish chegarasi",
      value: "cheksiz",
      icon: {
        name: "BiCheckCircle",
        color: "green",
      },
    },

    {
      id: 5,
      name: "Baxosi",
      value: rate,
      icon: {
        name: "BiSolidStar",
        color: "yellow",
      },
    },
    {
      id: 6,
      name: "Ko'rilgan",
      value: viewers,
      icon: {
        name: "BiHide",
        color: "gray",
      },
    },
    {
      id: 4,
      name: "Sertifikat",
      value: "mavjud",
      icon: {
        name: "BiAward",
        color: "purple",
      },
    },
  ];

  return (
    <Box>
      <Table.Root
        variant={"outline"}
        size="sm"
        interactive
        style={{
          borderRadius: "8px", // Adds border radius to the table
          border: "1px solid #ddd", // Adds a subtle border color
          // Sets a light background color for the table
        }}
      >
        <Table.Body>
          {detail.map((item) => (
            <Table.Row p={1} key={item.id} fontSize={"17px"}>
              <Table.Cell>
                <Box display={"flex"} gap={2} alignItems={"center"}>
                  <Icons iconName={item.icon.name} size={20} />
                  {item.name}
                </Box>
              </Table.Cell>
              <Table.Cell textAlign="end">{item.value}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
