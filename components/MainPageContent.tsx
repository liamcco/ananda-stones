"use client";

import { useFilterController } from "@/controllers/filterController";
import { Stone } from "@/types/Stone";
import Searchfield from "./SearchControls/Searchfield";
import StoneGallery from "./StoneGallery/StoneGallery";
import NoResults from "./SearchControls/NoResults";
import ToggleViewModeButton from "./SearchControls/ToggleViewModeButton";
import { useState } from "react";
import StoneList from "./StoneList/StoneList";
import AppTitle from "./AppTitle";
import { useGalleryController } from "@/controllers/galleryController";

interface Props {
  stones: Stone[];
}

export default function MainPageContent(props: Props) {
  const filterController = useFilterController(props.stones);
  const galleryController = useGalleryController(
    filterController.matchingStones
  );

  const [viewMode, setViewMode] = useState<"card" | "list">("card");
  const toggle = () =>
    setViewMode((old: "card" | "list") => (old === "card" ? "list" : "card"));

  const selectStone = (_id: string) => {
    toggle();
    galleryController.selectStone(_id);
  };

  return (
    <>
      <AppTitle />
      <div className="flex gap-2 justify-center px-5">
        <Searchfield searchFor={filterController.searchFor} />
        <ToggleViewModeButton onToggle={toggle} viewMode={viewMode} />
      </div>
      {filterController.matchingStones.length ? (
        viewMode === "card" ? (
          <StoneGallery
            stones={filterController.matchingStones}
            controller={galleryController}
          />
        ) : (
          <StoneList
            stones={filterController.matchingStones}
            selectStone={selectStone}
          />
        )
      ) : (
        <NoResults />
      )}
    </>
  );
}
