//vremmeniy interface
interface Video {
  text: string;
  video_source: string;
  id: string
}

interface Comments {
  author: string;
  comment: string;
  star: number;
  date: string;
}

export interface IProducts {
  title: string;
  image: string;
  id: number;
  rate: {
    rates: number;
    viewers: number;
  };
  category: string;
  description: string;
  video_course: Video[];
  for_whom: string;
  project: string[];
  comments: Comments[];
  slug: string
}
