import { IProducts } from "./Product";

export interface IAuth {
  id: string;
  email: string;
  password: string;
  username: string;
  myCourses: IProducts[];
  status: string;
}
