import { Section, Image } from "../../@types/youAreJustMyType";
import styles from "./Layout.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Icon from "../Icon";

export default function LayoutComp(section: Section) {
  const { layout, sectionBits } = section;

  const getImageNode = (img: Image) => {
    return (
      <div className={styles.imgContainer}>
        <LazyLoadImage src={img.src} />
        {img.alt ? <p>{img.alt}</p> : null}
      </div>
    );
  };

  switch (layout) {
    case "1":
      return (
        <article className={`${styles.default} ${styles.temp1}`}>
          <div className={styles.headingContainer}>
            <h2>{sectionBits[0].type === "title" ? sectionBits[0].content : null}</h2>
          </div>
          <div className={styles.sidePanel}>
            {sectionBits.map((bit, index) => {
              if (index === 0) return; //skip title
              const key = Object.keys(bit)[0];
              switch (bit.type) {
                case "title":
                  return <h2 key={index}>{bit.content}</h2>;
                case "smallTitle":
                  return <h3 key={index}>{bit.content}</h3>; // Changed to h3
                case "text":
                  return <p key={index}>{bit.content}</p>;
                case "image":
                  if (bit.image) {
                    return getImageNode(bit.image);
                  } else {
                    break;
                  }
                case "graphic":
                  return <Icon iconName={bit.content} />;
                default:
                  return null;
              }
            })}
          </div>
        </article>
      );

    case "2":
      return (
        <article className={`${styles.default} ${styles.temp2}`}>
          {sectionBits.map((bit, index) => {
            switch (bit.type) {
              case "title":
                return (
                  <div className={styles.headingContainer}>
                    <h2 key={index}>{bit.content}</h2>
                  </div>
                );
              case "smallTitle":
                return <h3 key={index}>{bit.content}</h3>; // Changed to h3
              case "text":
                return <p key={index}>{bit.content}</p>;
              case "image":
                if (bit.image) {
                  return getImageNode(bit.image);
                } else {
                  break;
                }
              case "graphic":
                return <Icon iconName={bit.content} />;
              default:
                return null;
            }
          })}
        </article>
      );

    case "3":
      return (
        <article className={`${styles.default} ${styles.temp3}`}>
          <div className={styles.headingContainer}>
            <h2>{sectionBits[0].type === "title" ? sectionBits[0].content : null}</h2>
          </div>
          <div className={styles.sidePanel}>
            {sectionBits.map((bit, index) => {
              if (index === 0) return; //skip title
              const key = Object.keys(bit)[0];
              switch (bit.type) {
                case "title":
                  return <h2 key={index}>{bit.content}</h2>;
                case "smallTitle":
                  return <h3 key={index}>{bit.content}</h3>; // Changed to h3
                case "text":
                  return <p key={index}>{bit.content}</p>;
                case "image":
                  if (bit.image) {
                    return getImageNode(bit.image);
                  } else {
                    break;
                  }
                case "graphic":
                  return <Icon iconName={bit.content} />;
                default:
                  return null;
              }
            })}
          </div>
        </article>
      );

    default:
      // fallback to template 1
      return (
        <article>
          <h2>Fallback Layout</h2>
        </article>
      );
  }
}
