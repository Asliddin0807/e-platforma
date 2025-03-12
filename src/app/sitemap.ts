import CourseService from "@/Services/courses";

export default async function sitemap() {
  const { data } = await CourseService.getCourses();
  const course = data.map((c: any) => {
    return {
      url: `${process.env.URL}dashboard/course/${c.slug}`,
      lastModified: c?.createAt,
    };
  });

  return [
    {
      url: process.env.URL,
      lastModified: Date.now(),
    },

    ...course,
  ];
}
