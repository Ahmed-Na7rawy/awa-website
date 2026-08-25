import { en } from './en';
import { ar } from './ar';

export const translations = {
  en,
  ar,
};

export type TranslationKey = keyof typeof en;
export type TranslationsType = typeof en;
