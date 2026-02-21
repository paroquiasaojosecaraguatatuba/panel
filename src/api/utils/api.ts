import useLocaleConfigStore from "@/stores/useLocaleConfigStore";
import useAuthStore from "@/stores/useAuthStore";
import { logout } from "../logout";

const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_API_URL as string;

interface ResponseErrorFields<K extends string> {
  fields?: {
    [P in K]: { message: string }[];
  };
}

export const api = async <ResponseData, K extends string = never>(
  path: string,
  init?: RequestInit,
  options?: {
    authenticated?: boolean;
    apiBaseUrl?: string;
  },
): Promise<
  ResponseErrorFields<K> &
    ResponseData & {
      statusCode: number;
      message?: string;
    }
> => {
  const { lang, timezoneOffset, timezone } = useLocaleConfigStore.getState();
  const { token, setLoggedOut } = useAuthStore.getState();

  const endpoint = `${options?.apiBaseUrl || apiBaseUrl}${path}`;

  const response = await fetch(endpoint, {
    ...init,
    headers: {
      "Accept-Language": lang,
      "Content-Type": "application/json",
      "X-Timezone-Offset": timezoneOffset,
      "X-Timezone": timezone,
      ...(options?.authenticated
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {}),
      ...init?.headers,
    },
  });

  const data = (await response.json()) as ResponseErrorFields<K> & ResponseData;

  if (options?.authenticated && response.status === 401) {
    setLoggedOut();
    await logout();
    window.location.href = "/login";
    return new Promise<never>(() => {}); // nunca resolve para aguardar o redirecionamento ser concluído
  }

  return { ...data, statusCode: response.status };
};
