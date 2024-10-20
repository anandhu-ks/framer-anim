import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const delayFn = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
