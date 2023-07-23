"use client";

import { Stone } from "@/types/Stone";
import Link from "next/link";
import Image from "next/image";
import { useFilterController } from "@/controllers/filterController";
import StoneGalleryCard from "./StoneGalleryCard";
import Searchfield from "./Searchfield";

interface Props {
  stones: Stone[];
}

export default function StoneGallery(props: Props) {
  const controller = useFilterController(props.stones);

  return (
    <div className="mt-4">
      <div className="max-w-md">
        <Searchfield searchFor={controller.searchFor} />
      </div>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {props.stones
          .filter((stone) => controller.IDsToShow.includes(stone._id))
          .map((stone) => (
            <StoneGalleryCard key={stone._id} stone={stone} />
          ))}
      </div>
    </div>
  );
}
