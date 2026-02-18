import { userApi } from "./utils/userApi";

interface LoginResponse {
  token: string;
}

export const login = async () => {
  const result = await userApi<LoginResponse>("/sessions", {
    method: "POST",
  });

  return result;
};
