"use client";

import { useFilterController } from "@/controllers/filterController";
import { Stone } from "@/types/Stone";
import Searchfield from "./Searchfield";
import StoneGallery from "./StoneGallery";
import NoResults from "./NoResults";
import ToggleViewModeButton from "./ToggleViewModeButton";

interface Props {
  stones: Stone[];
}

export default function MainPageContent(props: Props) {
  const controller = useFilterController(props.stones);

  return (
    <>
    <div className="flex gap-2 justify-center px-5">
      <Searchfield searchFor={controller.searchFor} />
      <ToggleViewModeButton />
    </div>
      {controller.matchingStones.length ? (
        <StoneGallery stones={controller.matchingStones} />
      ) : (
        <NoResults />
      )}
    </>
  );
}
