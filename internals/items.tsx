import type { Item } from "./types";
import x1b from "@/assets/strange-3ds/x1b.jpg";
import x2 from "@/assets/strange-3ds/x2.jpg";
import x2Back from "@/assets/strange-3ds/x2-back.jpg";

import kitKats from "@/assets/kit-kats/seafood.png";

import dsiFront from "@/assets/strange-dsi/front.png";
import dsiBack from "@/assets/strange-dsi/back.png";
import dsiSoftware from "@/assets/strange-dsi/software.png";

export const alwaysActiveItems: Item[] = [
  {
    id: "kit-kats",
    name: "kit kats",
    description:
      "bring back all the ones you find\ndon't bring ones you've seen in the US already",
    images: [kitKats],
  },
];

export const rareItems: Item[] = [
  {
    id: "rare-3ds",
    name: "odd looking 3DS",
    description:
      "bring back any weird looking 3DSes you find. make sure its not a region exclusive thing that you haven't seen and only sold in japan. will probably have a distinct back label",
    images: [x1b, x2, x2Back],
    unlikelyToFind: true,
    maxBudget: "300 USD",
    credits: {
      name: "@XX_750000",
      url: "https://twitter.com/XX_750000",
    },
  },

  {
    id: "panda-dsi",
    name: "odd looking DSi",
    description:
      "this one has a a unique two tone shell. a real one of these should have a distinct back label or weird software",
    images: [dsiFront, dsiBack, dsiSoftware],
    unlikelyToFind: true,
    maxBudget: "250 USD",
    credits: {
      name: "Consolevariations",
      url: "https://consolevariations.com/collectibles/nintendo-dsi-panda-development-unit-eu",
    },
  },
];

export const normalItems: Item[] = [];
