export interface IProject {
  id?: string;
  title: string;
  image: string;
  rating?: {
    rate: number;
    views: number;
  };
  git_link: string;
  framework: string
}
