import styles from "./Stripes.module.scss";

interface Stripes {
  number: number;
}

export default function Stripes({ number = 3 }: Stripes) {
  return (
    <div className={styles.stripeContainer} aria-hidden={true}>
      {Array.from({ length: number }).map((_, i) => (
        <div key={i} className={styles.stripe} aria-hidden={true}></div>
      ))}
    </div>
  );
}
