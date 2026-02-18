import { api } from "./api";

interface ResponseErrorFields<K extends string> {
  fields?: {
    [P in K]: { message: string }[];
  };
}

export const userApi = async <ResponseData, K extends string = never>(
  path: string,
  init?: RequestInit,
): Promise<
  ResponseErrorFields<K> &
    ResponseData & {
      statusCode: number;
      message?: string;
    }
> => {
  return api<ResponseData, K>(`/users${path}`, init);
};
