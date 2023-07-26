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
      console.log("new index: " + index);
      setIndexOfCurrentChild(index);
      props.onNewIndex && props.onNewIndex(index);
    }
  };

  useEffect(() => {
    props.onNewIndex && props.onNewIndex(indexOfCurrentChild);
  });

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

      <div className="hidden md:flex justify-between absolute z-10 w-[42rem]">
        <button
          className="bg-[#232323] text-[#659cef] rounded-full w-10 h-10 flex justify-center items-center"
          onClick={() => {
            if (indexOfCurrentChild > 0) {
              const cardToFind = "card-" + (indexOfCurrentChild - 1).toString();
              const card = document.getElementById(cardToFind);
              if (card) {
                card.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                });
              }
            }
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          className="bg-[#232323] text-[#659cef] rounded-full w-10 h-10 flex justify-center items-center"
          onClick={() => {
            if (indexOfCurrentChild < children.length - 1) {
              const cardToFind = "card-" + (indexOfCurrentChild + 1).toString();
              const card = document.getElementById(cardToFind);
              if (card) {
                card.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                });
              }
            }
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}
