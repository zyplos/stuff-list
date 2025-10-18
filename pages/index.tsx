import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ItemCard from "@/components/ItemCard";
import { alwaysActiveItems, doableItems } from "@/internals/items";

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

      <main className={styles.wrapper}>
        <div className={styles.cardList}>
          {[...alwaysActiveItems, ...doableItems].map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}
