"use client";

import { Stone } from "@/types/Stone";
import { useFilterController } from "@/controllers/filterController";
import StoneGalleryCard from "./StoneGalleryCard";
import Searchfield from "./Searchfield";

interface Props {
  stones: Stone[];
}

export default function StoneGallery(props: Props) {
  const controller = useFilterController(props.stones);
  const stonesToShow = props.stones.filter((stone) =>
    controller.IDsToShow.includes(stone._id)
  );

  return (
    <div className="mt-4">
      <div className="max-w-md">
        <Searchfield searchFor={controller.searchFor} />
      </div>

      {stonesToShow.length > 0 ? (
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stonesToShow.map((stone) => (
            <StoneGalleryCard key={stone._id} stone={stone} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-5">
          <p className="text-2xl font-bold">Inga stenar hittades</p>
          <p className="text-sm">Försök med ett annat sökord</p>
        </div>
      )}
    </div>
  );
}
