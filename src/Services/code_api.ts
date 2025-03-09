import axios from "axios";
import { LANGUAGE } from "@/constants/editor_constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const execute = async (language: string, sourceCode: string) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });

  return response.data;
};
