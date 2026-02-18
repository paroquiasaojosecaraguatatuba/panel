import enUS from "./en-us.json";
import ptBR from "./pt-br.json";

export type Lang = keyof typeof dictionaries;
export type DictionaryLey = keyof (typeof enUS & typeof ptBR);

export const dictionaries = {
  "en-US": enUS,
  "pt-BR": ptBR,
};
