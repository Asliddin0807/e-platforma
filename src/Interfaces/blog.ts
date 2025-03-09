export interface IBlogs {
  id: string;
  title: string;
  image: string;
  description: string;
  rates: {
    rate: number;
    viewers: number;
  };
}
