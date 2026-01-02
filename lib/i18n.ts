import { pl } from "@/content/pl";
import { en } from "@/content/en";

export type Locale = "pl" | "en";

export const dictionary = {
  pl,
  en,
};

export function getContent(locale: Locale) {
  return dictionary[locale] ?? dictionary.en;
}
