//vremmeniy interface
interface Video { 
  text: string; // yes
  video_source: string; // yes
  id: string //auto
}

interface Comments {
  author: string;
  comment: string;
  star: number;
  date: string;
}

export interface IProducts {
  title: string; //yes
  image: string; //yes
  rate: { //auto
    rates: number;
    viewers: number;
  };
  category: string; // yes
  description: string; //yes
  video_course: Video[]; // yes
  for_whom: string; //yes
  project: string[]; // never
  comments: Comments[]; //auto
  slug: string //yes
}
