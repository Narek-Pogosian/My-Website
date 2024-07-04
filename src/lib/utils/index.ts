import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function sortByPriority<T extends { data: { priority: number } }>(
  arr: T[]
) {
  return arr.slice().sort((a, b) => b.data.priority - a.data.priority);
}
