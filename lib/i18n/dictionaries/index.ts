import type { Locale } from "../config";
import en, { type Dictionary } from "./en";
import pt from "./pt";
import es from "./es";

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = { en, pt, es };
