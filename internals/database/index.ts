import { FirebaseDataStore } from "./firebase";
import { LocalDataStore } from "./local";
import type { DataStore } from "./interface";

export const useFirebase = !!process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

const datastore: DataStore = useFirebase
  ? new FirebaseDataStore()
  : new LocalDataStore();

export default datastore;
