import type { Item } from "./types";
import x1b from "@/assets/strange-3ds/x1b.jpg";
import x2 from "@/assets/strange-3ds/x2.jpg";
import x2Back from "@/assets/strange-3ds/x2-back.jpg";

import kitKats from "@/assets/kit-kats/seafood.png";

import dsiFront from "@/assets/strange-dsi/front.png";
import dsiBack from "@/assets/strange-dsi/back.png";
import dsiSoftware from "@/assets/strange-dsi/software.png";

import plushSmeargle from "@/assets/plush/smeargle.jpg";
import plushVictini from "@/assets/plush/victini.jpg";

import ddDisk from "@/assets/64dd-disk.jpg";

import disk64 from "@/assets/odd-software/disk64.jpg";

import diskun from "@/assets/diskun.png";

export const alwaysActiveItems: Item[] = [
  {
    id: "kit-kats",
    name: "kit kats",
    description:
      "bring back all the ones you find\ndon't bring ones you've seen in the US already",
    images: [kitKats],
  },

  {
    id: "odd-software",
    name: "odd software",
    description:
      "if you find something that looks weird it is of interest of me",
    images: [disk64],
    unlikelyToFind: true,
    maxBudget: "50 USD",
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

  {
    id: "dd-disk",
    name: "an n64 disk",
    description: "these can also come in blue",
    images: [ddDisk],
    unlikelyToFind: true,
    maxBudget: "50 USD",
  },

  {
    id: "diskun",
    name: "something diskun related",
    description: "anything will do",
    images: [diskun],
    maxBudget: "25 USD",
  },
];

export const normalItems: Item[] = [
  {
    id: "smeargle-plush",
    name: "smeargle plush",
    description:
      "you'll find this in the pokemon center which you'll probably go to",
    images: [plushSmeargle],
  },
  {
    id: "victini-plush",
    name: "victini plush",
    description:
      "you'll find this in the pokemon center which you'll probably go to",
    images: [plushVictini],
  },
];
