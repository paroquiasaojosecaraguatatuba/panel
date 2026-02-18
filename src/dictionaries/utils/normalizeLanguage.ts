import type { Lang } from "..";

export const dictionaryConfig = {
  defaultLocale: "pt-BR" as const,

  locales: ["pt-BR", "en-US"] as Lang[],

  // mapeia variações comuns para o padrão BCP47
  LANGUAGES_ALIASES: {
    pt: "pt-BR",
    ptBR: "pt-BR",
    "pt-br": "pt-BR",

    en: "en-US",
    enUS: "en-US",
    "en-us": "en-US",
  } as Record<string, Lang>,
};

export function normalizeLanguage(input: string): Lang {
  const key = input.toLowerCase().replace("_", "-");

  if (key in dictionaryConfig.LANGUAGES_ALIASES) {
    return dictionaryConfig.LANGUAGES_ALIASES[key];
  }

  return dictionaryConfig.defaultLocale;
}
