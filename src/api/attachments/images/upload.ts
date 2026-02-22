import useLocaleConfigStore from "@/stores/useLocaleConfigStore";
import { apiBaseUrl } from "../../utils/api";
import useAuthStore from "@/stores/useAuthStore";

export async function uploadFileWithProgress(
  file: File,
  onProgress: (percent: number) => void,
) {
  const { lang, timezoneOffset, timezone } = useLocaleConfigStore.getState();
  const { token, setLoggedOut } = useAuthStore.getState();

  return new Promise<{ attachmentId: string }>((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${apiBaseUrl}/attachments/images`);

    // Headers extras
    xhr.setRequestHeader("Accept-Language", lang);
    xhr.setRequestHeader("X-Timezone-Offset", String(timezoneOffset));
    xhr.setRequestHeader("X-Timezone", timezone);

    if (token) {
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);
    }

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        onProgress(percent);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 201) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(xhr.responseText);

        if (xhr.status === 401) {
          setLoggedOut();
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
        }
      }
    };

    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(formData);
  });
}
