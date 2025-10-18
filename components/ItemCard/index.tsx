import Image from "next/image";
import clsx from "clsx";
import type { Item } from "@/internals/types";
import styles from "./styles.module.css";

interface ItemCardProps extends React.HTMLAttributes<HTMLDivElement> {
  item: Item;
  onFoundIt?: () => void;
  onSawButExpensive?: () => void;
}

export default function ItemCard({
  item,
  onFoundIt,
  onSawButExpensive,
  className,
  ...props
}: ItemCardProps) {
  return (
    <div className={clsx(styles.card, className)} {...props}>
      {/* Image Stack */}
      <div className={styles.imageStack}>
        {item.images.map((image, index) => (
          <div
            key={`${item.id}-image-${index}`}
            className={clsx(styles.imageContainer, {
              [styles.firstImage]: index === 0,
              [styles.stackedImage]: index > 0,
            })}
            style={{
              transform:
                index > 0
                  ? `translate(-50%, -50%) rotate(${index % 2 === 0 ? "5deg" : "-4deg"})`
                  : undefined,
              zIndex: item.images.length - index,
            }}
          >
            <Image
              src={image}
              alt={`${item.name} ${index + 1}`}
              width={512}
              height={512}
              className={styles.image}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.itemName}>{item.name}</h3>

        {item.unlikelyToFind && (
          <div className={styles.infoAlert}>
            <span className={styles.infoIcon}>ℹ</span>
            <span>
              You're unlikely to find this but, keep a lookout for it!
            </span>
          </div>
        )}

        <p className={styles.description}>{item.description}</p>

        <div className={styles.buttons}>
          <button
            className={styles.foundButton}
            onClick={onFoundIt}
            type="button"
          >
            Found it!
          </button>
          <button
            className={styles.expensiveButton}
            onClick={onSawButExpensive}
            type="button"
          >
            Saw it, but too expensive to get
          </button>
        </div>
      </div>
    </div>
  );
}
