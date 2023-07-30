"use client";

import { Stone } from "@/types/Stone";
import StoneGalleryCard from "./StoneGalleryCard";
import GalleryProgressIndicator from "./GalleryProgressIndicator";
import Carousel from "./Carousel";
import { GalleryController } from "@/controllers/galleryController";

interface Props {
  stones: Stone[];
  controller: GalleryController;
}

export default function StoneGallery(props: Props) {
  return (
    <div className="flex flex-col items-center gap-1 my-4">
      <GalleryProgressIndicator
        indexOfCurrentStone={props.controller.indexOfCurrentStone}
        numOfStones={props.stones.length}
      />
      <Carousel
        id={props.controller.identifier}
        next={props.controller.next}
        previous={props.controller.previous}
        onNewIndex={props.controller.onNewIndex}
      >
        {...props.stones.map((stone) => (
          <StoneGalleryCard
            key={stone._id}
            stone={stone}
            next={props.controller.next}
            previous={props.controller.previous}
          />
        ))}
      </Carousel>
    </div>
  );
}
