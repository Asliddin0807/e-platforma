"use client";

import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import InputField from "@/components/shared/InputField";

interface Course {
  id: string;
  title: string;
  link: string;
}

interface Props {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
}

export default function CourseItems({ courses, setCourses }: Props) {
  // Функция добавления нового курса
  const addCourse = () => {
    setCourses([...courses, { id: `${Date.now()}`, title: "", link: "" }]);
  };

  // Функция обновления значений
  const updateCourse = (id: string, field: "title" | "link", value: string) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, [field]: value } : course
      )
    );
  };

  return (
    <Box
      w={"full"}
      p={4}
      borderRadius={"md"}
      boxShadow={"md"}
      bg={"gray.800"}
      mt={2}
    >
      {courses.map((course, index) => (
        <Box key={course.id} mb={4}>
          <InputField
            label={`Kurs darsligi ${index + 1}`}
            placeholder={`# ${index + 1}-dars. Kirish`}
            helperText="Kurs darsligi uchun nom!"
            big={false}
            value={course.title}
            change={(e: any) =>
              updateCourse(course.id, "title", e.target.value)
            }
            name={"name"}
          />
          <InputField
            label="Link havola"
            helperText="Vimeo platformasidan havola"
            placeholder="https://vimeo.com/8847677"
            big={false}
            value={course.link}
            change={(e: any) => updateCourse(course.id, "link", e.target.value)}
            name={"name"}
          />
        </Box>
      ))}

      <Button onClick={addCourse} colorScheme="blue" mt={2}>
        Darslik qo'shish
      </Button>
    </Box>
  );
}
