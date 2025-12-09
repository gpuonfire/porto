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
              <Icon iconName={name} size={32} title={`${name} (32)`} />
            </div>
            <div className={styles.meta}>
              <div className={styles.name}>{name}</div>
              <div className={styles.examples}>
                <Icon iconName={name} size={16} />
                <Icon iconName={name} size={20} />
                <Icon iconName={name} size={24} />
              </div>
            </div>
          </div>
        ))}

        {/* show what happens with unknown icon */}
        <div className={styles.card}>
          <div>
            <Icon iconName="unknown-icon" size={32} />
          </div>
          <div className={styles.meta}>
            <div className={`${styles.name} ${styles.empty}`}>unknown-icon</div>
            <div className={styles.examples}>
              <Icon iconName="unknown-icon" size={16} />
              <Icon iconName="unknown-icon" size={20} />
              <Icon iconName="unknown-icon" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
