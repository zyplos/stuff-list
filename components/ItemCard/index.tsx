import Image from "next/image";
import clsx from "clsx";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Item } from "@/internals/types";
import styles from "./styles.module.css";

interface ItemCardProps extends React.HTMLAttributes<HTMLDivElement> {
  item: Item;
  alwaysActive?: boolean;
  onFoundIt?: () => void;
  onSawButExpensive?: () => void;
}

export default function ItemCard({
  item,
  alwaysActive,
  onFoundIt,
  onSawButExpensive,
  className,
  ...props
}: ItemCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const previousHtmlOverflow = useRef<string>("");

  // lock background scroll when the overlay is open
  useEffect(() => {
    const htmlEl = document.documentElement;
    if (isExpanded) {
      previousHtmlOverflow.current = htmlEl.style.overflow;
      htmlEl.style.overflow = "hidden";
    } else {
      htmlEl.style.overflow = previousHtmlOverflow.current;
    }

    return () => {
      htmlEl.style.overflow = previousHtmlOverflow.current;
    };
  }, [isExpanded]);

  const handleImageStackClick = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <div className={clsx(styles.card, className)} {...props}>
        {/* Image Stack */}
        <motion.button
          className={styles.imageStack}
          onClick={handleImageStackClick}
          type="button"
          aria-label="View image gallery"
          whileHover="hover"
          initial="rest"
        >
          {item.images.map((image, index) => (
            <motion.div
              key={`${item.id}-image-${index}`}
              className={clsx(styles.imageContainer, {
                [styles.firstImage]: index === 0,
                [styles.stackedImage]: index > 0,
              })}
              style={{
                // transform:
                //   index > 0
                //     ? `translate(-50%, -50%) rotate(${index % 2 === 0 ? "5deg" : "-4deg"})`
                //     : undefined,
                zIndex: item.images.length - index,

                ...(index > 0 && {
                  x: "-50%",
                  y: "-50%",
                  rotate: index % 2 === 0 ? "5deg" : "-4deg",
                }),
              }}
              variants={{
                rest: {},
                hover:
                  index === 1
                    ? {
                        x: "-33%",
                        y: "-33%",
                        rotate: "5deg",
                        transition: { duration: 0.05, ease: "easeOut" },
                      }
                    : index === 2
                      ? {
                          x: "-75%",
                          y: "-60%",
                          rotate: "-4deg",
                          transition: { duration: 0.05, ease: "easeOut" },
                        }
                      : index === 3
                        ? {
                            x: "-20%",
                            y: "-60%",
                            rotate: "3deg",
                            transition: { duration: 0.05, ease: "easeOut" },
                          }
                        : index === 4
                          ? {
                              x: "-35%",
                              y: "-45%",
                              rotate: "-2deg",
                              transition: { duration: 0.05, ease: "easeOut" },
                            }
                          : {},
              }}
            >
              <Image
                src={image}
                alt={`${item.name} ${index + 1}`}
                width={512}
                height={512}
                className={styles.image}
              />
            </motion.div>
          ))}
        </motion.button>

        {/* Content */}
        <div className={styles.content}>
          <h3 className={styles.itemName}>{item.name}</h3>

          {item.unlikelyToFind && (
            <div className={styles.infoAlert}>
              <InfoIcon className={styles.infoIcon} />
              <span>You're unlikely to find this but keep a lookout</span>
            </div>
          )}

          <div className={clsx(styles.description, "textContent")}>
            <p>{item.description}</p>
          </div>

          {item.maxBudget && (
            <p className="bold">Max budget: {item.maxBudget}</p>
          )}

          {!alwaysActive && (
            <div className={styles.buttons}>
              <button
                className={clsx(styles.button, styles.foundButton)}
                onClick={onFoundIt}
                type="button"
              >
                Got it!
              </button>
              {item.maxBudget && (
                <button
                  className={clsx(styles.button, styles.expensiveButton)}
                  onClick={onSawButExpensive}
                  type="button"
                >
                  Saw it, but too expensive to get
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Expanded Gallery Overlay */}
      <motion.div
        className={clsx(styles.overlay, {
          [styles.overlayHidden]: !isExpanded,
        })}
        animate={{ opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.15 }}
        onClick={handleClose}
      >
        <motion.div
          className={styles.overlayContent}
          animate={{
            scale: isExpanded ? 1 : 0.9,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.overlayHeader}>
            <div className={styles.overlayTitleGroup}>
              <h3 className={styles.overlayTitle}>{item.name}</h3>
              {item.credits && (
                <p className={styles.overlayMeta}>
                  Credits:{" "}
                  <a
                    href={item.credits.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles.overlayLink}
                  >
                    {item.credits.name}
                  </a>
                </p>
              )}
            </div>
            <button
              className={styles.closeButton}
              onClick={handleClose}
              type="button"
            >
              Close
            </button>
          </div>
          <div className={styles.overlayBody}>
            <div className={styles.expandedGrid}>
              {item.images.map((image, index) => (
                <div
                  key={`${item.id}-image-${index}`}
                  className={styles.expandedImageWrapper}
                >
                  <Image
                    src={image}
                    alt={`${item.name} ${index + 1}`}
                    width={512}
                    height={512}
                    className={styles.expandedImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
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
