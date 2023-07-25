"use client";

import { Stone } from "@/types/Stone";
import StoneGalleryCard from "./StoneGalleryCard";
import { useState } from "react";

interface Props {
  stones: Stone[];
}

export default function StoneGallery(props: Props) {
  const [indexOfCurrentStone, setIndexOfCurrentStone] = useState(0);

  function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    const target = event.target as HTMLDivElement;
    const scrollLeft = target.scrollLeft;
    const scrollWidth = target.scrollWidth;
    const scrollPercentage = scrollLeft / scrollWidth;
    const index = Math.round(scrollPercentage * props.stones.length);
    index !== indexOfCurrentStone && setIndexOfCurrentStone(index);
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-base text-gray-400 text-center">
        {indexOfCurrentStone + 1}/{props.stones.length}
      </h2>
      <div
        className="flex w-[24rem] overflow-x-auto snap-x snap-mandatory"
        onScroll={handleScroll}
      >
        {props.stones.map((stone) => (
          <div key={stone._id}>
            <div className="w-[20rem] snap-always snap-center mx-[2rem]">
              <StoneGalleryCard key={stone._id} stone={stone} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
