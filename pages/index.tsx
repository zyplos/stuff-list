import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import ItemCard from "@/components/ItemCard";
import { alwaysActiveItems, rareItems, normalItems } from "@/internals/items";
import {
  updateItemStatus,
  subscribeToAllItems,
  deleteItemStatus,
} from "@/internals/firebase/database";
import type { ItemStatus } from "@/internals/types";
import clsx from "clsx";
import NavBar from "@/components/NavBar";

export default function Home() {
  const [itemStatuses, setItemStatuses] = useState<Record<string, ItemStatus>>(
    {},
  );

  const numberOfFoundItems = Object.values(itemStatuses).filter(
    (status) => status === "complete",
  ).length;

  // Set up real-time listener for all item statuses
  useEffect(() => {
    const unsubscribe = subscribeToAllItems((statuses) => {
      setItemStatuses(statuses);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Handler functions for button clicks
  const handleFoundIt = (itemId: string) => {
    // Update local state immediately (optimistic update)
    setItemStatuses((prev) => ({
      ...prev,
      [itemId]: "complete",
    }));

    // Update Firebase in background
    updateItemStatus(itemId, "complete");
  };

  const handleSawButExpensive = (itemId: string) => {
    // Update local state immediately (optimistic update)
    setItemStatuses((prev) => ({
      ...prev,
      [itemId]: "saw",
    }));

    // Update Firebase in background
    updateItemStatus(itemId, "saw");
  };

  const handleMarkAsUncomplete = (itemId: string) => {
    // Update local state immediately (optimistic update)
    setItemStatuses((prev) => {
      const newStatuses = { ...prev };
      delete newStatuses[itemId];
      return newStatuses;
    });

    // Update Firebase in background
    deleteItemStatus(itemId);
  };

  return (
    <>
      <Head>
        <title>stuff list</title>
        <meta
          name="description"
          content="you gotta bring these back with you"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={clsx("responsiveCenteredContainer", styles.wrapper)}>
        <div className="textContent sectionMargin">
          <h1>hi guys</h1>
          <p>you gotta bring these back for me thank you</p>
          <p>
            keep receipts and i will pay it back. i don't expect you guys to
            find everything on this list so you won't break the bank
          </p>
          {numberOfFoundItems > 0 && (
            <p className="textMuted">
              you've gotten {numberOfFoundItems} thing
              {numberOfFoundItems === 1 ? "" : "s"} so far. thanks!
            </p>
          )}

          <p>here's the list:</p>
        </div>

        <div className="textContent bottomSpaceMargin">
          <h2>always active</h2>
          <p>grab these when you see em</p>
        </div>
        <div className={clsx(styles.cardList, "sectionMargin")}>
          {alwaysActiveItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              alwaysActive
              status={itemStatuses[item.id]}
              onFoundIt={() => handleFoundIt(item.id)}
              onSawButExpensive={() => handleSawButExpensive(item.id)}
              onMarkAsUncomplete={() => handleMarkAsUncomplete(item.id)}
            />
          ))}
        </div>

        <div className="textContent bottomSpaceMargin">
          <h2>the rare</h2>
          <p>
            here's some stuff that is impossible to come by here in the US but
            have a slight chance of seeing in japan. some of these come with max
            budgets in case i'm not online for you to ask me about it. others
            don't have a budget but i'm sure it'll be obvious if its a
            reasonable price or not
          </p>
        </div>
        <div className={clsx(styles.cardList, "sectionMargin")}>
          {rareItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              status={itemStatuses[item.id]}
              onFoundIt={() => handleFoundIt(item.id)}
              onSawButExpensive={() => handleSawButExpensive(item.id)}
              onMarkAsUncomplete={() => handleMarkAsUncomplete(item.id)}
            />
          ))}
        </div>

        <div className="textContent bottomSpaceMargin">
          <h2>stuff you'll probably find</h2>
          <p>you'll eventually come across these</p>
        </div>
        <div className={clsx(styles.cardList, "sectionMargin")}>
          {normalItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              status={itemStatuses[item.id]}
              onFoundIt={() => handleFoundIt(item.id)}
              onSawButExpensive={() => handleSawButExpensive(item.id)}
              onMarkAsUncomplete={() => handleMarkAsUncomplete(item.id)}
            />
          ))}
        </div>
      </main>
    </>
  );
}
