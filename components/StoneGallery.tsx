"use client";

import { Stone } from "@/types/Stone";
import StoneGalleryCard from "./StoneGalleryCard";
import { useState } from "react";
import GalleryProgressIndicator from "./GalleryProgressIndicator";

interface Props {
  stones: Stone[];
}

export default function StoneGallery(props: Props) {
  const [indexOfCurrentStone, setIndexOfCurrentStone] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const scrollPercentage = target.scrollLeft / target.scrollWidth;
    const index = Math.round(scrollPercentage * props.stones.length);
    if (index !== indexOfCurrentStone) {
      setIndexOfCurrentStone(index);
      const currentStone = props.stones[index];
      const newColor = currentStone.palette.lightVibrant.background;
      document.body.style.background = newColor;
    }
  };

  const goToStone = (index: number) => {
    const card = document.getElementById("card-" + index.toString());
    if (card) {
      card.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <GalleryProgressIndicator indexOfCurrentStone={indexOfCurrentStone} numOfStones={props.stones.length}/>
      <div
        className="flex w-[24rem] overflow-x-auto snap-x snap-mandatory"
        onScroll={handleScroll}
      >
        {props.stones.map((stone, index) => (
          <div key={stone._id} id={"card-" + index.toString()}>
            <div className="w-[20rem] snap-always snap-center mx-[2rem]">
              <StoneGalleryCard key={stone._id} stone={stone} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
