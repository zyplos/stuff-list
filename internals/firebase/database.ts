import { ref, set, onValue, off } from "firebase/database";
import type { ItemStatus } from "../types";
import { db } from "./config";

export function updateItemStatus(itemId: string, status: ItemStatus) {
  set(ref(db, `items/${itemId}`), status);
}

export function subscribeToAllItems(
  callback: (statuses: Record<string, ItemStatus>) => void,
) {
  const itemsRef = ref(db, "items");
  onValue(itemsRef, (snapshot) => {
    const statuses = (snapshot.val() as Record<string, ItemStatus>) || {};
    callback(statuses);
  });
  return () => off(itemsRef);
}
