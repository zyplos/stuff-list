import {
  updateItemStatus as firebaseUpdateItemStatus,
  subscribeToAllItems as firebaseSubscribeToAllItems,
  deleteItemStatus as firebaseDeleteItemStatus,
} from "./firebase/database";
import type { ItemStatus } from "./types";

export const useFirebase = !!process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

export const subscribeToAllItems = (
  callback: (statuses: Record<string, ItemStatus>) => void,
) => {
  if (useFirebase) {
    return firebaseSubscribeToAllItems(callback);
  }
  // For local state, the component will manage its own state.
  // This subscription will do nothing and return an empty unsubscribe function.
  return () => {};
};

export const updateItemStatus = (itemId: string, status: ItemStatus) => {
  if (useFirebase) {
    return firebaseUpdateItemStatus(itemId, status);
  }
  // Local state is updated directly in the component.
};

export const deleteItemStatus = (itemId: string) => {
  if (useFirebase) {
    return firebaseDeleteItemStatus(itemId);
  }
  // Local state is updated directly in the component.
};
