import { ref, set, onValue, off, remove } from "firebase/database";
import type { ItemStatus } from "../types";
import { db } from "./config";

export function updateItemStatus(itemId: string, status: ItemStatus) {
  if (!db) return;
  set(ref(db, `items/${itemId}`), status);
}

export function deleteItemStatus(itemId: string) {
  if (!db) return;
  remove(ref(db, `items/${itemId}`));
}

export function subscribeToAllItems(
  callback: (statuses: Record<string, ItemStatus>) => void,
) {
  if (!db) return () => {};
  const itemsRef = ref(db, "items");
  onValue(itemsRef, (snapshot) => {
    const statuses = (snapshot.val() as Record<string, ItemStatus>) || {};
    callback(statuses);
  });
  return () => off(itemsRef);
}
