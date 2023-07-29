"use client";

import { useFilterController } from "@/controllers/filterController";
import { Stone } from "@/types/Stone";
import Searchfield from "./SearchControls/Searchfield";
import StoneGallery from "./StoneGallery/StoneGallery";
import NoResults from "./SearchControls/NoResults";
import ToggleViewModeButton from "./SearchControls/ToggleViewModeButton";
import { useEffect, useState } from "react";
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
    setTimeout(() => {
      galleryController.selectStone(_id);
    }, 50);
  };

  return (
    <>
      <AppTitle />
      <div className="flex gap-2 justify-center px-5">
        <Searchfield searchFor={filterController.searchFor} />
        <ToggleViewModeButton onToggle={toggle} viewMode={viewMode} />
      </div>
      {filterController.matchingStones.length ? (
        <>
          <div className={viewMode === "list" ? "" : "hidden"}>
            <StoneList
              stones={filterController.matchingStones}
              selectStone={selectStone}
            />
          </div>
          <div className={viewMode === "card" ? "" : "hidden"}>
            <StoneGallery
              stones={filterController.matchingStones}
              controller={galleryController}
            />
          </div>
        </>
      ) : (
        <NoResults />
      )}
    </>
  );
}
