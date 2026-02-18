import { create } from "zustand";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { dictionaryConfig } from "@/dictionaries/config";
import type { Lang } from "@/dictionaries";

dayjs.extend(utc);
dayjs.extend(timezone);

type State = {
  lang: Lang;
  timezone: string;
  timezoneOffset: string;
};

type Action = {
  setLocaleConfig: (locale: { lang: Lang }) => void;
  setLang: (lang: Lang) => void;
};

const useLocaleConfigStore = create<State & Action>()((set) => ({
  lang: dictionaryConfig.defaultLocale,
  timezone: dayjs.tz.guess(),
  timezoneOffset: dayjs().tz(dayjs.tz.guess()).format("Z"),

  setLang: (lang) => set({ lang }),
  setLocaleConfig: ({ lang }) =>
    set({
      lang,
      timezone: dayjs.tz.guess(),
    }),
}));

export default useLocaleConfigStore;
