import { api } from "../utils/api";

interface RefreshResponse {
  token: string;
  user: {
    name: string;
    email: string;
    role: "user" | "admin" | "viewer";
  };
}

export const refresh = async (signal?: AbortSignal) => {
  const result = await api<RefreshResponse>("/token/refresh", {
    method: "POST",
    signal,
    credentials: "include",
    body: JSON.stringify({}),
  });

  return result;
};
