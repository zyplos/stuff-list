import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ItemCard from "@/components/ItemCard";
import { alwaysActiveItems, rareItems, normalItems } from "@/internals/items";
import clsx from "clsx";

export default function Home() {
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

      <main className={clsx("responsiveCenteredContainer", styles.wrapper)}>
        <div className="textContent sectionMargin">
          <h1>hi guys</h1>
          <p>you gotta bring these back for me thank you</p>
          <p>keep recipes and i will pay it back</p>
          <p>here's the list:</p>
        </div>

        <div className="textContent bottomSpaceMargin">
          <h2>always active</h2>
          <p>find as many of these as you can</p>
        </div>
        <div className={clsx(styles.cardList, "sectionMargin")}>
          {alwaysActiveItems.map((item) => (
            <ItemCard key={item.id} item={item} alwaysActive />
          ))}
        </div>

        <div className="textContent bottomSpaceMargin">
          <h2>the rare</h2>
          <p>
            you probably won't find these but you never know. some of these come
            with max budgets in case i'm not online for you to ask me about it.
            some of these don't have a budget but i'm sure it'll be obvious if
            its a reasonable price or not
          </p>
        </div>
        <div className={clsx(styles.cardList, "sectionMargin")}>
          {rareItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

        <div className="textContent bottomSpaceMargin">
          <h2>stuff you'll probably find</h2>
          <p>you'll eventually come across these</p>
        </div>
        <div className={clsx(styles.cardList, "sectionMargin")}>
          {normalItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
