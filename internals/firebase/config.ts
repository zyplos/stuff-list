// cSpell:disable
import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDRQPyOavEapNsb2dK6Mhv3HaujT85Ui1k",
  authDomain: "stuff-list-6a998.firebaseapp.com",
  projectId: "stuff-list-6a998",
  storageBucket: "stuff-list-6a998.firebasestorage.app",
  messagingSenderId: "666835900051",
  appId: "1:666835900051:web:9b41f1b1d54ecc90665f66",
  databaseURL:
    "https://stuff-list-6a998-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getDatabase(app);
