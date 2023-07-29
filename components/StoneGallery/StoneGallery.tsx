"use client";

import { Stone } from "@/types/Stone";
import StoneGalleryCard from "./StoneGalleryCard";
import { useState } from "react";
import GalleryProgressIndicator from "./GalleryProgressIndicator";
import Carousel from "./Carousel";
import { useGalleryController } from "@/controllers/galleryController";

interface Props {
  stones: Stone[];
}

export default function StoneGallery(props: Props) {
  const indexState = useState(0);
  const indexOfCurrentStone = indexState[0];
  const galleryController = useGalleryController(props.stones);

  const next = () => {
    const nextIndex = indexState[0] + 1;
    if (nextIndex < props.stones.length) {
      indexState[1](nextIndex);
      galleryController.goToStone(nextIndex);
    }
  };

  return (
    <div className="flex flex-col items-center gap-1 my-4">
      <GalleryProgressIndicator
        indexOfCurrentStone={indexOfCurrentStone}
        numOfStones={props.stones.length}
      />
      <Carousel
        indexState={indexState}
        id={galleryController.identifier}
        onNewIndex={galleryController.onNewIndex}
      >
        {...props.stones.map((stone) => (
          <StoneGalleryCard key={stone._id} stone={stone} next={next} />
        ))}
      </Carousel>
    </div>
  );
}
