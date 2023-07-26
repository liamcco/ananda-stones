"use client";

import { useFilterController } from "@/controllers/filterController";
import { Stone } from "@/types/Stone";
import Searchfield from "./Searchfield";
import StoneGallery from "./StoneGallery";
import NoResults from "./NoResults";
import ToggleViewModeButton from "./ToggleViewModeButton";
import { useState } from "react";
import StoneList from "./StoneList";

interface Props {
  stones: Stone[];
}

export default function MainPageContent(props: Props) {
  const controller = useFilterController(props.stones);
  const [viewMode, setViewMode] = useState<"card" | "list">("card");

  return (
    <>
      <div className="flex gap-2 justify-center px-5">
        <Searchfield searchFor={controller.searchFor} />
        <ToggleViewModeButton
          onToggle={() =>
            setViewMode((old) => (old === "card" ? "list" : "card"))
          }
          viewMode={viewMode}
        />
      </div>
      {controller.matchingStones.length ? (
        viewMode === "card" ? (
          <StoneGallery stones={controller.matchingStones} />
        ) : (
          <StoneList stones={controller.matchingStones} />
        )
      ) : (
        <NoResults />
      )}
    </>
  );
}
