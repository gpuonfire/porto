import { Image, ContentBit } from "../../@types/youAreJustMyType";
import styles from "./Layout.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface LayoutCompProps {
  content: ContentBit[];
}
export default function LayoutComp({ content }: LayoutCompProps) {
  const getImageNode = (img: Image) => {
    return (
      <div className={styles.imgContainer}>
        <LazyLoadImage src={img.src} />
        {img.alt ? <p>{img.alt}</p> : null}
      </div>
    );
  };
  const insertContent = (bit: ContentBit) => {
    switch (bit.type) {
      case "title":
        return <h2>{bit.text}</h2>;
      case "text":
        return <p>{bit.text}</p>;
      case "image":
        if (bit.image) {
          return getImageNode(bit.image);
        } else {
          break;
        }
      default:
        return null;
    }
  };

  //   const getStyling = (styling: string) => {
  // const styles = styling.split(" ")
  // styling.replace(
  //       "span-2", ".span2")
  //   }
  const maxPos = Math.max(...content.map((c) => c.position));
  const cells: (ContentBit | null)[] = [];
  for (let p = 1; p <= maxPos; p++) {
    cells.push(content.find((c) => c.position === p) ?? null);
  }

  return (
    <article className="gridContainer">
      {cells.map((bit, i) =>
        bit ? (
          <div key={i} className={`cell ${bit.styling}`}>
            {insertContent(bit)}
          </div>
        ) : (
          <div key={i} className="emptyCell" />
        ),
      )}
    </article>
  );
}

// project.content.map((contentBit: ContentBit, index: number) => (
//   <React.Fragment key={index}>
//     <LayoutComp {...contentBit} />
//   </React.Fragment>
// ))
