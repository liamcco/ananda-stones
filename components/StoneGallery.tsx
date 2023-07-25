"use client";

import { Stone } from "@/types/Stone";
import StoneGalleryCard from "./StoneGalleryCard";

interface Props {
  stones: Stone[];
}

export default function StoneGallery(props: Props) {
  return (
    <div className="flex justify-center">
      <div className="flex w-[24rem] overflow-x-auto snap-x snap-mandatory">
        {props.stones.map((stone) => (
          <div key={stone._id}>
            <div className="w-[20rem] snap-always snap-center m-[2rem]">
              <StoneGalleryCard key={stone._id} stone={stone} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
