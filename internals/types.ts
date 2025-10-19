import type { StaticImageData } from "next/image";

export type ItemStatus = undefined | "saw" | "complete";

export type Item = {
  id: string;
  name: string;
  description: string;
  images: StaticImageData[];
  unlikelyToFind?: boolean;
  maxBudget?: string;
  credits?: {
    name: string;
    url: string;
  };
};
