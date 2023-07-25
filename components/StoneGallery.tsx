"use client";

import { Stone } from "@/types/Stone";
import StoneGalleryCard from "./StoneGalleryCard";

interface Props {
  stones: Stone[];
}

export default function StoneGallery(props: Props) {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-sm overflow-x-auto snap-x snap-mandatory scroll-smooth">
        {props.stones.map((stone) => (
          <div key={stone._id}>
            <div className="w-[90vw] max-w-xs snap-always snap-center m-4">
              <StoneGalleryCard key={stone._id} stone={stone} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
