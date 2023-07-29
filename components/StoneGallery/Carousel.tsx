import { Children } from "react";
import CarouselButtonSet from "./CarouselButtonSet";

interface CarouselChild extends React.ReactElement {
  key: string;
}

interface Props {
  children: React.ReactNode;
  onNewIndex?: (index: number) => void;
  id?: string;
  next: () => void;
  previous: () => void;
}

export default function Carousel(props: Props) {
  const children = Children.toArray(props.children) as CarouselChild[];

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const scrollPercentage = target.scrollLeft / target.scrollWidth;
    const index = Math.round(scrollPercentage * children.length);
    props.onNewIndex && props.onNewIndex(index);
  };

  return (
    <>
      <div
        className="flex w-[24rem] md:w-[48rem] overflow-x-auto snap-x snap-mandatory"
        onScroll={handleScroll}
      >
        {children.map((child, index) => (
          <div
            key={child.key}
            id={props.id ? props.id + index.toString() : undefined}
          >
            <div className="w-[20rem] md:w-[40rem] snap-always snap-center mx-[2rem] md:mx-[4rem]">
              {child}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
