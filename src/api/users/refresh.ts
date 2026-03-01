import { api } from "../utils/api";

interface RefreshResponse {
  token: string;
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
