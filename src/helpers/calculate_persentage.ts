import { IProducts } from "@/Interfaces/Product";

export interface GetCalculate {
  course: IProducts;
  percentage: number;
}

export function calculatePercentage(
  courses: IProducts[] | undefined
): GetCalculate[] {
  if (!courses) return [];

  return courses.map((course) => {
    const totalVideos = course.video_course.length;
    const completedVideos = course.video_course.filter(
      (v) => v.isComplete
    ).length;

    // Предотвращаем деление на 0
    const percentage =
      totalVideos > 0 ? Math.round((completedVideos / totalVideos) * 100) : 0;

    return {
      course,
      percentage,
    };
  });
}
