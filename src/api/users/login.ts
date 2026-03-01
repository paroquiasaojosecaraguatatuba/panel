import { api } from "../utils/api";

interface LoginResponse {
  token: string;
  user: {
    name: string;
    email: string;
    role: "user" | "admin" | "viewer";
  };
}

export const login = async (values: { email: string; password: string }) => {
  const result = await api<LoginResponse>("/sessions", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(values),
  });

  return result;
};
