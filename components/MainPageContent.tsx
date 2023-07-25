"use client";

import { useFilterController } from "@/controllers/filterController";
import { Stone } from "@/types/Stone";
import Searchfield from "./Searchfield";
import StoneGallery from "./StoneGallery";
import NoResults from "./NoResults";

interface Props {
  stones: Stone[];
}

export default function MainPageContent(props: Props) {
  const controller = useFilterController(props.stones);

  return (
    <>
      <Searchfield searchFor={controller.searchFor} />
      {controller.matchingStones.length ? (
        <StoneGallery stones={controller.matchingStones} />
      ) : (
        <NoResults />
      )}
    </>
  );
}
