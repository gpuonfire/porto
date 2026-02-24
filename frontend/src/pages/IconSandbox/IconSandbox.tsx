import Icon from "@/components/Icon";
import styles from "./IconSandbox.module.scss";

const ICON_NAMES = [
  "menu",
  "close",
  "arrow-right",
  "chevron-left",
  "chevron-right",
  "search",
  "mail",
  "external",
  "github",
  "5Point",
  "5Point_small",
  "Burger",
  "rune_1",
];

export default function IconSandbox() {
  return (
    <div className={styles.container}>
      <h1>Icon Sandbox</h1>
      <p>All icons and a few size/variant previews.</p>

      <div className={styles.grid}>
        {ICON_NAMES.map((name) => (
          <div key={name} className={styles.card}>
            <div>
              <Icon iconName={name} title={`${name} (32)`} />
            </div>
            <div className={styles.meta}>
              <div className={styles.name}>{name}</div>
              <div className={styles.examples}>
                <Icon iconName={name} />
                <Icon iconName={name} />
                <Icon iconName={name} />
              </div>
            </div>
          </div>
        ))}

        {/* show what happens with unknown icon */}
        <div className={styles.card}>
          <div>
            <Icon iconName="unknown-icon" />
          </div>
          <div className={styles.meta}>
            <div className={`${styles.name} ${styles.empty}`}>unknown-icon</div>
            <div className={styles.examples}>
              <Icon iconName="unknown-icon" />
              <Icon iconName="unknown-icon" />
              <Icon iconName="unknown-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
