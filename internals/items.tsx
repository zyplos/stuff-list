import type { Item } from "./types";
import x1b from "@/assets/strange-3ds/x1b.jpg";
import x2 from "@/assets/strange-3ds/x2.jpg";
import x2Back from "@/assets/strange-3ds/x2-back.jpg";

import kitKats from "@/assets/kit-kats/seafood.jpg";

import dsiFront from "@/assets/strange-dsi/front.jpg";
import dsiBack from "@/assets/strange-dsi/back.jpg";
import dsiSoftware from "@/assets/strange-dsi/software.jpg";

import plushSmeargle from "@/assets/plush/smeargle.jpg";
import plushVictini from "@/assets/plush/victini.jpg";
import unownPin from "@/assets/unown-pin.jpg";

import disk64 from "@/assets/odd-software/disk64.jpg";
import diskWii from "@/assets/odd-software/wii.jpeg";
import diskWiiBackup from "@/assets/odd-software/wii-backup.jpg";
import diskWiiU from "@/assets/odd-software/wiiu.jpg";

import diskun from "@/assets/diskun/diskun.jpg";
import diskunDisk from "@/assets/diskun/disk.jpg";

import nintendoZoneOpen from "@/assets/nintendo-zone/open.jpg";
import nintendoZoneOn from "@/assets/nintendo-zone/on.jpg";

import shellosEastImg from "@/assets/pokemon-go/shellos-east.jpg";
import tatsugiriStretchyImg from "@/assets/pokemon-go/tatsugiri-stretchy.jpg";
import taurosImg from "@/assets/pokemon-go/tauros-paldean-blaze-form.jpg";
import uxieImg from "@/assets/pokemon-go/uxie.jpg";
import volbeatImg from "@/assets/pokemon-go/volbeat.jpg";

import ddDisk from "@/assets/64dd-disk.jpg";
import downloadStationCard from "@/assets/download-station-card.jpg";
import museumGacha from "@/assets/museum-gacha.jpg";
import famicomKeyboard from "@/assets/famicom-keyboard.jpg";
import serverGacha from "@/assets/server-gacha.jpeg";
import serverGacha2 from "@/assets/server-gacha-2.jpeg";
import cpuGacha from "@/assets/cpu-gacha.jpg";
import mother3 from "@/assets/mother3.jpg";
import caveStory from "@/assets/cave-story.jpg";
import galaxyDisk from "@/assets/galaxy-disk.jpg";
import splatune from "@/assets/splatune/first.jpg";
import splatune2 from "@/assets/splatune/second.jpg";
import splatune3 from "@/assets/splatune/third.jpg";

import netbook from "@/assets/netbook.jpg";
import nippon from "@/assets/nippon.png";

export const alwaysActiveItems: Item[] = [
  {
    id: "kit-kats",
    name: "kit kats",
    description:
      "bring back all the ones you find, don't bring too many of the same one\ndon't bring ones you've seen in the US already",
    images: [kitKats],
  },

  {
    id: "odd-software",
    name: "odd looking software",
    description:
      "if you find something you've never seen before that looks weird it is of interest of me",
    images: [disk64, diskWiiU, diskWiiBackup, diskWii],
    unlikelyToFind: true,
    maxBudget: "50 USD",
  },
];

export const rareItems: Item[] = [
  {
    id: "rare-3ds",
    name: "odd looking 3DS",
    description:
      "bring back any weird looking 3DSes you find. make sure its not a region exclusive thing that you haven't seen and only sold in japan. a real one will probably have a distinct back label",
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
    maxBudget: "200 USD",
    credits: {
      name: "Consolevariations",
      url: "https://consolevariations.com/collectibles/nintendo-dsi-panda-development-unit-eu",
    },
  },

  {
    id: "nintendo-zone",
    name: "odd looking DS box",
    description:
      "you will not find this and if you do it will probably be very expensive BUT if you see it let me know at least",
    images: [nintendoZoneOn, nintendoZoneOpen],
    unlikelyToFind: true,
    maxBudget: "250 USD",
    credits: {
      name: "Consolevariations",
      url: "https://consolevariations.com/collectibles/nintendo-dsi-zone-box",
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
    id: "download-station-card",
    name: "download station card",
    description:
      "these will have a not for resale label on them\nyou might come across multiple of these, i just want one",
    images: [downloadStationCard],
    maxBudget: "30 USD",
  },

  {
    id: "famicom-keyboard",
    name: "famicom keyboard",
    description: "will take a non-working one if its priced accordingly",
    images: [famicomKeyboard],
    maxBudget: "40 USD",
  },

  {
    id: "diskun",
    name: "something diskun related",
    description: "anything will do",
    images: [diskun, diskunDisk],
    maxBudget: "25 USD",
  },
];

export const normalItems: Item[] = [
  {
    id: "smeargle-plush",
    name: "smeargle plush",
    description:
      "you might find this in the pokemon center which you'll probably go to",
    images: [plushSmeargle],
  },

  {
    id: "victini-plush",
    name: "victini plush",
    description:
      "you might find this in the pokemon center which you'll probably go to",
    images: [plushVictini],
  },

  {
    id: "unown-pin",
    name: "unown pin",
    description:
      "you'll find this in the pokemon center which you'll probably go to",
    images: [unownPin],
  },

  {
    id: "museum-gacha",
    name: "nintendo museum controller minis",
    description:
      "i would love to have all of them but its a gacha thing so i guess roll it twice or so",
    images: [museumGacha],
  },

  {
    id: "server-gacha",
    name: "server gacha",
    description: "if you happen to be nearby this please grab me a thing",
    images: [serverGacha, serverGacha2],
    credits: {
      name: "u/swake88",
      url: "https://www.reddit.com/r/homelab/comments/1do0m48/the_best_thing_ive_seen_in_japan_so_far_of_course/",
    },
  },

  {
    id: "cpu-gacha",
    name: "cpu gacha",
    description: "if you happen to find one of these please roll me a thing",
    images: [cpuGacha],
    credits: {
      name: "@sawarasan",
      url: "https://www.youtube.com/watch?v=zpU1WiyI3no",
    },
  },

  {
    id: "mother3",
    name: "copy of mother 3",
    description: "low ball offer",
    maxBudget: "25 USD",
    images: [mother3],
  },

  {
    id: "cave-story",
    name: "something 洞窟物語 related",
    description: "do not bring me a copy of the game on any system",
    images: [caveStory],
  },

  {
    id: "smg-ost-cd",
    name: "smg ost cd",
    description: "cover might also come in gray",
    maxBudget: "15 USD",
    images: [galaxyDisk],
  },

  {
    id: "splatune",
    name: "splatune cd",
    description: "i need this for my zune",
    images: [splatune],
  },

  {
    id: "splatune-2",
    name: "splatune 2 cd",
    description: "i need this for my zune",
    images: [splatune2],
  },

  {
    id: "splatune-3",
    name: "splatune 3 cd",
    description: "i need this for my zune",
    images: [splatune3],
  },

  {
    id: "netbook",
    name: "an old netbook",
    description: "these will likely run something older than windows 7",
    maxBudget: "2000 JPY",
    images: [netbook],
    credits: {
      name: "@knshtyk",
      url: "https://x.com/knshtyk/status/1981353424542470390",
    },
  },

  {
    id: "wildcard-joke-item",
    name: "an item imbued with the spirit of glorious nippon",
    description: "",
    images: [nippon],
  },

  {
    id: "shellos-east",
    name: "east sea shellos",
    description: "pokemon go regional exclusive",
    images: [shellosEastImg],
  },

  {
    id: "tatsugiri-stretchy",
    name: "stretchy tatsugiri",
    description: "pokemon go regional exclusive",
    images: [tatsugiriStretchyImg],
  },

  {
    id: "tauros-paldean-blaze-form",
    name: "tauros paldean blaze form",
    description: "pokemon go regional exclusive",
    images: [taurosImg],
  },

  {
    id: "volbeat",
    name: "volbeat",
    description: "pokemon go regional exclusive",
    images: [volbeatImg],
  },

  {
    id: "uxie",
    name: "uxie",
    description: "pokemon go regional exclusive",
    images: [uxieImg],
  },
];
