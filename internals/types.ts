import type { StaticImageData } from "next/image";

export type Item = {
  name: string;
  description: string;
  images: StaticImageData[];
  unlikelyToFind?: boolean;
  credits?: {
    name: string;
    url: string;
  };
};
