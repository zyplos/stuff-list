import clsx from "clsx";
import styles from "./styles.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbarWrapper}>
      <div className={clsx(styles.navbar, "responsiveCenteredContainer")}>
        <span className={styles.title}>stuff</span>

        <div className={styles.timeWrapper}>
          <BeanIcon />
          <span>3:00 PM</span>
        </div>
      </div>
    </nav>
  );
}

function BeanIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: decorative
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      {...props}
    >
      <path d="M128,158.1817c7.3633,0,18.3329,3.5186,30.9963,8.6269,26.5091,10.6935,32.5744,22.4369,54.1331,25.4853,6.435.9099,21.4996,1.4961,32.5543-7.813,0,0,9.9983-6.8573,10.3011-23.3228,1.4882-80.9206-106.592-99.3371-127.9848-97.8489C106.6072,61.821-1.473,80.2374.0152,161.1581c.3028,16.4655,10.301,23.3227,10.3011,23.3228,11.0546,9.3092,26.1192,8.723,32.5543,7.813,21.5587-3.0484,27.6241-14.7918,54.1331-25.4853,12.6634-5.1083,23.633-8.6269,30.9963-8.6269Z" />
    </svg>
  );
}
