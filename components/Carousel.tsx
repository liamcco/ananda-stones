import { Children, useEffect } from "react";

interface CarouselChild extends React.ReactElement {
  key: string;
}

interface Props {
  children: React.ReactNode;
  onNewIndex?: (index: number) => void;
  indexState: [number, React.Dispatch<React.SetStateAction<number>>];
  id?: string;
}

export default function Carousel(props: Props) {
  const children = Children.toArray(props.children) as CarouselChild[];
  const [indexOfCurrentChild, setIndexOfCurrentChild] = props.indexState;

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const scrollPercentage = target.scrollLeft / target.scrollWidth;
    const index = Math.round(scrollPercentage * children.length);
    if (index !== indexOfCurrentChild) {
      setIndexOfCurrentChild(index);
      props.onNewIndex && props.onNewIndex(index);
    }
  };

  useEffect(() => {
    props.onNewIndex && props.onNewIndex(indexOfCurrentChild);
  });

  return (
    <div
      className="flex w-[24rem] overflow-x-auto snap-x snap-mandatory"
      onScroll={handleScroll}
    >
      {children.map((child, index) => (
        <div
          key={child.key}
          id={props.id ? props.id + index.toString() : undefined}
        >
          <div className="w-[20rem] snap-always snap-center mx-[2rem]">
            {child}
          </div>
        </div>
      ))}
    </div>
  );
}