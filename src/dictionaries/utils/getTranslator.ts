import { dictionaries, type Lang } from "..";
import { normalizeLanguage } from "./normalizeLanguage";

export const getTranslator = (lang = "pt-br") => {
  const normalizedLang = normalizeLanguage(lang);

  const storedDictionary = dictionaries[normalizedLang];

  const translator = (
    key: keyof typeof storedDictionary,
    options?: {
      lang?: Lang;
      variables?: {
        [key: string]: string | number;
      };
    },
  ) => {
    const dictionary = options?.lang
      ? dictionaries[options.lang]
      : storedDictionary;

    let translationString = dictionary[key];

    if (options?.variables) {
      const variables = options.variables;

      for (const [variableKey, variableValue] of Object.entries(variables)) {
        translationString = translationString?.replace(
          `{{${variableKey}}}`,
          variableValue.toString(),
        );
      }
    }

    return translationString;
  };

  return translator;
};
