// import { Box, Button } from "@chakra-ui/react";
// import { useState } from "react";
// import InputField from "./InputField"; // Замените на свой компонент

// const CourseItems = () => {
//   const [courses, setCourses] = useState([{ id: 1, title: "", link: "" }]);

//   // Функция добавления нового курса
//   const addCourse = () => {
//     setCourses([...courses, { id: Date.now(), title: "", link: "" }]);
//   };

//   // Функция обновления значений
//   const updateCourse = (id: number, field: "title" | "link", value: string) => {
//     setCourses(
//       courses.map((course) =>
//         course.id === id ? { ...course, [field]: value } : course
//       )
//     );
//   };

//   return (
//     <Box
//       w={"full"}
//       p={4}
//       borderRadius={"md"}
//       boxShadow={"md"}
//       bg={"gray.800"}
//       mt={2}
//     >
//       {courses.map((course, index) => (
//         <Box key={course.id} mb={4}>
//           <InputField
//             label={`Kurs darsligi ${index + 1}`}
//             placeholder={`# ${index + 1}-dars. Kirish`}
//             big={false}
//             value={course.title}
//             onChange={(e) => updateCourse(course.id, "title", e.target.value)}
//           />
//           <InputField
//             label="Link havola"
//             helperText="Vimeo platformasidan havola"
//             placeholder="https://vimeo.com/8847677"
//             big={false}
//             value={course.link}
//             onChange={(e) => updateCourse(course.id, "link", e.target.value)}
//           />
//         </Box>
//       ))}

//       <Button onClick={addCourse} colorScheme="blue" mt={2}>
//         Добавить курс
//       </Button>
//     </Box>
//   );
// };

// export default CourseItems;
