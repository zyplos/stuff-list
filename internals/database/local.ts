import type { DataStore } from "./interface";
import type { ItemStatus } from "../types";

export class LocalDataStore implements DataStore {
  isRemote = false;
  private statuses: Record<string, ItemStatus> = {};
  private callback: ((statuses: Record<string, ItemStatus>) => void) | null =
    null;

  subscribeToAllItems(
    callback: (statuses: Record<string, ItemStatus>) => void,
  ) {
    this.callback = callback;
    // Immediately call back with the current state
    this.callback(this.statuses);

    // Return an unsubscribe function
    return () => {
      this.callback = null;
    };
  }

  updateItemStatus(itemId: string, status: ItemStatus) {
    this.statuses[itemId] = status;
    if (this.callback) {
      this.callback({ ...this.statuses });
    }
  }

  deleteItemStatus(itemId: string) {
    delete this.statuses[itemId];
    if (this.callback) {
      this.callback({ ...this.statuses });
    }
  }
}
