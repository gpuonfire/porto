import { Layout } from "../../@types/youAreJustMyType";
import styles from "./Layout.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Icon from "../Icon";

export default function LayoutComp({ layout }: { layout: Layout }) {
  const { layout: layoutType, elements } = layout; // Destructure properly

  const getGraphicNode = (graphic: string) => {
    return <Icon iconName={graphic} />;
  };

  const getImageNode = ({ url, alt }: { url: string; alt: string }) => {
    return (
      <div className={styles.imgContainer}>
        <LazyLoadImage src={url} />
        {alt ? <p>{alt}</p> : null}
      </div>
    );
  };
  console.log(elements[0]);

  switch (layoutType) {
    case 1:
      return (
        <article className={`${styles.ar} ${styles.temp3}`}>
          <div className={styles.headingContainer}>
            <h2>{elements[0]["title"] ? elements[0]["title"] : null}</h2>
          </div>
          <div className={styles.sidePanel}>
            {elements.map((e, index) => {
              if (index === 0) return; //skip title
              const key = Object.keys(e)[0];
              switch (key) {
                case "title":
                  return <h2 key={index}>{e["title"]}</h2>;
                case "smallTitle":
                  return <h3 key={index}>{e["smallTitle"]}</h3>; // Changed to h3
                case "text":
                  return <p key={index}>{e["text"]}</p>;
                case "image":
                  return e.image ? getImageNode(e.image) : null;
                case "graphic":
                  return e.graphic ? getGraphicNode(e.graphic) : null;
                default:
                  return null;
              }
            })}
          </div>
        </article>
      );

    case 2:
      // only text
      return <article className={`${styles.ar} ${styles.temp2}`}></article>;
    /* 
    case 3:
      // title left, image, text
      return (
        <article className={`${styles.ar} ${styles.temp1}`}>
          {imageNode}
          <h2>{s.title}</h2>
          <Icon iconName="rune_1" width={86} height={114} fill={"#69fd01"} />
          <p>{s.text}</p>
          <div className={styles.sectionLine}></div>
        </article>
      );
 */
    default:
      // fallback to template 1
      return (
        <article>
          <h2>DEFAULT</h2>
        </article>
      );
  }
}
