import styles from "./Stripes.module.scss";

interface Stripes {
  number?: number;
  stripeColor?: string;
  bgColor?: string;
  gapSize?: number;
  stripeWidth?: number;
  addedClass?: string;
}

export default function Stripes({
  number = 3,
  stripeColor = "#69fd01",
  bgColor = "#2f3230",
  gapSize = 30,
  stripeWidth = 20,
  addedClass,
}: Stripes) {
  return (
    <div
      style={{ gap: `${gapSize}px`, backgroundColor: `${bgColor}` }}
      className={`${styles.stripeContainer} ${addedClass}`}
      aria-hidden={true}
    >
      {Array.from({ length: number }).map((_, i) => (
        <div
          key={i}
          style={{
            width: `${stripeWidth}px`,
            backgroundColor: `${stripeColor}`,
          }}
          className={styles.stripe}
          aria-hidden={true}
        ></div>
      ))}
    </div>
  );
}
