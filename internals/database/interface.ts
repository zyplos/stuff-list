import type { ItemStatus } from "../types";

export interface DataStore {
  // local implementation makes use of calling react's local setState function
  // this is here so the update and delete functions don't recall setState
  isRemote: boolean;

  subscribeToAllItems(
    callback: (statuses: Record<string, ItemStatus>) => void,
  ): () => void;
  updateItemStatus(itemId: string, status: ItemStatus): void;
  deleteItemStatus(itemId: string): void;
}
