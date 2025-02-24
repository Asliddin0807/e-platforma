//vremmeniy interface
interface Video {
  text: string;
  video_source: string;
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
}
