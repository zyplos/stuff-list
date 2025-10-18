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
            <InfoIcon className={styles.infoIcon} />
            <span>You're unlikely to find this but keep a lookout for it!</span>
          </div>
        )}

        <p className={styles.description}>{item.description}</p>

        <div className={styles.buttons}>
          <button
            className={clsx(styles.button, styles.foundButton)}
            onClick={onFoundIt}
            type="button"
          >
            Found it!
          </button>
          <button
            className={clsx(styles.button, styles.expensiveButton)}
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

function InfoIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: decoration
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      {...props}
    >
      <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </svg>
  );
}
