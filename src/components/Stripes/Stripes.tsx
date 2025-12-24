import styles from "./Stripes.module.scss";

interface Stripes {
  number: number;
  gapSize: number;
  addedClass: string;
}

export default function Stripes({
  number = 3,
  gapSize = 30,
  addedClass,
}: Stripes) {
  return (
    <div
      style={{ gap: `${gapSize}px` }}
      className={`${styles.stripeContainer} ${addedClass}`}
      aria-hidden={true}
    >
      {Array.from({ length: number }).map((_, i) => (
        <div key={i} className={styles.stripe} aria-hidden={true}></div>
      ))}
    </div>
  );
}
